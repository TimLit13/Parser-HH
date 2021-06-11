#encoding: utf-8
require 'nokogiri'
require 'httparty'
require 'open-uri'

# print "Введите наименование интересующей вакансию: "
# user_search_word = gets.strip.downcase
# if user_search_word == '' || user_search_word == '\n' || user_search_word == '\s'
#   puts 'Вы не ввели запрос. Работа программы завершена.'
#   exit
# end

# print "Введите количество дней с момента публикации вакансии: "
# user_search_days = gets.strip.to_i
# if user_search_days < 1 || user_search_days > 30
#   puts 'Вы ввели не правильное количество дней (1..30). Работа программы завершена'
#   exit
# end

user_search_word = 'ruby'
user_search_days = 1

#Адрес сайта hh.ru с фильтрами по запросу ruby
url = "https://spb.hh.ru/search/vacancy?area=2&clusters=true&enable_snippets=true&order_by=publication_time&text=#{user_search_word}&search_period=#{user_search_days.to_s}"
puts url

#скачиваем страницу с помощью Nokogiri
unparsed_page = URI.open(url)
parsed_page  = Nokogiri::HTML(unparsed_page)

@vacancies = {
  title: [],
  company: [],
  description: [],
  date_of_publication: []
}


#Найти наименование вакансии
@vacancies[:title] = parsed_page.search(".//*[starts-with(@data-qa, 'vacancy-serp__vacancy-title')]").xpath('text()').to_a
# #debug
# puts parsed_page

# only for ruby vacancies
# @vacancies[:title].each_with_index do |element, index|
#   if !element.to_s.include?('ruby')
#     @vacancies[:title].delete_at(index)
#   end
# end
# puts @vacancies[:title].length

#Найти наименование компаний
@vacancies[:company] = parsed_page.search(".//*[starts-with(@data-qa, 'vacancy-serp__vacancy-employer')]").xpath('text()').to_a
@vacancies[:company].each_with_index do |element, index|
  if element.to_s.include?('ООО ')
    @vacancies[:company].delete_at(index)
  end
end

# #debug
# puts @vacancies[:company].length
# puts @vacancies[:company].inspect

#Найти краткое описание
@vacancies[:description] = parsed_page.search(".//*[starts-with(@data-qa, 'vacancy-serp__vacancy_snippet_requirement')]").xpath('text()').to_a

# #debug
# puts @vacancies[:compensation].length
# puts @vacancies[:compensation].inspect

#Найти дату публикации вакансии
@vacancies[:date_of_publication] = parsed_page.search(".//*[starts-with(@class, 'vacancy-serp-item__publication-date vacancy-serp-item__publication-date_short')]").xpath('text()').to_a

# #debug
# puts @vacancies[:date_of_publication].length
# puts @vacancies[:date_of_publication].inspect

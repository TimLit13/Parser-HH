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
user_search_days = 7

#Адрес сайта hh.ru с фильтрами по запросу ruby
url = "https://spb.hh.ru/search/vacancy?area=2&clusters=true&enable_snippets=true&order_by=publication_time&text=#{user_search_word}&search_period=#{user_search_days.to_s}"

#скачиваем страницу с помощью Nokogiri
unparsed_page = URI.open(url)
parsed_page  = Nokogiri::HTML(unparsed_page)

@vacancies = {
  title: [],
  company: [],
  city: [],
  station: [],
  compensation: []
}


@all_dates = parsed_page.search(".//*[starts-with(@class, 'text-nowrap grey show-for-large')]").xpath('text()').to_a
#debug
# puts parsed_page
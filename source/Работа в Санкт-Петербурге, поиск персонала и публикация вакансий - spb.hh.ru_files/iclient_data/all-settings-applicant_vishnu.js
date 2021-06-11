webimApplyServerSideSettings({
    "accountBlocked": false,
    "locationSettings": {
        "button": {
            "kind": "corner",
            "slider": {
                "position": "left",
                "top": 150,
                "width": 261,
                "alwaysVisibleWidth": 30
            },
            "corner": {
                "position": "right-bottom"
            },
            "html": {
                "style": {
                    "background-color": "#3CC",
                    "border-color": "#FFF",
                    "color": "#000"
                },
                "draggable": "N",
                "position": {
                    "horizontal": "100",
                    "vertical": "100"
                },
                "background-color": "#3CC",
                "dragged": "N",
                "border-color": "#FFF"
            },
            "name": "corner.gif",
            "offlineEnabled": "N",
            "channels": [],
            "channel": {
                "default": {
                    "style": {}
                },
                "webim": {
                    "name": "",
                    "style": {
                        "background-color": "#3CC",
                        "border-color": "#FFF",
                        "color": "#000"
                    }
                }
            },
            "html_button": {
                "background-color": null,
                "dragged": null,
                "position": {
                    "horizontal": null,
                    "vertical": null
                },
                "border-color": null
            }
        },
        "invitation": {
            "dontShow": false,
            "theme": "static",
            "position": "bottom-right",
            "timeout": 90000,
            "avatar": null,
            "bg": null,
            "fontColor": null
        },
        "chat": {
            "lang": "ru",
            "departmentKey": "podderzhka_soiskateley",
            "chatEnterFirstMessage": "Y",
            "hideProcessingPersonalDataCheckbox": "N",
            "defaultLayout": {
                "size": {
                    "height": 460,
                    "width": 380
                },
                "position": {
                    "right": 10,
                    "bottom": 10
                }
            },
            "hintsEnabled": "N",
            "visitorFields": {
                "def": {
                    "name": {
                        "presence": "none",
                        "validation": {
                            "maxLength": 64
                        }
                    },
                    "email": {
                        "presence": "none",
                        "validation": {
                            "type": "email"
                        }
                    },
                    "phone": {
                        "presence": "none",
                        "validation": {
                            "mask": "+7 (XXX) XXX-XX-XX"
                        }
                    },
                    "youmagic_number": {
                        "presence": "none"
                    },
                    "icq": {
                        "presence": "none"
                    },
                    "login": {
                        "presence": "none"
                    },
                    "company": {
                        "presence": "none"
                    },
                    "passport_number": {
                        "presence": "none"
                    },
                    "codeword": {
                        "presence": "none"
                    }
                },
                "firstQuestion": [],
                "offlineMode": {
                    "email": {
                        "presence": "mandatory",
                        "validation": {
                            "type": "email"
                        }
                    }
                },
                "contactsRequest": []
            },
            "visitorFieldLabels": {
                "name": null,
                "phone": null,
                "email": null,
                "icq": null,
                "login": null,
                "company": null,
                "passport_number": null,
                "codeword": null
            },
            "logo": null,
            "proposeToRateBeforeClose": "N",
            "showSelectModeMenu": "N",
            "hideMenu": "N",
            "messageDateFormat": "DD.MM",
            "availableDepartmentKeys": null,
            "headerColor": null,
            "headerGradientColor": null,
            "bgColor": null,
            "buttonColor": null,
            "buttonGradientColor": null,
            "chooseDepartment": "N",
            "departmentsSort": "id",
            "showFirst": null,
            "callbackHunterAvailableInOffline": null
        },
        "styles": {
            "header": {
                "background": null,
                "gradient": null
            },
            "body": {
                "background": null
            },
            "button": {
                "background": null,
                "gradient": null
            },
            "invitation-body": {
                "background": null,
                "color": null,
                "font-size": null
            }
        },
        "misc": {
            "fixFlashWmode": false
        },
        "resources": {
            "leavemessage-descr": null,
            "first_question-descr": "Для начала диалога напишите сообщение:",
            "chat-operator-default_title": null
        }
    },
    "accountConfig": {
        "calls": false,
        "multilang": false,
        "chatting_timer": false,
        "google_analytics": true,
        "yandex_metrika_counter_id": null,
        "teleport": true,
        "v2chat_calls_enabled": false,
        "v2chat_call_url": null,
        "client_php_url": null,
        "hide_referrer": false,
        "force_visitor_https": false,
        "visitor_tracking": false,
        "force_visitor_disable": false,
        "visitor_enabling_probability": 100,
        "default_lang": "ru",
        "rate_operator": true,
        "allowed_upload_file_types": "png, jpg, jpeg, doc, rtf, gif, txt, pdf, docx, webp, oga, ogg",
        "visitor_websockets": false,
        "visitor_upload_file": true,
        "operator_check_status_online": 360,
        "visitor_hints_api_endpoint": null,
        "file_url_expiring_timeout_for_web_and_mobile": 300,
        "operator_status_timer": false,
        "visitor_message_editing": true,
        "web_and_mobile_quoting": true,
        "offline_chat_processing": true,
        "open_chat_in_new_tab_for_mobile": true,
        "max_visitor_upload_file_size": 10
    },
    "accountFields": [],
    "ainviteRules": [],
    "tariffOptions": {
        "hide_poweredby_link": false,
        "chat_colors": true,
        "push_url": true,
        "operator_file_upload": true,
        "invitation": true,
        "offline_message": true
    },
    "channels": [
        {
            "name": "Мессенджеры Welcome+ОТП",
            "type": "custom",
            "id": "e9e597449b6d4da981cd56bb3e8b902e"
        },
        {
            "name": "Talantix telegram",
            "type": "telegram",
            "id": "28823359ac5746eca2ed21637189a752",
            "page_id": "talantix_bot",
            "app_link_format": false
        },
        {
            "name": "@hh_applicant_bot",
            "type": "telegram",
            "id": "638c9f8384ba46378aae4d8b2fffbb63",
            "page_id": "hh_applicant_bot",
            "app_link_format": false
        },
        {
            "name": "@reg_hh_bot",
            "type": "telegram",
            "id": "a6bc7e8ef82d433dbaa720c555c63bdd",
            "page_id": "reg_hh_bot"
        },
        {
            "name": "hh.ru",
            "type": "viber",
            "id": "9e0c03c881b74fd7ab0d1f614d545ea5",
            "page_id": "headhunter",
            "app_link_format": false
        },
        {
            "name": "@hh_ru_bot",
            "type": "telegram",
            "id": "d780975cd750472191c0f2c749facb5c",
            "page_id": "hh_ru_bot"
        },
        {
            "id": "fb1336d9bada49d881324c23b12a5321",
            "type": "apple_chat",
            "name": "Эппл БЧ",
            "page_id": "7cad4d0a-9d6a-49ad-8bdb-504577e26d80"
        }
    ]
});
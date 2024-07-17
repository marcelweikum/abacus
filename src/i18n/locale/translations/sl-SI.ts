export default {
  configuration_app_version: 'Verziaha Aplikacije',
  configuration_about: 'O programu',
  configuration_clear_option: 'Počistite in ponastavite aplikacijo',
  configuration_clear_confirm_button: 'Počistite sedaj',
  configuration_clear_alert_title: 'Ali ste prepričani?',
  configuration_clear_alert_text: 'Brisanje pomnilnika bo izbrisalo:\n'
    + 'lokalne nastavitve\n'
    + 'Oauth ID odjemalca & skriti ključ\n'
    + 'URL naslov do vaše namestitve',
  cancel: 'Prekliči',
  configuration_security: 'Varnost',
  configuration_share_feedback: 'Delite povratne informacije',
  configuration_report_issue: 'Prijavite težavo',
  configuration_sources: 'Viri',
  configuration_debug: 'Razhroščevanje',
  configuration_get_help: 'Pridobite pomoč',
  assetsHistoryCharts_chart_works: 'Ta grafikon najbolje deluje z do 4 računi.',
  assetsHistoryCharts_change_preferences: 'kliknite tukaj',
  assetsHistoryCharts_choose_preferences_text: 'da izberete želene račune v nastavitvah Firefly III:',
  assetsHistoryCharts_home_screen: 'Domači zaslon',
  transaction_form_description_required: 'Opis je obvezen podatek.',
  transaction_form_description_short: 'Opis je prekratek.',
  transaction_form_amount_required: 'Znesek je obvezen podatek.',
  transaction_form_description_label: 'Opis',
  transaction_form_sourceAccount_label: 'Izvirni račun',
  transaction_form_destinationAccount_label: 'Ciljni račun',
  transaction_form_date_label: 'Datum',
  transaction_form_amount_label: 'Znesek',
  transaction_form_foreign_amount_label: 'Tuji znesek',
  transaction_form_notes_label: 'Zapiski',
  transaction_form_category_label: 'Kategorija',
  transaction_form_budget_label: 'Proračun',
  transaction_form_tags_label: 'Oznake',
  transaction_form_reset_button: 'Ponastavite',
  transaction_form_submit_button: 'Pošljite',
  transaction_form_new_split_button: 'Dodajte delitev',
  transaction_list_alert_title: 'Ali ste prepričani?',
  transaction_list_alert_text: 'Ta transakcija bo trajno odstranjena:',
  transaction_list_delete_button: 'Izbris',
  transaction_list_cancel_button: 'Prekliči',
  auth_form_url_label: 'Firefly III zaledni URL naslov',
  auth_form_url_help: "brez '/' na koncu.",
  auth_form_url_placeholder: "Zaledni Firefly III URL naslov (brez '/' na koncu)",
  auth_form_oauth_clientId: 'Oauth ID odjemalca',
  auth_form_oauth_client_secret: 'Oauth ključ odjemalca',
  auth_form_secrets_help_message: 'Vsi ključi so shranjeni v varnem skladišču.',
  auth_form_set_redirect: 'Nastavite preusmeritveni URI na:',
  auth_form_need_help: 'Potrebujete pomoč?',
  auth_form_submit_button_initial: 'Vpišite se',
  auth_form_submit_button_loading: 'Pošiljanje...',
  auth_form_biometrics_lock: 'Biometrična zaščita',
  home_accounts: 'Računi',
  layout_new_update_header: 'Na voljo je nova posodobitev',
  layout_new_update_body_text: 'Vedno lahko posodobite kasneje na zavihku Nastavitve.',
  layout_new_update_cancel_button: 'Prekliči',
  layout_new_update_update_button: 'Posodobite zdaj',

  // from version 0.31
  transaction_screen_title: 'Nova transakcija',
  navigation_home_tab: 'Domov',
  navigation_chart_tab: 'Grafikon',
  navigation_create_tab: 'Izdelaj',
  navigation_transactions_tab: 'Transakcije',
  navigation_settings_tab: 'Nastavitve',
  transaction_form_type_withdraw: 'Dvig',
  transaction_form_type_deposit: 'Depozit',
  transaction_form_type_transfer: 'Prenos',

  // from 0.4.1
  period_switcher_monthly: 'Mesečno',
  period_switcher_quarterly: 'Četrtletno',
  period_switcher_semiannually: 'Polletno',
  period_switcher_yearly: 'Letno',
  error_widget_title: 'Nekaj je šlo narobe',
  home_container_error_title: 'Nekaj je šlo narobe',
  home_container_error_description: 'Napaka pri pridobitvi accessToken',
  oauth_token_error_title: 'Nekaj je šlo narobe',
  oauth_token_error_description: 'Napaka pri pridobitvi accessToken',
  oauth_token_info_title: 'Info',
  oauth_token_info_description: 'Preklic avtentikacije, preverite ID odjemalca in zaledni URL.',
  oauth_token_success_title: 'Uspeh',
  oauth_token_success_description: 'Varna povezava pripravljena z vašo instanco Firefly III.',
  transaction_form_success_title: 'Uspeh',
  transaction_form_success_description: 'Transakcija ustvarjena. Tapnite tukaj, da odprete seznam transakcij.',
  transaction_form_error_title: 'Napaka',
  home_header_time_range_year: 'Leto',
  home_header_time_range_q: 'Č', // Put an abbreviation that best represents a quarter
  home_header_time_range_s: 'P', // Put an abbreviation that best represents a semiannual

  // from 0.6.0
  balance: 'Bilanca',
  history: 'Zgodovina',
  home_categories: 'Kategorije',
  home_net_worth: 'Neto vrednost',

  // from 0.7.0
  home_budgets: 'Proračuni',
  configuration_ui: 'Uporabniški vmesnik',
  configuration_color_mode: 'Temen način',
  auth_form_personal_access_token_label: 'Osebni dostopni žeton',
  auth_use_personal_access_token: 'Uporabite osebni dostopni žeton',
  auth_external_heads_up: '❗️Če uporabljate zunanjega ponudnika preverjanja pristnosti, kot je Authelia, Keycloak, Cloudflare Tunnels itd. Odjemalci OAuth ne bodo delovali. Uporabljate lahko samo osebne žetone za dostop.',
  auth_create_new_oauth_client: 'Tukaj ustvarite novega odjemalca Oauth na zavihku OAuth:',
  auth_create_new_personal_access_token: 'Tukaj ustvarite novega odjemalca Oauth na zavihku OAuth:',
  oauth_wrong_token_error_description: 'AccessToken ni bilo mogoče preveriti, ponovno preverite svoj žeton ali zaledni URL.',
  transaction_screen_edit_title: 'Uredite transakcijo',

  // from 0.9.0
  transaction_form_foreign_currency_label: 'Tuja valuta',
  transaction_form_group_title_label: 'Opis razdeljene transakcije',
  transaction_form_group_title_placeholder: 'Naslov',
  transaction_form_group_title_helper: 'Če ustvarite razdeljeno transakcijo, mora obstajati globalni opis za vse delitve transakcije.',
  configuration_review_app_ios: 'Ocenite Abacus v AppStore',
  configuration_review_app_android: 'Ocenite Abacus v Google Play',

  // from 0.9.2
  assets_history_chart: 'Grafikon računov',
  balance_history_chart: 'Grafikon neto vrednosti',
  balance_history_chart_no_data: 'Za dostop do teh grafikonov posodobite Firefly III na najnovejšo različico.',
  account_not_included_in_net_worth: '* Račun ni vključen v neto vrednost.',

  // from 0.10.0
  period: 'Obdobje',
  currency: 'Valuta',

  // from 0.19.0
  configuration_theme: 'Prilagoditev',
  configuration_theme_selection: 'Spremeni barvno temo',
  configuration_theme_title: 'Barvne teme',
};

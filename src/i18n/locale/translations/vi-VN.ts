export default {
  configuration_app_version: 'Phiên bản',
  configuration_about: 'Giới thiệu',
  configuration_clear_option: 'Xoá dữ liệu và cấu hình',
  configuration_clear_confirm_button: 'Xoá',
  configuration_clear_alert_title: 'Bạn có chắc chắn không?',
  configuration_clear_alert_text: 'Xoá các dữ liệu sau:\n'
    + 'Cấu hình ứng dụng\n'
    + 'Oauth Client ID & Secret\n'
    + 'URL máy chủ Firefly',
  configuration_clear_cancel_button: 'Huỷ',
  configuration_security: 'Bảo mật',
  configuration_share_feedback: 'Chia sẻ ý kiến',
  configuration_report_issue: 'Báo cáo vấn đề',
  configuration_sources: 'Mã nguồn',
  configuration_debug: 'Gỡ lỗi',
  configuration_get_help: 'Hỗ trợ',
  assetsHistoryCharts_chart_works: 'Biểu đồ này phù hợp với 4 tài khoản.',
  assetsHistoryCharts_change_preferences: 'click vào đây',
  assetsHistoryCharts_choose_preferences_text: 'để chọn tài khoản ưa thích trong cấu hình Firefly III:',
  assetsHistoryCharts_home_screen: 'Trang chủ',
  transaction_form_description_required: 'Cần nhập Mô tả.',
  transaction_form_description_short: 'Mô tả quá ngắn.',
  transaction_form_amount_required: 'Cần nhập số tiền.',
  transaction_form_description_label: 'Mô tả',
  transaction_form_sourceAccount_label: 'Tài khoản nguồn',
  transaction_form_destinationAccount_label: 'Tài khoản đích',
  transaction_form_date_label: 'Ngày',
  transaction_form_amount_label: 'Số tiền',
  transaction_form_foreign_amount_label: 'Số tiền ngoại tệ',
  transaction_form_notes_label: 'Ghi chú',
  transaction_form_category_label: 'Phân loại',
  transaction_form_budget_label: 'Ngân sách',
  transaction_form_tags_label: 'Tags',
  transaction_form_reset_button: 'Đặt lại',
  transaction_form_submit_button: 'Nhập',
  transaction_form_new_split_button: 'Chia giao dịch',
  transaction_list_alert_title: 'Bạn có chắc chắn không?',
  transaction_list_alert_text: 'Giao dịch này sẽ bị xoá vĩnh viễn:',
  transaction_list_delete_button: 'Xoá',
  transaction_list_cancel_button: 'Huỷ',
  auth_form_url_label: 'URL máy chủ Firefly III',
  auth_form_url_help: "không có ký tự '/' ở cuối.",
  auth_form_url_placeholder: "URL máy chủ Firefly III (không có ký tự '/' ở cuối)",
  auth_form_oauth_clientId: 'Oauth Client ID',
  auth_form_oauth_client_secret: 'Oauth Client Secret',
  auth_form_secrets_help_message: 'Tất cả các giá trị secret sẽ được lưu an toàn trong bộ nhớ thiết bị.',
  auth_form_set_redirect: 'Đặt giá trị chuyển hướng (redirect URI) thành:',
  auth_form_need_help: 'Bạn cần được hỗ trợ?',
  auth_form_submit_button_initial: 'Đăng nhập',
  auth_form_submit_button_loading: 'Đang đăng nhập...',
  auth_form_biometrics_lock: 'Khoá sinh trắc học',
  home_accounts: 'Tài khoản',
  layout_new_update_header: 'Có bản cập nhật mới',
  layout_new_update_body_text: 'Bạn có thể cập nhật sau trong phần Cài đặt.',
  layout_new_update_cancel_button: 'Huỷ',
  layout_new_update_update_button: 'Cập nhật',

  // from version 0.31
  transaction_screen_title: 'Giao dịch mới',
  navigation_home_tab: 'Trang chủ',
  navigation_chart_tab: 'Biểu đồ',
  navigation_create_tab: 'Tạo',
  navigation_transactions_tab: 'Giao dịch',
  navigation_settings_tab: 'Cài đặt',
  transaction_form_type_withdraw: 'Rút tiền',
  transaction_form_type_deposit: 'Gửi tiền',
  transaction_form_type_transfer: 'Chuyển tiền',

  // from 0.4.1
  period_switcher_monthly: 'Hàng tháng',
  period_switcher_quarterly: 'Hàng quý',
  period_switcher_semiannually: 'Mỗi 6 tháng',
  period_switcher_yearly: 'Hàng năm',
  error_widget_title: 'Có lỗi xảy ra',
  home_container_error_title: 'Có lỗi xảy ra',
  home_container_error_description: 'Không lấy được accessToken',
  oauth_token_error_title: 'Có lỗi xảy ra',
  oauth_token_error_description: 'Không lấy được accessToken',
  oauth_token_info_title: 'Thông tin',
  oauth_token_info_description: 'Xác thực lỗi, kiểm tra lại Client ID & backend URL.',
  oauth_token_success_title: 'Thành công',
  oauth_token_success_description: 'Kết nối thành công tới máy chủ Firefly III.',
  transaction_form_success_title: 'Thành công',
  transaction_form_success_description: 'Tạo giao dịch thành công. Chạm để xem danh sách giao dịch.',
  transaction_form_error_title: 'Lỗi',
  home_header_time_range_year: 'Năm',
  home_header_time_range_q: 'Q', // Put an abbreviation that best represents a quarter
  home_header_time_range_s: '6T', // Put an abbreviation that best represents a semiannual

  // from 0.6.0
  balance: 'Số tiền',
  history: 'Lịch sử',
  home_categories: 'Phân loại',
  home_net_worth: 'Tài sản ròng',

  // from 0.7.0
  home_budgets: 'Ngân sách',
  configuration_ui: 'Giao diện',
  configuration_color_mode: 'Dark Mode',
  auth_form_personal_access_token_label: 'Personal Access Token',
  auth_use_personal_access_token: 'Sử dụng Personal Access Token',
  auth_external_heads_up: '❗️Nếu bạn sử dụng các ứng dụng xác thực thứ 3 như Authelia, Keycloak, Cloudflare Tunnels, etc. thì sẽ không sử dụng được OAuth Client. Chỉ có thể sử dụng Personal Access Tokens.',
  auth_create_new_oauth_client: 'Tạo Oauth client trong tab OAuth tại đây:',
  auth_create_new_personal_access_token: 'Tạo Personal Access Token trong tab OAuth tại đây:',
  oauth_wrong_token_error_description: 'Không thể xác minh accessToken, vui lòng kiểm tra lại accessToken hoặc URL.',
  transaction_screen_edit_title: 'Sửa giao dịch',

  // from 0.9.0
  transaction_form_foreign_currency_label: 'Foreign currency',
  transaction_form_group_title_label: 'Description of the split transaction',
  transaction_form_group_title_placeholder: 'Title',
  transaction_form_group_title_helper: 'If you create a split transaction, there must be a global description for all splits of the transaction.',
  configuration_review_app_ios: 'Review Abacus on the AppStore',
  configuration_review_app_android: 'Review Abacus on Google Play',

  // from 0.9.2
  assets_history_chart: 'Accounts chart',
  balance_history_chart: 'Net Worth chart',
  balance_history_chart_no_data: 'To access this graph, please update FireflyIII to the latest version.',
  account_not_included_in_net_worth: '* Account not included in Net Worth.',

  // from 0.10.0
  period: 'Period',
  currency: 'Currency',

  home_all_accounts: 'All Accounts',

  // from 0.10.3
  router_back_button: 'Back',
  transaction_clone: 'Clone',
  transaction_delete: 'Delete',

  // from X.X.X
  bills_paid: 'Đã trả đến',
  due_by: 'Đến hạn',
  date_unavailable: 'thông báo',

  // from 0.19.0
  configuration_theme: 'Tùy chỉnh',
  configuration_theme_selection: 'Thay đổi chủ đề màu',
  configuration_theme_title: 'Chủ đề màu',
};

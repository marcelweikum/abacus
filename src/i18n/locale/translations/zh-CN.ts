export default {
  configuration_app_version: '应用版本',
  configuration_about: '关于',
  configuration_clear_option: '清理并重置应用',
  configuration_clear_confirm_button: '现在清理',
  configuration_clear_alert_title: '是否确定？',
  configuration_clear_alert_text: '清除缓存将删除：\n'
    + '本地配置\n'
    + 'Oauth 客户端 ID 和 密钥\n'
    + 'Firefly III 后端网址',
  cancel: '取消',
  configuration_security: '安全',
  configuration_share_feedback: '发送反馈',
  configuration_report_issue: '报告问题',
  configuration_sources: '源码',
  configuration_debug: '调试',
  configuration_get_help: '获取帮助',
  assetsHistoryCharts_chart_works: '此报表使用 4 个帐户以内最佳',
  assetsHistoryCharts_change_preferences: '点击这里',
  assetsHistoryCharts_choose_preferences_text: '要在 Firefly III 偏好设置中选择您的首选帐户：',
  assetsHistoryCharts_home_screen: '主屏幕',
  transaction_form_description_required: '描述是必需的。',
  transaction_form_description_short: '描述太短了。',
  transaction_form_amount_required: '账户是必需的。',
  transaction_form_description_label: '描述',
  transaction_form_sourceAccount_label: '付款账户',
  transaction_form_destinationAccount_label: '收款账户',
  transaction_form_date_label: '日期',
  transaction_form_amount_label: '金额',
  transaction_form_foreign_amount_label: '外币金额',
  transaction_form_notes_label: '注释',
  transaction_form_category_label: '分类',
  transaction_form_budget_label: '预算',
  transaction_form_tags_label: '标签',
  transaction_form_reset_button: '重置',
  transaction_form_submit_button: '提交',
  transaction_form_new_split_button: '添加拆分',
  transaction_list_alert_title: '是否确定？',
  transaction_list_alert_text: '此交易将被永久删除：',
  transaction_list_delete_button: '删除',
  transaction_list_cancel_button: '取消',
  auth_form_url_label: 'Firefly III 后端网址',
  auth_form_url_help: "最后不要带 '/'。",
  auth_form_url_placeholder: "Firefly III 后端网址 (最后不要带 '/')",
  auth_form_oauth_clientId: 'OAuth 客户端 ID',
  auth_form_oauth_client_secret: 'OAuth 客户端密钥',
  auth_form_secrets_help_message: '所有钥匙都存放在安全的房间里。',
  auth_form_set_redirect: '请将<跳转网址>设置为：',
  auth_form_need_help: '需要帮助？',
  auth_form_submit_button_initial: '登录',
  auth_form_submit_button_loading: '提交...',
  auth_form_biometrics_lock: '生物锁',
  home_accounts: '帐户',
  layout_new_update_header: '有更新可用',
  layout_new_update_body_text: '您可以稍后在设置页面手动升级',
  layout_new_update_cancel_button: '取消',
  layout_new_update_update_button: '马上升级',

  // from version 0.31
  transaction_screen_title: '新建交易',
  navigation_home_tab: '主页',
  navigation_chart_tab: '报表',
  navigation_create_tab: '创建',
  navigation_transactions_tab: '交易',
  navigation_settings_tab: '设置',
  transaction_form_type_withdraw: '支出',
  transaction_form_type_deposit: '收入',
  transaction_form_type_transfer: '转账',

  // from 0.4.1
  period_switcher_monthly: '月',
  period_switcher_quarterly: '季度',
  period_switcher_semiannually: '半年',
  period_switcher_yearly: '年',
  error_widget_title: '出错了',
  home_container_error_title: '出错了',
  home_container_error_description: '获取accessToken失败',
  oauth_token_error_title: '出错了',
  oauth_token_error_description: '获取accessToken失败',
  oauth_token_info_title: '信息',
  oauth_token_info_description: '授权被取消了, 请检查Client ID和Firefly III 后端网址是否正确。',
  oauth_token_success_title: '成功',
  oauth_token_success_description: '与您的Firefly III 后端服务建立安全连接成功',
  transaction_form_success_title: '成功',
  transaction_form_success_description: '交易已创建，点这里去查看交易列表',
  transaction_form_error_title: '错误',
  home_header_time_range_year: '年',
  home_header_time_range_q: '季', // Put an abbreviation that best represents a quarter
  home_header_time_range_s: '期', // Put an abbreviation that best represents a semiannual

  // from 0.6.0
  balance: '预算',
  history: '历史',
  home_categories: '分类',
  home_net_worth: '净值',

  // from 0.7.0
  home_budgets: '预算',
  configuration_ui: '用户界面',
  configuration_color_mode: '暗黑模式',
  auth_form_personal_access_token_label: '个人访问令牌',
  auth_use_personal_access_token: '使用个人访问令牌',
  auth_external_heads_up: '❗️如果您使用的是外部身份验证服务，例如 Authelia、Keycloak、Cloudflare Tunnels 等，OAuth 客户端将无法工作。 您只能使用个人访问令牌.',
  auth_create_new_oauth_client: '在 OAuth 选项卡上创建一个新的 Oauth 客户端，这里:',
  auth_create_new_personal_access_token: '在 OAuth 选项卡上创建一个新的个人访问令牌，这里:',
  oauth_wrong_token_error_description: 'accessToken验证失败，请重新检查您的token或后端URL.',
  transaction_screen_edit_title: '编辑交易',

  // from 0.9.0
  transaction_form_foreign_currency_label: '外币金额',
  transaction_form_group_title_label: '拆分交易说明',
  transaction_form_group_title_placeholder: '标题',
  transaction_form_group_title_helper: '如果创建拆分交易，则必须有该交易的所有拆分的全局描述.',
  configuration_review_app_ios: '在 AppStore 上评论 Abacus',
  configuration_review_app_android: '在 Google Play 上评论 Abacus',

  // from 0.9.2
  assets_history_chart: '账户图表',
  balance_history_chart: '净值图表',
  balance_history_chart_no_data: '要访问此图表，请将 FireflyIII 更新到最新版本.',
  account_not_included_in_net_worth: '* 账户不计入净资产.',

  // from 0.10.0
  period: '期间',
  currency: '金额',

  home_all_accounts: '所有账户',

  // from 0.10.3
  router_back_button: '返回',
  transaction_clone: '克隆',
  transaction_delete: '删除',

  // from X.X.X
  bills_paid: '支付到',
  due_by: '到期',
  date_unavailable: '另行通知',

  // from 0.19.0
  configuration_theme: '定制',
  configuration_theme_selection: '更改颜色主题',
  configuration_theme_title: '颜色主题',
};

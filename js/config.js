window.donationFormConfig = {
  isPCDEnabled: false,
  scriptPrefix: 'tgb-',
  supportDomain: 'thegivingblock',
  twitterHandle: '@TheGivingBlock',
  marketingWebsite: 'https://www.thegivingblock.com/',
  projectOrganizationName: 'The Giving Block',
  supportLinkFromDonors: 'https://thegivingblock.com/about/support-for-donors/',
  defaultSupportEmail: 'operations@thegivingblock.com',
  backendUrl: 'https://widget-backend.tgbwidget.com',
  reCaptchaSiteKey: '6LdOc_AiAAAAACU6F_veeBQz_9JRD8AAoARx0_rJ',
  enableLogs: false,
  enableQALocators: false,
  transferNoticeEnabled: false,
  features: {
    isAchMandateEnabled: false,
    enableV3Revamp: false,
    enableRevampForm: false,
  },
  sentry: {
    dsn: 'https://8fa3202dd839e1036b3bd527e104ca6b@o62916.ingest.sentry.io/4506706393169923',
    enabled: true,
    environment: 'prod',
    traceSampleRate: 0.05,
  },
  gtm: {
    gtmId: 'GTM-MFW73RT',
    preview: 'env-1',
    auth: 'TAXRt3--3hUY43PhmclkGw',
  },
  availableFrequencies: ['month', 'year'],
  chariot: {
    scriptSrc: 'https://cdn.givechariot.com/chariot-connect.umd.js',
    enabled: true
  },
  applePay: {
    scriptSrc: 'https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js'
  },
  apiUserUuid: 'e6cf7d18-41b6-4a6c-954a-338578fd90b0'
};
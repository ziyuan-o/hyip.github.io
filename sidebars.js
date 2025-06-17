/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  highquality: [
    'HighQuality/excellent-intro',
    'HighQuality/Googleplay',
    'HighQuality/GoogleAuthenticator',
    {
      label: 'AitiMart',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'HighQuality/aitimart/hyip-aitimart',
        'HighQuality/aitimart/aitimart-register',
        'HighQuality/aitimart/aitimart-deposit',
        'HighQuality/aitimart/aitimart-Withdrawals',
        'HighQuality/aitimart/aitimart-Binding',
        'HighQuality/aitimart/aitimart-calculate',
        'HighQuality/aitimart/aitimart-loan',
      ],
    },
  ],
  Audit: [
    'Audit/Audit-intro',
   {
      label: '有意向',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'Audit/intention/nftzark',
        'Audit/intention/mealmania',
        'Audit/intention/nft-pets',
        'Audit/intention/bitcapitalmine',
        'Audit/intention/tensorium',
        'Audit/intention/frog-wallet',
        'Audit/intention/aerogame',
      ],
    },
   {
      label: '观望中',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'Audit/WaitAndSee/selwix',
        'Audit/WaitAndSee/exvalto',
        'Audit/WaitAndSee/calvadon',
        'Audit/WaitAndSee/empare',
        'Audit/WaitAndSee/bittmine',
        'Audit/WaitAndSee/btse888usdt',
        'Audit/WaitAndSee/luckgalaxy',
      ],
    },
  ],
  newcomers:[
    'Newcomers/newcomers-intro',
    'Newcomers/hyip-project',
    'Newcomers/hyip-start',
    
    'Newcomers/hyip-suitable',
    'Newcomers/hyip-diversity',
    
    'Newcomers/hyip-Strategy',
    'Newcomers/hyip-dictionary',
    'Newcomers/hyip-invest',
    
    'Newcomers/hyip-deposit',
    'Newcomers/hyip-skamopad',
    'Newcomers/hyip-question',
    
  ],
  wallet:[
    'wallet/wallet-intro',
    {
      label: '火币',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'wallet/huobi/wallet-Huobi',
        'wallet/huobi/Huobi-guide',
      ]
    },
    {
      label: 'payeer',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'wallet/payeer/wallet-payeer',
        'wallet/payeer/payeer-register',
      ]
    }
  ],
  vpn: [
    'VPN/vpn-what',
    "VPN/vpn-Elink",
    "VPN/vpn-Easy",
   
  ]
}

module.exports = sidebars

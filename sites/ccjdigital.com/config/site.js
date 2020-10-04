const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  company: 'Randall-Reilly, LLC',
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ccj_logo.png?h=45',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ccj_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ccj_logo.png?h=60',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ccj_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: '', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ccjdigital', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/commercial-carrier-journal/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/CCJDigital', target: '_blank' },
  ],
  // identityX: {
  //   appId: 'NOT-SET',
  //   enabled: true,
  //   comments: { enabled: true },
  // },
  // radix: {
  //   enabled: true,
  //   appId: 'NOT-SET',
  //   submissionFieldIds: [
  //     { name: 'comments', id: 'NOT-SET' },
  //   ],
  // },
  gcse: {
    id: 'e121ab2d7edb3a172',
  },
  gtm: {
    containerId: '32820716',
  },
  // wufoo: {
  //   userName: 'NOT_SET',
  // },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#222222',
      logo: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ccj_logo.png?h=60',
    },
    to: 'support@ccjdigital.com',
  },
  // inquiry: {
  //   enabled: true,
  //   directSend: true,
  //   sendTo: 'support@parameter1.com',
  //   sendFrom: 'ccjdigital.com <noreply@parameter1.com>',
  //   logo: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ccj_logo.png?h=60',
  //   bgColor: '#222222',
  // },
};
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-shared/graphql/fragments/website-section-page');

const section = require('../templates/website-section');
const channel = require('../templates/website-section/channel');

const channelAliases = [
  'construction-and-landscaping',
  'pickup-and-delivery',
  'utilities',
  'vans',
  'pickup-trucks',
  'products',
];

module.exports = (app) => {
  app.get(`/:alias(${channelAliases.join('|')})`, withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};

'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('import-content')
      .service('myService')
      .getWelcomeMessage();
  },
};

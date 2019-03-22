'use strict';

/**
 * Venue.js controller
 *
 * @description: A set of functions called "actions" for managing `Venue`.
 */

module.exports = {

  /**
   * Retrieve venue records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.venue.search(ctx.query);
    } else {
      return strapi.services.venue.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a venue record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.venue.fetch(ctx.params);
  },

  /**
   * Count venue records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.venue.count(ctx.query);
  },

  /**
   * Create a/an venue record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.venue.add(ctx.request.body);
  },

  /**
   * Update a/an venue record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.venue.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an venue record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.venue.remove(ctx.params);
  }
};

import logger from './logger';
import db from './db';

/**
 * Registers routes on the router.
 *
 * @param {Object} router the koa router object.
 */
export default function register(router) {
  router.get('/map', getCsv);
}

/**
 * Gets the events as a csv for the map.
 *
 * @example
 *     GET /map
 *     returns:
 *     csv
 */
function getCsv(ctx, next) {
  const id = ctx.params.id;
  logger.info(`getting events for map as a csv ${id}`);
  const events = db.getEvents();
  if (!events) {
    logger.warn('Got no events');
    ctx.body = {};
  } else {
    logger.debug(`Got events ${JSON.stringify(events)}`);
    ctx.set('X-content-type', 'text/csv');
    ctx.body = events;
  }
  return next();
}

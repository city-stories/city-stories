import logger from './logger';
import db from './db';

/**
 * Registers routes on the router.
 *
 * @param {Object} router the koa router object.
 */
export default function register(router) {
  router.post('/event', upsert);
  router.get('/event/:id', get);
  router.get('/event', getAll);
}

/**
 * Creates or updates a event.
 *
 * @example
 *     POST /event/
 *     body:
 *     {
 *       "name": "koa",
 *       "link": "https://koajs.com",
 *       "done": false
 *     }
 */
function upsert(ctx, next) {
  const event = ctx.request.body;
  logger.info(`upserting event ${JSON.stringify(event)}`);

  if (event.id && db.getEvent(event)) {
    ctx.body = db.updateEvent(event);
  } else {
    ctx.body = db.addEvent(event);
  }
  return next();
}


/**
 * Gets a event.
 *
 * @example
 *     GET /application/3a4d4c98-2bd8-49fe-a499-3d6bf3ead111
 *     returns:
 *     {
 *       "name": "koa",
 *       "link": "https://koajs.com",
 *       "done": false,
 *       "id": "3a4d4c98-2bd8-49fe-a499-3d6bf3ead111"
 *     }
 */
function get(ctx, next) {
  const id = ctx.params.id;
  logger.info(`getting event by ${id}`);
  const event = db.getEvent(id);
  if (!event) {
    logger.warn(`Could not find event with id ${id}`);
    ctx.body = {};
  } else {
    logger.info(`Got event ${JSON.stringify(event)}`);
    ctx.body = event;
  }
  return next();
}

/**
 * Gets all events.
 *
 * @example
 *     GET /event
 *     returns:
 *     [{
 *       "name": "koa",
 *       "link": "https://koajs.com",
 *       "done": false,
 *       "id": "3a4d4c98-2bd8-49fe-a499-3d6bf3ead111"
 *     }, {
 *       "name": "react",
 *       "link": "https://facebook.github.io/react/",
 *       "done": false,
 *       "id": "a4d442db-f71d-4a0c-812a-b485605fff71"
 *     }]
 */
function getAll(ctx, next) {
  logger.info('geting all events');
  ctx.body = db.getEvents();
  return next();
}

import logger from './logger';
import db from './db';

/**
 * Registers routes on the router.
 *
 * @param {Object} router the koa router object.
 */
export default function register(router) {
  router.get('/role', getAll);
}

/**
 * Gets all roles.
 *
 * @example
 *     GET /roles
 *     returns:
 *     [{ "id": "1", "name": "City Planning" }]
 */
function getAll(ctx, next) {
  logger.info('geting all roles');
  ctx.body = db.getRoles();
  return next();
}

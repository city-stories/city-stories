import logger from './logger';
import db from './db';

/**
 * Registers routes on the router.
 *
 * @param {Object} router the koa router object.
 */
export default function register(router) {
  router.post('/user', upsert);
  router.get('/user/:id', get);
  router.get('/user', getAll);
}

/**
 * Creates or updates a user.
 *
 * @example
 *     POST /user/
 *     body:
 *     {
 *       "name": "Doug Wade",
 *       "role": "City Planner",
 *       "email": "doug@dougwade.io"
 *     }
 */
function upsert(ctx, next) {
  const user = ctx.request.body;
  logger.info(`upserting user ${JSON.stringify(user)}`);

  if (user.id && db.getUser(user)) {
    ctx.body = db.updateUser(user);
  } else {
    ctx.body = db.addUser(user);
  }
  return next();
}


/**
 * Gets a user.
 *
 * @example
 *     GET /user/d0d24a10-3512-434f-8bd2-a0da7d83d24e
 *     returns:
 *     {
 *       "id": "d0d24a10-3512-434f-8bd2-a0da7d83d24e",
 *       "name": "Doug Wade",
 *       "role": "City Planner",
 *       "email": "doug@dougwade.io"
 *     }
 */
function get(ctx, next) {
  const id = ctx.params.id;
  logger.info(`getting user by ${id}`);
  const user = db.getUser(id);
  if (!user) {
    logger.warn(`Could not find user with id ${id}`);
    ctx.body = {};
  } else {
    logger.info(`Got user ${JSON.stringify(user)}`);
    ctx.body = user;
  }
  return next();
}

/**
 * Gets all users.
 *
 * @example
 *     GET /users
 *     returns:
 *     [{ "id": "d0d24a10-3512-434f-8bd2-a0da7d83d24e",
 *        "name": "Doug Wade",
 *        "role": "City Planner",
 *        "email": "doug@dougwade.io"
 *     }]
 */
function getAll(ctx, next) {
  logger.info('geting all users');
  ctx.body = db.getUsers();
  return next();
}

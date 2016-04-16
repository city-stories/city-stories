import json2csv from 'json2csv';
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
async function getCsv(ctx, next) {
  const events = db.getEvents();
  if (!events) {
    logger.warn('Got no events');
    ctx.body = {};
  } else {
    logger.debug(`Got events ${JSON.stringify(events)}`);
    const eventArr = [];
    Object.keys(events).forEach((id) => {
      eventArr.push(events[id]);
    });
    ctx.set('X-content-type', 'text/csv');
    const csvPromise = new Promise((resolve, reject) => {
      json2csv({data: eventArr}, (err, csv) => {
        if (err) {
          reject(err);
        }
        resolve(csv);
      });
    });
    const csv = await csvPromise;
    logger.info(`${csv}`);
    ctx.body = csv;
  }
  return next();
}

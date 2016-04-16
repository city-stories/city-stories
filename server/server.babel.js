import Koa from 'koa';

const app = new Koa();
const router = krouter();

import 'babel-polyfill';
import bodyParser from 'koa-bodyparser';
import krouter from 'koa-router';
import serve from 'koa-static';
import bunyan from 'koa-bunyan';
import logger from './logger';
import eventCtrl from './eventCtrl';
import mapCtrl from './mapCtrl';
import userCtrl from './userCtrl';

app.use(bunyan(logger, {
  level: 'info',
  timeLimit: 250
}));
app.use(bodyParser());

eventCtrl(router);
mapCtrl(router);
userCtrl(router);

app.use(serve('public/'));
app
  .use(router.routes())
  .use(router.allowedMethods());

export default (port) => app.listen(port);

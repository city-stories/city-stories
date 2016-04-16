import test from 'ava';
import request from 'supertest-as-promised';
import server from '../build/server';

test('role:GetAll', async t => {
  t.plan(2);

  const res = await request(server(5000))
        .get('/role')
        .send();

  const roles = res.body;

  t.is(res.status, 200, 'gets a 200 response');
  t.true(Object.keys(roles).length > 0, 'returns roles');
});

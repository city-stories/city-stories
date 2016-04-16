import test from 'ava';
import request from 'supertest-as-promised';
import server from '../build/server';

test('user:GetAll', async t => {
  t.plan(2);

  const res = await request(server(4000))
        .get('/user')
        .send();

  const users = res.body;

  t.is(res.status, 200, 'gets a 200 response');
  t.true(Object.keys(users).length > 0, 'returns users');
});

test('user:Get', async t => {
  t.plan(4);

  const allRes = await request(server(4001))
        .get('/user')
        .send();

  const users = allRes.body;
  const id = Object.keys(users)[0];

  const res = await request(server(4002))
        .get('/user/' + id)
        .send();

  t.is(res.status, 200, 'gets a 200 response');

  const user = res.body;

  t.is(user.name, users[id].name, 'has the same name');
  t.is(user.link, users[id].link, 'has the same link');
  t.is(user.done, users[id].done, 'has the same done');
});
// TODO: The body is [Object object]
// test('user:Post', async t => {
//     t.plan(2);
//
//     const fixture = { "id": "d0d24a10-3512-434f-8bd2-a0da7d83d24e", "name": "Doug Wade", "role": "City Planner", "email": "doug@dougwade.io" };
//     const postRes = await request(app)
//         .post('/user')
//         .set('Accept', 'application/json')
//         .send();
//
//     const user = JSON.parse(postRes.body);
//
//     const res = await request(app)
//         .get('/user')
//         .send({ id: user.id });
//
//     t.is(postRes.status, 200, 'the post gets a 200 response');
//     t.is(res.status, 200, 'the get gets a 200 response');
//
//     t.is(user.name, fixture.name, 'has the same name');
//     t.is(user.link, fixture.link, 'has the same link');
//     t.is(user.done, fixture.done, 'has the same done');
// });

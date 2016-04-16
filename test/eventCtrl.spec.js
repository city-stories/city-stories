import test from 'ava';
import request from 'supertest-as-promised';
import server from '../build/server';

test('event:GetAll', async t => {
  t.plan(2);

  const res = await request(server(3000))
        .get('/event')
        .send();

  const events = res.body;

  t.is(res.status, 200, 'gets a 200 response');
  t.true(Object.keys(events).length > 0, 'returns events');
});

test('event:Get', async t => {
  t.plan(4);

  const allRes = await request(server(3001))
        .get('/event')
        .send();

  const events = allRes.body;
  const id = Object.keys(events)[0];

  const res = await request(server(3002))
        .get('/event/' + id)
        .send();

  t.is(res.status, 200, 'gets a 200 response');

  const event = res.body;

  t.is(event.name, events[id].name, 'has the same name');
  t.is(event.link, events[id].link, 'has the same link');
  t.is(event.done, events[id].done, 'has the same done');
});
// TODO: The body is [Object object]
// test('event:Post', async t => {
//     t.plan(2);
//
//     const fixture = { "id": "3a4d4c98-2bd8-49fe-a499-3d6bf3ead111", "name": "Angel Hackathon", "latitude": "47.6062N", "longitude": ", 122.3321W", "date": 1460827061560 };
//     const postRes = await request(app)
//         .post('/event')
//         .send();
//
//     const event = postRes.body;
//
//     const res = await request(app)
//         .get('/event')
//         .send({ id: event.id });
//
//     t.is(postRes.status, 200, 'the post gets a 200 response');
//     t.is(res.status, 200, 'the get gets a 200 response');
//
//     t.is(event.name, fixture.name, 'has the same name');
//     t.is(event.latitude, fixture.latitude, 'has the same latitude');
//     t.is(event.longitude, fixture.longitude, 'has the same longitude');
// });

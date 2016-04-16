import db from '../build/db';
import test from 'ava';

const userFixture = { id: 'd0d24a10-3512-434f-8bd2-a0da7d83d24e', name: 'Doug Wade', role: 'City Planner', email: 'doug@dougwade.io' };
const eventFixture = { id: '3a4d4c98-2bd8-49fe-a499-3d6bf3ead111', name: 'Angel Hackathon', latitude: '47.6062N', longitude: ', 122.3321W', date: 1460827061560 };

// Users

test('Gets all users', t => {
  const users = db.getUsers();
  t.true(Object.keys(users).length > 0);
});

test('Gets a user', t => {
  const users = db.getUsers();
  const user = db.getUser(Object.keys(users)[0]);
  t.true(!!user);
});

test('Adds users', t => {
  const users = db.getUsers();
  db.addUser(userFixture);

  t.is(Object.keys(users).length + 1, Object.keys(db.getUsers()).length);
});

test('Updates users', t => {
  const users = db.getUsers();
  userFixture.id = Object.keys(users)[0];
  t.plan(Object.keys(userFixture).length);
  db.updateUser(userFixture);
  const updated = db.getUser(Object.keys(users)[0]);

  Object.keys(userFixture).forEach((attr) => {
    t.is(updated[attr], userFixture[attr]);
  });
});

// Events

test('Gets all events', t => {
  const events = db.getEvents();
  t.true(Object.keys(events).length > 0);
});

test('Gets an event', t => {
  const events = db.getEvents();
  const event = db.getEvent(Object.keys(events)[0]);
  t.true(!!event);
});

test('Adds events', t => {
  const events = db.getEvents();
  db.addEvent(eventFixture);

  t.is(Object.keys(events).length + 1, Object.keys(db.getEvents()).length);
});

test('Updates events', t => {
  const events = db.getEvents();
  eventFixture.id = Object.keys(events)[0];
  t.plan(Object.keys(eventFixture).length);
  db.updateEvent(eventFixture);
  const updated = db.getEvent(Object.keys(events)[0]);

  Object.keys(eventFixture).forEach((attr) => {
    t.is(updated[attr], eventFixture[attr]);
  });
});

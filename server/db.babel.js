import fs from 'fs';
import path from 'path';
import uuid from 'uuid';

const dbLoc = path.join(__dirname, '..', 'db.json');
const db = JSON.parse(fs.readFileSync(dbLoc));

let add = (key, obj) => {
  obj.id = uuid.v4();
  db[key][obj.id] = obj;
  write();
  return obj;
};

let get = (key, id) => {
  return db[key][id];
};

let getAll = (key) => {
  const active = {};
  Object.keys(db[key]).forEach((id) => {
    if (!db[key][id].inactive) {
      active[id] = db[key][id];
    }
  });
  return active;
};

let update = (key, obj) => {
  db[key][obj.id] = obj;
  write();
  return db[obj.id];
};

export default {
  addUser: (user) => {
    return add('users', user);
  },

  getUser: (id) => {
    return get('users', id);
  },

  getUsers: () => {
    return getAll('users');
  },

  updateUser: (user) => {
    return update('users', user);
  },

  addEvent: (event) => {
    return add('events', event);
  },

  getEvent: (id) => {
    return get('events', id);
  },

  getEvents: () => {
    return getAll('events');
  },

  updateEvent: (event) => {
    return update('events', event);
  },

  getRoles: () => {
    return getAll('roles');
  }
};

function write() {
  fs.writeFileSync(dbLoc, JSON.stringify(db));
}

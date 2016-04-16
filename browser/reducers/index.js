export default function application(state = { excitement: 0, todos: [] }, action) {
  let newState;
  switch (action.type) {
  case 'GET_EXCITED': {
    newState = Object.assign({}, state, {
      excitement: state.excitement += 1
    });
    break;
  }
  case 'ADD_TODO': {
    newState = Object.assign({}, state, {
      todos: state.todos.push({name: action.name, link: action.link})
    });
    break;
  }
  case 'TOGGLE_TODO': {
    newState = Object.assign({}, state, {
      excitement: state.excitement += 1
    });
    break;
  }
  default: {
    newState = state;
  }
  }
  return newState;
}

// a reducer taks in two things:

// 1. the action (info about what happened)
// 2. copy of the current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log("increment likes");
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updateing
      ]
    default:
      return state;
  }
}

export default posts;

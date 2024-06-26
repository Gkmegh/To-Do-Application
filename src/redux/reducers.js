import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './actions';

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { text: action.payload, completed: false }],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;

// reducers.js
import { ADD_HABIT, UPDATE_HABIT, DELETE_HABIT } from './actions';
import { createStore } from 'redux';

const initialState = {
  habits: [],
};

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    case UPDATE_HABIT:
      return {
        ...state,
        habits: state.habits.map(habit =>
          habit.id === action.payload.id ? action.payload : habit
        ),
      };
    case DELETE_HABIT:
      return {
        ...state,
        habits: state.habits.filter(habit => habit.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
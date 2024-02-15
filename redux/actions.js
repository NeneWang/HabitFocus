// actions.js
export const ADD_HABIT = 'ADD_HABIT';
export const UPDATE_HABIT = 'UPDATE_HABIT';
export const DELETE_HABIT = 'DELETE_HABIT';

export const addHabit = (habit) => ({
  type: ADD_HABIT,
  payload: habit,
});

export const updateHabit = (habit) => ({
  type: UPDATE_HABIT,
  payload: habit,
});

export const deleteHabit = (habitId) => ({
  type: DELETE_HABIT,
  payload: habitId,
});

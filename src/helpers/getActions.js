export const getActions = (actions, type) =>
  actions.map(action => action[type]);

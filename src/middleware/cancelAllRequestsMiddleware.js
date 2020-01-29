import ajax from './ajax'

export default () => next => action => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    ajax.cancelAll();
  }

  return next(action)
}

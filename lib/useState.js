/**
 *
//  * @param {*} initialState
 * @param {*} _state
 */
export const useState = (initialState) => {
  let _state = initialState;
  const _setState = (newState) => {
    if (_state === newState) return;
    _state = newState;
    return _state;
  };
  return [_state, _setState];
};

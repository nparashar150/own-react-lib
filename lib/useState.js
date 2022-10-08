/**
 *
 * @param {T} initialState - Initial state
 * @param {Function} caller - The component that called this hook
 * @returns {[T, Function]} - [state, setState]
 */
export const useState = (initialState, caller) => {
  // fCState is a function that returns the state of the caller
  let [_state, index] = fCState(caller, initialState);

  const __setState = (newState) => {
    if (__state() === newState) return; // if the state is the same, do nothing
    // update the state of the caller with the new state
    _state = fCState(caller, newState, index)[0];

    return _state;
  };

  // return the state
  const __state = () => _state.get(index);

  return [__state, __setState];
};

/**
 *
 * @param {Function} caller - The component that called this hook
 * @param {T} state - The state to be set
 * @param {Number} mapIndex - The index of the state in the map
 * @returns {[Map, Number]} - [state, index]
 */
export const fCState = (caller, state, mapIndex = null) => {
  // fC = function component
  // caller is the function component
  if (typeof caller === "function") {
    // if the component has no state, create a new map
    if (!caller._state || caller._state instanceof Map === false) {
      // if the state is not set, create map of state
      caller._state = new Map(); // create a map to store the state
    }

    if (state !== undefined) {
      if (!mapIndex && caller._state.size === 0) {
        // if mapIndex is not set, new state is being set
        caller._state.set(0, state); // set the state and the state
        return [caller._state, 0];
      } else if (typeof mapIndex === "number") {
        caller._state.set(mapIndex, state); // set the state
        return [caller._state, mapIndex];
      } else {
        caller._state.set(caller._state.size, state); // get the state
        return [caller._state, caller._state.size - 1];
      }
    } else {
      throw new Error("useState must be called with a state value");
    }
  } else {
    throw new Error("useState caller must be of type function");
  }
};

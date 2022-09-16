let element = document.createElement("div");
element["store"] = {};
document.body.appendChild(element);
element.innerText = "";

/**
 *
 * @param {number} initState
 * @param {string} refIdentifier
 */
function useState(initState, refIdentifier, func) {
  let state = element.store[refIdentifier];

  if (state === undefined) {
    state = element.store[refIdentifier] = initState;
    func();
  }

  function setState(newState) {
    if(state === newState) return
    state = element.store[refIdentifier] = newState;
    func();
  }

  return [state, setState];
}

let button = document.createElement("button");
button.innerText = "I update your state";
document.body.appendChild(button);


function ourFunctionalComponent() {
  let [count, setCounter] = useState(0, "counter", ourFunctionalComponent);

  button.addEventListener("click", () => {
    setCounter(count + 1);
  });

  element.innerText = count;
}

ourFunctionalComponent()

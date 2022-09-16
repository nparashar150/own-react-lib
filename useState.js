let element = document.createElement("div");
element["store"] = {};
document.body.appendChild(element);
element.innerText = "";

let root = document.body;
root.setAttribute("id", "root");

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

  // console.log(useState.caller) // this is the function that called useState

  function setState(newState) {
    if (state === newState) return;
    state = element.store[refIdentifier] = newState;
    func();
  }

  return [state, setState];
}

const addElementToDom = (htmlElementName, htmlParentElement) => {
  const htmlElement = document?.createElement(htmlElementName);
  const element = htmlParentElement?.appendChild(htmlElement);
  element["store"] = {};
  return element;
};

let div = addElementToDom("div", root);

let increment = addElementToDom("button", div);
increment.innerText = "Increment";
increment.setAttribute("style", "margin: 5px 10px");

let decrement = addElementToDom("button", div);
decrement.innerText = "Decrement";
decrement.setAttribute("style", "margin: 5px 10px");

function ourFunctionalComponent() {
  let [count, setCounter] = useState(0, "counter", ourFunctionalComponent);

  increment.addEventListener("click", () => {
    setCounter(count + 1);
  });

  decrement.addEventListener("click", () => {
    setCounter(count - 1);
  });

  element.innerText = count;
}

ourFunctionalComponent();

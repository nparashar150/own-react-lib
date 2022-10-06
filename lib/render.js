/**
 *
 * @param {HTMLElement} element
 * @param {String} containerId
 */
export const render = (element, containerId) => {
  const root = document.getElementById(containerId);
  if (!root.firstChild) {
    return root.appendChild(element);
  }
  const oldNode = root.firstChild;
  const newNode = element;

  diff(oldNode, newNode);
};

/**
 *
 * @param {NodeList} oldNode
 * @param {NodeList} newNode
 */
export const diff = (oldNode, newNode) => {
  // Reference to nodeTypes: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

  // If the old node is a text node and the new node is a text node
  if (oldNode.nodeType === 3 && newNode.nodeType === 3) {
    // If the text content is different
    if (oldNode.textContent !== newNode.textContent) {
      // Update the text content
      oldNode.textContent = newNode.textContent;
    }
  }

  // If the old node is a text node and the new node is not a text node
  if (oldNode.nodeType === 3 && newNode.nodeType !== 3) {
    // Replace the old node with the new node
    oldNode.replaceWith(newNode);
  }

  // If the old node is not a text node and the new node is a text node
  if (oldNode.nodeType !== 3 && newNode.nodeType === 3) {
    // Replace the old node with the new node
    oldNode.replaceWith(newNode);
  }

  // If the old node is not a text node and the new node is not a text node
  if (oldNode.nodeType !== 3 && newNode.nodeType !== 3) {
    // If the tag names are different
    if (oldNode.tagName !== newNode.tagName) {
      // Replace the old node with the new node
      oldNode.replaceWith(newNode);
    }

    // If the tag names are the same
    if (oldNode.tagName === newNode.tagName) {
      // Update the attributes
      updateAttributes(oldNode, newNode);

      // Update the children
      updateChildren(oldNode, newNode);
    }
  }
};

/**
 *
 * @param {NodeList} oldNode
 * @param {NodeList} newNode
 */
export const updateAttributes = (oldNode, newNode) => {
  // Reference to attributes: https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes

  // Get the old attributes
  const oldAttributes = Array.from(oldNode.attributes);

  // Get the new attributes
  const newAttributes = Array.from(newNode.attributes);

  // Remove the old attributes
  oldAttributes.forEach((attribute) => {
    oldNode.removeAttribute(attribute.name);
  });

  // Add the new attributes
  newAttributes.forEach((attribute) => {
    oldNode.setAttribute(attribute.name, attribute.value);
  });
};

/**
 *
 * @param {NodeList} oldNode
 * @param {NodeList} newNode
 */
export const updateChildren = (oldNode, newNode) => {
  // Reference to childNodes: https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes

  // Get the old children
  const oldChildren = Array.from(oldNode.childNodes);

  // Get the new children
  const newChildren = Array.from(newNode.childNodes);

  // If the new node has more children, add them
  newChildren.forEach((child, index) => {
    if (index >= oldChildren.length) {
      oldNode.appendChild(child);
    }
  });

  // If the new node has less children, remove them
  oldChildren.forEach((child, index) => {
    if (index >= newChildren.length) {
      oldNode.removeChild(child);
    }
  });

  // If the new node has the same number of children, update them
  oldChildren.forEach((child, index) => {
    if (index < newChildren.length) {
      diff(child, newChildren[index]);
    }
  });
};

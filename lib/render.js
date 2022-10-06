/**
 * 
 * @param {HTMLElement} element 
 * @param {String} containerId 
 */
export const render = (element, containerId) => {
  const root = document.getElementById(containerId);
  root.appendChild(element);
};

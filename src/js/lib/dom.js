/**
 * Make html element
 * @param {String} tagName
 * @param {Array|String} classNames - array of classnames or string for single classname
 * @param {Object} attributes - object with html attributes
 */
export const makeElement = (tagName, classNames = [], attributes = []) => {
  tagName = tagName.toLowerCase();

  const element = document.createElement(tagName);

  if (classNames) {
    if (typeof classNames === 'object') {
      classNames.forEach((cname) => {
        element.classList.add(cname);
      });
    } else if (typeof classNames === 'string') {
      element.classList.add(classNames);
    }
  }

  for (const attr in attributes) {
    if (attr === 'data') {
      const dataAttributes = attributes[attr];

      for (const attr in dataAttributes) {
        element.dataset[attr] = dataAttributes[attr];
      }
    } else {
      element[attr] = attributes[attr];
    }
  }

  return element;
};

/**
 * Cache elements with [data-view] attribute and put them in given object
 * @param {Object} obj - object
 */
export const cacheElements = (obj, attr = 'view') => {
  const newObj = {};
  const elements = document.querySelectorAll(`[data-${attr}]`);

  Array.prototype.forEach.call(elements, (el) => {
    const name = el.dataset[attr];
    newObj[name] = el;
  });

  Object.assign(obj, newObj);
};

/**
 * Get all siblings of specified element, excluding this element
 * @param {Element} element
 */
export const getSiblings = (element) => {
  const siblings = [];
  let sibling = element.parentNode.firstChild;

  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling.nodeType !== 1 || sibling === element) continue;
    siblings.push(sibling);
  }

  return siblings;
};

/**
 * Remove all children from element
 * @param {Element} parent
 */
export const removeChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

/**
 * Remove specified element from its parent
 * @param {Element} element
 */
export const removeElement = (element) => {
  if (element) {
    element.parentNode.removeChild(element);
  }
};

/**
 * Transform html string to node
 * @param {String} html
 */
export const htmlStringToNode = (html) => {
  const el = document.createElement('div');

  el.innerHTML = html;

  return el.firstChild;
};

/**
 * Prepend source element before first child of target element
 * @param {Element} parent
 * @param {Element} el
 */
export const prepend = (parent, el) => {
  parent.insertBefore(el, parent.firstChild);
};

/** Quick check if element is in DOM */
export const isElementInDom = el => el.parentNode;

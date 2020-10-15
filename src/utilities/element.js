export const createElement = (tag, prop) => {
    const element = document.createElement(tag);
    const { children, ...otherProps} = prop;
    Object.assign(element, otherProps);
    if (children) {
        element.append(...children);
    };
    return element;
};
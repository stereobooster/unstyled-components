import React from "react";

const ThemeContext = React.createContext({});
export const ThemeProvider = ({ children, theme }) =>
  React.createElement(ThemeContext.Provider, { value: theme }, children);

const filterObject = (rest, shouldForwardProp) =>
  Object.keys(rest)
    .filter(shouldForwardProp)
    .reduce((obj, key) => {
      obj[key] = rest[key];
      return obj;
    }, {});

export const styled = (
  defaultAs,
  { shouldForwardProp, label } = {}
) => styleCalback => {
  const component = React.memo(
    React.forwardRef(({ children, as = defaultAs, ...props }, ref) => {
      const theme = React.useContext(ThemeContext);
      return React.createElement(
        as,
        {
          style: styleCalback({ ...props, theme }),
          ...(shouldForwardProp
            ? filterObject(props, shouldForwardProp)
            : props)
        },
        children
      );
    })
  );
  component.displayName = `${label || defaultAs}💅`;
  return component;
};

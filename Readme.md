<img src="https://github.com/stereobooster/unstyled-components/blob/master/unstyled-components.png?raw=true" width="150" height="150" />

# unstyled-components

styled-components based on React's style prop

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">My favorite CSS-in-JS API has been in React from day one.</p>
  &mdash; Sebastian Markbåge (@sebmarkbage) <a href="https://twitter.com/sebmarkbage/status/1002277788961918979?ref_src=twsrc%5Etfw">May 31, 2018</a>
</blockquote>

## Example

```js
import React from "react";
import isPropValid from "@emotion/is-prop-valid";
import { styled, ThemeProvider } from "unstyled-components";

const H1 = styled("h1", {
  shouldForwardProp: prop => isPropValid(prop) && prop !== "color"
})(props => ({
  color: "hotpink",
  background: props.theme.background
}));

export const StyledTest = () => (
  <ThemeProvider theme={{ background: "#000" }}>
    <H1 color="lightgreen">This is lightgreen.</H1>
  </ThemeProvider>
);
```

## Why?

...

import React from "react";
import MuiThemeProvider from "./MuiThemeProvider";
// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  return <MuiThemeProvider>{element}</MuiThemeProvider>;
};

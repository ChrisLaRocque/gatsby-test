import React from "react";
import { Slice } from "gatsby";
import { Box } from "@mui/material";

// import { useLayoutEffect } from "react";

type LayoutProps = {
  hero?: React.ReactNode;
  showChatButton?: boolean;
};

const Layout: FCWC<LayoutProps> = ({
  hero,
  showChatButton = true,
  children,
}) => {
  //   useLayoutEffect(() => {
  //     ScrollTrigger.refresh()
  //   })

  return (
    <>
      <>
        {/* <Slice alias="header" /> */}
        <>{hero}</>
      </>
      <MainContent>{children}</MainContent>
      {/* <Slice alias="Footer" /> */}
      {/* <InitialPageLoad /> */}
    </>
  );
};

export default Layout;

export const MainContent: FCWC = ({ children }) => {
  return (
    <Box
      component="main"
      sx={(theme) => ({
        bgcolor: theme.palette["neutral.100"].main,
        position: "relative",
      })}
    >
      {children}
    </Box>
  );
};

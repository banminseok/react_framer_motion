import { Link, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { darkTheme, lightTheme } from './theme';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";

const Menu = styled.div`
  padding : 10px;
  background-color:#BFB48F;
  color : black;
`;
function App() {
  return (
    <>
      <HelmetProvider >
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <Menu>
            &rarr;<Link to={"./animation"}>animation </Link>,
            <Link to={"./variants"}>variants </Link>,
            <Link to={"./demoGestures"}>DemoGestures </Link>,
            <Link to={"./DemoMotionValue"}>DemoMotionValue </Link>,
            <Link to={"./SVGAnima"}>SVGAnima </Link>,
            <Link to={"./AnimaPre"}>AnimaPre </Link>,
          </Menu>
          <Outlet />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
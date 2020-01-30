import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import GlobalStyle from "@components/GlobalStyle";

const Root = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => (
  <Root>
    <GlobalStyle />
  </Root>
);

ReactDOM.render(<App />, document.getElementById("root"));

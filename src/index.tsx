import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import GlobalStyle from "@components/GlobalStyle";
import IterativeTree from "@components/Iterative";
import RecursiveTree from "@components/Recursive";
import RerenderProvider, { State } from "@components/RerenderProvider";

const Root = styled.div`
  display: flex;
  height: 100vh;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Right = styled(Left)`
  border-left: 1px solid lightGray;
`;

const StyledText = styled.span`
  margin-top: 10px;
  text-align: center;
`;

export const recursiveContext = React.createContext({} as Context);
export const iterativeContext = React.createContext({} as Context);

interface Context {
  state: State;
  addNode: (id: number, name: string) => void;
}

const App = () => (
  <Root>
    <GlobalStyle />
    <Left>
      <StyledText>Recursive</StyledText>
      <RerenderProvider context={recursiveContext}>
        <RecursiveTree />
      </RerenderProvider>
    </Left>
    <Right>
      <StyledText>Iterative</StyledText>
      <RerenderProvider context={iterativeContext}>
        <IterativeTree />
      </RerenderProvider>
    </Right>
  </Root>
);

ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { AppProps } from "../../utils/interfaces";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { Mode } from "../../store/system/types";
import { lightTheme, darkTheme } from "../../styles/themes";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Home from "../Home/home";
import Quiz from "../Quiz/quiz";
import Score from "../Score/score";

const ThemedMain = styled.main`
  flex: 1;
  background-color: ${props => props.theme.primary.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.primary.text};
`;

const App: React.FC<AppProps> = ({ className, mode }) => {
  const [theme] = useState(lightTheme);
  return (
    <ThemeProvider theme={mode === Mode.LIGHT ? lightTheme : darkTheme}>
      <div className={className}>
        <Header />
        <ThemedMain>
          <Router>
            <Route path="/" exact>
            <Home />
            </Route>
            <Route path="/settings">
              <p>Settings</p>
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/score">
              <Score />
            </Route>
          </Router>
        </ThemedMain>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export const StyledApp = styled(App)`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const mapStateToProps = (state: AppState) => ({
  mode: state.system.mode
});

 export default connect(mapStateToProps)(StyledApp);
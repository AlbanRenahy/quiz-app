import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./quiz";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/themes";
import { MemoryRouter } from "react-router";

 it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]}>
      <ThemeProvider theme={lightTheme}>
        <Quiz />
      </ThemeProvider>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
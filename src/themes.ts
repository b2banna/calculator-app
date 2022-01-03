import styled, { createGlobalStyle, StyledComponent } from "styled-components";

import { Themes } from "./types/themes";

export const LightTheme: Themes = {
  calculatorBackgroundColor: "#FFFFFF",
  calculatorFontColor: "#000000",
  buttonsBackgroundColor: "#F1F1F1",
  buttonBackgroundColor: "#F9F9F9",
  buttonFontColor: "#000000",
  inputBackgroundColor: "#FFFFFF",
  inputFontColor: "#000000",
  iconBackgroundColor: "#F9F9F9"
}

export const DarkTheme: Themes = {
  calculatorBackgroundColor: "#22252D",
  calculatorFontColor: "#FFF",
  buttonsBackgroundColor: "#322D36",
  buttonBackgroundColor: "#292D36",
  buttonFontColor: "#FFF",
  inputBackgroundColor: "#22252D",
  inputFontColor: "#FFF",
  iconBackgroundColor: "#292D36"
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background-color:#F5F3F3;
  }
`

export const AppStyle: StyledComponent<"div", any, {}, never> = styled.div`
  color: ${(props) => props.theme.calculatorFontColor};
 `

export const ContainerStyle: StyledComponent<"div", any, {}, never> = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 `

export const CalculatorStyle: StyledComponent<"div", any, {}, never> = styled.div`
  width: 300px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  border-radius: 2rem;
  margin-top: 4rem;
  background-color: ${(props: { theme: Themes }) => props.theme.calculatorBackgroundColor};
 `

export const SwitchStyle: StyledComponent<"div", any, {}, never> = styled.div`
  border-radius: 50%;
  padding: 0.5rem 1.5rem;
  align-items: center;
  background-color: ${(props: { theme: Themes }) => props.theme.iconBackgroundColor};
  display: flex;
 `

export const InputStyle: StyledComponent<"input", any, {}, never> = styled.input`
  width: 80%;
  height: 60%;
  background-color: transparent;
  border: none;
  padding: 1rem;
  padding-top: 7rem;
  font-size: 30px;
  text-align: right;
  color:  ${(props: { theme: Themes }) => props.theme.inputFontColor};

  focus {
    outline: none;
  }
 `

export const ButtonGroupStyle: StyledComponent<"div", any, {}, never> = styled.div`
  width: 100%;
  margin-top: 1rem;
  border-top-right-radius: 3rem;
  border-top-left-radius: 3rem;
  border-radius: 2rem;
  background-color: ${(props: { theme: Themes }) => props.theme.buttonsBackgroundColor};
  padding: 2rem;
  justify-content: center;
  flex-wrap: wrap;
 `

export const ButtonStyle: StyledComponent<"button", any, {}, never> = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  margin: 0.3rem;
  background-color: ${(props: { theme: Themes }) => props.theme.buttonBackgroundColor};
  border: none;
  color: ${(props: { theme: Themes }) => props.theme.buttonFontColor};
 `

export const OperatorButtonStyle: StyledComponent<"button", any, {}, never> = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  margin: 0.3rem;
  background-color: ${(props: { theme: Themes }) => props.theme.buttonBackgroundColor};
  border: none;
  color: #cb5c5e;
 `

export const FuncationOperatorButtonStyle: StyledComponent<"button", any, {}, never> = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  margin: 0.3rem;
  background-color: ${(props: { theme: Themes }) => props.theme.buttonBackgroundColor};
  border: none;
  color: #26e2c1;
 `

export const FuncationButtonStyle: StyledComponent<"button", any, {}, never> = styled.button`
  width: 6.7rem;
  height: 3rem;
  border-radius: 1rem;
  margin: 0.3rem;
  background-color: ${(props: { theme: Themes }) => props.theme.buttonBackgroundColor};
  border: none;
  color: #26e2c1;
 `

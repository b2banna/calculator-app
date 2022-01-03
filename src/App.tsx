import { useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdNightlightRound } from "react-icons/md";
import { ThemeProvider } from "styled-components";
import { AppStyle, ButtonGroupStyle, ButtonStyle, CalculatorStyle, ContainerStyle, DarkTheme, FuncationButtonStyle, FuncationOperatorButtonStyle, GlobalStyle, InputStyle, LightTheme, OperatorButtonStyle, SwitchStyle } from "./themes"

export default function App() {
  const [input, setinput] = useState("");
  const [theme, setTheme] = useState("dark");

  const lightToggle = (): void => setTheme("light");
  const darkToggle = (): void => setTheme("dark");
  const clear = (): void => setinput("");
  const backspace = (): void => setinput(input.slice(0, -1));
  const handleClick = (e: any): void => setinput(`${input}${e.target.name}`);


  const result = (): void => {
    try {
      // eslint-disable-next-line no-eval
      setinput(eval(input.toString()));
    } catch (error) {
      setinput("Error");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <AppStyle>
        <ContainerStyle>
          <CalculatorStyle>
            <SwitchStyle>
              <WiDaySunny
                style={{ backgroundColor: "transparent" }}
                onClick={lightToggle}
                fill="#cb5c5e"
                size={32}
              />
              <MdNightlightRound
                style={{ backgroundColor: "transparent" }}
                onClick={darkToggle}
                fill="#26e2c1"
                size={26}
              />
            </SwitchStyle>
            <InputStyle type="text" disabled={true} defaultValue={input} />
            <ButtonGroupStyle>
              {/* First Row */}
              <FuncationButtonStyle onClick={clear} > AC </FuncationButtonStyle>
              <FuncationOperatorButtonStyle onClick={backspace}  > &larr; </FuncationOperatorButtonStyle>
              <OperatorButtonStyle name="/" onClick={handleClick}  > &divide; </OperatorButtonStyle>

              {/* Second Row */}
              <ButtonStyle name="7" onClick={handleClick}> 7 </ButtonStyle>
              <ButtonStyle name="8" onClick={handleClick}> 8 </ButtonStyle>
              <ButtonStyle name="9" onClick={handleClick}> 9 </ButtonStyle>
              <OperatorButtonStyle name="*" onClick={handleClick} > &times; </OperatorButtonStyle>

              {/* Third Row */}
              <ButtonStyle name="4" onClick={handleClick}> 4 </ButtonStyle>
              <ButtonStyle name="5" onClick={handleClick}> 5 </ButtonStyle>
              <ButtonStyle name="6" onClick={handleClick}> 6 </ButtonStyle>
              <OperatorButtonStyle name="-" onClick={handleClick} > &ndash; </OperatorButtonStyle>

              {/* Fourth Row */}
              <ButtonStyle name="1" onClick={handleClick}> 1 </ButtonStyle>
              <ButtonStyle name="2" onClick={handleClick}> 2 </ButtonStyle>
              <ButtonStyle name="3" onClick={handleClick}> 3 </ButtonStyle>
              <OperatorButtonStyle name="+" onClick={handleClick} > + </OperatorButtonStyle>

              {/* Fifth Row */}
              <ButtonStyle name="0" onClick={handleClick}> 0 </ButtonStyle>
              <ButtonStyle name="." onClick={handleClick}> . </ButtonStyle>
              <FuncationButtonStyle name="=" onClick={result} > = </FuncationButtonStyle>
            </ButtonGroupStyle>
          </CalculatorStyle>
        </ContainerStyle>
      </AppStyle>
    </ThemeProvider>
  );
}

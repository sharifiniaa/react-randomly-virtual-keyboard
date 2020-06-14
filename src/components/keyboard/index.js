import React, { useRef, useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import * as methods from "../../utils/keyboard/generator";

const VirtualKeyboard = ({ handleChangeKeyboard }) => {
  const [layoutName, setLayoutName] = useState("default");
  const keyboard = useRef();
  const [defaultKeyboard, setDefaultKeyboard] = useState([
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ]);
  const [numbersKeyboard, setNumbersKeyboard] = useState([
    "@ 1 2 3 4 5 6 7 8 9",
    `# $ & * ( ' " ? % -`,
    "+ = / : ! ? ; 0",
  ]);
  const [shiftKeyboard, setShiftKeyboard] = useState([
    "Q W E R T Y U I O P",
    "A S D F G H J K L",
    "Z X C V B N M",
  ]);

  useEffect(() => {
    RandomizeKeyboard();
  }, []);

  const RandomizeKeyboard = () => {
    setDefaultKeyboard(methods.cleanWhiteSpace(defaultKeyboard));
    setNumbersKeyboard(methods.cleanWhiteSpace(numbersKeyboard));
    setShiftKeyboard(methods.cleanWhiteSpace(shiftKeyboard));
  };

  const keyboardSetting = {
    layout: {
      default: [...defaultKeyboard, "{numbers} {shift} {space} {backspace}"],
      shift: [...shiftKeyboard, "{numbers} {shift} {space} {backspace}"],
      numbers: [...numbersKeyboard, "{abc} {space} {backspace}"],
    },
    display: {
      "{numbers}": "123",
      "{space}": " ",
      "{ent}": "return",
      "{escape}": "esc ⎋",
      "{tab}": "tab ⇥",
      "{backspace}": "⌫",
      "{capslock}": "caps lock ⇪",
      "{shift}": "⇧",
      "{controlleft}": "ctrl ⌃",
      "{controlright}": "ctrl ⌃",
      "{altleft}": "alt ⌥",
      "{altright}": "alt ⌥",
      "{metaleft}": "cmd ⌘",
      "{metaright}": "cmd ⌘",
      "{abc}": "ABC",
    },
  };

  const onKeyPress = (button) => {
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}") {
      handleShift();
    } else if (button === "{numbers}") {
      handleNumber();
    } else if (button === "{abc}") {
      setLayoutName("default");
    } else if (button === "{backspace}") {
      onChange("{backspace}");
    }
  };

  const handleNumber = () => {
    setLayoutName("numbers");
  };

  const handleShift = () => {
    setLayoutName(layoutName === "default" ? "shift" : "default");
  };

  const onChange = (input) => {
    handleChangeKeyboard(input);
    keyboard.current.clearInput();
  };

  return (
    <Keyboard
      layout={keyboardSetting.layout}
      layoutName={layoutName}
      display={keyboardSetting.display}
      keyboardRef={(r) => (keyboard.current = r)}
      onKeyPress={onKeyPress}
      onChange={onChange}
    />
  );
};

export default VirtualKeyboard;

import { useAtom } from "jotai";
import { errorMsgAtom, fullNameAtom } from "../../store";
import { useRef } from "react";
import {
  errorStyles,
  headingStyles,
  inputFieldContainerStyles,
  inputFieldStyles,
  stepContainerStyles,
  subHeadingStyles,
} from "../../utils/styles";

const StepOne = () => {
  const [fullName, setFullName] = useAtom(fullNameAtom);
  const [errorMsg] = useAtom(errorMsgAtom);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={stepContainerStyles}>
      <h3 className={headingStyles}>היי, כאן אבי</h3>
      <h4 className={subHeadingStyles}>על מנת שנוכל לבדוק את זכאותך לדרכון רומני, אשאל מספר שאלות</h4>
      <h4 className={subHeadingStyles}>מה שמך?</h4>
      <div
        className={inputFieldContainerStyles}
        onClick={() => inputRef.current?.focus()}
      >
          <img src="icons/person-icon.svg" />
        <input
          ref={inputRef}
          type="text"
          placeholder="מה שמך המלא?"
          className={inputFieldStyles}
          onChange={(e) => {
            if (!/\d/.test(e.target.value)) {
              // Update the state if there are no numbers
              setFullName(e.target.value);
            }
          }}
          value={fullName}
        />
      </div>
      <p className={errorStyles}>{errorMsg ? errorMsg : " "}</p>
    </div>
  );
};

export default StepOne;

import { useAtom } from "jotai";
import { useRef } from "react";
import { errorMsgAtom, phoneNumberAtom } from "../../store";
import cn from "../../utils/cn";
import {
  errorStyles,
  // headingStyles,
  inputFieldContainerStyles,
  inputFieldStyles,
  stepContainerStyles,
} from "../../utils/styles";
import TermsAndPrivacyAgreement from "../TermsAndPrivacyAgreement";

const StepSix = () => {
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
  const [errorMsg] = useAtom(errorMsgAtom);
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className={stepContainerStyles}>
      {/* <h3 className={headingStyles}>
        לתוצאות בדיקת ההתאמה לטיפול החדשני של קליניקה כרמל
      </h3> */}
      <h4
        className={
          "text-[27px] md:text-4xl font-[600] text-center leading-[1.1] md:leading-[1.1]"
        }
      >
        על סמך הנתונים שהזנת, ייתכן שמגיע לך לקבל דרכון רומני .
        <br className="sm:flex hidden" />
         אודה למילוי פרטי התקשרות כדי שנוכל להשלים את בדיקת הזכאות. 
      </h4>
      <h4
        className={
          "text-[26px] md:text-4xl font-[600] text-center leading-4 md:leading-[1.1]"
        }
      >
        מה מספר הטלפון שלך ?
      </h4>
      <div
        className={inputFieldContainerStyles}
        onClick={() => inputRef.current?.focus()}
      >
        <img src="icons/phone-icon.svg" />
        <input
          ref={inputRef}
          type="number"
          placeholder="טלפון:"
          className={inputFieldStyles}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
      </div>
      <div className="mb-2">
        <p className={cn(errorStyles, "mb-0 text-center")}>
          {errorMsg ? errorMsg : " "}
        </p>
        <div>
          <TermsAndPrivacyAgreement />
        </div>
      </div>
    </div>
  );
};

export default StepSix;

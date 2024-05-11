import { useAtom } from "jotai";
import cn from "../utils/cn";
import {
  continueBtnLoadingAtom,
  createdAtAtom,
  currentStepAtom,
  ageGroupAtom,
  errorMsgAtom,
  fullNameAtom,
  isPrivayReadAtom,
  loadingAtom,
  nailTimeAtom,
  nearestBranchAtom,
  phoneNumberAtom,
  individualityAtom,
} from "../store";
import TagManager from "react-gtm-module";
// import { v4 } from "uuid";
import { WEBHOOK_URL } from "../utils/CONSTS";
// import TermsAndPrivacyAgreement from "./TermsAndPrivacyAgreement";

const FormButtons = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [fullName] = useAtom(fullNameAtom);
  const [isLoading, setIsLoading] = useAtom(loadingAtom);
  const [phoneNumber] = useAtom(phoneNumberAtom);
  const [nailTime] = useAtom(nailTimeAtom);
  const [individuality] = useAtom(individualityAtom);
  const [ageGroup] = useAtom(ageGroupAtom);
  const [nearestBranch] = useAtom(nearestBranchAtom);
  const [createdAt] = useAtom(createdAtAtom);
  const [btnLoading, setBtnLoading] = useAtom(continueBtnLoadingAtom);
  const [, setErrorMsg] = useAtom(errorMsgAtom);
  const [isPrivacyRead] = useAtom(isPrivayReadAtom);

  const commonButtonStyles =
    "font-extrabold text-2xl md:text-3xl w-32 md:min-w-36 md:py-3 py-2 rounded-2xl disabled:cursor-not-allowed disabled:opacity-60";
  const regex = /^05\d{8}$/;

  const handleContineBtnClick = async () => {
    // alert("workign")
    setErrorMsg("");
    try {
      if (currentStep === 1 && fullName.length < 2) {
        setErrorMsg("לפחות 2 תווים");
        return;
      } else if (currentStep === 5) {
        if (phoneNumber == "" && !isPrivacyRead) {
          setErrorMsg("אנא הזן מספר נייד תקין");
          return;
        }

        if (!isPrivacyRead) {
          setErrorMsg(" אנא קרא את המדיניות והתנאים");
          return;
        }
        if (!regex.test(phoneNumber)) {
          setErrorMsg("אנא הזן מספר נייד תקין");
          return;
        }
      }

      setBtnLoading(true);

      if (currentStep === 5) {
        const payload = {
          fullName,
          ageGroup,
          nailTime,
          individuality,
          nearestBranch,
          phoneNumber,
          createdAt,
          pageUrl: window.location.href,
        };

        // console.log(payload, "ageGroupbabar")

        // alert("work")

        await fetch(WEBHOOK_URL, {
          method: "POST",
          body: JSON.stringify(payload),
        });

        // TagManager.dataLayer({
        //   dataLayer: {
        //     event: `registration_complete_carmel_clinic`,
        //   },
        // });

        // localStorage.setItem("formId", v4());

        setIsLoading(true);
        // alert("work")

        // setTimeout(() => {

        //   setIsLoading(false);

        // }, 2000);

        // return true;
      } else {
        TagManager.dataLayer({
          dataLayer: {
            event: `step_${currentStep}_complete_carmel_clinic`,
          },
        });
      }

      if (currentStep == 2 && ageGroup == "כן") {
        setCurrentStep((prev) => prev + 2);
      } else {
        // alert("work")
        setCurrentStep((prev) => prev + 1);
      }
    } catch (error) {
      console.log("Error: ", error);
    }

    setBtnLoading(false);

    if (currentStep === 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const isContinueBtnDisable = () => {
    if (btnLoading) return true;
    // else if (currentStep === 6 && !isPrivacyRead) return true;
    else if (currentStep === 2 && !ageGroup) return true;
    else if (currentStep === 3 && !nailTime) return false;
    else if (currentStep === 4 && !nailTime) return true;
    // else if (currentStep === 5 && (!phoneNumber && !isPrivacyRead)) return true;

    return false;
  };

  const backButton = () => {
    if (currentStep == 4 && ageGroup == "כן") {
      setCurrentStep((prev) => prev - 2);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      {!isLoading && currentStep !== 7 && (
        // <div
        //   className={cn(
        //     "button-container flex gap-4 items-center flex-col md:flex-row justify-center md:justify-between md:mt-auto select-none",
        //     // {
        //     //   "md:justify-end": currentStep === 1,
        //     // }
        //   )}
        // >

        //   {(currentStep !== 1 && currentStep !== 6) ? (

        //     <button
        //       disabled={currentStep === 1 || btnLoading}
        //       onClick={() => setCurrentStep((prev) => prev - 1)}
        //       className={`${commonButtonStyles} bg-themeBackBtnGrey`}
        //     >
        //       חזור
        //     </button>

        //   ) : null}

        //   {(currentStep == 6 || currentStep == 3) ? null :

        //     <button
        //       onClick={handleContineBtnClick}
        //       disabled={isContinueBtnDisable()}
        //       className={cn(`${commonButtonStyles}  bg-themeBlue text-white`, {
        //         "opacity-60":
        //           btnLoading ||
        //           (currentStep === 5 &&
        //             (!isPrivacyRead || !regex.test(phoneNumber))) ||

        //           (currentStep === 1 && fullName.length < 2),
        //       })}
        //     >
        //       {currentStep === 5 ? "שלח" : "המשך"}
        //     </button>
        //   }

        //   {/* {currentStep === 6 && (
        //     <div className="hidden xl:block">
        //       <TermsAndPrivacyAgreement />
        //     </div>
        //   )} */}

        // </div>

        <div
          className={cn(
            "button-container flex gap-4 items-center flex-col md:flex-row justify-center md:justify-between md:mt-auto select-none",
            {
              "md:justify-end": currentStep === 1,
            }
          )}
        >
          {currentStep === 1 || currentStep === 6 ? null : (
            <button
              disabled={currentStep === 1 || btnLoading}
              onClick={backButton}
              className={`button bg-themeBackBtnGrey ${commonButtonStyles}`}
            >
              חזור
            </button>
          )}

          {currentStep === 6 || currentStep === 3 ? null : (
            <button
              onClick={handleContineBtnClick}
              disabled={isContinueBtnDisable()}
              className={`button bg-themeBlue text-white ${commonButtonStyles}`}
            >
              {currentStep === 5 ? "שלח" : "המשך"}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default FormButtons;

import { useAtom } from "jotai";
import { useEffect } from "react";
import { v4 } from "uuid";
import FormButtons from "./components/FormButtons";
import Header from "./components/Header";
import Loader from "./components/Loader/Loader";
import Stepper from "./components/Stepper";
import TermsOfUseModal from "./components/TermsOfUseModal";
// import StepFive from "./components/steps/StepFive";
import StepFour from "./components/steps/StepTwo";
import StepLast from "./components/steps/StepLast";
import StepOne from "./components/steps/StepOne";
import StepSix from "./components/steps/StepSix";
// import StepThree from "./components/steps/StepFour";
import StepTwo from "./components/steps/StepThree";
import StepThreenew from "./components/steps/StepThreenew";

import {
  modalDisplayAtom,
  currentStepAtom,
  formIdAtom,
  // loadingAtom,
  continueBtnLoadingAtom,
} from "./store";
import MobileFooter from "./components/MobileFooter";

const App = () => {
  const [, setIsModalOpen] = useAtom(modalDisplayAtom);
  const [currentStep] = useAtom(currentStepAtom);
  const [isLoading] = useAtom(continueBtnLoadingAtom);
  const [, setFormId] = useAtom(formIdAtom);
  console.log(currentStep);

  useEffect(() => {
    const id = localStorage.getItem("formId");
    if (id) {
      setFormId(id);
    } else {
      const newId = v4();
      localStorage.setItem("formId", newId);
      setFormId(newId);
    }
  }, []);
  return (
    <div
      dir="rtl"
      className="font-['Assistant'] bg-cover bg-center min-w-full min-h-screen flex items-center justify-center pt-6 pb-16 md:pt-12 relative overflow-hidden"

      // style={{ backgroundImage: `url("background.jpeg")` }}
    >
      <img
        src="/background.jpeg"
        className="fixed sm:absolute top-[250px] sm:top-0 left-0 z-[-1] sm:w-full sm:scale-1 scale-[3] sm:h-full rotate-[-90deg] sm:object-cover 1300:object-contain sm:rotate-0"
        alt=""
      />
      <TermsOfUseModal />
      <div className="bg-white md:bg-transparent px-[20px] py-8 md:p-12 md:border-8 border-white rounded-2xl w-11/12 md:w-10/12 max-w-screen-xl relative">
        <div className="md:bg-white p-4 pt-6 rounded-2xl border-8 border-themeBlue md:border-0 min-h-[700px] flex flex-col">
          {!isLoading && currentStep !== 7 && <Stepper />}
          <Header />
          {isLoading && <Loader />}
          {currentStep === 1 && !isLoading && <StepOne />}
          {currentStep === 2 && !isLoading && <StepFour />}
          {currentStep === 3 && !isLoading && <StepThreenew />}
          {currentStep === 4 && !isLoading && <StepTwo />}

          {currentStep === 5 && !isLoading && <StepSix />}
          {currentStep === 6 && !isLoading && <StepLast />}

          <FormButtons />
          <MobileFooter />
        </div>
        <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 -bottom-14 md:-bottom-16 w-full">
          <span
            onClick={() => {
              setIsModalOpen("TermsOfUse");
            }}
            className="text-xl font-bold text-white underline cursor-pointer"
          >
            מדיניות פרטיות ותנאי שימוש
          </span>
          <span
            onClick={() => {
              setIsModalOpen("accessibility");
            }}
            className="text-xl font-bold text-white underline cursor-pointer"
          >
            הצהרת נגישות
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;

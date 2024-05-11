import { useAtom } from "jotai";
import { currentStepAtom } from "../store";
import cn from "../utils/cn";

const ORANGE_LINE_WIDTH = ["0%", "20%", "40%", "60%", "80%", "100%"];

const Stepper = () => {
  const [currentStep] = useAtom(currentStepAtom);

  return (
    // <div className="w-full absolute top-5 sm:top-4 md:-top-11 left-1/2 -translate-x-1/2 max-w-56 xsm:max-w-80 sm:max-w-md md:max-w-3xl">
    <div className="w-full absolute top-4 md:-top-11 left-1/2 -translate-x-1/2  max-w-[calc(100%-4.5rem)] md:max-w-3xl">
      <div className="relative flex items-center justify-between w-full">
        <div className="absolute right-0 top-2/4 h-2 w-full -translate-y-2/4 bg-themeStepperGrey"></div>
        <div
          className="absolute right-0 top-2/4 h-2 w-1/2 -translate-y-2/4 bg-themeBlue transition-all duration-500"
          style={{ width: ORANGE_LINE_WIDTH[currentStep - 1] }}
        ></div>
        {Array.from({ length: 6 }, (_, index) => index + 1).map((step) => (
          <div
            key={step}
            className={cn(
              "relative z-10 grid  w-10 h-10 md:w-20 md:h-20 font-bold text-white transition-all duration-300  rounded-full place-items-center bg-themeStepperGrey",
              {
                "bg-themeBlue": step <= currentStep,
              }
            )}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

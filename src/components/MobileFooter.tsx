import { useAtom } from "jotai";
import { currentStepAtom } from "../store";
import cn from "../utils/cn";

const MobileFooter = () => {
  const [currentStep] = useAtom(currentStepAtom);
  return (
    <div
      className={cn(
        "flex flex-row justify-center items-center gap-8 mt-auto pt-8 w-full md:hidden relative",
        { hidden: currentStep === 7 }
      )}
    >
      <div className="flex items-center gap-5">
        <img
          src="/lock.svg"
          className="w-12 h-12 md:w-16 md:h-16"
          alt="Secured Icon"
        />
        <p className="text-sm font-bold">
          השימוש באתר
          <br />
          מאובטח ב-SSL
        </p>
      </div>
      <div className="flex items-center gap-5">
        <img src="/time.svg" className="w-12 h-12 md:w-16 md:h-16" />
        <p className="text-sm font-bold">
          השאלון אורך <br />
          פחות מדקה
        </p>
      </div>
    </div>
  );
};

export default MobileFooter;

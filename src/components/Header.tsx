import { useAtom } from "jotai";
import { currentStepAtom, loadingAtom } from "../store";

const Header = () => {
  const [isLoading] = useAtom(loadingAtom);
  const [currentStep] = useAtom(currentStepAtom);

  return (
    <header className="flex flex-col items-center gap-7 mb-7">
      <div className="flex gap-8 justify-center md:justify-around items-center w-full">
        {currentStep !== 7 && (
          <div className="hidden md:flex items-center gap-5">
            <img src="/time.svg" className="w-12 h-12 md:w-16 md:h-16" />
            <p className="text-xl md:text-2.5xl font-bold">
              השאלון אורך <br />
              פחות מדקה
            </p>
          </div>
        )}
        <img
          src="/logo.webp"
          className=" min-w-36 md:max-w-none md:max-h-none "
          // className="max-w-20 max-h-20 w-36 md:max-w-none md:max-h-none "
          alt="Carmel Clinic Logo"
        />
        {currentStep !== 7 && (
          <div className="hidden md:flex items-center gap-5">
            <img
              src="/lock.svg"
              className="w-12 h-12 md:w-16 md:h-16"
              alt="Secured Icon"
            />
            <p className="text-xl md:text-2.5xl font-extrabold">
              השימוש באתר
              <br />
              מאטובח ב ssl
            </p>
          </div>
        )}
      </div>
      {!isLoading && (
        <img
          src="/front-view-smiley-ha.webp"
          className="w-full max-w-[180px] sm:max-w-[230px]"
        />
      )}
    </header>
  );
};

export default Header;

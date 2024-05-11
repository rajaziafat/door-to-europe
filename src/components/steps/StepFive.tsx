import { useAtom } from "jotai";
import { nearestBranchAtom } from "../../store";
import cn from "../../utils/cn";
import { nearestBranchOptions } from "../../utils/options";
import {
  headingStyles,
  stepContainerStyles,
  subHeadingStyles,
} from "../../utils/styles";

const StepFive = () => {
  const [nearestBranch, setNearestBranch] = useAtom(nearestBranchAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h3 className={cn(headingStyles, "mb-4")}>
        אנחנו בקליניקה כרמל עובדים בפריסה ארצית רחבה
      </h3>
      <h4 className={cn(subHeadingStyles, "mb-4")}>
        מה הסניף הקרוב ביותר אליך?
      </h4>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center">
        {nearestBranchOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "px-1 py-2 md:px-6 md:py-4 rounded-xl border-themeBlue border-4 bg-white cursor-pointer w-24 xsm:w-32 md:w-48 text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": nearestBranch === option,
              }
            )}
            onClick={() => setNearestBranch(option)}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepFive;

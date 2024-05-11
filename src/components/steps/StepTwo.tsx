import { useAtom } from "jotai";
import { ageGroupAtom, fullNameAtom } from "../../store";
import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";
import { ageGroupOptions } from "../../utils/options";

const StepTwo = () => {
  const [ageGroup, setAgeGroup] = useAtom(ageGroupAtom);
  const [fullName] = useAtom(fullNameAtom);

  // console.log(ageGroup, "ageGroup")

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h3 className={cn(subHeadingStyles, "mb-4")}>
        נעים מאוד,
        {fullName} <br /> האם יש לך שורשים ברומניה?
      </h3>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center">
        {ageGroupOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "py-4 px-6 rounded-xl border-themeBlue border-4 bg-white cursor-pointer w-32 md:w-40 text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": ageGroup === option,
              }
            )}
            onClick={() => {
              setAgeGroup(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;

import { useAtom } from "jotai";
import { nailTimeAtom } from "../../store";
import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";
import { nailTimeOptions } from "../../utils/options";

const StepThree = () => {
  const [nailTime, setNailTime] = useAtom(nailTimeAtom);
  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h3 className={cn(subHeadingStyles, "")}>
        האם יש ברשותך מסמך של בן המשפחה
        <br className="sm:flex hidden" />
        המעיד על אזרחותו הרומנית או מגורים ברומניה ?
      </h3>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center">
        {nailTimeOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "w-36 md:w-64 px-2 py-2 md:px-6 md:py-4 rounded-xl border-themeBlue border-4 bg-white cursor-pointer text-lg md:text-3xl text-center",
              {
                "bg-themeBlue text-white": nailTime === option,
              }
            )}
            onClick={() => {
              setNailTime(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepThree;

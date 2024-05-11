import { useAtom } from "jotai";
import { individualityAtom } from "../../store";
import {
  headingStyles,
  stepContainerStyles,
  subHeadingStyles,
} from "../../utils/styles";
import cn from "../../utils/cn";
import { IndividualityOptions, individualityOptions } from "../../utils/options";

const StepFour = () => {
  const [individuality, setIndividuality] = useAtom(
    individualityAtom
  );

  const handleCheckboxChange = (value: IndividualityOptions) => {
    // Check if the checkbox is already in the array
    if (individuality.includes(value)) {
      // If yes, remove it
      setIndividuality(
        individuality.filter((item) => item !== value)
      );
    } else {
      // If no, add it to the array
      setIndividuality([...individuality, value]);
    }
  };

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h3 className={headingStyles}>איך הפרטת באה לידי ביטוי אצלך ?</h3>
      <h4 className={cn(subHeadingStyles, "mb-4")}>
      [בחירה מרובה]
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
        {individualityOptions.map((option, index) => (
          <div className="flex gap-4 items-center justify-start" key={index}>
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 md:w-6 md:h-6 border-2 border-black bg-transparent checked:bg-themeBlue checked:border-themeBlue cursor-pointer"
                id={option}
                value={option}
                checked={individuality.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
            </div>
            <label
              htmlFor={option}
              className="text-lg md:text-3xl select-none cursor-pointer"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepFour;

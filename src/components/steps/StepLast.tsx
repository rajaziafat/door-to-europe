// import { useAtom } from "jotai";
// import { fullNameAtom } from "../../store";
import cn from "../../utils/cn";
import {
  // headingStyles,
  stepContainerStyles,
  subHeadingStyles,
} from "../../utils/styles";

const StepLast = () => {
  // const [fullName] = useAtom(fullNameAtom);
  return (
    <div className={cn(stepContainerStyles, "mb-12")}>
      {/* <h3 className={cn(headingStyles, "mb-4")}>
        מעולה {fullName}, נראה שאנחנו יכולים לשים את האסתטיקה במקום הראשון!
      </h3> */}
      <h4 className={subHeadingStyles}>
        תודה שהשארת פרטים, נציג יחזור אליך בהקדם.

      </h4>
    </div>
  );
};

export default StepLast;

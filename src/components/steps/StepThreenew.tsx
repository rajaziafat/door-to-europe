// import { useAtom } from "jotai";
// import { nearestBranchAtom } from "../../store";
import cn from "../../utils/cn";
// import { nearestBranchOptions } from "../../utils/options";
import {
  stepContainerStyles,
  subHeadingStyles,
  // subHeadingStyles,
} from "../../utils/styles";

const StepThreenew = () => {
  // const [nearestBranch, setNearestBranch] = useAtom(nearestBranchAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h3 className={cn(subHeadingStyles, "mb-4")}>
        לא נמצאה התאמה, כיוון  שאין לך שורשים ברומניה.
        <br />
        אם חלה טעות בבחירה ניתן לחזור לשלב הקודם
        <br />
        (חשוב למלא את הפרטים הנכונים כדי שנוכל לסייע בתהליך).
        <br />
      </h3>
    </div>
  );
};

export default StepThreenew;

import classes from "../../components/FiveSection/FiveSection.module.css";
import clsx from "clsx";
import Slider from "./Slider";
import pointMatrix from "../../assets/svgs/pointMatrix.svg";
import pointMatrixWhite from "../../assets/svgs/pointMatrixWhite.svg";

const FourSection = () => {
  return (
    <div className={classes.fiveSection}>
      <Slider />
      <img
        src={pointMatrixWhite}
        className={clsx(classes.backgroundImage, classes.fiveSectionBGMatrix1)}
      />
      <img
        src={pointMatrix}
        className={clsx(classes.backgroundImage, classes.fiveSectionBGMatrix2)}
      />
    </div>
  );
};
export default FourSection;

import classes from "../../components/SixSection/SixSection.module.css";
import clsx from "clsx";
import pointMatrix from "../../assets/svgs/pointMatrix.svg";
import skyRight from "../../assets/svgs/skyRight.svg";
import ArticleCardGridContainer from "./ArticleCard";

const SixSection = () => {
  return (
    <div className={classes.sixSection}>
      <h1 className={classes.sixSectionTitle}>Check out our latest article</h1>
      <div className={classes.delimeter}></div>

      <img
        src={pointMatrix}
        className={clsx(classes.backgroundImage, classes.sixSectionBGMatrix)}
      />
      <img
        src={skyRight}
        className={clsx(classes.backgroundImage, classes.sixSectionBGSky)}
      />
      <ArticleCardGridContainer />
    </div>
  );
};
export default SixSection;

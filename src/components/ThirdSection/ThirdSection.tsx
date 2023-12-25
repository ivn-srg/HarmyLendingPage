import classes from "../../components/ThirdSection/ThirdSection.module.css";

import clsx from "clsx";

import pointMatrix from "../../assets/svgs/pointMatrix.svg";
import secondSectionImage from "../../assets/thirdSectionImage.png";

const ThirdSection = () => {
  return (
    <div className={classes.thirdSection}>
      <img src={secondSectionImage} className={classes.thirdSectionImage} />
      <div className={classes.thirdSectionContent}>
        <h1 className={classes.thirdSectionTitle}>
          Leading healthcare providers
        </h1>
        <div className={classes.delimeter}></div>
        <p className={classes.thirdSectionSubtitle}>
          We provides progressive, and affordable healthcare, accessible on
          mobile and online for everyone. To us, it's not just work. We take
          pride in the solutions we deliver
        </p>
        <button className={classes.thirdSectionBtn}>Learn more</button>
        <img
          src={pointMatrix}
          className={clsx(
            classes.backgroundImage,
            classes.thirdSectionBGMatrix
          )}
        />
      </div>
    </div>
  );
};
export default ThirdSection;

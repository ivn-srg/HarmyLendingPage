import classes from "./FirstSection.module.css";

import firstSectionImage from "../../assets/headerImg.png";

const FirstSection = () => {
  return (
    <div className={classes.firstSection}>
      <div className={classes.firstSectionContent}>
        <h1 className={classes.firstSectionTitle}>
          Virtual healthcare for you
        </h1>
        <p className={classes.firstSectionSubtitle}>
          Our service provides progressive, and affordable healthcare,
          accessible on mobile and online for everyone
        </p>
        <button className={classes.firstSectionBtn}>Consult today</button>
      </div>
      <img src={firstSectionImage} className={classes.firstSectionImage} />
    </div>
  );
};
export default FirstSection;

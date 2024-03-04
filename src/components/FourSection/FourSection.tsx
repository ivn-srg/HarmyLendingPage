import classes from "../../components/FourSection/FoursSection.module.css";
import fourthSectionImage from "../../assets/fourSectionImage.png";
import downArrow from "../../assets/svgs/downArrow.svg";

const FourSection = () => {
  return (
    <div className={classes.fourthSection}>
      <div className={classes.fourthSectionContent}>
        <h1 className={classes.fourthSectionTitle}>Download our mobile apps</h1>
        <div className={classes.delimeter}></div>
        <p className={classes.fourthSectionSubtitle}>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button className={classes.fourthSectionBtn}>
          Download
          <img className={classes.downArrowInBtn} src={downArrow} />
        </button>
      </div>
      <img src={fourthSectionImage} className={classes.fourthSectionImage} />
    </div>
  );
};
export default FourSection;

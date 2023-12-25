import classes from "../../components/SecondSection/SecondSection.module.css";
import ServiceCard from "./ServiceCard/index";

import clsx from "clsx";

import pointMatrix from "../../assets/svgs/pointMatrix.svg";
import sky from "../../assets/svgs/sky.svg";

const SecondSection = () => {
  return (
    <div className={classes.secondSection}>
      <img
        src={sky}
        className={clsx(classes.backgroundImage, classes.secondSectionBGSky)}
      />
      <h1 className={classes.secondSectionTitle}>Our services</h1>
      <div className={classes.delimeter}></div>
      <p className={classes.secondSectionSubtitle}>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <img
        src={pointMatrix}
        className={clsx(classes.backgroundImage, classes.secondSectionBGMatrix)}
      />
      <ServiceCard />
      <button className={classes.thirdSectionBtn}>Learn more</button>
    </div>
  );
};
export default SecondSection;

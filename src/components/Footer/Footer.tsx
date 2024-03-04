import classes from "./Footer.module.css";
import clsx from "clsx";

import pointMatrix from "../../assets/svgs/pointMatrix.svg";
import pointMatrixLess from "../../assets/svgs/pointMatrixLess.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img
        src={pointMatrixLess}
        className={clsx(classes.backgroundImage, classes.footerBGMatrix1)}
      />
      <img
        src={pointMatrix}
        className={clsx(classes.backgroundImage, classes.footerBGMatrix2)}
      />
      <div className={classes.footerContent}>
        <div className={classes.footerCompanyInfo}>
          <div className={classes.footerlogoDiv}>
            <div className={classes.footerLogo}>
              <p className={classes.footerLogoSymbol}>T</p>
            </div>
            <p className={classes.footerLogoText}>HealthCare</p>
          </div>
          <p className={classes.describtionCompany}>
            HealthCare provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className={classes.rightReserved}>
            ©HealthCare PTY LTD 2023. All rights reserved
          </p>
        </div>
        <div className={classes.footerCompanyNavBlock}>
          <h1 className={classes.footerBlockTitle}>Company</h1>
          <nav className={classes.footerNavMenu}>
            <a className={classes.footerNavItem} href="#">
              About
            </a>
            <a className={classes.footerNavItem} href="#">
              Testimonials
            </a>
            <a className={classes.footerNavItem} href="#">
              Find a doctor
            </a>
            <a className={classes.footerNavItem} href="#">
              Apps
            </a>
          </nav>
        </div>
        <div className={classes.footerRegionNavBlock}>
          <h1 className={classes.footerBlockTitle}>Region</h1>
          <nav className={classes.footerNavMenu}>
            <a className={classes.footerNavItem} href="#">
              Indonesia
            </a>
            <a className={classes.footerNavItem} href="#">
              Singapore
            </a>
            <a className={classes.footerNavItem} href="#">
              Hongkong
            </a>
            <a className={classes.footerNavItem} href="#">
              Canada
            </a>
          </nav>
        </div>
        <div className={classes.footerHelpNavBlock}>
          <h1 className={classes.footerBlockTitle}>Help</h1>
          <nav className={classes.footerNavMenu}>
            <a className={classes.footerNavItem} href="#">
              Help center
            </a>
            <a className={classes.footerNavItem} href="#">
              Contact support
            </a>
            <a className={classes.footerNavItem} href="#">
              Instructions
            </a>
            <a className={classes.footerNavItem} href="#">
              How it works
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

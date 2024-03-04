import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoDiv}>
        <div className={classes.logo}>
          <p className={classes.logoSymbol}>T</p>
        </div>
        <p className={classes.logoText}>HealthCare</p>
      </div>
      <nav className={classes.navMenu}>
        <a className={classes.selectedNavItem} href="#">
          Home
        </a>
        <a className={classes.navItem} href="#">
          Find a doctor
        </a>
        <a className={classes.navItem} href="#">
          Apps
        </a>
        <a className={classes.navItem} href="#">
          Testimonials
        </a>
        <a className={classes.navItem} href="#">
          About us
        </a>
      </nav>
    </header>
  );
};
export default Header;

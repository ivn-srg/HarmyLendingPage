import classes from "./App.module.css";
import clsx from "clsx";

import sky from "./assets/svgs/sky.svg";
import pointMatrix from "./assets/svgs/pointMatrix.svg";

import Header from "./components/Header/index";
import FirstSection from "./components/FirstSection/index";
import SecondSection from "./components/SecondSection/index";
import ThirdSection from "./components/ThirdSection/index";
import FourSection from "./components/FourSection/index";
import FiveSection from "./components/FiveSection/index";
import SixSection from "./components/SixSection/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <>
      <div>
        <img
          src={pointMatrix}
          className={clsx(
            classes.backgroundImage,
            classes.firstSectionBGMatrix
          )}
        />
        <img
          src={sky}
          className={clsx(classes.backgroundImage, classes.secondSectionBGSky)}
        />

        <div className={classes.mainDiv}>
          <Header />

          <FirstSection />

          <SecondSection />

          <ThirdSection />

          <FourSection />

          <FiveSection />

          <SixSection />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

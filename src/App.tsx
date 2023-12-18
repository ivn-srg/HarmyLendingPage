import classes from "./App.module.css";
import firstSectionImage from "./assets/headerImg.png";
import secondSectionImage from "./assets/thirdSectionImage.png";
import fourthSectionImage from "./assets/fourSectionImage.png";
import magnifier from "./assets/svgs/magnifier.svg";
import jar from "./assets/svgs/jar.svg";
import tablet from "./assets/svgs/tablet.svg";
import tests from "./assets/svgs/test.svg";
import firstAidKit from "./assets/svgs/firstAidKit.svg";
import addInfo from "./assets/svgs/addInfo.svg";
import downArrow from "./assets/svgs/downArrow.svg";
import userAvatar from "./assets/userAvatar.png";

const data = [
  {
    icon: magnifier,
    title: "Search doctor",
    text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    icon: jar,
    title: "Online pharmacy",
    text: "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    icon: tablet,
    title: "Consultation",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    icon: tests,
    title: "Details info",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    icon: firstAidKit,
    title: "Emergency care",
    text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    icon: addInfo,
    title: "Tracking",
    text: "Track and save your medical history and health data ",
  },
];

interface CardProps {
  icon: string; // Или замените React.ReactNode на конкретный тип вашей иконки
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon, title, text }) => (
  <div className={classes.card}>
    {icon && <img src={icon} className={classes.icon} alt="icon" />}
    <h3 className={classes.serviceCardTitle}>{title}</h3>
    <p className={classes.serviceCardSubtitle}>{text}</p>
  </div>
);

// interface CardGridProps {
//   data: Array<{ icon: React.ReactNode; title: string; text: string }>;
// }
// Обновите интерфейс CardGridProps
interface CardGridProps {
  data: Array<CardProps>; // Теперь data содержит объекты типа CardProps
}

const CardGrid: React.FC<CardGridProps> = ({ data }) => (
  <div className={classes.cardGrid}>
    {data.map((item, index) => (
      <Card key={index} {...item} />
    ))}
  </div>
);

function App() {
  return (
    <>
      <div>
        <div className={classes.mainDiv}>
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
            <img
              src={firstSectionImage}
              className={classes.firstSectionImage}
            />
          </div>

          <div className={classes.secondSection}>
            <h1 className={classes.secondSectionTitle}>Our services</h1>
            <div className={classes.delimeter}></div>
            <p className={classes.secondSectionSubtitle}>
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </p>
            <CardGrid data={data} />
          </div>

          <div className={classes.thirdSection}>
            <img
              src={secondSectionImage}
              className={classes.thirdSectionImage}
            />
            <div className={classes.thirdSectionContent}>
              <h1 className={classes.thirdSectionTitle}>
                Leading healthcare providers
              </h1>
              <div className={classes.delimeter}></div>
              <p className={classes.thirdSectionSubtitle}>
                We provides progressive, and affordable healthcare, accessible
                on mobile and online for everyone. To us, it's not just work. We
                take pride in the solutions we deliver
              </p>
              <button className={classes.thirdSectionBtn}>Learn more</button>
            </div>
          </div>

          <div className={classes.fourthSection}>
            <div className={classes.fourthSectionContent}>
              <h1 className={classes.fourthSectionTitle}>
                Download our mobile apps
              </h1>
              <div className={classes.delimeter}></div>
              <p className={classes.fourthSectionSubtitle}>
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </p>
              <button className={classes.fourthSectionBtn}>
                Download
                <img className={classes.downArrowInBtn} src={downArrow} />
              </button>
            </div>
            <img
              src={fourthSectionImage}
              className={classes.fourthSectionImage}
            />
          </div>

          <div className={classes.fiveSection}>
            <div className={classes.slide}>
              <h1 className={classes.sliderTitle}>
                What our customer are saying
              </h1>
              <div className={classes.delimeterSlider}></div>
              <div className={classes.slideContent}>
                <div className={classes.userInfo}>
                  <div className={classes.avatarContainer}>
                    <img src={userAvatar} className={classes.userAvatar} />
                  </div>
                  <div>
                    <p className={classes.userName}>Edward Newgate</p>
                    <p className={classes.userPosition}>Founder Circle</p>
                  </div>
                </div>
                <div className={classes.slideReview}>
                  “Our dedicated patient engagement app and web portal allow you
                  to access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </div>
              </div>
            </div>
            <div className={classes.pager}></div>
          </div>
        </div>
        <footer className={classes.footer}></footer>
      </div>
    </>
  );
}

export default App;

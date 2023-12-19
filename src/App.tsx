import React, { useState } from "react";
import classes from "./App.module.css";

import firstSectionImage from "./assets/headerImg.png";
import secondSectionImage from "./assets/thirdSectionImage.png";
import fourthSectionImage from "./assets/fourSectionImage.png";
import articleImage1 from "./assets/ImageOfCard1.png";
import articleImage2 from "./assets/ImageOfCard2.png";
import articleImage3 from "./assets/ImageOfCard3.png";
import userAvatar from "./assets/userAvatar.png";

import magnifier from "./assets/svgs/magnifier.svg";
import jar from "./assets/svgs/jar.svg";
import tablet from "./assets/svgs/tablet.svg";
import tests from "./assets/svgs/test.svg";
import firstAidKit from "./assets/svgs/firstAidKit.svg";
import addInfo from "./assets/svgs/addInfo.svg";
import downArrow from "./assets/svgs/downArrow.svg";
import rightArrow from "./assets/svgs/arrowRight.svg";

const servicesData = [
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
  icon: string;
  title: string;
  text: string;
}

const SeriviceCard: React.FC<CardProps> = ({ icon, title, text }) => (
  <div className={classes.card}>
    {icon && <img src={icon} className={classes.icon} alt="icon" />}
    <h3 className={classes.serviceCardTitle}>{title}</h3>
    <p className={classes.serviceCardSubtitle}>{text}</p>
  </div>
);

interface CardGridProps {
  data: Array<CardProps>;
}

const CardGrid: React.FC<CardGridProps> = ({ data }) => (
  <div className={classes.cardGrid}>
    {data.map((item, index) => (
      <SeriviceCard key={index} {...item} />
    ))}
  </div>
);

const articlesData = [
  {
    image: articleImage1,
    title: "Disease detection, check up in the laboratory",
    text: "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    image: articleImage2,
    title: "Herbal medicines that are safe for consumption",
    text: "Herbal medicine is very widely used at this time because of its very good for your health...",
  },
  {
    image: articleImage3,
    title: "Natural care for healthy facial skin",
    text: "A healthy lifestyle should start from now and also for your skin health. There are some...",
  },
  {
    image: articleImage1,
    title: "Disease detection, check up in the laboratory",
    text: "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    image: articleImage2,
    title: "Herbal medicines that are safe for consumption",
    text: "Herbal medicine is very widely used at this time because of its very good for your health...",
  },
  {
    image: articleImage3,
    title: "Natural care for healthy facial skin",
    text: "A healthy lifestyle should start from now and also for your skin health. There are some...",
  },
];

interface ArticleCardProps {
  image: string;
  title: string;
  text: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, text }) => (
  <div className={classes.articleCard}>
    {image && <img src={image} className={classes.articleImage} alt="image" />}
    <div className={classes.articleCardContent}>
      <div className={classes.articleCardText}>
        <h3 className={classes.articleCardTitle}>{title}</h3>
        <p className={classes.articleCardSubtitle}>{text}</p>
      </div>
      <a href="#" className={classes.readMoreBtn}>
        Read more <img src={rightArrow} className={classes.readMoreArrow} />
      </a>
    </div>
  </div>
);

interface ArticleCardGridProps {
  data: Array<ArticleCardProps>;
}

const ArticleCardGrid: React.FC<ArticleCardGridProps> = ({ data }) => {
  const [isFullGrid, setIsFullGrid] = useState(false);

  const toggleGrid = () => {
    setIsFullGrid((prev) => !prev);
  };

  const visibleData = isFullGrid ? data : data.slice(0, 3);

  return (
    <div className={classes.articleCardGridContainer}>
      <div className={classes.cardGrid}>
        {visibleData.map((item, index) => (
          <ArticleCard key={index} {...item} />
        ))}
      </div>
      <button onClick={toggleGrid} className={classes.showMoreBtn}>
        {isFullGrid ? "Hide" : "View all"}
      </button>
    </div>
  );
};

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
            <CardGrid data={servicesData} />
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
                  <div className={classes.userTextInfo}>
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

          <div className={classes.sixSection}>
            <h1 className={classes.sixSectionTitle}>
              Check out our latest article
            </h1>
            <div className={classes.delimeter}></div>
            <ArticleCardGrid data={articlesData} />
          </div>
        </div>
        <footer className={classes.footer}>
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
              <p className={classes.rightResrved}>
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
      </div>
    </>
  );
}

export default App;

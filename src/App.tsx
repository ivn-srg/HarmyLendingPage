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
import sky from "./assets/svgs/sky.svg";
import pointMatrix from "./assets/svgs/pointMatrix.svg";

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

const slidesData = [
  {
    avatar: userAvatar,
    userName: "Edward Newgate",
    userPosition: "Founder Circle",
    userReview:
      "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
  },
  {
    avatar: userAvatar,
    userName: "UserName",
    userPosition: "Position",
    userReview: "text review",
  },
  {
    avatar: userAvatar,
    userName: "Edward Newgate",
    userPosition: "Founder Circle",
    userReview:
      "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
  },
  {
    avatar: userAvatar,
    userName: "UserName",
    userPosition: "Position",
    userReview: "text review",
  },
];

// Ваш компонент слайдера
const Slider: React.FC<{ slidesData: Array<any>; activeSlide: number }> = ({
  slidesData,
  activeSlide,
}) => {
  const currentSlide = slidesData[activeSlide];

  return (
    <div className={classes.slide}>
      <h1 className={classes.sliderTitle}>What our customer are saying</h1>
      <div className={classes.delimeterSlider}></div>
      <div className={classes.slideContent}>
        <div className={classes.userInfo}>
          <div className={classes.avatarContainer}>
            <img
              src={currentSlide.avatar}
              className={classes.userAvatar}
              alt="user avatar"
            />
          </div>
          <div className={classes.userTextInfo}>
            <p className={classes.userName}>{currentSlide.userName}</p>
            <p className={classes.userPosition}>{currentSlide.userPosition}</p>
          </div>
        </div>
        <div className={classes.slideReview}>{currentSlide.userReview}</div>
      </div>
    </div>
  );
};

const Pager: React.FC<{
  totalSlides: number;
  activeSlide: number;
  onChange: (index: number) => void;
}> = ({ totalSlides, activeSlide, onChange }) => {
  const RightArrow = ({ color }: { color: string }) => (
    <svg
      width="32"
      height="24"
      viewBox="0 0 15 9"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame" clip-path="url(#clip0_63_2689)">
        <path
          id="Vector"
          d="M1.37501 5.30357L11.9822 5.30357L9.65179 7.63393C9.33037 7.95536 9.33037 8.4375 9.65179 8.75893C9.97322 9.08036 10.4554 9.08036 10.7768 8.75893L14.4732 5.0625C14.7947 4.74107 14.7947 4.25893 14.4732 3.9375L10.7768 0.241071C10.4554 -0.0803579 9.97322 -0.080358 9.65179 0.241071C9.33037 0.5625 9.33037 1.04464 9.65179 1.36607L11.9822 3.69643L1.37501 3.69643C0.973222 3.69643 0.571436 4.01786 0.571436 4.5C0.571436 4.98214 0.973222 5.30357 1.37501 5.30357Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_63_2689">
          <rect
            width="14.1429"
            height="9"
            fill={color}
            transform="translate(14.7143 9) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const LeftArrow = ({ color }: { color: string }) => (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M27.6911 8.76265L6.64523 8.76265L11.269 4.13893C11.9067 3.50117 11.9067 2.54454 11.269 1.90678C10.6312 1.26903 9.67457 1.26903 9.03681 1.90678L1.70263 9.24097C1.06487 9.87872 1.06487 10.8354 1.70263 11.4731L9.03681 18.8073C9.67457 19.445 10.6312 19.445 11.269 18.8073C11.9067 18.1695 11.9067 17.2129 11.269 16.5752L6.64523 11.9514L27.6911 11.9514C28.4883 11.9514 29.2855 11.3137 29.2855 10.357C29.2855 9.40041 28.4883 8.76265 27.6911 8.76265Z"
          fill={color}
        />
      </g>
    </svg>
  );

  const handlePrev = () => {
    const prevSlide = activeSlide - 1;
    onChange(prevSlide < 0 ? totalSlides - 1 : prevSlide);
  };

  const handleNext = () => {
    onChange((activeSlide + 1) % totalSlides);
  };

  const isLastSlide = activeSlide === totalSlides - 1;
  const isFisrtSlide = activeSlide === 0;

  return (
    <div className={classes.pager}>
      <button
        onClick={handlePrev}
        disabled={isFisrtSlide}
        className={`${
          isFisrtSlide ? classes.arrowCornerPosition : classes.arrowPager
        }`}
      >
        <LeftArrow
          color={`${isFisrtSlide ? "rgba(91, 155, 243, 0.4)" : "#458FF6"}`}
        />
      </button>
      <div className={classes.dotsList}>
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            onClick={() => onChange(index)}
            className={`${classes.pageDot} ${
              index === activeSlide ? classes.active : ""
            }`}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={isLastSlide}
        className={`${
          isLastSlide ? classes.arrowCornerPosition : classes.arrowPager
        }`}
      >
        <RightArrow
          color={`${isLastSlide ? "rgba(91, 155, 243, 0.4)" : "#458FF6"}`}
        />
      </button>
    </div>
  );
};

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

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
            <Slider slidesData={slidesData} activeSlide={activeSlide} />
            <Pager
              totalSlides={slidesData.length}
              activeSlide={activeSlide}
              onChange={handleSlideChange}
            />
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
      </div>
    </>
  );
}

export default App;

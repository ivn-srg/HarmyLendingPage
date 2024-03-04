import classes from "./Slider.module.css";
import React, { useState } from "react";

import userAvatar from "../../../assets/userAvatar.png";

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
    userName: "John Johnson",
    userPosition: "CEO 2Circle",
    userReview:
      '"Diverse and rich experience and staff training space ensures the preparation and implementation of additional components of the optional update!"',
  },
  {
    avatar: userAvatar,
    userName: "Edward Handcut",
    userPosition: "CFO 3Circle",
    userReview:
      '"On the other hand, constant information and technical support for our activities helps to increase the relevance of the development model."',
  },
  {
    avatar: userAvatar,
    userName: "Paul Wotson",
    userPosition: "Top manager",
    userReview:
      '"The task of the organization, especially the innovative path we have chosen, requires us to systematically analyze the economic feasibility of the decisions made."',
  },
];

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

const ServiceCard = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };
  return (
    <div className={classes.sliderDiv}>
      <Slider slidesData={slidesData} activeSlide={activeSlide} />
      <Pager
        totalSlides={slidesData.length}
        activeSlide={activeSlide}
        onChange={handleSlideChange}
      />
    </div>
  );
};
export default ServiceCard;

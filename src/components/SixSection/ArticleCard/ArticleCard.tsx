import classes from "./ArticleCard.module.css";
import React, { useState } from "react";

import articleImage1 from "../../../assets/ImageOfCard1.png";
import articleImage2 from "../../../assets/ImageOfCard2.png";
import articleImage3 from "../../../assets/ImageOfCard3.png";

import rightArrow from "../../../assets/svgs/arrowRight.svg";

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

const ArticleCardGridContainer = () => {
  return <ArticleCardGrid data={articlesData} />;
};

export default ArticleCardGridContainer;

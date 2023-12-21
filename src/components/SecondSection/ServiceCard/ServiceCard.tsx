import classes from "./ServiceCard.module.css";

import magnifier from "../../../assets/svgs/magnifier.svg";
import jar from "../../../assets/svgs/jar.svg";
import tablet from "../../../assets/svgs/tablet.svg";
import tests from "../../../assets/svgs/test.svg";
import firstAidKit from "../../../assets/svgs/firstAidKit.svg";
import addInfo from "../../../assets/svgs/addInfo.svg";

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

const ServiceCard = () => {
  return <CardGrid data={servicesData} />;
};
export default ServiceCard;

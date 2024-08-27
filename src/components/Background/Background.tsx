import { BackgroundImage } from "../../images";

const Background = () => {
  return (
    <div
      aria-hidden={true}
      className="fixed left-0 right-0 top-0 -z-50 h-full w-full"
    >
      <div
        className="bg-cafe-position h-75 w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div className="-z-50 h-full bg-woodsmoke"></div>
    </div>
  );
};

export default Background;

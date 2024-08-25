import { BackgroundImage } from "../../images";

const Background = () => {
  return (
    <div aria-hidden={true} className="w-full h-screen absolute -z-50">
      <div
        className="bg-no-repeat bg-cover w-full h-2/5"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div className="bg-woodsmoke -z-50 h-full"></div>
    </div>
  );
};

export default Background;

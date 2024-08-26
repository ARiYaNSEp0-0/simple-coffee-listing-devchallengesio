import { BackgroundImage } from "../../images";

const Background = () => {
  return (
    <div
      aria-hidden={true}
      className="w-full h-full fixed top-0 left-0 right-0 -z-50"
    >
      <div
        className="bg-no-repeat bg-cover bg-[position:15%_50%]  w-full h-75"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div className="bg-woodsmoke -z-50 h-full"></div>
    </div>
  );
};

export default Background;

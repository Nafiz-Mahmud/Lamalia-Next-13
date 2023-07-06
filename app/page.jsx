import Image from "next/image";

import "./home.scss";
import hero from "../public/hero.png";

export default function Home() {
  return (
    <div className="home">
      <div className="info">
        <h1 className="title">Better design for your design products.</h1>
        <p className="desc">
          Turning your Ideas into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button>See Our Works</button>
      </div>
      <div className="image_container">
        <Image src={hero} alt="hero image" />
      </div>
    </div>
  );
}

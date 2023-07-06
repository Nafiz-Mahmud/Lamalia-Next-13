import Image from "next/image";
import Link from "next/link";
import "./about.scss";
import about from "../../public/about.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="img_container">
        <Image src={about} alt="" className="img" />
        <div className="imgText">
          <h1 className="imgTitle">Digital Storytellers</h1>
          <h2 className="imgDesc">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="textContainer">
        <div className="item">
          <h1 className="title">Who Are We?</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="item">
          <h1 className="title">What We Do?</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br /> - Fast and Handy
            <br /> - Mobile Apps
          </p>
          <Link href="/contact">
            <button className="contact_button">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

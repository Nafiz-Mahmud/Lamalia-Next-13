import "./contact.scss";
import contact from "../../public/contact.png";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="about">
      <h1 className="title">Let's Keep in Touch</h1>
      <div className="content">
        <div className="imgContainer">
          <Image src={contact} alt="" fill={true} className="image" />
        </div>
        <form className="form">
          <input type="text" placeholder="name" className="input" />
          <input type="text" placeholder="email" className="input" />
          <textarea
            className="textArea"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>

          <Link href="#">
            <button className="form_button">Send</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Contact;

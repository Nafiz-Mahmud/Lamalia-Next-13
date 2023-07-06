import Image from "next/image";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <h1>2023 lamamia | All rights reserved.</h1>
      <div className="socials">
        <Image src="/1.png" width={40} height={40} alt="facebook" />
        <Image src="/2.png" width={40} height={40} alt="instagram" />
        <Image src="/3.png" width={40} height={40} alt="twitter" />
        <Image src="/4.png" width={40} height={40} alt="youTube" />
      </div>
    </div>
  );
};
export default Footer;

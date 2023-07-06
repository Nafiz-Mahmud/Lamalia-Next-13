import Link from "next/link";
import "./navbar.scss";
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className="navbar">
      <Link href="/" className="logo">
        Lamamia
      </Link>
      <div className="links">
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="link">
            {link.title}
          </Link>
        ))}
        <button className="log">Log In</button>
      </div>
    </div>
  );
};

export default Navbar;

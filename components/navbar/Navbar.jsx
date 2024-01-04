import React from "react";
import Link from "next/link";
const Navbar = () => {
  const links = ["Home", "Schools", "Add New School", "Contacts"];
  const myLinks=[
    {
    title:'Home',
    href:'/'
  },
    {
    title:'Schools',
    href:'/schools'
  },
    {
    title:'Add New School',
    href:'/addSchool'
  },
    {
    title:'Contacts',
    href:'/'
  },
]
  return (
    <nav>
      <div className="navLogo">
        <h3>Edunify</h3>
      </div>
      <div className="navLinks">
        {myLinks.map((link) => (
          <Link className="navItem" href={link.href} key={link.title}>{link.title}</Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

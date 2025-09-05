import React from 'react';

const Navbar = () => {
const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Contact', link: '/contact' }
];
  return (
    <nav style={{backgroundColor: '#282c34', padding: '10px', right: '90px', position: 'fixed'}}>
      <ul style={{display: 'flex', listStyle: 'none', gap: '20px'}}>
        {navItems.map((item, index) => (
      <li key={index}>
      <a href={item.link} style={{color: 'white', textDecoration: 'none'}}>
        {item.name}
      </a>
    </li>
  ))}
</ul>
    </nav>
  );
};

export default Navbar;


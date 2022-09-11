import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faQuestionCircle, faIdCard } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

function Header() {

  const navItems: React.ReactNode[] = [
    <Link to="/" className="link">React Quiz
      <FontAwesomeIcon className="ms-2" icon={faHome} />
    </Link>,

    <Link to="/about" className="link">
      About
      <FontAwesomeIcon className="ms-2" icon={faInfoCircle} />
    </Link>,

    <Link to="/quiz" className="link">
      Quizzes
      <FontAwesomeIcon className="ms-2" icon={faQuestionCircle} />
    </Link>,

    <Link to="/contacts" className="link">
      Contacts
      <FontAwesomeIcon className="ms-2" icon={faIdCard} />
    </Link>
  ];

  const variants = {
    visible(index: number): object {
      return {
        opacity: 1,
        transition: {
          delay: index * 0.5,
        }
      }
    },
    hidden: { opacity: 0 },
  };

  return (
    <header className="page-header">
      <nav className="header-wrapper container fw-bold">
        <ul className="d-flex justify-content-between p-0">
          {navItems.map((navItem: React.ReactNode, index: number) => {
            return (
              <motion.li 
                key={index}
                variants={variants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{
                  scale: 1.1,
                }}
              >
                {navItem}
              </motion.li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
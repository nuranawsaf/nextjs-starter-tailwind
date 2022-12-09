import * as React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  link: {
    id: number;
    title: string;
    href: string;
  };
  toggle: any;
}

const MenuItem: React.FC<MenuItemProps> = ({ link, toggle }) => {
  return (
    <motion.li
      onClick={toggle}
      className="text-theme-gray-2 my-8"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={link.href}>
        <span className="text-2xl">{link.title}</span>
      </Link>
    </motion.li>
  );
};

export default MenuItem;

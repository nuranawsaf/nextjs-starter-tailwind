import * as React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { links } from '../navdata';
import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ toggle }) => {
  return (
    <motion.ul
      className="absolute top-0 right-0 z-30 w-screen md:w-full px-8 h-full bg-gray-400"
      variants={variants}
    >
      <Link href="/">
        <div className="cursor-pointer flex items-center gap-x-2 py-4">
          <img src="" alt="innerlogo-navigation" />
        </div>
      </Link>

      <div className=" mt-12">
        {links.map((link) => (
          <MenuItem toggle={toggle} link={link} key={link.id} />
        ))}
      </div>
    </motion.ul>
  );
};

export default Navigation;

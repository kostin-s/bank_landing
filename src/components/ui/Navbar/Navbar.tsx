import { FC, useState } from 'react';

import MenuItem from '@/components/ui/Navbar/MenuItem/MenuItem';

import { logo } from '@/shared/images';

import MobileMenu from './MobileMenu/MobileMenu';
import styles from './Navbar.module.scss';
import { menuLinks } from './navbar.data';
import { ILinks } from './navbar.interface';

const Navbar: FC = () => {
  const [active, setActive] = useState<ILinks>('home');

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt='bank' draggable='false' />
          <h2>
            <span>Ba</span>nk
          </h2>
        </div>

        <ul className={styles.pc_menu}>
          {menuLinks.map(link => (
            <MenuItem
              link={link}
              key={link.id}
              activeItem={active}
              setActive={setActive}
            />
          ))}
        </ul>

        <MobileMenu activeItem={active} setActive={setActive} />
      </nav>
    </div>
  );
};

export default Navbar;

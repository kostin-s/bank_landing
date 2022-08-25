import cn from 'classnames';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { close, menu } from '@/shared/images';

import { useOutside } from '@/hooks/useOutside';

import MenuItem from '../MenuItem/MenuItem';
import { menuLinks } from '../navbar.data';
import { ILinks } from '../navbar.interface';

import styles from './MobileMenu.module.scss';

interface IMobileMenuProps {
  activeItem: ILinks;
  setActive: Dispatch<SetStateAction<ILinks>>;
}

const MobileMenu: FC<IMobileMenuProps> = props => {
  const { activeItem, setActive } = props;

  const { isShow, setIsShow, ref } = useOutside(false);

  return (
    <div className={styles.mobile_menu} ref={ref}>
      <img
        src={isShow ? close : menu}
        alt='menu'
        onClick={() => {
          setIsShow(!isShow);
        }}
      />

      <div
        className={cn(styles.mobile, {
          ['flex']: isShow,
          ['hidden']: !isShow,
        })}
      >
        <ul className={styles.links}>
          {menuLinks.map(link => (
            <MenuItem
              link={link}
              key={link.id}
              activeItem={activeItem}
              setActive={setActive}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

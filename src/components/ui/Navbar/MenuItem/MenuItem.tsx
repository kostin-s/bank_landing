import cn from 'classnames';
import { Dispatch, FC, SetStateAction } from 'react';

import { ILinks, INavbar } from '../navbar.interface';

import styles from './MenuItem.module.scss';

interface IMenuItemProps {
  link: INavbar;
  activeItem: ILinks;
  setActive: Dispatch<SetStateAction<ILinks>>;
}

const MenuItem: FC<IMenuItemProps> = props => {
  const { link, activeItem, setActive } = props;

  return (
    <li
      className={cn(styles.link, {
        [styles.active]: activeItem === link.id,
      })}
      onClick={() => setActive(link.id)}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  );
};

export default MenuItem;

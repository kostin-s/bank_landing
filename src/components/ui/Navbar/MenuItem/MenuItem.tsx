import cn from 'classnames';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { ILinks, INavbar } from '../navbar.interface';

import styles from './MenuItem.module.scss';

interface IMenuItemProps {
  link: INavbar;
  activeItem: ILinks;
  setActive: Dispatch<SetStateAction<ILinks>>;
}

const MenuItem: FC<IMenuItemProps> = props => {
  const { link, activeItem, setActive } = props;

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setActive(link.id);
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 500);
  };

  return (
    <li
      className={cn(styles.link, {
        [styles.active]: activeItem === link.id,
        [styles.disabled]: isDisabled,
      })}
      onClick={handleClick}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  );
};

export default MenuItem;

import cn from 'classnames';
import { FC } from 'react';

import styles from './Description.module.scss';

interface IDescriptionProps {
  children: string;
  style: string;
}

const Description: FC<IDescriptionProps> = props => {
  const { children, style } = props;

  return <p className={cn(styles.descr, style)}>{children}</p>;
};

export default Description;

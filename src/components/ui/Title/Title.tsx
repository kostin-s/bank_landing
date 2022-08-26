import cn from 'classnames';
import { FC } from 'react';

import styles from './Title.module.scss';

interface ITitleProps {
  children: string;
  style?: string;
}

const Title: FC<ITitleProps> = props => {
  const { children, style } = props;

  return (
    <p
      className={cn(styles.title, {
        [`${style}`]: style,
      })}
    >
      {children}
    </p>
  );
};

export default Title;

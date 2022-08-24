import { FC } from 'react';

import styles from './Description.module.scss';

interface IDescriptionProps {
  children: string;
  width: string;
}

const Description: FC<IDescriptionProps> = props => {
  const { children, width } = props;

  return (
    <p className={styles.descr} style={{ width: width }}>
      {children}
    </p>
  );
};

export default Description;

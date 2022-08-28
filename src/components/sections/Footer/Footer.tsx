import { FC } from 'react';

import Description from '@/components/ui/Description/Description';

import { copyright } from '@/shared/images';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img src={copyright} alt='copyright' />
        <Description style={styles.descr}>
          2022 Bank. Все права защищены.
        </Description>
      </div>
    </footer>
  );
};

export default Footer;

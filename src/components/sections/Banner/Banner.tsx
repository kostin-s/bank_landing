import { FC } from 'react';

import Button from '@/components/ui/Button/Button';
import Description from '@/components/ui/Description/Description';
import Title from '@/components/ui/Title/Title';

import styles from './Banner.module.scss';
import { bannerData } from './banner.data';

const Banner: FC = () => {
  const { title, description, button } = bannerData;

  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <Title style={styles.title}>{title}</Title>
        <Description style={styles.description}>{description}</Description>
      </div>

      <div className={styles.button}>
        <Button>{button}</Button>
      </div>
    </section>
  );
};

export default Banner;

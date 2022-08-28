import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '@/components/ui/Button/Button';
import Description from '@/components/ui/Description/Description';
import Title from '@/components/ui/Title/Title';

import styles from './Banner.module.scss';
import { bannerData } from './banner.data';

const Banner: FC = () => {
  const { title, description, button } = bannerData;

  return (
    <section>
      <ScrollAnimation
        className={styles.banner}
        animateIn='fadeInUp'
        duration={1}
        animateOnce={true}
      >
        <div className={styles.content}>
          <Title style={styles.title}>{title}</Title>
          <Description style={styles.description}>{description}</Description>
        </div>

        <div className={styles.button}>
          <Button>{button}</Button>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Banner;

import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Description from '@/components/ui/Description/Description';

import { ball, cards, discount } from '@/shared/images';

import styles from './Introduction.module.scss';
import { introduction as data } from './introduction.data';

const Introduction: FC = () => {
  return (
    <section className={styles.home} id='home'>
      <div className={styles.content}>
        <div className={styles.gradient_grey} />

        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
          <div className={styles.discount}>
            <img src={discount} alt='discount' />
            <p className={styles.text}>
              <span>{data.discount.part_1}</span>
              {data.discount.part_2}
              <span>{data.discount.part_3}</span>
              {data.discount.part_4}
            </p>
          </div>

          <h1 className={styles.main_title}>
            {data.title.begin}
            <span className={styles.text_gradient}>{data.title.middle}</span>
            {data.title.end}
          </h1>

          <Description style={styles.descr_width}>{data.descr}</Description>
        </ScrollAnimation>
      </div>

      <div className={styles.images}>
        <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true}>
          <img className={styles.cards} src={cards} alt='cards' />

          <img className={styles.ball_1} src={ball} alt='ball-1' />
          <img className={styles.ball_2} src={ball} alt='ball-2' />
          <img className={styles.ball_3} src={ball} alt='ball-3' />
        </ScrollAnimation>

        <div className={styles.gradient_pink} />
        <div className={styles.gradient_white} />
        <div className={styles.gradient_blue} />
      </div>
    </section>
  );
};

export default Introduction;

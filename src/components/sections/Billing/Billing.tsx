import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Description from '@/components/ui/Description/Description';
import Title from '@/components/ui/Title/Title';

import { appleStoreIcon, billing, googlePlayIcon } from '@/shared/images';

import styles from './Billing.module.scss';
import { billingData } from './billing.data';

const Billing: FC = () => {
  const { title, description } = billingData;

  return (
    <section className={styles.billing} id='benefit'>
      <div className={styles.image}>
        <ScrollAnimation animateIn='zoomIn' duration={1} animateOnce={true}>
          <img className={styles.billing_img} src={billing} alt='billing' />
        </ScrollAnimation>

        <div className={styles.gradient_white} />
        <div className={styles.gradient_pink} />
      </div>

      <div className={styles.content}>
        <ScrollAnimation animateIn='fadeInUp' duration={1} animateOnce={true}>
          <Title style={styles.title_width}>{title}</Title>
          <Description style={styles.descr_width}>{description}</Description>
        </ScrollAnimation>

        <div className={styles.buttons}>
          <ScrollAnimation
            animateIn='bounceInRight'
            duration={1}
            animateOnce={true}
          >
            <img
              className={styles.apple}
              src={appleStoreIcon}
              alt='apple_store'
            />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='bounceInRight'
            duration={1}
            delay={500}
            animateOnce={true}
          >
            <img
              className={styles.market}
              src={googlePlayIcon}
              alt='google_play'
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Billing;

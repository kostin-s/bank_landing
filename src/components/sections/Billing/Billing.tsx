import { FC } from 'react';

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
        <img src={billing} alt='billing' />

        <div className={styles.gradient_white} />
        <div className={styles.gradient_pink} />
      </div>

      <div className={styles.content}>
        <Title style={styles.title_width}>{title}</Title>
        <Description style={styles.descr_width}>{description}</Description>
        <div className={styles.buttons}>
          <img
            className={styles.apple}
            src={appleStoreIcon}
            alt='apple_store'
          />
          <img
            className={styles.market}
            src={googlePlayIcon}
            alt='google_play'
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;

import { FC } from 'react';

import Button from '@/components/ui/Button/Button';
import Description from '@/components/ui/Description/Description';
import Title from '@/components/ui/Title/Title';

import styles from './Business.module.scss';
import FeatureItem from './FeatureItem/FeatureItem';
import { features as data } from './business.data';

const Business: FC = () => {
  const { title, descr, button, features } = data;

  return (
    <section className={styles.business} id='features'>
      <div className={styles.content}>
        <Title style={styles.title_width}>{title}</Title>
        <Description style={styles.descr_width}>{descr}</Description>
        <Button>{button}</Button>
      </div>

      <ul className={styles.list}>
        {features.map(feature => (
          <FeatureItem feature={feature} key={feature.id} />
        ))}
      </ul>
    </section>
  );
};

export default Business;

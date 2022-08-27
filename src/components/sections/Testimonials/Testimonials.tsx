import { FC } from 'react';

import Description from '@/components/ui/Description/Description';
import Title from '@/components/ui/Title/Title';

import styles from './Testimonials.module.scss';
import { testimonialsData } from './testimonials.data';

const Testimonials: FC = () => {
  const { title, description } = testimonialsData;

  return (
    <section className={styles.testimonials} id={'about'}>
      <Title style={styles.title_width}>{title}</Title>
      <Description style={styles.descr_width}>{description}</Description>
    </section>
  );
};

export default Testimonials;

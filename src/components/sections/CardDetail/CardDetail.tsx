import { FC } from 'react';

import Button from '@/components/ui/Button/Button';
import Description from '@/components/ui/Description/Description';
import Title from '@/components/ui/Title/Title';

import { cardDetail } from '@/shared/images';

import styles from './CardDetail.module.scss';
import { cardDetailData } from './cardDetail.data';

const CardDetail: FC = () => {
  const { title, description, button } = cardDetailData;

  return (
    <section className={styles.detail}>
      <div className={styles.content}>
        <Title style={styles.title_width}>{title}</Title>
        <Description style={styles.descr_width}>{description}</Description>
        <Button>{button}</Button>
      </div>
      <div className={styles.image}>
        <img src={cardDetail} alt='card-detail' />
      </div>
    </section>
  );
};

export default CardDetail;

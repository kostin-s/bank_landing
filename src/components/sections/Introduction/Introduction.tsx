import { FC } from 'react';

import Description from '@/components/ui/Description/Description';

import { ball, cards, discount } from '@/shared/images';

import styles from './Introduction.module.scss';

const Introduction: FC = () => {
  return (
    <section className={styles.home} id='home'>
      <div className={styles.content}>
        <div className={styles.gradient_grey} />

        <div className={styles.discount}>
          <img src={discount} alt='discount' />
          <p className={styles.text}>
            <span>20%</span> скидка на <span>1 месяц</span> нового счета
          </p>
        </div>

        <h1 className={styles.main_title}>
          Способ Оплаты<span className={styles.text_gradient}>Следующего</span>
          Поколения
        </h1>

        <Description width='570px'>
          Наша команда экспертов подберет для вас лучшие условия по оформлению
          кредитной карты. Мы постоянно изучаем рынок, чтобы подобрать для вас
          самые лучшие предложения.
        </Description>
      </div>
      <div className={styles.images}>
        <img className={styles.cards} src={cards} alt='cards' />

        <img className={styles.ball_1} src={ball} alt='ball-1' />
        <img className={styles.ball_2} src={ball} alt='ball-2' />
        <img className={styles.ball_3} src={ball} alt='ball-3' />

        <div className={styles.gradient_pink} />
        <div className={styles.gradient_white} />
        <div className={styles.gradient_blue} />
      </div>
    </section>
  );
};

export default Introduction;

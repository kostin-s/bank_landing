import { FC } from 'react';

import styles from './Statistics.module.scss';
import { statistics } from './statistics.data';

const Statistics: FC = () => {
  return (
    <section className={styles.statistic}>
      {statistics.map(statistic => (
        <div className={styles.data} key={statistic.id}>
          <h4 className={styles.value}>{statistic.value}</h4>
          <p className={styles.title}>{statistic.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Statistics;

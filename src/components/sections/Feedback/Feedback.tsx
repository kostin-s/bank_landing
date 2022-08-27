import { FC } from 'react';

import styles from './Feedback.module.scss';
import FeedbackItem from './FeedbackItem/FeedbackItem';
import { feedbackData } from './feedback.data';

const Feedback: FC = () => {
  return (
    <section className={styles.feedback}>
      <div className={styles.gradient_blue} />

      {feedbackData.map(item => (
        <FeedbackItem data={item} key={item.id} />
      ))}
    </section>
  );
};

export default Feedback;

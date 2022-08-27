import { FC } from 'react';

import styles from './Feedback.module.scss';
import FeedbackItem from './FeedbackItem/FeedbackItem';
import { feedbackData } from './feedback.data';

const Feedback: FC = () => {
  return (
    <section className={styles.feedback}>
      {feedbackData.map(item => (
        <FeedbackItem data={item} />
      ))}
    </section>
  );
};

export default Feedback;

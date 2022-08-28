import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import styles from './Feedback.module.scss';
import FeedbackItem from './FeedbackItem/FeedbackItem';
import { feedbackData } from './feedback.data';

const Feedback: FC = () => {
  return (
    <section className={styles.feedback}>
      <div className={styles.gradient_blue} />

      {feedbackData.map(item => (
        <ScrollAnimation
          className={styles.content}
          animateIn='rollIn'
          duration={1}
          animateOnce={true}
          key={item.id}
        >
          <FeedbackItem data={item} />
        </ScrollAnimation>
      ))}
    </section>
  );
};

export default Feedback;

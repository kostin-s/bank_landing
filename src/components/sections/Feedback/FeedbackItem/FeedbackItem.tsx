import { FC } from 'react';

import Description from '@/components/ui/Description/Description';

import { quotes } from '@/shared/images';

import { IFeedbackItemData } from '../feedback.interface';

import styles from './FeedbackItem.module.scss';

interface IFeedbackItem {
  data: IFeedbackItemData;
}

const FeedbackItem: FC<IFeedbackItem> = ({ data }) => {
  const { content, human } = data;

  return (
    <div className={styles.item}>
      <div className={styles.quotes}>
        <img src={quotes} alt='quotes' />
      </div>

      <div className={styles.content}>
        <Description style={styles.descr_width}>{content}</Description>

        <div className={styles.human}>
          <img src={human.image} alt='human' />

          <div className={styles.about}>
            <p className={styles.name}>{human.name}</p>
            <p className={styles.info}>{human.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;

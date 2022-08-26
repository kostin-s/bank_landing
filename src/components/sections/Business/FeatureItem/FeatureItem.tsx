import cn from 'classnames';
import { FC } from 'react';

import { IFeature } from '../business.interface';

import styles from './FeatureItem.module.scss';

interface IFeatureItem {
  feature: IFeature;
}

const FeatureItem: FC<IFeatureItem> = ({ feature }) => {
  const { title, content, icon, id } = feature;

  return (
    <li className={styles.box}>
      <div className={styles.content}>
        <div
          className={cn(styles.icon, {
            [styles[id]]: id,
          })}
        >
          <img src={icon} alt='icon' />
        </div>
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </li>
  );
};

export default FeatureItem;

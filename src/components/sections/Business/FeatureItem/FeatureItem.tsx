import cn from 'classnames';
import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { IFeature } from '../business.interface';

import styles from './FeatureItem.module.scss';

interface IFeatureItem {
  feature: IFeature;
  currentIndex: number;
  disabled: boolean;
  setActive: (index: number) => void;
}

const FeatureItem: FC<IFeatureItem> = ({
  feature,
  setActive,
  currentIndex,
  disabled,
}) => {
  const { title, content, icon, id } = feature;

  const isActive = Number(id) === currentIndex;

  return (
    <li className={styles.li}>
      <ScrollAnimation
        animateIn='bounceInRight'
        duration={1}
        delay={Number(`${id}00`)}
        animateOnce={true}
      >
        <button
          className={cn(styles.box, {
            [styles.active]: isActive,
          })}
          onClick={() => setActive(Number(id) || 0)}
          disabled={disabled || isActive}
        >
          <div className={styles.content}>
            <div
              className={cn(styles.icon, {
                [styles[`feature_${id}`]]: id,
              })}
            >
              <img src={icon} alt='icon' />
            </div>
            <div className={styles.info}>
              <h4>{title}</h4>
              <p>{content}</p>
            </div>
          </div>
        </button>
      </ScrollAnimation>
    </li>
  );
};

export default FeatureItem;

import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Business.module.scss';
import BusinessItem from './BusinessItem/BusinessItem';
import FeatureItem from './FeatureItem/FeatureItem';
import { features as data } from './business.data';
import './slider.scss';
import { useSlider } from './useSlider';

const Business: FC = () => {
  const { items, features } = data;

  const { SwitchSlide, index, slideIn, isDisabled } = useSlider();

  return (
    <section className={styles.business} id='features'>
      <CSSTransition
        in={slideIn}
        classNames='slide-animation'
        timeout={300}
        unmountOnExit
      >
        <BusinessItem item={items[index]} />
      </CSSTransition>

      <ul className={styles.list}>
        {features.map(feature => (
          <FeatureItem
            disabled={isDisabled}
            feature={feature}
            currentIndex={index}
            key={feature.id}
            setActive={SwitchSlide}
          />
        ))}
      </ul>
    </section>
  );
};

export default Business;

import { FC } from 'react';

import { IFeature } from '../business.interface';

import styles from './FeatureItem.module.scss';

interface IFeatureItem {
  feature: IFeature;
}

const FeatureItem: FC<IFeatureItem> = ({ feature }) => {
  const { title, content, icon } = feature;

  return <li>FeatureItem</li>;
};

export default FeatureItem;

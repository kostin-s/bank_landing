import { Dispatch, FC, SetStateAction } from 'react';

import Button from '@/components/ui/Button/Button';
import Description from '@/components/ui/Description/Description';
import Title from '@/components/ui/Title/Title';

import styles from '../Business.module.scss';
import { IItem } from '../business.interface';

interface IBusinessItem {
  item: IItem;
}

const BusinessItem: FC<IBusinessItem> = ({ item }) => {
  const { title, descr, button } = item;

  return (
    <div className={styles.content}>
      <Title style={styles.title_width}>{title}</Title>
      <Description style={styles.descr_width}>{descr}</Description>
      <Button>{button}</Button>
    </div>
  );
};

export default BusinessItem;

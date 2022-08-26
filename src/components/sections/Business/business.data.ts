import { send, shield, star } from '@/shared/images';

import { IBusinessData } from './business.interface';

export const features: IBusinessData = {
  title: 'Вы ведете бизнес, а мы займемся расходами.',
  descr:
    'С помощью правильной кредитной карты вы можете улучшить свою финансовую жизнь, создавая кредиты, получая вознаграждения и экономя деньги.',
  button: 'Начать',
  features: [
    {
      id: 'feature_1',
      icon: star,
      title: 'Преимущества',
      content:
        'Лучшие кредитные карты, много заманчивых предложений, акций и призов.',
    },
    {
      id: 'feature_2',
      icon: shield,
      title: 'Защита 100%',
      content:
        'Самая продвинутая защита для обеспечения безопасности ваших транзакций.',
    },
    {
      id: 'feature_3',
      icon: send,
      title: 'Переводы',
      content:
        'Используя кредитную карту для переводов, вы можете сэкономить много денег.',
    },
  ],
};

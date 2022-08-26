import { send, shield, star } from '@/shared/images';

import { IBusinessData } from './business.interface';

export const features: IBusinessData = {
  title: 'Вы ведете бизнес, а мы займемся расходами.',
  descr:
    'С помощью правильной кредитной карты вы можете улучшить свою финансовую жизнь, создавая кредиты, получая вознаграждения и экономя деньги.',
  button: 'Начать',
  features: [
    {
      id: 'feature-1',
      icon: star,
      title: 'Преимущества',
      content:
        'Лучшие кредитные карты, много заманчивых предложений, акций и призов',
    },
    {
      id: 'feature-2',
      icon: shield,
      title: '100% Защита',
      content:
        'Самая продвинутая защита для обеспечения безопасности вашей информации и транзакций.',
    },
    {
      id: 'feature-3',
      icon: send,
      title: 'Переводы',
      content:
        'Используя кредитную карту для переводов, вы можете сэкономить много денег.',
    },
  ],
};

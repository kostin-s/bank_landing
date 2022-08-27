import { people1, people2, people3 } from '@/shared/images';

import { IFeedbackItemData } from './feedback.interface';

export const feedbackData: IFeedbackItemData[] = [
  {
    content:
      'Деньги - это инструмент. Главное правильно им пользоваться. Мобильное приложение банка очень в этом помогает. Все данные о финансах в удобном формате.',
    human: {
      image: people1,
      name: 'Амелия Борисовна',
      about: 'Лидер & Аналитик',
    },
  },
  {
    content:
      'Использование финансов в банке нового поколения значительно упростило мою жизнь. Всё удобно и доступно.',
    human: {
      image: people2,
      name: 'Максим Дмитриевич',
      about: 'Бизнесмен & Аналитик',
    },
  },
  {
    content:
      'С банком нового поколения у меня получилось в кратчайшие сроки улучшить своё финансовое положение.',
    human: {
      image: people3,
      name: 'Артём Ярославович',
      about: 'Лидер & Менеджер',
    },
  },
];

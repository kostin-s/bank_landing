import { useState } from 'react';

export const useSlider = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [slideIn, setSlideIn] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const switchClick = (indexShow: number) => {
    setSlideIn(false);
    setIsDisabled(true);

    setTimeout(() => {
      setCurrentIdx(indexShow);
      setSlideIn(true);
    }, 300);

    setTimeout(() => {
      setIsDisabled(false);
    }, 500);
  };

  return {
    slideIn,
    index: currentIdx,
    SwitchSlide: switchClick,
    isDisabled,
  };
};

import { FC } from 'react';

import { CustomShowButton } from './components/CustomButton/CustomButton';
import { InputDebounce } from './components/InputDebounce/InputDebounce';

export const App: FC = () => {
  return (
    <>
      <CustomShowButton />
      <InputDebounce />
    </>
  );
};

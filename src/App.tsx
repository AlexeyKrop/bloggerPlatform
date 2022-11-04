import { FC } from 'react';

import { CustomShowButton } from './components/CustomButton/CustomButton';
import { CustomSelect } from './components/CustomSelect/CustomSelect';
import { InputDebounce } from './components/InputDebounce/InputDebounce';

export const App: FC = () => {
  return (
    <>
      <CustomShowButton />
      <InputDebounce />
      <CustomSelect />
    </>
  );
};

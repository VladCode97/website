import React, { FC, useState } from 'react';
import { PopUpComponent } from '../Popup/popup.component';
import { ImageMenuStyled } from '../Style/menu.styled';

export const ImageMenuComponent: FC = () => {
  //StatePop
  const [state, setstate] = useState<boolean>(false);
  return (
    <>
      <ImageMenuStyled onClick={() => setstate(!state)} ></ImageMenuStyled>
      {
        (state) && <PopUpComponent />
      }
    </>
  )
}
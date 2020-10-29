import React, { FC } from 'react';
import { PopupMenuStyled, UlStyled, LiStyled } from '../Style/menu.styled';

export const PopUpComponent: FC = () => {
  return (
    <>
      <PopupMenuStyled>
        <UlStyled>
          <LiStyled>Home</LiStyled>
          <LiStyled>Blog</LiStyled>
          <LiStyled>Contact</LiStyled>
          <LiStyled>Projects</LiStyled>
        </UlStyled>
      </PopupMenuStyled>
    </>
  )
}
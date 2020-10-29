import React, { FC } from 'react';
import { ContainerMenuStyled, Internalization } from './Style/menu.styled';
import { ImageMenuComponent } from './Image/image.menu';
/**
 * @method Component
 */
export const MenuComponent: FC = () => {
  return (
    <ContainerMenuStyled>
      <Internalization>ES/IN</Internalization>
      <ImageMenuComponent/>
    </ContainerMenuStyled>)
}
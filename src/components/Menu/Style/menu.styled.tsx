import Styled, { keyframes } from 'styled-components';
import MenuImage from '../../../assets/logo.svg';

const LiKeyFrame = keyframes`
   2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(0.1deg); 
  }
`;


export const ContainerMenuStyled = Styled.div`
  width: 85%;
  margin: auto;
  display: flex;  
  justify-content: space-between;
  transition: 7s ease-in-out;
`;

export const Internalization = Styled.h1`
  font-size: 34px;
`;

export const PopupMenuStyled = Styled.div`
  position: absolute;
  top: 15%;
  left: 40%;
  height: 600px;
  width: 50%;
`;


export const UlStyled = Styled.ul`
  list-style: none;
`;

export const LiStyled = Styled.li`
  text-align: right;
  padding-bottom: 10%;
  font-weight: bold;
  font-size: 50px;
  cursor: pointer;
  transition: 7s ease-in-out;
  transition: all 1s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    animation: ${LiKeyFrame} 2s linear infinite;
    color: #EC0101;
  }

`;


export const ImageMenuStyled = Styled.img.attrs((content) => ({ src: MenuImage }))`
  cursor: pointer;
`;
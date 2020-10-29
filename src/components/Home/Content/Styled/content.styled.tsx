import Styled from 'styled-components';

export const ContainerParseStyled = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export const TitleParse = Styled.h1`
  color: ${(props) => props.color}
  font-size: ${(props: any) => props.sizeFont}
`;
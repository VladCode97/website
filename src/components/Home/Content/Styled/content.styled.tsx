import Styled from 'styled-components';
import FrontendAndBackendImage from '../../../../assets/frontent&backend.png';
import WaveTools from '../../../../assets/wave.svg';


const widthPrincipal: string = "85%";

/**
 * Home
 */
export const ContainerParseStyled = Styled.div`
  width: ${widthPrincipal};
  margin: 5% auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
`;

export const TitleParse: any = Styled.h1`
  color: ${(props: any) => props.fontColor ? 'black' : 'white'};
  background: ${(props: any) => props.backgroungcolor ? props.backgroungcolor : 'white'};
  font-size: ${(props: any) => props.sizeFont};
  text-align: center;
  padding: 30%;
`;

/**
 * Information
 */
export const ContainerInfo = Styled.div`
  width: ${widthPrincipal};
  margin: -5% auto;
  background: #1C1B20;
  padding-bottom: 10px;
`;

export const TitleInformation: any = Styled.h1`
  font-size: ${(props: any) => props.sizeFont};
  font-weight: 400;
  color: white;
  position: relative;
  left: 12%;
  padding: 5.5%;
`;

export const ContentetInformation: any = Styled.h1`
  font-size: ${(props: any) => props.sizeFont};
  font-weight: 100;
  color: white;
  position: relative;
  left: 18%;
  width: 60%;
  letter-spacing: 10px;
  line-height : 60px;
`;

export const ImageInforamtion: any = Styled.img.attrs((content) => ({ src: FrontendAndBackendImage }))`
  display: block;
  margin: 2% auto;
`;

/**
 * Tools
 */
export const ContainerTools = Styled(ContainerParseStyled)``;

export const ToolsItems: any = Styled.div`
  background: ${(props: any) => props.backgroungcolor};
  padding: 100px;
  position: relative;
`;

export const TitleTools: any = Styled.h1`
  font-size: ${(props: any) => props.sizeFont};
`;

export const ImageTools: any = Styled.img.attrs((content) => ({ src: WaveTools }))`
  display: block;
`;

export const ToolsList: any = Styled.div`
  border: 1px solid;
  padding: 20px;
  width: 70%;
  margin: 15% auto;
  position: relative;
`;

export const ToolsListFont: any = Styled.h1`
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  padding: 10px;
`;


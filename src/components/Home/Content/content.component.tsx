import React, { FC } from 'react';
import {
  ContainerInfo, ContainerParseStyled, TitleParse,
  TitleInformation, ContentetInformation, ImageInforamtion,
  ContainerTools, ToolsItems, TitleTools, ImageTools, ToolsList,
  ToolsListFont
} from './Styled/content.styled';
import { ToolsBackEnd, ToolsFrontEnd } from '../../../mockups/tools';

export const ContentComponent: FC = () => {
  return (
    <>
      {/* Container title */}
      <ContainerParseStyled>
        <TitleParse backgroungcolor="#EC0101" sizeFont="100px">Hello</TitleParse>
        <TitleParse fontColor sizeFont="100px" >Parse</TitleParse>
      </ContainerParseStyled>
      {/*  Container informartion */}
      <ContainerInfo>
        <TitleInformation sizeFont="70px;">I'm Luis</TitleInformation>
        <ContentetInformation sizeFont="35px">
          And I'm a full stack developer. You know something, I like creating things.
        </ContentetInformation>
        <ImageInforamtion />
      </ContainerInfo>
      {/* Tools */}
      <ContainerTools>
        <ToolsItems backgroungcolor="#F1F3DE">
          <ImageTools />
          <TitleTools>
            FrontEnd
          </TitleTools>
          <ToolsList>

            {
              ToolsFrontEnd.map((items: string) => <ToolsListFont>{items}</ToolsListFont>)
            }
          </ToolsList>
        </ToolsItems>
        <ToolsItems backgroungcolor="#EB8F8F">
          <ImageTools />
          <TitleTools>
            BackEnd
          </TitleTools>
          <ToolsList>
            {
              ToolsBackEnd.map((items: string) => <ToolsListFont>{items}</ToolsListFont>)
            }
          </ToolsList>
        </ToolsItems>
      </ContainerTools>
    </>
  )
}
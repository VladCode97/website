import React, { FC } from "react";
import { MenuComponent } from "../Menu/menu";
import { ContentComponent } from "./Content/content.component";

export const HomeComponent: FC = () => {
  return (
    <div className="container-app">
      <header>
        <MenuComponent />
      </header>
      <div className="container-app">
        <ContentComponent/>
      </div>
    </div>
  )
}
import HeroImage from "../../atoms/HeroImage";
import React from "react";

import './postcard.scss';

type Props = {
  imgSrc: string,
  children: React.ReactNode
}

export const PostCard: React.FC<Props> = ({ imgSrc , children}) => {
 return (
     <div className="postcard">
       <HeroImage src={imgSrc} width="25rem" height="220px"/>

      <div className="postcard__children">
       {children}
      </div>
     </div>
 )
}

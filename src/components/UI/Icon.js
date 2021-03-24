/** @jsxImportSource @emotion/react */

import { 
    RiFacebookCircleFill,
    RiSlackFill,
    RiTwitterFill,
    RiLinkedinBoxFill,
    RiGoogleFill,
    RiStarFill,
    RiMailLine,
    RiArrowDropRightLine,
    RiCloseFill,
    RiEqualizerLine,
    RiArrowDropDownLine,
    RiWechatLine,
    RiUserSmileLine,
    RiSurveyLine

 } from "react-icons/ri";

 import { IoIosAddCircle } from "react-icons/io";



 import { css } from "@emotion/react";

 const iconSet = {
     fb:RiFacebookCircleFill,
     slack:RiSlackFill,
     twitter:RiTwitterFill,
     linkedin:RiLinkedinBoxFill,
     google:RiGoogleFill,
     start: RiStarFill,
     email:RiMailLine,
     arrow:RiArrowDropRightLine,
     close:RiCloseFill,
     add:IoIosAddCircle,
     lizer:RiEqualizerLine,
     arrowDrop:RiArrowDropDownLine,
     chat:RiWechatLine,
     smile:RiUserSmileLine,
     survey:RiSurveyLine

 };

 function Icon({type,fill,size}){
     const IconComponent = iconSet[type];
     return(
         <IconComponent
            css={css`
            fill:${fill};
            font-size:${size}px;
            `}
         />
     )
 }

export default Icon

/** @jsxImportSource @emotion/react */

import {
  RiFacebookCircleFill,
  RiSlackFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGoogleFill,
  RiStarFill,
  RiMailLine,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiCloseFill,
  RiEqualizerLine,
  RiArrowDropDownLine,
  RiWechatLine,
  RiUserSmileLine,
  RiSurveyLine,
  RiHomeWifiLine,
  RiCursorLine,
  RiMentalHealthLine,
  RiUserHeartLine,
  RiMenuFoldLine,
  RiCloseLine,
  RiHome2Line,
  RiDashboardLine,
  RiCalendarLine,
  RiBookmarkFill
} from "react-icons/ri";

import { IoIosAddCircle } from "react-icons/io";
import { css } from "@emotion/react";

const iconSet = {
  fb: RiFacebookCircleFill,
  slack: RiSlackFill,
  twitter: RiTwitterFill,
  linkedin: RiLinkedinBoxFill,
  google: RiGoogleFill,
  start: RiStarFill,
  email: RiMailLine,
  arrowLeft: RiArrowDropLeftLine,
  arrow: RiArrowDropRightLine,
  close: RiCloseFill,
  add: IoIosAddCircle,
  lizer: RiEqualizerLine,
  arrowDrop: RiArrowDropDownLine,
  chat: RiWechatLine,
  smile: RiUserSmileLine,
  survey: RiSurveyLine,
  home: RiHomeWifiLine,
  cursor: RiCursorLine,
  mind: RiMentalHealthLine,
  userheart: RiUserHeartLine,
  menu: RiMenuFoldLine,
  close: RiCloseLine,
  home: RiHome2Line,
  dashborad: RiDashboardLine,
  calendar: RiCalendarLine,
  status: RiBookmarkFill
};

function Icon({ onClick, type, fill, size }) {
  const IconComponent = iconSet[type];
  return (
    <IconComponent
      onClick={onClick}
      css={css`
        fill: ${fill};
        font-size: ${size}px;
      `}
    />
  );
}

export default Icon;

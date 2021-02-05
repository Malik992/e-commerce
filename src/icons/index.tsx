import React from "react";
import { ReactComponent as Whatsapp } from "./../assets/images/whatsapp.svg";

export { Whatsapp };
interface IconProps {
  height?: string | number;
  width?: string | number;
  color?: string;
}
export const ArrowDropDownIcon = ({
  width = "35",
  height = "35",
  color = "rgba(0,0,0,0.54",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={width}
    height={height}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

export const ArrowBackIcon = ({
  width = "23",
  height = "21",
  color = "#359dc3",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={width}
    height={height}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
  </svg>
);

export const UserIcon = ({
  width = "25",
  height = "25",
  color = "#4c822a",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 23 23"
  >
    <g transform="translate(1 1)">
      <circle
        cx="10.5"
        cy="10.5"
        r="10.5"
        fill="#eceff1"
        stroke="#fff"
        strokeWidth="2px"
      />
      <path
        fill={color}
        d="M79.22 78.015a3.9 3.9 0 0 0-1.617-.747l-2.878-.577a.649.649 0 0 1-.52-.643v-.66a7.886 7.886 0 0 0 .542-.966 5.3 5.3 0 0 1 .462-.81 4.291 4.291 0 0 0 1.32-2.091 2.016 2.016 0 0 0-.185-1.549 11.626 11.626 0 0 0-.224-2.653 2.9 2.9 0 0 0-.684-2.125 2.03 2.03 0 0 0-1.219-.512 2.13 2.13 0 0 1-.448-.1A4.632 4.632 0 0 0 71.553 64a5.183 5.183 0 0 0-4.565 3.132 7.45 7.45 0 0 0-.18 2.365l-.017.474a2.1 2.1 0 0 0-.172 1.549 4.283 4.283 0 0 0 1.33 2.1 5.762 5.762 0 0 1 .461.806 8.158 8.158 0 0 0 .546.962v.66a.652.652 0 0 1-.522.643l-2.881.577a3.906 3.906 0 0 0-1.612.745.658.658 0 0 0-.077.956 10.449 10.449 0 0 0 15.435 0 .658.658 0 0 0-.077-.955z"
        transform="translate(-61.08 -61.375)"
      />
    </g>
  </svg>
);

export const SeparatorIcon = ({
  width = "25",
  height = "25",
  color = "#4c822a",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 9 18"
  >
    <path fill={color} d="M1.032 16.825l6-16 .936.35-6 16-.936-.35z" stroke="none"></path>
  </svg>
);

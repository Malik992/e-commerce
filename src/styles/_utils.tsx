import { css } from "styled-components/macro";

export const colors = {
  dark: "#252C59",
  blue: "#1976D2",
  blueLight: "#85B5E4",
  textPrimary: "#333333",
  textSecondary: "#4B4D52",
  gray: "#E0E0E0",
  grayLighter: "#F2F2F2",
};

export const sizes = {
  desktop: 1133,
  phablet: 993,
  tablet: 693,
  mobile: 393,
};

const castCss = css as any;

export const medias = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args: any) =>
    css`
      @media (max-width: ${emSize}em) {
        ${castCss(...args)}
      }
    `;
  return accumulator;
}, {});

export const hexToRgb = (hex: string) => {
  // http://stackoverflow.com/a/5624139
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgba = (hex: string, alpha: number): string => {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

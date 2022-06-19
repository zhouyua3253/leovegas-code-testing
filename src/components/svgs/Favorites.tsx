import * as React from "react";
import { SVGProps } from "react";

const SvgFavorites = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="favorites_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    {...props}
  >
    <defs>
      <style>
        {
          '@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}'
        }
      </style>
    </defs>
    <path
      d="m484.267 272.021 6.634 6.72c5.974 5.974 13.014 12.843 21.099 20.63l9.195-8.918c7.253-7.04 13.44-13.184 18.56-18.432a193.28 193.28 0 0 1 277.44 0c75.904 77.526 76.629 202.795 2.133 281.195L512 853.333 204.672 553.237c-74.475-78.421-73.77-203.69 2.133-281.216a193.28 193.28 0 0 1 277.44 0zm293.162 232.15c46.272-53.76 44.182-136.15-5.973-187.371a129.28 129.28 0 0 0-185.984 0l-15.125 15.104a1687.253 1687.253 0 0 1-4.395 4.31L512 388.18l-49.28-47.445-13.227-12.928-10.965-11.008a129.28 129.28 0 0 0-186.005 0c-51.456 52.565-52.31 137.963-2.198 191.573L512 763.883l261.675-255.531 3.754-4.181z"
      fill={props.fill}
    />
  </svg>
);

export default SvgFavorites;

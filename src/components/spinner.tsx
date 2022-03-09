/*
 * ****************************************************************************
 * Copyright (C) 2019-2020 Joyride.com - All rights reserved.
 * Project: joyride-grill
 * ****************************************************************************
 */
import * as React from "react";
import { classNames } from "../utils/classNames";

const spinEncodeSvg = escape(
  // eslint-disable-next-line quotes
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block;" width="311px" height="311px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="rotate(0 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-1.8575851393188856s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(18.94736842105263 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-1.7543859649122808s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(37.89473684210526 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-1.651186790505676s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(56.8421052631579 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-1.5479876160990713s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(75.78947368421052 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-1.4447884416924666s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(94.73684210526316 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-1.3415892672858618s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(113.6842105263158 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-1.238390092879257s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(132.6315789473684 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-1.1351909184726523s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(151.57894736842104 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-1.0319917440660475s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(170.52631578947367 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-0.9287925696594428s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(189.47368421052633 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-0.825593395252838s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(208.42105263157896 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-0.7223942208462333s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(227.3684210526316 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-0.6191950464396285s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(246.31578947368422 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-0.5159958720330238s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(265.2631578947368 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-0.412796697626419s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(284.2105263157895 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-0.30959752321981426s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(303.1578947368421 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-0.2063983488132095s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(322.10526315789474 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="-0.10319917440660475s" repeatCount="indefinite"></animate></rect></g><g transform="rotate(341.05263157894734 50 50)"><rect x="48.5" y="23.5" rx="1.5" ry="2.5500000000000003" width="3" height="15" fill="#17415a"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.9607843137254901s" begin="0s" repeatCount="indefinite"></animate></rect></g></svg>`
);

/** SpinnerProps - Properties */
export interface SpinnerProps<T = HTMLDivElement>
  extends React.HTMLAttributes<T> {
  size?: "sm" | "md" | "lg";
}

/** Spinner */
export function Spinner(props: SpinnerProps): JSX.Element {
  // Destructure props & validate
  const { size, children, className, style, ...root } = props;
  const classes =
    className || "flex-grow flex flex-col justify-center items-center";

  const attributes: React.CSSProperties = {
    cursor: "progress",
    zIndex: 100,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classes} style={{ ...attributes, ...style }} {...root}>
      <div
        className={`spinner spinner-${size || "md"}`}
        style={{
          backgroundImage: `url(data:image/svg+xml;utf8,${spinEncodeSvg})`,
        }}
      />
    </div>
  );
}

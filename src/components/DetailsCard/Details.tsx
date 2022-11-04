import React, { Children, useState } from "react";
import ChevronUp from "icons/ChevronUp";
import ChevronDown from "icons/ChevronDown";
import { DetailsProps } from "./IDetails";

import './style.css'

function Details({
  summary,
  children,
  defaultExpanded = false,
}: DetailsProps): JSX.Element {
  const [showContent, setShowContent] = useState(defaultExpanded);
  return (
    <div className="storybook-details-container">
      <h4
        className="storybook-details-header"
        onClick={() => setShowContent((prev) => !prev)}
      >
        {summary}
        {showContent ? <ChevronUp /> : <ChevronDown />}
      </h4>
     <p className="storybook-details-content"> {showContent ? children : null}</p>
    </div>
  );
}
export default Details;

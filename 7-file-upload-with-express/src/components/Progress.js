import React from "react";

export const Progress = ({ percentage }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{width: `${percentage}%`}}
      >
        {percentage}%
      </div>
    </div>
  );
};

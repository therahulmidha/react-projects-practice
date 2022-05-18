import React from "react";

export const Message = ({ msg }) => {
  return (
    <div className="alert alert-info alert-dismissible fade show" role="alert">
      {msg}
      <span
        type="button"
        className="close"
        data-bs-dismiss="alert"
        aria-label="Close"
        style={{ float: "right" }}
      >
        <span aria-hidden="true">&times;</span>
      </span>
    </div>
  );
};

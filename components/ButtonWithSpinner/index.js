import React from "react";

/* 
Custom button with loading animation
*/

function ButtonWithSpinner({
  isSubmitting, //state to manage loading functionality
  text,
  className,
  type = "submit",
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn btn-dark ${className}`}
      disabled={isSubmitting}
      {...props}
    >
      {isSubmitting ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </>
      ) : (
        text
      )}
    </button>
  );
}

export default ButtonWithSpinner;

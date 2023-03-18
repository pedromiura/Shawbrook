'use client';
/* 
Documentation for integration with native error boundary: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary  

Client side component to be used as fall back for error boundary
*/
export default function Error({error,reset,}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
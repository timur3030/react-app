import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <>
      <h1 style={{ color: "red" }}>Возникла непредвиденная ошибка</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}

export default Error;

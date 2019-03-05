import React from "react";
import { css } from "@emotion/core";
import { HashLoader } from "react-spinners";

const overwrite = css(`
  display: block;
  margin: 20px auto;
`);

export default () => {
  return (
    <div>
      <HashLoader css={overwrite} sizeUnit={"px"} size={50} color={"#17a2b8"} />
    </div>
  );
};

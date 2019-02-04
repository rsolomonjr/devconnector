import React from "react";
import css from "@emotion/css/macro";
import { HashLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 20px auto;
`;
export default () => {
  return (
    <div>
      <HashLoader css={override} sizeUnit={"px"} size={50} color={"#17a2b8"} />
    </div>
  );
};

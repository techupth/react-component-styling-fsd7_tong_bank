/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  return (
    <div>
      {type === "Primary" ? (
        <button
          css={css`
            background-color: #074ee8;
          `}
        >
          button
        </button>
      ) : (
        <button
          css={css`
            background-color: #07a4e8;
          `}
        >button</button>
      )}
    </div>
  );
}

export default Button;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  return (
    <div>
      {type === "Primary" ? (
        <button
          css={css`
            width: 171px;
            height: 50px;
            border-radius: 4px;
            background-color: #074EE8;
            color: white;
            padding: 16px;
          `}
        >
          Button
        </button>
      ) : (
        <button
          css={css`
            width: 171px;
            height: 50px;
            border-radius: 4px;
            background-color: #07A4E8;
            color: white;
            padding: 16px;
          `}
        >
          Button
        </button>
      )}
    </div>
  );
}

export default Button;

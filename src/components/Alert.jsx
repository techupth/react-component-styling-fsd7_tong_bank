// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  let buttonName;
  let color;
  let icon;
  if (props.alert === "error") {
    buttonName = "This is error alert box";
    color = "#F9C8C8";
    icon = "src/assets/frown.svg";
  } else if (props.alert === "warning") {
    buttonName = "This is warning alert box";
    color = "#F9D9C8";
    icon = "src/assets/alert-triangle.svg";
  } else if (props.alert === "info") {
    buttonName = "This is info alert box";
    color = "#F9EBC8";
    icon = "src/assets/alert-circle.svg";
  } else if (props.alert === "success") {
    buttonName = "This is success alert box";
    color = "#CEF7CD";
    icon = "src/assets/check-circle.svg";
  }

  return (
    <button
      css={css`
        background-color: ${color};
        width: 650px;
        height: 76px;
        color: #444444;
        font-weight: 800;

        display: flex;
        text-align: center;
        align-items: center;
        justify-content: start;

        padding: 32px;
        margin: 20px;
        gap: 8px; /* Optional: Space between the icon and text */
      `}
    >
      <img src={icon} alt="" />
      {buttonName}
    </button>
  );
}

export default Alert;

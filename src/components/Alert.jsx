/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


function Alert(props) {
  let color;
  if (props.message === "error") {
    color = "#F9C8C8";
  } else if (props.message === "warning") {
    color = "#F9D9C8";
  } else if (props.message === "info") {
    color = "#F9EBC8";
  } else if (props.message === "success") {
    color = "#CEF7CD";
  }
  return (
    
    <div css = {css`
    background-color: ${color};
    border-radius: 10px;
    width: 650px;
    height: 76px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px`}>
      <img src={props.logo} />
      <span css = {css`
        font-size: 20px;
        font-weight: 700;
        padding-left: 20px;`}>This is {props.message} alert box</span>
    </div>
    
  );
}
export default Alert;

import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import frown from "./assets/frown.svg"
import triangle from "./assets/alert-triangle.svg"
import alertCircle from "./assets/alert-circle.svg"
import check from "./assets/check-circle.svg"


function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type = "Primary"/>
        <Button type = "" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert message = "error" logo = {frown}/>
        <Alert message = "warning" logo = {triangle}/>
        <Alert message = "info" logo = {alertCircle}/>
        <Alert message = "success" logo = {check}/>
      </div>
    </div>
  );
}

export default App;

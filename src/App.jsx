import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="Primary" />
        <Button type="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert alert="error" />
        <Alert alert="warning" />
        <Alert alert="info" />
        <Alert alert="success" />
      </div>
    </div>
  );
}

export default App;

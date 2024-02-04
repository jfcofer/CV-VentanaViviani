import NumberCalculator from "./components/NumberCalculator";


const App = () => {
  const apiUrl = "http://localhost:5000";

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100">
      <h1 className="col-4">Number Calculator</h1>
      <NumberCalculator apiUrl={apiUrl} />
    </div>
  );
};

export default App;

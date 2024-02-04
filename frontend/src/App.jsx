import NumberCalculator from "./components/NumberCalculator";

const App = () => {
  const apiUrl = "http://localhost:5000";

  return (
    <div className="row align-items-start">
      <div className="col-4 text-center ">
        <div className="container ">
          <h1 className="h1">Ventana de Viviani</h1>
          <p>Aproximar el perimetro de una Ventana de Viviani</p>
          <br />

          <NumberCalculator apiUrl={apiUrl} />
        </div>
      </div>
      <div
        className="col align-items-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          title="Curva de Viviani"
          width="700em"
          height="700em"
          style={{ display: "block" }}
          src="https://www.geogebra.org/material/iframe/id/gCscxkzY/width/793/height/582/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false"
        />
      </div>
    </div>
  );
};

export default App;

import Header from "./components/Header";
import { apiData } from "./Data";

function App() {
  
  const prueba = () => {
    console.log(apiData)
  };
  
  return (
    <div className="App">
      <Header></Header>

      <button onClick={prueba}>Imprimir info</button>
    </div>
  );
}

export default App;

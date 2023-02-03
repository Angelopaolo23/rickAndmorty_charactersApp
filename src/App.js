import Header from "./components/Header";
import MiApi from "./components/MiApi";
import mr_meeseks from "./img/mr_meeseks.jpeg";


function App() {
  
  return (
    <div className="App min-vh-100" style={{backgroundImage: `url(${mr_meeseks})` }}>
      <Header />
      <MiApi />
    </div>
  );
}


export default App;

import ThemeMenu from "./Components/Menu";
import HomePage from "./Pages/Home";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      
      <ThemeMenu/>
      <HomePage/>
    </div>
  );
}

export default App;

import DatingCards from "./components/DatingCards";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <DatingCards></DatingCards>
      <SwipeButtons />
    </div>
  );
}

export default App;

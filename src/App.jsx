import { useState } from "react";
import MainPage from "./components/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;

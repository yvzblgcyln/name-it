import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ResultContainer from "../ResultsContainer/ResultContainer";
import Search from "../Search/Search";
import "./App.css"

function App() {
  const [inputText, setInputText] = useState("");
  const name = require("@rstacruz/startup-name-generator")
  const [suggestedName, setSuggestedName] = useState([]);

  useEffect(() => {
    inputText ? setSuggestedName(name(inputText)) : setSuggestedName([])
  }, [inputText]);

  return (
    <div>
      <Header isFilled={inputText} />
      <Search inputText={inputText} setInputText={setInputText} />
      <ResultContainer list={suggestedName} />
    </div>
  );
}

export default App;

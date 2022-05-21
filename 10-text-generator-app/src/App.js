import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Select } from "./components/Controls/Select";
import { Text } from "./components/Controls/Text";
import { Output } from "./components/Output";

function App() {
  const [paras, setParas] = useState(4);
  const [html, setHtml] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    const getSampleText = () => {
      try {
        // URL does not work now
        //await axios.get(`http://hipsterjesus.com/api?paras=${paras}&html=${html}`);

        let txt = "";
        for (let i = 1; i <= paras; i++) {
          txt += html ? `<p>paragraph${i}</p> ` : `paragraph${i} `
        }
        setText(txt)
      } catch (error) {
        console.log(error);
      }
    }
    getSampleText();
  }, [html, paras]);

  const showHtml = (value) => {
    setHtml(value === "true");
  }

  const changeParas = (number) => {
    setParas(number);
  }

  return <div className="App container">
    <h1 className="text-center">ReactJS Sample Text Generator</h1>
    <hr />
    <form className="form-inline">
      <div className="form-group">
        <label>Paragraphs:</label>
        <Text value={paras} onChange={changeParas} />
      </div>
      <div className="form-group">
        <label>Include HTML:</label>
        <Select value={html} onChange={showHtml} />
      </div>
    </form>
    <br /><br />
    <Output value={text} />
  </div>;
}

export default App;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

// 作成したPieグラフ
import Pie from "./Pie";

function App() {

  const [width, height, innerRadius, outerRadius] = [200, 200, 60, 100];

  // ボタンをクリックした時、ランダムなデータを生成する
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));
  const [data, setData] = useState(generateData());
  const changeData = () => {
    setData(generateData());
  };

  return (
    <div className="App">
      <div>
        <button onClick={changeData}>Click</button>
      </div>
      <div>
        <h2 className="label">React Hook</h2>
        <Pie
          data={data}
          width={width}
          height={height}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
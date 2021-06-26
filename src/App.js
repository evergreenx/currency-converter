import Currency from "./component/Currency";

import React from "react";

function App() {


  return (
    <div>
          <h1 className="text-4xl font-bold text-center mt-10 mb-10 text-blue-400">
          Currency Converter
        </h1>
      <div className="App bg-blue-100 h-full p-20 mt-46 items-center rounded-lg shadow-lg justify-evenly">

    
        <Currency />

      </div>
    </div>
  );
}

export default App;

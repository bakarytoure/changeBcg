import React, { useEffect } from "react";
import "./App.scss";

function App(props) {
  useEffect(() => {
    const interval = setInterval(function () {
      var randomcolor = Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = "#" + randomcolor;
      var getcolor = (document.getElementById("app").style.backgroundColor =
        "#" + randomcolor);
      console.log(getcolor);
      return getcolor;
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App container-fluid" id="app">
      <h2 className="text-center pt-5 text-white">
        Update background Color every 5 seconds
      </h2>
    </div>
  );
}

export default App;

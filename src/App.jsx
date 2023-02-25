import { React, useEffect, useState } from "react";
import Activity from "./components/Activity";
import Loading from "./components/Loading";

import axios from "axios";
function App() {
  const [bore, setBore] = useState("");
  const [isloading, setLoading] = useState(false);
  const api = "http://www.boredapi.com/api/activity/";

  const fetchAct = () => {
    setLoading(true);
    axios.get(api).then((res) => {
      setTimeout(() => {
        setBore(res.data);
        setLoading(false);
      }, 1000);
    });
  };
  useEffect(() => {
    fetchAct();
  }, []);
  const renderUser = (
    <Activity
      activity={bore.activity}
      type={bore.type}
      participants={bore.participants}
      price={bore.price}
      accessibility={bore.accessibility}
      fetchCall={fetchAct}
    />
  );
  const blob = document.getElementById("blob");

  document.body.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };

  return (
    <div className="container">
      <div id="blob"></div>
      <div id="blur"></div>
      {isloading ? <Loading /> : renderUser}
    </div>
  );
}

export default App;

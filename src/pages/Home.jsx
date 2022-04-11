import { Link } from "react-router-dom";

import { OpenFree } from "../styles/Home";

import { Loading } from "../components/Loading";
import { useState, useEffect } from "react";

export function HomePage() {
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/",)
      .then(() => {
          let time = 9000
          setTimeout(()=>{
              setRemoveLoading(true);

          }, time)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <OpenFree>
        <Link to="/index" className="btn-free">
          enter for free
        </Link>
      {!removeLoading && <Loading />}
    </OpenFree>
  );
}

// Flash message

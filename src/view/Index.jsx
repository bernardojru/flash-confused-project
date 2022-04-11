import { NavBottom } from "../components/Footer";
import { NavTop } from "../components/Header";
import { ContainerMain } from "../components/Main";
import { Loading } from "../components/Loading";

import { ConstPage } from "../styles/Index";

import { useState, useEffect } from "react";


export function IndexPage() {
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(() => {
        let time = 300;
        setTimeout(() => {
          setRemoveLoading(true);
        }, time);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ConstPage>
      <NavTop />
      <ContainerMain />
      <NavBottom />
      {!removeLoading && <Loading />}
    </ConstPage>
  );
}

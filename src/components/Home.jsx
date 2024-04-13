import React from "react";
import background from "../../public/background.png";
import haz from "../../public/haz.jpg";
import panel from "../../public/panel.jpg";
import tanya from "../../public/tanya.jpg";

export const Home = () => {
  return (
    <div className="container home">
      <div className="container shadow">
        <header className="header ">
          <h1>Ingatlaniroda</h1>
          <img src={background} alt="" className="img-banner img-fluid" />
        </header>
      </div>
      <main className="m-4 col-12 ">
        <h4>Ingatlanok minden kategoriában</h4>
        <div className="row gap-2">
          
            <div className="mycard col-md-4 p-2 kateg">
              <img src={haz} alt="" className="img-fluid img-thumbnail" />
              <p>Házak</p>
            </div>
            <div className="mycard col-md-4 p-2 kateg">
              <img src={panel} alt="" className="img-fluid img-thumbnail" />
              <p>Lakások</p>
            </div>
            <div className="mycard col-md-4 p-2 kateg">
              <img src={tanya} alt="" className="img-fluid img-thumbnail" />
              <p>Nyaralók</p>
            </div>
          </div>
        
      </main>
      <footer>©️2024 JF project All rights reserved</footer>
    </div>
  );
};

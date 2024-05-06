"use strict";

const kohde = document.getElementById("kohde");

async function haeAutot() {
  const response = await fetch("http://localhost:3000/autot");
  const autot = await response.json();
  for (const auto of autot) {
    const tr = document.createElement("tr");

    const id = document.createElement("td");
    id.innerText = auto.id;
    tr.appendChild(id);

    const merkkimalli = document.createElement("td");
    merkkimalli.innerText = auto.merkki + " " + auto.malli;
    tr.appendChild(merkkimalli);

    const vuosimalli = document.createElement("td");
    vuosimalli.innerText = auto.vuosimalli;
    tr.appendChild(vuosimalli);

    const omistaja = document.createElement("td");
    omistaja.innerText = auto.omistaja;
    tr.appendChild(omistaja);

    kohde.appendChild(tr);
  }
}

haeAutot();

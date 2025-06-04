window.addEventListener("load", sidenVises);

const kode1 = document.querySelector("#kode1_container");
const kode2 = document.querySelector("#kode2_container");
const kode3 = document.querySelector("#kode3_container");
const kode4 = document.querySelector("#kode4_container");
const kode5 = document.querySelector("#kode5_container");
const kode6 = document.querySelector("#kode6_container");

function sidenVises() {
  console.log("sidenVises");
  kode1.classList.add("fald");
  kode2.classList.add("fald");
  kode3.classList.add("fald");
  kode4.classList.add("fald");
  kode5.classList.add("fald");
  kode6.classList.add("fald");
}

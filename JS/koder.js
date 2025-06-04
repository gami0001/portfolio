window.addEventListener("load", sidenVises);

const kode1 = document.querySelector("#kode1_container");
const kode2 = document.querySelector("#kode2_container");
const kode3 = document.querySelector("#kode3_container");
const kode4 = document.querySelector("#kode4_container");
const kode5 = document.querySelector("#kode5_container");
const kode6 = document.querySelector("#kode6_container");
const kode11 = document.querySelector("#kode1-1_container");
const kode21 = document.querySelector("#kode2-1_container");
const kode31 = document.querySelector("#kode3-1_container");
const kode41 = document.querySelector("#kode4-1_container");
const kode51 = document.querySelector("#kode5-1_container");
const kode61 = document.querySelector("#kode6-1_container");

function sidenVises() {
  console.log("sidenVises");
  kode1.classList.add("fald");
  kode2.classList.add("fald");
  kode3.classList.add("fald");
  kode4.classList.add("fald");
  kode5.classList.add("fald");
  kode6.classList.add("fald");
  kode11.classList.add("fald");
  kode21.classList.add("fald");
  kode31.classList.add("fald");
  kode41.classList.add("fald");
  kode51.classList.add("fald");
  kode61.classList.add("fald");
  document.querySelector(".titel").classList.add("titelAni");
}

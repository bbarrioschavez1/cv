//Javascript code for my personal website
//Case Project
//Author: Bryant Barrios
//Date:2/6/2020
//filename: bryant.js

var totalFam = 0;

//calculates the total number of people in household
function calcFamily() {
  var parents = document.getElementById("parentnum");
  var brother = document.getElementById("brothernum");
  var sister = document.getElementById("sisternum");
  var pet = document.getElementById("petnum");
  //totalFam is equal to the num of parent,brother,sister, and pet added
  //together
  totalFam =
    Number(parents.value) +
    Number(brother.value) +
    Number(sister.value) +
    Number(pet.value);
  document.getElementById("result").innerHTML = totalFam;
  addFamInfo(totalFam);
}

function addFamInfo(totalFam) {
  if (totalFam < 5) {
    document.getElementById("result").innerHTML =
      "\n" + "You have less than 5 family members";
  } else {
    if (totalFam > 5) {
      document.getElementById("result").innerHTML =
        "\n" + "You have more than 5 family members";
    }
  }/*
  switch (totalFam) {
    case small:
      if (totalFam < 5) {
        document.getElementById("result").innerHTML =
          "\n" + "You have less than 5 family members";
        return;
      }

    case medium:
      if ((totalFam = 5)) {
        document.getElementById("result").innerHTML =
          "\n" + "You have 5 family members";
        return;
      }
    case large:
      if (totalFam > 5) {
        document.getElementById("result").innerHTML =
          "\n" + "You have 5 family members";
        return;
      }
    default:
        document.getElementById("result").innerHTML= "hello";
  }*/
}

//changes the values back to 0 when the page is reloaded
function resetForm() {
  document.getElementById("parentnum").value = 0;
  document.getElementById("brothernum").value = 0;
  document.getElementById("sisternum").value = 0;
  document.getElementById("petnum").value = 0;
  calcFamily();
  //addFamInfo();
  createEventListeners();
}
//create event listeners
function createEventListeners() {
  document
    .getElementById("parentnum")
    .addEventListener("change", calcFamily, false);
  document
    .getElementById("brothernum")
    .addEventListener("change", calcFamily, false);
  document
    .getElementById("sisternum")
    .addEventListener("change", calcFamily, false);
  document
    .getElementById("petnum")
    .addEventListener("change", calcFamily, false);
 document.addEventListener("load", addFamInfo, false);
}
window.addEventListener("load", resetForm, false);

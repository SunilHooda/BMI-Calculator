document.querySelector("#btn").addEventListener("click", calcBMI);

function calcBMI(event) {
  event.preventDefault();
  let wt = document.querySelector("#weight").value;
  let ht = document.querySelector("#height").value;

  let bmi = eval(wt / ((ht / 100) * (ht / 100)));
  let newBmi = Number(bmi).toFixed(2);
  console.log(newBmi);

  if (newBmi <= 18.4) {
    document.querySelector(
      "#res"
    ).innerText = `Your BMI is ${newBmi} which means you are Underweight`;
  } else if (newBmi >= 18.5 && newBmi <= 24.9) {
    document.querySelector("#res").innerText = `Your BMI is
      ${newBmi} which means you are Normal Weight`;
  } else if (newBmi >= 25 && newBmi <= 29.9) {
    document.querySelector(
      "#res"
    ).innerText = `Your BMI is ${newBmi} which means you are OverWeight`;
  } else if (newBmi >= 30) {
    document.querySelector(
      "#res"
    ).innerText = `Your BMI is ${newBmi} which means you are Obese`;
  }
}

"use strict";

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("Done");
      appData.expenses[a] = b;
    } else {
      console.log("Bad result");
      i--;
    }
  }
}

chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ежеднево: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("minimum");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("average");
  } else if (appData.moneyPerDay > 2000) {
    console.log("high");
  } else {
    console.log("error");
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");

    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с ващего депозита: " + appData.monthIncome);
  }
}

checkSavings();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let question = prompt("Статья необязательных расходов?", "");
    appData.optionalExpenses[i] = question;
  }
}

chooseOptExpenses();

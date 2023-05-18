const App = {
  $: {
    generatorBtn: document.querySelector('[data-id="generatorBtn"]'),
    kotakGn: document.querySelectorAll('[data-id="kotakGn"]'),
    kotakAs: document.querySelectorAll('[data-id="kotakAs"]'),
    jawabanBtn: document.querySelector('[data-id="jawabanBtn"]'),
    alertSa: document.querySelector('[data-id="alert-salah"]'),
    alertBn: document.querySelector('[data-id="alert-benar"]'),
  },

  init() {
    App.generateNumber();
    App.registerEvent();
  },

  saveNum: {
    randomNum: [],
    jawabanArr: [0, 0, 0, 0, 0],
  },

  generateNumber() {
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      App.saveNum.randomNum.push(randomNumber);
    }
  },

  registerEvent() {
    App.$.generatorBtn.addEventListener("click", () => {
      App.$.alertBn.classList.add("hidden");
      App.$.alertSa.classList.add("hidden");

      App.saveNum.jawabanArr = [0, 0, 0, 0, 0];
      App.saveNum.randomNum = [];
      App.generateNumber();
      App.$.kotakGn.forEach((result, index) => {
        result.innerHTML = App.saveNum.randomNum[index];
      });

      App.$.kotakAs.forEach((element) => {
        element.textContent = 0;
      });
    });

    App.$.kotakGn.forEach((result, index) => {
      result.innerHTML = App.saveNum.randomNum[index];
    });

    App.$.kotakAs.forEach((kotak) => {
      const index = kotak.id - 1;
      kotak.addEventListener("click", (event) => {
        App.saveNum.jawabanArr[index] += 1;
        if (App.saveNum.jawabanArr[index] === 10) {
          App.saveNum.jawabanArr[index] = 0;
        }
        kotak.innerHTML = App.saveNum.jawabanArr[index];
      });
    });

    App.$.jawabanBtn.addEventListener("click", () => {
      const number = App.saveNum.randomNum;
      const jawaban = App.saveNum.jawabanArr;

      if (JSON.stringify(number) === JSON.stringify(jawaban)) {
        App.$.alertBn.classList.remove("hidden");
        App.$.alertSa.classList.add("hidden");
      } else {
        App.$.alertSa.classList.remove("hidden");
        App.$.alertBn.classList.add("hidden");
      }
    });
  },
};

App.init();

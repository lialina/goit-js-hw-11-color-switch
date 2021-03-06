// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет
//     цвет фона bodyна случайное значение из массива используя инлайн - стиль.
//     При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
//     Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа(индекс элемента массива цветов),
//     используй функцию randomIntegerFromInterval.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const bodyElement = document.querySelector('body');

startButton.addEventListener('click', () => {
    timer.start();
});

stopButton.addEventListener('click', () => {
    timer.stop();
});

const timer = {
    intervalId: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;

        this.intervalId = setInterval(() => {
            this.changeBodyBackgroundColor();
        }, 1000);

        this.activateDisabledAtributeFromStartButton();
    },

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;

        this.deactivateDisabledAtributeFromStartButton();
    },

    changeBodyBackgroundColor() {
    bodyElement.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
    },

    activateDisabledAtributeFromStartButton() {
    startButton.disabled = true;
    },

    deactivateDisabledAtributeFromStartButton() {
    startButton.disabled = false;
    },
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};   
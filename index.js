import Stopwatch from 'simple-stopwatch';

$(() => {
  const stopwatch = new Stopwatch();
  const $display = $('.stopwatch__display');
  const $meta = $('.stopwatch__meta');

  function convertTimeForDisplay(timeInSeconds) {
    return timeInSeconds.replace('.', ':');
  }

  function renderDisplay(secondsElapsed) {
    const time = (secondsElapsed / 100).toFixed(2);

    $display.text(convertTimeForDisplay(time));
  }

  function renderLap(lapTime) {
    const timeInSeconds = (lapTime / 100000).toFixed(2);
    const newRecord = document.createElement('div');
    newRecord.innerText = convertTimeForDisplay(timeInSeconds);

    $meta.prepend(newRecord);
  }

  let currentDisplayValue = 0;
  renderDisplay(currentDisplayValue);

  stopwatch.onTick(() => {
    currentDisplayValue += 1;
    renderDisplay(currentDisplayValue);
  }, 1);

  $('.stopwatch__control--start').on('click', (e) => {
    e.preventDefault();

    stopwatch.start();
  });

  $('.stopwatch__control--stop').on('click', (e) => {
    e.preventDefault();

    stopwatch.stop();
  });

  $('.stopwatch__control--lap').on('click', (e) => {
    e.preventDefault();

    renderLap(stopwatch.lap());
  });
});
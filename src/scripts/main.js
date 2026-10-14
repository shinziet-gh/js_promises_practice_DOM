'use strict';

const firstPromise = new Promise((resolve, reject) => {
  const timeoutId = setTimeout(() => {
    reject(new Error('First promise was rejected'));
  }, 3000);

  document.addEventListener('click', (e) => {
    clearTimeout(timeoutId);
    resolve('First promise was resolved');
  });
});

const secondPromise = new Promise((resolve, reject) => {
  document.addEventListener('click', (e) => {
    if (e.type === 'click' || e.type === 'contextmenu') {
      resolve('Second promise was resolved');
    }
  });
});

const thirdPromise = new Promise((resolve, reject) => {
  let leftClick = false;
  let rightClick = false;

  document.addEventListener('click', (e) => {
    if (e.type === 'click') {
      leftClick = true;
    }

    if (e.type === 'contextmenu') {
      rightClick = true;
    }

    if (leftClick && rightClick) {
      resolve('Third promise was resolved');
    }
  });
});

firstPromise
  .then((message) => {
    const div = document.createElement('div');

    div.setAttribute('data-qa', 'notification');
    div.className = 'success';
    div.textContent = message;
    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.setAttribute('data-qa', 'notification');
    div.className = 'error';
    div.textContent = error.message;
    document.body.appendChild(div);
  });

secondPromise
  .then((message) => {
    const div = document.createElement('div');

    div.setAttribute('data-qa', 'notification');
    div.className = 'success';
    div.textContent = message;
    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.setAttribute('data-qa', 'notification');
    div.className = 'error';
    div.textContent = error.message;
    document.body.appendChild(div);
  });

thirdPromise
  .then((message) => {
    const div = document.createElement('div');

    div.setAttribute('data-qa', 'notification');
    div.className = 'success';
    div.textContent = message;
    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.setAttribute('data-qa', 'notification');
    div.className = 'error';
    div.textContent = error.message;
    document.body.appendChild(div);
  });

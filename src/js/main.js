import render from './route';

window.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;

  if (target.tagName !== 'A') {
    return;
  }

  const anchor = target;
  history.pushState(null, null, anchor.href);
  render();
});

console.log('main');

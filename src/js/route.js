import Component from './component';
const app = document.querySelector('#root');

const routes = [
  {
    path: '/',
    component: function () {
      console.log('home component');
      const home = new Component(
        app,
        `      <div id="write-post">
      <a href="/write">게시글작성</a>
    </div>
    <ul id="post-list">
      <li class="post">
        <a href="/post">post 1</a>
      </li>
      <li class="post">
        <a>post 2</a>
      </li>
    </ul>`
      );
      home.render();
    },
  },
  {
    path: '/write',
    component: function () {
      console.log('write component');
      const write = new Component(app, '<div>write component</div>');
      write.render();
    },
  },
  {
    path: '/post',
    component: function () {
      console.log('route component');
      const post = new Component(app, '<div>post component</div>');
      post.render();
    },
  },
];

function notFound() {
  const errorPage = new Component(app, '<div>404 not found</div>');
  errorPage.render();
}

function render() {
  const isMatch = routes.find(
    ({ path }) => path === window.location.pathname.toLocaleLowerCase()
  );

  isMatch ? isMatch.component() : notFound();

  console.log('----render end----');
}

window.addEventListener('popstate', () => {
  render();
});

window.addEventListener('load', () => {
  render();
});

export default render;

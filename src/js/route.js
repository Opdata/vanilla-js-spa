import Component from './component';
import {
  getPostList,
  getPost,
  writePost,
  updatePost,
  deletePost,
  writeComment,
  deleteComment,
} from './request';
const app = document.querySelector('#root');

const routes = [
  {
    path: '/',
    component: async function () {
      const result = await getPostList();
      // const result = await deleteComment(31);
      // const result = await writeComment(32);
      // const result = await deletePost(242);
      // const result = await updatePost({
      //   postId: 243,
      //   title: '수정',
      //   content: '수정 테스트으',
      //   image:
      //     'https://images.unsplash.com/photo-1671229389033-8d301b1906c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTc4MDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM3ODU1Mzc&ixlib=rb-4.0.3&q=80&w=1080',
      // });
      // const result = await writePost({
      //   title: '게시글 생성',
      //   content: '생성 테스트으',
      //   image:
      //     'https://images.unsplash.com/photo-1671229389033-8d301b1906c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTc4MDl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM3ODU1Mzc&ixlib=rb-4.0.3&q=80&w=1080',
      // });
      // const result = await getPost(243);
      console.log('home result : ', result);
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

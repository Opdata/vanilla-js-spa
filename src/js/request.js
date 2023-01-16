import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

// TODO: 에러핸들링, 200, 201, 400 대표 / JSDOC

export const getPostList = async () => {
  try {
    const { data: result } = await instance.get('/posts');
    console.log('getPostList : ', result);
    return result.data.posts;
  } catch (e) {
    //
  }
};

export const getPost = async (postId) => {
  try {
    const isId = postId ?? false;

    if (!isId) {
      throw Error('잘못된 ID 접근');
    }

    const { data: result } = await instance.get(`/post/${isId}`);
    console.log('result : ', result);
    return result.data.post; // post - Object , comments - Array
  } catch (e) {
    //
    return e;
  }
};

export const writePost = async ({ title, content, image }) => {
  try {
    const { data: result } = await instance.post('/post', {
      title,
      content,
      image,
    });
    return result.data;
  } catch (e) {
    //
  }
};

export const updatePost = async ({ postId, title, content, image }) => {
  try {
    const isId = postId ?? false;

    if (!isId) {
      throw Error('잘못된 ID 접근');
    }

    const { data: result } = await instance.patch(`/post/${isId}`, {
      title,
      content,
      image,
    });
    return result.data.post;
  } catch (e) {
    //
  }
};

export const deletePost = async (postId) => {
  try {
    const isId = postId ?? false;

    if (!isId) {
      throw Error('잘못된 ID 접근');
    }
    console.log('통과');
    const { data: result } = await instance.delete(`/post/${isId}`);
    return result;
  } catch (e) {
    //
  }
};

export const writeComment = async (postId) => {
  try {
    const isId = postId ?? false;

    if (!isId) {
      throw Error('잘못된 ID 접근');
    }

    const { data: result } = await instance.post(`/comment/${isId}`);
    return result.data;
  } catch (e) {
    //
  }
};

export const deleteComment = async (commendId) => {
  try {
    const isId = commendId ?? false;

    if (!isId) {
      throw Error('잘못된 ID 접근');
    }

    const { data: result } = await instance.delete(`/comment/${isId}`);
    console.log('deleteComment : ', result);
    return result;
  } catch (e) {
    //
  }
};

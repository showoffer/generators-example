import "babel-polyfill";

const makeAjaxCall = (url, cb) => {
  fetch(url)
    .then(resp => resp.json())
    .then(json => cb(json));
};

const request = (url) => {
  return new Promise((resolve, reject) => {
    makeAjaxCall(url, resolve);
  })
};

const main = function *() {
  const post = yield request('https://jsonplaceholder.typicode.com/posts/5');
  const userId = post.userId;
  const userData = yield request(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return userData;
};

export default main;

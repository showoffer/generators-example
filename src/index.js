import "babel-polyfill";

const makeAjaxCall = (url, cb) => {
  fetch(url)
    .then(resp => resp.json())
    .then(json => cb(json));
};

const request = (url) => {
  makeAjaxCall(url, resp => {
    it.next(resp);
  });
};

const main = function *() {
  const post = yield request('https://jsonplaceholder.typicode.com/posts/5');
  const userId = post.userId;
  const userData = yield request(`https://jsonplaceholder.typicode.com/users/${userId}`);
  console.log(userData);
};

const it = main();
it.next();
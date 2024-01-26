export const debounce = (call, ms = 300) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {call.apply(this, args)}, ms);
  };
}

export const getData = (url) => {
  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error.message));
}

export const setData = (url, param) => {
  return fetch(url, param)
    .then(res => res.json())
    .catch(error => console.log(error.message));
}

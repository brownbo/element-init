export const dateFormat = (value) => {
  const date = new Date(value);
  const yyyy = date.getFullYear() + "";
  const mm = date.getMonth() < 9 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1 + "");
  return yyyy + '-' + mm + "-" + dd;
}

export const datetimeFormat = (value) => {
  const date = new Date(value);
  const yyyy = date.getFullYear() + "";
  const mm = date.getMonth() < 9 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1 + "");
  const dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate() + "";
  const h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours() + "";
  const m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() + "";
  const s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds() + "";
  return yyyy + '-' + mm + "-" + dd + " " + h + ":" + m + ":" + s;
}

export const specFormat = (value) => {
  let res = "";
  eval(value).forEach(item => {
    res += item.split('#').join(":") + "   ";
  })
  return res;
}

export default {
  install(Vue) {
    Vue.filter('dateFormat', dateFormat)
    Vue.filter('datetimeFormat', datetimeFormat)
    Vue.filter('specFormat', specFormat)
  },
}

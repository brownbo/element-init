const TEST = () =>
  import ('@/views/test');
export default [
  {
    path: "*",
    name: "test",
    component: TEST,
    meta: {
      title: "登录",
      noRequireAuth: true,
    }
  },
]

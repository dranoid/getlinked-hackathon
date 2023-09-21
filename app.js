const app = Vue.createApp({
  setup() {
    const count = Vue.ref(1);
    return { count };
  },
});
app.mount("#app");

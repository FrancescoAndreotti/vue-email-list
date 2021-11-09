Vue.config.devtools = true;

new Vue({
  el: "#root",
  data: {
    mailList: [],
    apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
    pendingApiCalls: 0
  },
  methods: {
    getMail() {
      this.pendingApiCalls += 10;
      this.mailList = [];
      for (i = 0; i < 10; i++) {
        axios.get(this.apiUrl).then((mail) => {
          let email = mail.data.response;
          this.mailList.push(email);
          this.pendingApiCalls--;
        });
      }

    }
  },
});
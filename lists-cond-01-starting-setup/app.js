const app = Vue.createApp({
  data() {
    return {
      inputGoals: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoal);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");

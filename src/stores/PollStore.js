import { writable } from "svelte/store";

const pollStore = writable([
  {
    id: 1,
    question: "Cats or Dogs",
    answerA: "Cats",
    answerB: "Dogs",
    votesA: 17,
    votesB: 15,
  },
  {
    id: 2,
    question: "Go or JavaScript",
    answerA: "Go",
    answerB: "JavaScript",
    votesA: 5,
    votesB: 9,
  },
  {
    id: 3,
    question: "React or Svelte",
    answerA: "React",
    answerB: "Svelte",
    votesA: 8,
    votesB: 12,
  },
]);

export default pollStore;

import { action, createStore } from "easy-peasy";

const store = createStore({
  user: { name: "Mohamed Awde", _id: "63a028036a2e19d326aaa26a" },
  msgs: [],
  addMsgs: action((state, payload) => {
    state.msgs = payload;
  }),
  submiteMsg: action((state, payload) => {
    state.msgs.push({
      ...payload,
      createdAt: new Date(),
      user: { name: "Mohamed Awde" },
      isSended: false,
    });
  }),
  popLastMsg: action(({ msgs }) => {
    msgs.pop();
  }),
  updateMsgSended: action(({ msgs }, payload) => {
    msgs[msgs.length] = payload;
  }),
});

export default store;

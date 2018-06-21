const INITIAL_STATE = [
  { id: 1, text: "Fazer café" },
  { id: 2, text: "Entrar na comunidade" },
  { id: 3, text: "Estudar react" }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

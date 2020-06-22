export const createId = () => {
  let id = [];
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    id.push(randomNum);
  }
  return Number(id.join('')).toString(16);
};

require("dotenv").config();

const env = process.env;
const { REACT_APP_PRIVATE_KEY, REACT_APP_PUBLIC_KEY } = env;

const Key = {
  ts: Number(new Date()),
  publicKey: REACT_APP_PUBLIC_KEY,
  privateKey: REACT_APP_PRIVATE_KEY,
};

export default Key;

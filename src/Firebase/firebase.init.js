import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeFirebaseLogin = () => {
  initializeApp(firebaseConfig);
};
export default initializeFirebaseLogin;

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpy9HA9OW8sm4sGG7jxM7ViNZUKDMEm5E",
  authDomain: "hi-twitter-f8a97.firebaseapp.com",
  projectId: "hi-twitter-f8a97",
  storageBucket: "hi-twitter-f8a97.appspot.com",
  messagingSenderId: "395440878896",
  appId: "1:395440878896:web:f4fc60e3fee1404ae384f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//* auth referansınız al
export const auth = getAuth(app);

//* google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

//* veritabanının referansı al
export const db = getFirestore(app);

//* storage referansını al
export const storage = getStorage(app);
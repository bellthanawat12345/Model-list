// firebase-config.js
// นำเข้าการตั้งค่า Firebase ของคุณที่สร้างใน Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCXrwONbVbkCPBRoWJ0z7iexY546fw82sU",
  authDomain: "model-list.firebaseapp.com",
  projectId: "model-list",
  storageBucket: "model-list.appspot.com",
  messagingSenderId: "734203110324",
  appId: "1:734203110324:web:121cd8501b7097969648e1"
};

// เริ่มต้น Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

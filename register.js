<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCJhR3gN-2NIDEdSO-GMkwEl3OlF1iNPgA",
    authDomain: "hotelulu-12fe1.firebaseapp.com",
    projectId: "hotelulu-12fe1",
    storageBucket: "hotelulu-12fe1.firebasestorage.app",
    messagingSenderId: "552939216628",
    appId: "1:552939216628:web:b7a90b570ecd94b26608a1",
    measurementId: "G-K1F4PGZN8F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
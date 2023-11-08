// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import react, { useEffect, useState } from "react";

// const firebaseConfig = {
//   apiKey: "AIzaSyChH0QrJ-98EJtFoSJbE_UEVYPKBCTRpzM",
//   authDomain: "fir-push-notification-cbeec.firebaseapp.com",
//   projectId: "fir-push-notification-cbeec",
//   storageBucket: "fir-push-notification-cbeec.appspot.com",
//   messagingSenderId: "191454453222",
//   appId: "1:191454453222:web:3768c8d9a9c4960ad08a27",
// };

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// function Notification() {
//   const [user, setUser] = useState(null);
//   const [messagingToken, setMessagingToken] = useState(null);

//   useEffect(() => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();

//     // Đăng nhập bằng Google
//     signInWithGoogle(auth, provider).then((user) => {
//       setUser(user);
//     });

//     // Lấy thông tin token từ FCM
//     getToken(messaging, {
//       vapidKey:
//         "BI4e_tB1ib0CgZzuCHLVZ9-o5umesEPq2_Xz3It-xws6kmjS0S_WGNSv6EfML4IWvtaFpj81PMmc_MvjLSoCEb8",
//     }).then((token) => {
//       setMessagingToken(token);
//     });

//     // Lắng nghe tin nhắn từ FCM
//     onMessage(messaging, (payload) => {
//       console.log("Received message: ", payload);
//     });
//   }, []);

//   const signInWithGoogle = async (auth, provider) => {
//     const result = await auth.signInWithPopup(provider);
//     return result.user;
//   };

//   return (
//     <div>
//       {user && (
//         <p>
//           Xin chào, {user.displayName}! Token của bạn từ FCM là {messagingToken}
//           .
//         </p>
//       )}
//       Xin chào
//     </div>
//   );
// }
// export default Notification;

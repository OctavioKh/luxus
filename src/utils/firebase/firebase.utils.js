// import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query, 
  // where
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLUhVzS4Boamq_1skem1PCn6GE5vj3TVA",
  authDomain: "luxus-237de.firebaseapp.com",
  projectId: "luxus-237de",
  storageBucket: "luxus-237de.appspot.com",
  messagingSenderId: "895257756336",
  appId: "1:895257756336:web:8adf54615c67a8f9f23175",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
return querySnapshot.docs.map(doc => doc.data())
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// const firebaseConfig = {
//   apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
//   authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
//   projectId: 'crwn-clothing-db-98d4d',
//   storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
//   messagingSenderId: '626766232035',
//   appId: '1:626766232035:web:506621582dab103a4d08d6',
// };




// export const getCategs = async () => {
//  const collRef = collection(db, 'categs' );
//  const q1 = query(collRef);
// const dSnapshot = await getDocs(q1);

// const cateMap = dSnapshot.docs.reduce((acc1, dSnapshot) => {
//   const { title, categorias } = dSnapshot.data();
//   acc1[title] = categorias;
//   const externo = categorias;
//   console.log("ext:", externo)
//   return acc1; 
// },{})
// return cateMap;
// };



// export const menus = () => {
//   const ayooo
// }

// .then((doc) => {
//   console.log({...doc.data()})
// })



// getCategs();
















// console.log("1st", {...acc});
    
// console.log("acc", acc);
// const newArray = [acc].map((item, index) => ({index, ...item}));
// console.log("last", newArray);

// export const getCates = async () => {
//   const catesRef = collection(db, 'cates' );
//   const q1 = query(catesRef);

//   const querySnapshot1 = await getDocs(q1);
//   const cateMap = querySnapshot1.docs.reduce((acc1, docSnapshot1) => {
//     const {title, items} = docSnapshot1.data();
//     acc1[title.toLowerCase()] = items;
//     console.log("acc1", {...acc1})

//   }, {});
//   return  cateMap;
// }

// const firebaseConfig = {
//   apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
//   authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
//   projectId: 'crwn-clothing-db-98d4d',
//   storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
//   messagingSenderId: '626766232035',
//   appId: '1:626766232035:web:506621582dab103a4d08d6',
// };


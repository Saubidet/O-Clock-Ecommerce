import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFV0rF3yeRD6KocC22ghnnouP49VJsqr8",
    authDomain: "react37555-c2025.firebaseapp.com",
    projectId: "react37555-c2025",
    storageBucket: "react37555-c2025.appspot.com",
    messagingSenderId: "940501192982",
    appId: "1:940501192982:web:11236803d6477ea0e84037"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export async function getItems() {
  const collectionRef = collection(database, "oclock");
  let snapshotDB = await getDocs(collectionRef);

  let dataDocs = snapshotDB.docs.map((documento) => {
    return { ...documento.data(), id: documento.id };
  });
  return dataDocs;
}

export async function getItemsByCategory(cat) {
  const collectionRef = collection(database, "oclock");
  const queryCategory = query(collectionRef, where("category", "==", cat));
  const respuesta = await getDocs(queryCategory);
  let dataDocs = respuesta.docs.map((documento) => {
    return { ...documento.data(), id: documento.id };
  });
  return dataDocs;
}

export async function getSingleItem(idItem) {
  try {
    const docRef = doc(database, "oclock", idItem);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } catch (error) {
    console.log(error);
  }
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(database, "orders");
  let respuesta = await addDoc(collectionRef, orderData);
  return respuesta.id;
}

export default database;
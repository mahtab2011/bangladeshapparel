import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/app/lib/firebase";
import { ApparelFactory } from "./factoryTypes";

const COLLECTION_NAME = "factories";

export async function createFactory(
  data: Omit<ApparelFactory, "createdAt">
) {
  return addDoc(collection(db, COLLECTION_NAME), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export async function getFactories() {
  const q = query(
    collection(db, COLLECTION_NAME),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })) as ApparelFactory[];
}
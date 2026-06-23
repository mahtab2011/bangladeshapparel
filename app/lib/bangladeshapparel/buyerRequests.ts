import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "@/app/lib/firebase";
import { BuyerRequest } from "./buyerRequestTypes";

const COLLECTION_NAME = "buyerRequests";

export async function createBuyerRequest(
  data: Omit<BuyerRequest, "createdAt" | "status">
) {
  return addDoc(collection(db, COLLECTION_NAME), {
    ...data,
    status: "new",
    createdAt: serverTimestamp(),
  });
}

export async function getBuyerRequests() {
  const q = query(
    collection(db, COLLECTION_NAME),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })) as BuyerRequest[];
}

export async function forwardBuyerRequestToFactory(params: {
  requestId: string;
  factoryId: string;
  factoryName: string;
}) {
  const ref = doc(db, COLLECTION_NAME, params.requestId);

  return updateDoc(ref, {
    status: "forwarded",
    forwardedAt: serverTimestamp(),
    forwardedToFactoryId: params.factoryId,
    forwardedToFactoryName: params.factoryName,
  });
}
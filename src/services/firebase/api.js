import { db } from "./setup";
import { doc, deleteDoc, updateDoc, addDoc, collection  } from "firebase/firestore";

export async function createMaintenance(data) {
    return await addDoc(collection(db, "maintenance"), data);
}

export async function deleteMaintenance(id) {
    return await deleteDoc(doc(db, "maintenance", id));
}

// export async function updateMaintenance(id, data) {
//     return await updateDoc(doc(db, "maintenances", id), data);
// }


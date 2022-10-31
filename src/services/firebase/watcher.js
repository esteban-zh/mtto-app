import { auth, db } from "./setup";
import { collection, query, onSnapshot } from "firebase/firestore";

export function watchUserChanges(callback) {
    const unsub = auth.onAuthStateChanged((user) => {
        if (user && !user.isAnonymous) {
            // console.log('logged in');
            // console.log("este es user en watcher", user)
            callback( {
                id: user.uid,
                email: user.email,
                displayName: user.displayName,
            });
        } else {
            // console.log("not logged in");
            callback(null);
        }
    });
    return unsub;
}
export function watchMaintenance(callback) {
    const q = query(collection(db, "maintenance"));
    const unsub = onSnapshot(q, (querySnapshot) => {
        const maintenances = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            maintenances.push({
                ...data,
                id: doc.id,
            });
        })
        callback(maintenances);
        // console.log("current maintenances", maintenances);
    })
    return unsub;
}


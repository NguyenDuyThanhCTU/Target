import {
    addDoc,
    collection,
    getDoc,
    getDocs,
    query,
    where,
    updateDoc,
    doc,
    serverTimestamp,
    deleteDoc,
    onSnapshot,
    orderBy,
  } from "firebase/firestore";
  import { db } from "../../Firebase";
import { useEffect, useState } from "react";
  
  export const addDocument = async (Collection:string, data:any) => {
    data.createdAt = serverTimestamp();
    try {
      const newDocument = await addDoc(collection(db, Collection), data);
  
      console.log("Document written with ID: ", newDocument.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  
  export const useGetDocument = (collectionName: string) => {
    const [data, getData] = useState<Array<any>>([]);
    useEffect(() => {
      const q = query(collection(db, collectionName), orderBy("createdAt"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let data: Array<any> = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        getData(data);
      });
      return () => unsubscribe();
    }, [collectionName]);
    return data;
  };
  
  export const getDocumentByField = async (Collection:string, field:string, value:any) => {
    try {
      const q = query(collection(db, Collection), where(field, "==", value));
      const querySnapshot = await getDocs(q);
      const data: Array<any>= [];
  
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
  
      return data;
    } catch (error) {
      console.error("Error get document: ", error);
    }
  };
  
  export const updateDocument = async (Collection:string, id:string, newData:any) => {
    await updateDoc(doc(db, Collection, id), newData);
  };
  
  export const delDocument = async (Collection:string, id:any) => {
    try {
      await deleteDoc(doc(db, Collection, id));
    } catch (error) {
      console.log(error);
    }
  };
  
import React, { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config';

export const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const getDocuments = () => {
            projectFirestore.collection(collectionName)
                .orderBy("createdAt", "desc")
                .onSnapshot((snapshot) => {
                    let documents = [];
                    snapshot.forEach(doc => {
                        documents.push({ ...doc.data(), id: doc.id })
                    });
                    setDocs(documents);
                });
        }

        getDocuments();
    }, [collectionName]);

    return { docs };
}

import React, { useEffect, useState } from 'react'
import { projectFirestore, projectStorage, timestamp } from '../firebase/config';

export const useStorage = (file) => {
    const [progress, setProgress] = useState(20);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=> {
        // refernces
        const storageRef = projectStorage.ref(file.name);
        // get collection images or create if not existing
        const collectionRef = projectFirestore.collection("images");

        storageRef.put(file).on('state_changed', (snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage)
        }), err=> {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            collectionRef.add({
                url, 
                createdAt: timestamp()
            })
            setUrl(url);
        });
    }, [file]);

    return {
        progress,
        url,
        error
    }
}


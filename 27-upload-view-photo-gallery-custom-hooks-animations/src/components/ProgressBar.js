import { motion } from 'framer-motion/dist/framer-motion';
import React, { useEffect } from 'react'
import { useStorage } from '../hooks/useStorage'

export const ProgressBar = ({ file, setFile }) => {
    const { url, progress, error } = useStorage(file);
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div className='progress-bar' 
        initial={{width: 0}}
        animate={{width: progress + "%"}}
        ></motion.div>
    )
}

import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react'
import { useFirestore } from '../hooks/useFirestore'

export const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore("images");

    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <motion.div
                    className='img-wrap'
                    key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                    whileHover={{ opacity: 1 }}
                    layout
                >
                    <motion.img src={doc.url} alt="alt"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

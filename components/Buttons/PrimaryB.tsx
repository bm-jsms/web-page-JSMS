'use client';
import React from 'react';
import { motion } from 'framer-motion';
export type texts = {
	text: string;
};

const PrimaryB = ({ text }: texts) => {
	return (
		<motion.button
			className='border-2 px-5 py-2 rounded-2xl font-semibold text-xl border-white text-white hover:bg-gradient-to-br from-blue-500 to-purple-800'
			whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgb(255,255,255)' }}
			whileTap={{ scale: 0.9 }}
		>
			{text}
		</motion.button>
	);
};

export default PrimaryB;

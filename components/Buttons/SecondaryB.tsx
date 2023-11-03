'use client';
import React from 'react';
import { motion } from 'framer-motion';
export type texts = {
	text: string;
};

const SecondaryB = ({ text }: texts) => {
	return (
		<motion.button
			className='border-2 px-5 py-2 rounded-2xl font-semibold text-xl border-white text-white bg-purple-800'
			animate={{ scale: 1.1, boxShadow: '0px 0px 6px rgb(200,255,255)' }}
			transition={{
				duration: 0.5,
				ease: 'easeInOut',
				repeat: Infinity,
				repeatType: 'reverse',
			}}
		>
			{text}
		</motion.button>
	);
};

export default SecondaryB;

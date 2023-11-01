'use client';
import { motion } from 'framer-motion';

export const transitionsMotion = {
	transition: {
		duration: 3,
	},
	initial: {
		opacity: 0,
		bottom: '3rem',
	},
	animate: {
		opacity: 1,
		bottom: '0rem',
	},
	// whileInView: {
	// 	opacity: 1,
	// },
};

const FramerT = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			transition={transitionsMotion.transition}
			initial={transitionsMotion.initial}
			// whileInView={transitionsMotion.whileInView}
			animate={transitionsMotion.animate}
		>
			{children}
		</motion.div>
	);
};

export default FramerT;

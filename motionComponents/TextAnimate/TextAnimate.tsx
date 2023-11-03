'use client';
import { motion } from 'framer-motion';
import { Transition } from 'framer-motion';

export const AnimateT: {
	initial: { opacity: number; x: number };
	whileInView: { opacity: number; x: number };
	transition: Transition;
} = {
	initial: {
		opacity: 0,
		x: -200,
	},
	whileInView: {
		opacity: 1,
		x: 0,
	},
	transition: {
		duration: 1,
		ease: 'easeOut',
	},
};

const MotionT: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<motion.div
			initial={AnimateT.initial}
			whileInView={AnimateT.whileInView}
			transition={AnimateT.transition}
		>
			{children}
		</motion.div>
	);
};
export default MotionT;

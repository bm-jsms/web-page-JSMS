'use client';
import { motion } from 'framer-motion';
import { Transition } from 'framer-motion';

export const repeatMotion: {
	transition: Transition;
	animate: { rotate: number[]; scale: number };
} = {
	transition: {
		duration: 3,
		repeat: Infinity,
		repeatType: 'reverse',
	},
	animate: {
		rotate: [-50, 30],
		scale: 1.2,
	},
};

const RepeatA: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<motion.div
			transition={repeatMotion.transition}
			animate={repeatMotion.animate}
		>
			{children}
		</motion.div>
	);
};
export default RepeatA;

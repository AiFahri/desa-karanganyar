import { motion } from "framer-motion";

const Animation = ({ children, delay = 0, duration = 0.6, y = 50 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default Animation;

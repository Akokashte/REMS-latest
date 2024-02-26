import '../styles/counter.css';
import CountingLogic from './CountingLogic';
import { motion } from "framer-motion";

const Counter = () => {
    return (
        <>
            <motion.div className="wrapper"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="container">
                    <i className="fas fa-utensils"></i>
                    <span className="num" ><CountingLogic val={30} /></span>
                    <span className="text">Top Experts</span>
                </div>
                <div className="container">
                    <i className="fas fa-smile-beam"></i>
                    <span className="num" ><CountingLogic val={50} /></span>
                    <span className="text">Our Courses</span>
                </div>
                <div className="container">
                    <i className="fas fa-list"></i>
                    <span className="num" ><CountingLogic val={2000} /></span>
                    <span className="text">Students</span>
                </div>
                <div className="container">
                    <i className="fas fa-star"></i>
                    <span className="num" ><CountingLogic val={30000} /></span>
                    <span className="text">Five Stars</span>
                </div>
            </motion.div>

        </>
    )
}

export default Counter

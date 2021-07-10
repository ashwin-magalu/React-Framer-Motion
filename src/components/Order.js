import React, { useEffect } from 'react';
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { // initial
    x: "100vw",
    opacity: 0,
  },
  visible: { // animate
    opacity: 1,
    x: 0,
    transition: { // transition on animate
      type: "spring", stiffness: 120, mass: 0.4, damping: 8,
      when: "beforeChildren", staggerChildren: 0.4
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
  }
}

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000);
  }, [setShowModal])

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      {
        pizza.toppings.length > 0 ?
          <motion.div variants={childVariants}>
            {
              pizza.toppings.map(topping => <div key={topping}>{topping}</div>)
            }
          </motion.div>
          :
          <motion.div variants={childVariants}>No Toppings added</motion.div>
      }
    </motion.div>
  )
}

export default Order;
import React from 'react';
import { Link } from 'react-router-dom';
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
      delay: 0.2, type: "spring", stiffness: 120
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
}

const nextVariants = {
  hidden: {
    x: "-100vw"
  },
  visible: {
    x: 0,
    transition: {
      type: "spring", stiffness: 120
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 0 8px rgb(255,255,255)",
    textShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity, // changes scale infinite times 
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      /* initial={{ x: "100vw" }}
      animate={{ x: 0 }} 
      transition={{ delay: 0.2, type: "spring", stiffness: 120}} */
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <motion.ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, color: '#f8e112', originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </motion.ul>

      {pizza.base && (
        <motion.div className="next"
          /* initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }} */
          variants={nextVariants}
        /* initial="hidden"
        animate="visible"
        not needed as these are same as parent names and are already defined in parent
        */
        >
          <Link to="/toppings">
            <motion.button
              /* whileHover={{
                scale: 1.1, fontWeight: "bold", boxShadow: "0 0 8px rgb(255,255,255)"
              }} */
              variants={buttonVariants}
              whileHover="hover"
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
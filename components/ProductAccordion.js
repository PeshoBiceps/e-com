import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataAC } from "../utils/accordionData";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const ProductAccordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className='my-8'>
      {DataAC.map((item, index) => (
        <React.Fragment key={index}>
          <div onClick={() => toggle(index)} className='flex items-center justify-between border-b py-1 md:cursor-pointer'>
            <h1>{item.question}</h1>
            <span>{clicked === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </div>
          <AnimatePresence initial={false}>
            {clicked === index ? (
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.2 }}
              >
                <div className='my-3'>
                  <p>{item.answer}</p>
                  <br />
                  <p>{item.asnwerb}</p>
                </div>
              </motion.section>
            ) : null}
          </AnimatePresence>
        </React.Fragment>
      ))}
    </div>

  )
}

export default ProductAccordion

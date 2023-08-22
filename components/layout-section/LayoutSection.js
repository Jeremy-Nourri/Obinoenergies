import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

export default function LayoutSection({ children, categoryName }) {

  const variants = {
    hidden: { opacity: 0, y: 300},
    visible: { 
      opacity: 1, y: 0, 
      transition: {
        type: "spring",
        duration: 1.5 
      }
    },
  };

  return (
    <>
      <Element name={categoryName} >

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
        >

          <h2 className="text-2xl text-center text-white font-bold bg-blue mb-2 py-4 mx-2 rounded-t-2xl">
            <span className="block w-72 border-orange border-b-4 pb-2 mx-auto">
              {categoryName}
            </span>
          </h2>

          <div className="mt-4 mb-36 px-6 md:px-16 ">
            {children}
          </div>

        </motion.div>

      </Element>

    </>
  );
}
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

export default function LayoutSection({ children, categoryName }) {

  const variants = {
    hidden: { opacity: 0, y: 250},
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

          <h2 className="w-[96%] text-2xl md:text-3xl text-center text-white font-bold bg-blue mb-2 py-4 md:py-6 mx-auto rounded-t-2xl md:rounded-t-3xl">
            <span className="block w-[74%] border-orange border-b-4 md:border-b-[6px] pb-2 md:pb-4 mx-auto">
              {categoryName}
            </span>
          </h2>

          <div className="mt-4 mb-32 px-6 md:px-16 ">
            {children}
          </div>

        </motion.div>

      </Element>

    </>
  );
}
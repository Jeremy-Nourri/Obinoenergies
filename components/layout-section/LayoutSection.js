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

          <h2 className="w-[96%] text-2xl text-center text-white font-bold bg-blue mb-2 py-4 mx-auto rounded-t-2xl md:text-4xl md:py-10 md:rounded-t-3xl lg:px-20">
            <span className="block w-[74%] border-orange border-b-4 pb-2 mx-auto md:pb-4 md:border-b-[6px] ">
              {categoryName}
            </span>
          </h2>

          <div className="mt-4 mb-32 px-6 md:px-16 lg:px-32 ">
            {children}
          </div>

        </motion.div>

      </Element>

    </>
  );
}
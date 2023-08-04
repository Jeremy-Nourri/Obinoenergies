import { useState, useEffect } from 'react';
import { AiFillCheckCircle, AiOutlineClose,  AiFillCloseCircle } from "react-icons/ai";

function Modal ({ onClose, type }) {
  const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//       onClose();
//     }, 9000);

//     return () => clearTimeout(timer);
//   }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
        <div className="relative bg-white shadow rounded-lg p-8">
            {type === "success" ? (
            <div className="flex items-center justify-center">
                <AiFillCheckCircle className="text-green-500 w-8 h-8 mr-2" />
                <p className="text-green-500" >Votre message a bien été envoyé !</p>
                <AiOutlineClose 
                    className="absolute top-2 right-2 cursor-pointer text-black" 
                    onClick={handleClose}
                />
            </div>

            ) : (
            <div className="flex items-center justify-center">
                <AiFillCloseCircle className="w-8 h-8 mr-2 text-red-600" />
                <p className="text-red-600">Échec d'envoi du formulaire</p>
                <AiOutlineClose 
                className="absolute top-2 right-2 cursor-pointer text-black" 
                onClick={handleClose}
            />
            </div>
            )}

        </div>
    </div>
  );
};

export default Modal;
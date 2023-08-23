import { useRef, useState } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { BsFillTelephoneFill, BsFillEnvelopeAtFill } from 'react-icons/bs';

import { getMaterials } from "@/data/dataServices";

import Modal from "@/components/ui/Modal";
import EmailForm from "../ui/EmailForm";

export default function Contact() {

  const materials = getMaterials();

  const [modalType, setModalType] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const handleModalClose = () => {
    setShowModal(false);
    setModalType(null);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      if (result.status === 200) {
        setShowModal(true);
        setModalType("success"); 
        form.current.reset();
      }
    } catch (error) {
      setShowModal(true);
    }
  };      

  const form = useRef();

  return (
    <>      
      <div className="flex flex-col items-center justify-center px-2 my-8">

        <div className="flex content-center justify-center">
          <BsFillTelephoneFill className="text-xl md:text-2xl text-orange mr-2 md:mr-4" />
          <p className="text-lg leading-none underline font-semibold mb-5 md:mb-7 md:text-xl">
              Par téléphone
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a 
            className="w-48 text-lg md:text-xl md:p-4 text-white font-semibold text-center bg-orange rounded-2xl p-3"
            href="tel:0700000000"
            title="Appeler Obino Energies"
            role="button"
          >
            0700000000
          </a>

        </div>

      </div>
      
      <div className="flex justify-center items-center mt-12">
        <BsFillEnvelopeAtFill className="text-xl md:text-3xl text-orange mr-2 md:mr-4" />
        <p className="text-lg md:text-xl leading-none underline font-semibold">
          Par e-mail
        </p>
      </div>

      <form 
        className="bg-white shadow-lg rounded-lg py-2 px-6 md:rounded-xl md:py-10 md:px-14 md:shadow-xl lg:px-28 lg:py-6 lg:mt-8 lg:"
        ref={form}
        onSubmit={sendEmail}
      >

        <div className="w-full md:flex items-center justify-center mt-5">
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="name" className="text-base md:text-lg font-semibold leading-none">
              Nom
            </label>
            <input
              className="text-base md:text-lg leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded " 
              tabIndex="0"
              arial-label="Entrez votre nom"
              type="name"
              name="name"
              id="name"
              placeholder="Entrez votre nom" 
              required
              autoComplete="on"
            />
          </div>
          <EmailForm />
        </div>

        <div className="w-full md:flex items-center justify-center mt-5">
          <div className="flex flex-col md:w-1/2">
            <label htmlFor="phone" className="text-base md:text-lg font-semibold leading-none">
              Téléphone
            </label>
            <input
              className="text-base md:text-lg leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded "
              tabIndex="0"
              arial-label="Entrez votre numéro de téléphone"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Entrez votre numéro de téléphone"
              required
              autoComplete="name"
            />
          </div>

          <div className="md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-5">
            <label htmlFor="address" className="text-base md:text-lg font-semibold leading-none">
              Adresse
            </label>
            <input
              className="text-base md:text-lg leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded "
              tabIndex="0"
              arial-label="Entrez votre adresse"
              type="address"
              name="address"
              id="address"
              placeholder="Entrez votre adresse"
              required
              autoComplete="name"
            />
          </div>
        </div>

        <div className=" w-full md:flex items-center justify-center mt-5">
          <div className="md:w-1/2 flex flex-col">
            <label htmlFor="prestation" className="text-base md:text-lg font-semibold leading-none">
              Type d'intervention
            </label>
            <select
              className="text-base md:text-lg leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded "
              tabIndex="0"
              name="prestation"
              id="prestation"
              arial-label="Sélectionnez le type d'intervention"
              placeholder="Sélectionnez le type d'intervention"
            >
              <option value="Installation">
                Installation
              </option>
              <option value="Dépannage">
                Dépannage
              </option>
              <option value="Entretien">
                Entretien
              </option>
            </select>
          </div>

          <div className="flex flex-col mt-5 md:ml-6 md:mt-0 md:w-1/2">
            <label htmlFor="material" className="text-base md:text-lg font-semibold leading-none">
              Matériel concerné
            </label>
            <select 
              className="text-base md:text-lg leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded " 
              tabIndex="0"
              name="material"
              id="material"
              arial-label="Sélectionnez le matériel"
              placeholder="Sélectionnez le matériel"
            >
              {materials.map((material, index) => (
                <option key={index} value={material}>
                  {material}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="w-full flex flex-col justify-center mt-5">
            <label htmlFor="message" className="text-base md:text-lg font-semibold leading-none">
              Message
            </label>
            <textarea
              className="h-36 text-base md:text-lg p-3 focus:border-orange mt-4 border rounded resize-none" 
              tabIndex="0"
              aria-label="leave a message"
              type="name"
              name="message"
              id="message"
              required
            >
            </textarea>
          </div>
        </div>

        <p className="text-xs md:text-base text-justify my-4">
          En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de devis et de la relation commerciale qui peut en découler.
        </p>

        <div className="flex items-center justify-center w-full">
          <button type="submit" className="w-44 text-lg md:text-xl text-white font-semibold text-center bg-orange rounded-2xl p-3 md:p-4">
             Envoyer
          </button>
        </div>

      </form>

      {showModal &&
        <Modal onClose={handleModalClose} type={modalType} />
      }

    </>
  );
}
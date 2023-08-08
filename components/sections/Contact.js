import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { BsFillTelephoneFill, BsFillEnvelopeAtFill } from 'react-icons/bs';

import { getMaterials } from "@/data/dataServices";

import Modal from "@/components/ui/Modal";
import EmailForm from "../ui/EmailForm";
import CategorieTitle from "../ui/CategorieTitle";

export default function Contact() {

  const materials = getMaterials();

  const [modalType, setModalType] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showNumberPhone, setShowNumberPhone] = useState(false);
  
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
    <div id="Contact" className="w-full my-20 px-6">

      <CategorieTitle text="Contactez-nous" />
      
      <div className="flex flex-col items-center justify-center px-2 my-8">

        <div className="flex content-center justify-center">
          <BsFillTelephoneFill className="text-xl text-orange mr-2" />
          <p className="text-lg leading-none underline font-semibold mb-5">
              Par téléphone
          </p>
        </div>

        <div className="flex flex-col items-center">
          <button type="button" onClick={setShowNumberPhone} className="w-48 text-lg text-white font-semibold text-center bg-orange rounded-2xl p-3">
            {showNumberPhone ? "0700000000" : "Afficher le numéro"}
          </button>

        </div>

      </div>
      
      <div className="flex content-center justify-center">
        <BsFillEnvelopeAtFill className="text-xl text-orange mr-2" />
        <p className="text-lg leading-none underline font-semibold">
          Par e-mail
        </p>
      </div>

      <form 
        className="bg-white shadow rounded py-2 lg:px-28 px-6"
        ref={form}
        onSubmit={sendEmail}
      >

        <div className="md:flex items-center mt-5">
          <div className="md:w-72 flex flex-col">
            <label htmlFor="name" className="text-base font-semibold leading-none">
              Nom
            </label>
            <input
              className="text-base leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded " 
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

        <div className="md:flex items-center mt-5">
          <div className="md:w-72 flex flex-col">
            <label htmlFor="phone" className="text-base font-semibold leading-none">
              Téléphone
            </label>
            <input
              className="text-base leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded "
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

          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-5">
            <label htmlFor="address" className="text-base font-semibold leading-none">
              Adresse
            </label>
            <input
              className="text-base leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded "
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

        <div className="md:flex items-center mt-5">
          <div className="md:w-72 flex flex-col">
            <label htmlFor="prestation" className="text-base font-semibold leading-none">
              Type d'intervention
            </label>
            <select
              className="text-base leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded "
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

          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-5">
            <label htmlFor="material" className="text-base font-semibold leading-none">
              Matériel concerné
            </label>
            <select 
              className="text-base leading-none text-gray-900 p-3 focus:border-orange mt-4 border rounded " 
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
          <div className="w-full flex flex-col mt-5">
            <label htmlFor="message" className="text-base font-semibold leading-none">
              Message
            </label>
            <textarea
              className="h-36 text-base p-3 focus:border-orange mt-4 border rounded resize-none" 
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

        <p className="text-xs text-justify my-4">
          En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de devis et de la relation commerciale qui peut en découler.
        </p>

        <div className="flex items-center justify-center w-full">
          <button type="submit" className="w-44 text-lg text-white font-semibold text-center bg-orange rounded-2xl p-3">
             Envoyer
          </button>
        </div>

      </form>

      {showModal &&
        <Modal onClose={handleModalClose} type={modalType} />
      }

    </div>
  );
}
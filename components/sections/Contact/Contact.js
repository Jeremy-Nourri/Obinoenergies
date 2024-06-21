import { useRef, useState } from "react";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import emailjs from '@emailjs/browser';
import { BsFillTelephoneFill, BsFillEnvelopeAtFill } from 'react-icons/bs';

import { getMaterials, getServices } from "@/data/dataServices";


import InputForm from "./InputForm";
import SelectForm from "./SelectForm";

const Modal = dynamic(() => import('@/components/ui/Modal'), {
  ssr: false,
});


export default function Contact() {

  const materials = getMaterials();
  const services = getServices();

  const [modalType, setModalType] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  
  const handleModalClose = () => {
    setShowModal(false);
    setModalType(null);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);

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
        setLoadingSubmit(false); 
        form.current.reset();
      }
    } catch (error) {
      setShowModal(true);
    }
  };      

  const form = useRef();

  return (
    <>      
      <div className="flex flex-col items-center justify-center my-8 lg:my-0">

        <div className="flex content-center justify-center">
          <BsFillTelephoneFill className="text-xl md:text-2xl text-orange mr-2 md:mr-4" />
          <p className="text-lg leading-none underline font-semibold mb-5 md:mb-7 md:text-xl">
              Par téléphone
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a 
            className="w-48 text-lg md:text-xl md:p-4 text-white font-semibold text-center bg-orange rounded-2xl p-3"
            href="tel:0781636256"
            title="Appeler Obino Energies"
            role="button"
          >
            07 81 63 62 56
          </a>

        </div>

      </div>
      
      <div className="flex justify-center items-center mt-12">
        <BsFillEnvelopeAtFill className="text-xl md:text-3xl text-orange mr-2 md:mr-4" />
        <p className="text-lg md:text-xl leading-none underline font-semibold">
          Par e-mail
        </p>
      </div>

      <p className="text-center my-4 text-sm md:text-lg">
          obinojonathan25@gmail.com
      </p>

      <form 
        className="bg-white shadow-lg rounded-lg py-2 px-6 md:rounded-xl md:py-10 md:px-14 md:shadow-xl lg:px-16 lg:py-6 lg:mt-8 lg:"
        ref={form}
        onSubmit={sendEmail}
      >

        <div className="w-full md:flex md:items-center md:justify-between">
          <InputForm
            label="Nom*"
            name="name"
            type="text"
            pattern="^[a-zA-Z]+(([',. \-][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Doit contenir que des lettres et des espaces"
            errorMessage={"Le nom est obligatoire"}
          />
          <InputForm
            label="Adresse e-mail*"
            name="email"
            type="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            title="Doit contenir une adresse valide"
            errorMessage={"Une adresse e-mail valide est obligatoire"}
          />
        </div>

        <div className="w-full md:flex md:items-center md:justify-between">
          <InputForm
            label="Téléphone*"
            name="phone"
            type="tel"
            pattern="[0-9]{10}"
            title="Doit contenir 10 chiffres"
            errorMessage={"Un numéro de téléphone valide est obligatoire"}
          />
          <InputForm
            label="Commune*"
            name="address"
            type="text"
            pattern="^[a-zA-Z]+(([',. \-][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Peut contenir que des lettres, des espaces et des tirets"
            errorMessage={"L'adresse est obligatoire"}
          />
        </div>

        <div className="w-full md:flex md:items-center md:justify-between">
          <SelectForm
            label="Type d'intervention"
            name="prestation"
            options={services}
          />
          <SelectForm
            label="Matériel"
            name="material"
            options={materials}
          />
        </div>           

        <div>
          <div className="w-full mt-5 flex flex-col justify-center">
            <label htmlFor="message" className="text-base md:text-lg font-semibold leading-none">
              Message*
            </label>
            <textarea
              className="h-36 text-base md:text-lg p-3 bg-slate-50 focus:border-orange mt-4 border rounded resize-none" 
              aria-label="Votre message"
              name="message"
              id="message"
              required
              maxLength="500"
              rows="5"
            >
            </textarea>
          </div>
        </div>

        <p className="text-xs md:text-base text-justify mt-4">
          En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de devis et de la relation commerciale qui peut en découler. 
        </p>
        <p className="text-xs md:text-base text-justify mb-4">
          Consulter notre <Link href="/mentions-legales" className="text-orange underline">politique de confidentialité</Link>.
        </p>

        <div className="flex items-center justify-center w-full">
          <button type="submit" className="w-44 mb-2 text-lg md:text-xl text-white font-semibold text-center bg-orange hover:bg-opacity-90 rounded-2xl p-3 md:p-4">
            {loadingSubmit ?
              <span className="loading loading-spinner loading-md"></span>
              : 
              "Envoyer"
            }
          </button>
        </div>

      </form>

      {showModal &&
        <Modal onClose={handleModalClose} type={modalType} />
      }

    </>
  );
}
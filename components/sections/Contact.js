import { getMateriels } from "@/data/dataServices";

export default function Contact() {

    const materiels = getMateriels();

    return (
        <div className="w-full flex items-center justify-center my-12">
            <form className="bg-white dark:bg-gray-800 shadow rounded py-16 lg:px-28 px-8">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-white">
                    Contactez-nous
                </p>
                <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                            Nom
                        </label>
                        <input
                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" 
                            tabIndex="0"
                            arial-label="Entrez votre nom"
                            type="name"
                            name="user_name"
                            placeholder="Entrez votre nom" 
                        />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                            Adresse e-mail
                        </label>
                        <input 
                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                            tabIndex="0"
                            arial-label="Entrez votre adresse e-mail" 
                            type="email"
                            placeholder="Entrez votre adresse e-mail"
                        />
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                            Le type d'intervention
                        </label>
                        <select
                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                            tabIndex="0"
                            role="input"
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
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                            Matériel concerné
                        </label>
                        <select 
                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" 
                            tabIndex="0"
                            arial-label="Sélectionnez le matériel"
                            placeholder="Sélectionnez le matériel"
                        >
                            {materiels.map((materiel, index) => (
                                <option key={index} value={materiel}>
                                    {materiel}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="text-base font-semibold leading-none text-gray-800 dark:text-white">
                            Message
                        </label>
                        <textarea
                            className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" 
                            tabIndex="0"
                            aria-label="leave a message"
                            role="textbox"
                            type="name"
                        >
                        </textarea>
                    </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 dark:text-gray-200 mt-4">
                    En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de devis et de la relation commerciale qui peut en découler.
                </p>
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 text-base font-semibold text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}


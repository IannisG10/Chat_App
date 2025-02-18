import React from "react";
import Input from "../ui/Input";

const ArticleForm: React.FC = () =>{
    return(
        <div className="w-1/2 m-4">
            <form action="" className=" flex flex-col gap-3 border border-gray-300 p-3">
                <div className=" flex  gap-2 w-full" >
                    <div className=" flex flex-col w-full">
                        <label className="text-sm font-semibold">Nom</label>
                        <Input placeholder="ex: SSD 1To "
                                className=" w-full bg-slate-200 p-2 outline-none font-medium border focus:border-gray-300"
                        />
                    </div>
                    <div className=" flex flex-col w-full">
                        <label className="text-sm font-semibold">Description</label>
                        <Input placeholder="Description de l'article "
                                className=" w-full bg-slate-200 p-2 outline-none font-medium border focus:border-gray-300"
                        />  
                    </div> 
                </div>
                <div className=" flex items-center gap-2 w-full">
                    <div className=" flex flex-col">
                            <label className="text-sm font-semibold">Quantite</label>
                            <input type="number" 
                            className=" w-full bg-slate-200 p-2 outline-none font-medium border focus:border-gray-300"
                            defaultValue={1}
                            />
                    </div>
                    <div className=" flex flex-col w-full">
                            <label className="text-sm font-semibold"> Categorie</label>
                            <select className=" w-full bg-slate-200 p-2 outline-none font-medium border focus:border-gray-300">
                                <option value="men">mens clothes</option>
                                <option value="men">women clothes</option>
                            </select>
                    </div>
                </div>
                {/* upload image */}
                <div className=" w-full flex justify-center items-center size-36 bg-slate-200 border border-gray-300">
                    Upload an image
                </div>
                <div className=" flex justify-between items-center w-full" >
                    <button className="p-2 bg-slate-900 text-white fon-medium border border-gray-700"
                        type="submit"
                    >
                        Enregistrer
                    </button>
                    <button className="p-2 bg-slate-300 text-gray-800  fon-medium border border-gray-400">
                        Reinitialiser
                    </button>
                </div>

            
            </form>
        </div>
    )
}

export default ArticleForm
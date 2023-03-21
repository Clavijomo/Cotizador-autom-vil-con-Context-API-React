import { MARCAS, YEARS } from "../constants";

function Formulario() {
    return (
        <>
            <form>
                <div className="my-5">
                    <label className="block mb-3 font-semibold text-gray-400 uppercase">
                    Marca
                    </label>
                    <select
                    name="marca"
                    className="w-full p-3 bg-white border border-gray-200"
                    >
                    <option value="">-- Seleccionar Marca --</option>
                    {MARCAS.map(marca => (
                        <option
                        key={marca.id}
                        value={marca.id}
                        >
                        {marca.nombre}
                        </option>
                    ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-semibold text-gray-400 uppercase">
                    Año
                    </label>
                    <select
                    name="marca"
                    className="w-full p-3 bg-white border border-gray-200"
                    >
                    <option value="">-- Seleccionar Año --</option>
                    {YEARS.map(year => (              
                        <option                  
                            key={year}
                            value={year}
                        >              
                        {year}    
                        </option>
                        ))}
                    </select>
                </div>
            </form>
        </>
    )
}

export default Formulario;
import { MARCAS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"

const Resultado = () => {

  const { resultado, datos } = useCotizador();
  const {marca, plan, year} = datos;

  if(resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-semibold text-2xl">
        Resumen
      </h2>

      <p className="my-2">
        <span className="font-semibold">Marca:  
          {marca}
        </span>
      </p>
    </div>
  )
}

export default Resultado;
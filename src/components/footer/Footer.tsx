import { productos, piezas, services } from './ListItem';
import { Botton } from '../ui/Botton';
import Logo from '../../assets/logo.jpg'

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t-[2px] border-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm text-gray-400 max-w-xs">
              Diseño y creación de joyas en oro 18 kilates, plata y esmeraldas finas. Pureza y autenticidad garantizadas.
            </p>
     
              <img src={Logo} alt="Imagen logo" className="size-40" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {services.map((serviceName, index) => (
                <li key={index}>
                  <Botton
                    label={serviceName}
                    baseMessage="Hola, estoy interesado en un Servicio de: "
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Productos
            </h4>
            <ul className="space-y-2 text-sm">
              {productos.map((serviceName, index) => (
                <li key={index}>
                  <Botton
                    label={serviceName}
                    baseMessage="Hola, estoy interesado en un joya"
                    phone='573018001301'
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Tipos de Trabajo
            </h4>
            <ul className="space-y-2 text-sm">
              {piezas.map((serviceName, index) => (
                <li key={index}>
                  <Botton
                    label={serviceName}
                    baseMessage="Hola, estoy interesado en el Servicio de: "
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500 space-y-1">
          <p>
            © {new Date().getFullYear()} Zafiro. Todos los derechos
            reservados.
          </p>
          <p className="text-gray-400">
            Diseñado y desarrollado por{' '}
            <span className="font-bold text-[#80E6BD]">Nicol Leal Rivera </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
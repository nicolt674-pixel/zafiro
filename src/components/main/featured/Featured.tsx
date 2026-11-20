

import Video from '../../../assets/videos/principal.mp4';
import { ButtonCta } from '../../ui/ButtonCta';

export const Featured = () => {
  return (
    <div className="relative ">
      <div className="relative py-32 max-w-6xl mx-auto px-8 z-20 ">
        <div className="max-w-125 text-white">
          <h1 className="md:text-4xl text-[20px] font-semibold leading-8 text-center md:text-left md:leading-12.5 ">
            Joyería{' '}
            <span className="text-[#80E6BD]">Insignia Colombiana </span> en Oro, Plata Ley y
            <span className="text-[#80E6BD]"> Esmeraldas Finas</span>
          </h1>
          <p className="my-6 md:text-lg text-sm text-center md:text-left">
            Diseño exclusivo, acabados finos y piezas garantizadas.
            <span className="text-[#80E6BD]"> Más de 10 años</span>. de experiencia  en oro 18k y plata ley,
            <span className="text-[#80E6BD]"> creando joyas únicas </span>
            en oro 18k y plata ley,{' '}
            <span className="text-[#80E6BD]">
              con gemas auténticas y atención a medida
            </span>
            .
          </p>

          <div className="flex md:flex-row flex-col items-center gap-6">
            <ButtonCta
              label=" Cotizar joya"
              baseMessage="Hola, estoy interesado en: "
            />
            <div className="flex items-center gap-2 group cursor-pointer">
              <a
                href="https://wa.me/573018001301?text=Necesito más información sobre un producto "
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-white font-medium inline-block transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2"
              >
                Más Información
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-sky-300 to-[#80E6BD] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 z-10 opacity-80 bg-gradient-to-r from-black from-30% bg-transparent w-full h-full"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 z-0 w-full h-full object-cover max-w-none"
      >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

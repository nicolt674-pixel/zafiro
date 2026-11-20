import Soporte from '../../../assets/images/products/anillos-oro.jpg';
import Colgante from '../../../assets/images/products/colgante-esme.jpg';
import { listServices, listItems } from './ListItemCard';
import { productos, services } from '../../footer/ListItem';
import { useState } from 'react';
import { ModalCard } from './ModalCard';

const modalDataMap = {
  services: {
    title: 'Nuestros Servicios',
    subTitle: 'Zafiro',
    list: services,
    phone: '573018001301'
  },
  productos: {
    title: 'Catálogo de Productos',
    subTitle: 'Zafiro',
    list: productos,
    phone: '573018001301'
  },
};

type ContentKey = keyof typeof modalDataMap | null;

export const CardDouble = () => {
  const [open, setOpen] = useState(false);
  const [contentKey, setContentKey] = useState<ContentKey>(null);

  const handleOpen = (key: ContentKey) => {
    if (key) {
      setContentKey(key);
      setOpen(true);
    } else {
      setOpen(false);
      setContentKey(null);
    }
  };

  const handleClosed = () => handleOpen(null);

  const modalContent = contentKey ? modalDataMap[contentKey] : null;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 p-4 bg-black ">
        <div className="relative flex-1 rounded-xl overflow-hidden shadow shadow-white">
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 text-white">
            <div className="max-w-lg">
              {listServices.map(
                ({ title, subTitle, paragraph, buttonPrimary }, index) => (
                  <div key={index}>
                    <p className="text-sm font-semibold uppercase tracking-widest mb-1">
                      {subTitle}
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4">
                      {title}
                    </h2>
                    <p className="text-base sm:text-lg font-light mb-2">
                      {paragraph}
                    </p>
                    <button
                      onClick={() => handleOpen('services')}
                      className="py-3 px-8 inline-block cursor-pointer border-2 border-[#56DDA7] 
                     text-sm hover:bg-[#56DDA7] hover:text-black rounded-full font-semibold 
                     transition transform duration-300 hover:scale-110"
                    >
                      {buttonPrimary}
                    </button>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <img
            src={Soporte}
            alt="Oakley Meta Vanguard glasses"
            className="w-full h-80 lg:h-[600px] object-cover"
          />
        </div>
        <div className="relative flex-1 rounded-xl overflow-hidden shadow shadow-white">
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 text-white">
            <div className="max-w-lg">
              {listItems.map(
                ({ title, subTitle, paragraph, buttonPrimary }, index) => (
                  <div key={index}>
                    <p className="text-sm font-semibold uppercase tracking-widest mb-1">
                      {subTitle}
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4">
                      {title}
                    </h2>
                    <p className="text-base sm:text-lg font-light mb-2">
                      {paragraph}
                    </p>
                    <button
                      onClick={() => handleOpen('productos')}
                      className="py-3 px-8 inline-block cursor-pointer border-2 border-[#56DDA7] 
                     text-sm hover:bg-[#56DDA7] hover:text-black rounded-full font-semibold 
                     transition transform duration-300 hover:scale-110"
                    >
                      {buttonPrimary}
                    </button>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <img
            src={Colgante}
            alt="Accesorios para celulares"
            className="w-full h-80 lg:h-[600px] object-cover"
          />
        </div>
      </div>
      {open && modalContent && (
        <ModalCard
          hadleOpen={handleClosed}
          title={modalContent.title}
          subTitle={modalContent.subTitle}
          list={modalContent.list}
          phone={modalContent.phone}
        />
      )}
    </>
  );
};

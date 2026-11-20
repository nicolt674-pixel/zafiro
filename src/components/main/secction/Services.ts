import Esmeralda from '../../../assets/images/repair/aretes-esme.jpg';
import oro from '../../../assets/images/repair/anillo.oro.jpg';
import plata from '../../../assets/images/repair/plata.jpg';
import reparacion from '../../../assets/images/repair/reparacion.jpg';
import cruzada from '../../../assets/images/repair/CRUZADAS.jpg';

type Section = {
  key: string;
  label: string;
  whatsappMessage?: string; // opcional
};

export const secction: Section[] = [
 {
    key: 'esmeraldas',
    label: 'Esmeraldas Finas',
  },
  {
    key: 'oro',
    label: 'Oro de 18 Kilates',
  },
  {
    key: 'plata',
    label: 'Plata Ley 925',
  },
  {
    key: 'medida',
    label: 'Diseño a Medida',
  },
  {
    key: 'restauracion',
    label: 'Restauración y Brillo',
  },
];

export const serviceData = {
  esmeraldas: {
    title: 'Esmeraldas Finas',
    description:
      'Seleccionamos esmeraldas colombianas naturales de alta pureza y brillo intenso, engastadas a mano en piezas únicas con certificación.',
    image: Esmeralda,
    whatsappMessage: 'Hola, quiero ver la colección y precios de Esmeraldas Finas.',
  },
  oro: {
    title: 'Oro de 18 Kilates',
    description:
      'Creamos anillos, cadenas y argollas en oro amarillo, blanco y rosa de 18 kilates, garantizando pureza exacta y acabados de alta joyería.',
    image: oro,
    whatsappMessage: 'Hola, quiero cotizar piezas en Oro de 18 Kilates.',
  },
  plata: {
    title: 'Plata Ley 925',
    description:
      'Diseñamos joyas exclusivas en plata de ley con técnicas tradicionales como la filigrana artesanal, ideales para lucir a diario o regalar.',
    image: plata,
    whatsappMessage: 'Hola, quiero ver el catálogo en Plata Ley 925.',
  },
  medida: {
    title: 'Diseño a Medida',
    description:
      'Transformamos tus ideas en joyas personalizadas. Fabricamos anillos de compromiso y piezas especiales adaptadas a tu estilo y presupuesto.',
    image: cruzada,
    whatsappMessage: 'Hola, quiero cotizar una joya con diseño a medida.',
  },
  restauracion: {
    title: 'Restauración y Brillo',
    description:
      'Devolvemos la vida a tus joyas con servicios de pulido, ajuste de talla, soldadura láser y engaste seguro de piedras preciosas.',
    image: reparacion,
    whatsappMessage: 'Hola, necesito asesoría para restaurar o limpiar una joya.',
  },
};

export type ServiceKey = keyof typeof serviceData;

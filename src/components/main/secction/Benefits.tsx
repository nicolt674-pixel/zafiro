const KEY_BENEFITS = [
  {
    icon: '💎',
    title: 'Pureza Certificada',
    description: 'Garantizamos la autenticidad de nuestro oro de 18 kilates, plata ley 925 y esmeraldas naturales. Tu inversión está respaldada.',
    color: 'bg-[#56DDA7]',
  },
  {
    icon: '✨',
    title: 'Diseño a tu Medida',
    description: 'Asesoría personalizada y fabricación exclusiva. Creamos o ajustamos tus joyas con acabados impecables en tiempo récord.',
    color: 'bg-[#56DDA7]',
  },
  {
    icon: '👑',
    title: 'Orfebrería Artesanal',
    description: 'Maestros joyeros expertos en filigrana, engaste fino y restauración profesional para piezas que duran toda la vida.',
    color: 'bg-[#56DDA7]',
  },
];

export const Benefits = () => {
  return (
   <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12">
          Excelencia en Cada Detalle
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
          {KEY_BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-[#56DDA7]"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
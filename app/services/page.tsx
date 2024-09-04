import React from 'react';
import estudioImage from '../image/FotoEstudio.jpeg';
import aireLibreImage from '../image/FotoExteriores.jpeg';
import eventosImage from '../image/FotoEvento.jpeg';
import droneImage from '../image/FotoDrone.jpeg';

const ServicePage: React.FC = () => {
  return (
    <div className="p-2 bg-gray-900">
      <h1 className="text-center text-4xl mb-10 text-white">Servicios</h1>

      <div className="flex items-center p-16 bg-gray-800 rounded-lg shadow-lg mx-auto mb-16 max-w-5xl">
        <div className="flex-1">
          <h2 className="text-2xl mb-3 text-white">Fotografía de Estudio</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Capturamos la esencia y personalidad de cada individuo en un entorno controlado y cuidadosamente iluminado. Ya sea para retratos profesionales, fotos familiares o sesiones creativas, nuestro estudio está equipado con iluminación profesional y variedad de fondos de colores para asegurar que cada imagen sea perfecta.
          </p>
        </div>
        <div className="flex-1 max-w-xs mx-auto">
          <img src={estudioImage.src} alt="Fotografía de Estudio" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="flex flex-row-reverse items-center p-16 bg-gray-800 rounded-lg shadow-lg mx-auto mb-16 max-w-5xl">
        <div className="flex-1">
          <h2 className="text-2xl mb-3 text-white">Fotografías al Aire Libre</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Aprovechamos la belleza natural de los exteriores para crear imágenes vibrantes y llenas de vida. Desde sesiones en la playa al amanecer hasta capturas en bosques frondosos, adaptamos nuestras técnicas a las condiciones naturales para obtener resultados asombrosos.
          </p>
        </div>
        <div className="flex-1 max-w-xs mx-auto">
          <img src={aireLibreImage.src} alt="Fotografías al Aire Libre" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="flex items-center p-16 bg-gray-800 rounded-lg shadow-lg mx-auto mb-16 max-w-5xl">
        <div className="flex-1">
          <h2 className="text-2xl mb-3 text-white">Fotografías para Eventos</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Inmortalizamos los momentos clave de tus eventos, desde bodas y cumpleaños hasta conferencias y conciertos. Nuestro equipo se asegura de capturar cada emoción y detalle, proporcionando un recuerdo visual que puedes revivir una y otra vez.
          </p>
        </div>
        <div className="flex-1 max-w-xs mx-auto">
          <img src={eventosImage.src} alt="Fotografías para Eventos" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="flex flex-row-reverse items-center p-16 bg-gray-800 rounded-lg shadow-lg mx-auto mb-16 max-w-5xl">
        <div className="flex-1">
          <h2 className="text-2xl mb-3 text-white">Fotografías Aéreas con Dron</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Ofrecemos una perspectiva única con nuestras fotografías aéreas, perfectas para capturar la grandeza de paisajes, propiedades o eventos desde una nueva altura. Nuestros drones de última generación aseguran imágenes de alta calidad y totalmente seguras.
          </p>
        </div>
        <div className="flex-1 max-w-xs mx-auto">
          <img src={droneImage.src} alt="Fotografías Aéreas con Dron" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="flex items-center p-16 bg-gray-800 rounded-lg shadow-lg mx-auto mb-16 max-w-5xl">
        <div className="flex-1">
          <h2 className="text-2xl mb-3 text-white">Fotografías Deportivas</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            La fotografía deportiva no es solo capturar el momento donde un atleta realiza una jugada espectacular, es la fusión entre la técnica fotográfica y la pasión por el deporte, con nosotros podrá tener una cobertura a sus eventos o actividades deportivas de una forma sumamente profesional.
          </p>
        </div>
        <div className="flex-1 max-w-xs mx-auto">
          <img src={eventosImage.src} alt="Fotografías Deportivas" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

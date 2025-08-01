import { Plane, Clock, MapPin, Car, Shield } from "@lucide/astro";
import airportTransferImage from "@/assets/services/airport-transfer.webp?url";
import hourlyServiceImage from '@/assets/services/hourly-service.webp?url';
import tourismTripImage from '@/assets/services/tourism-trip.webp?url';
import packageDeliveryImage from '@/assets/services/package-delivery.webp?url';
import schoolTransportImage from '@/assets/services/school-transport.webp?url';
import cargoMovingImage from '@/assets/services/cargo-moving.webp?url';


export const SERVICES = [
  {
    icon: Plane,
    id: "airport-transfer",
  
    title: "Traslado al aeropuerto",
    description:
      "Servicio confiable y puntual para llegar a tiempo a tu vuelo. Monitoreo de vuelos en tiempo real.",
    image: airportTransferImage,
    features: ["Monitoreo de vuelos", "Servicio 24/7", "Tarifas fijas"],
  },
  {
    icon: Clock,
    id: "hourly-service",
    image: hourlyServiceImage,  
    title: "Servicio por horas",
    description:
      "Disponibilidad total durante el tiempo que necesites. Ideal para reuniones de trabajo y eventos.",
    
    features: ["Flexibilidad total", "Conductor dedicado", "Tarifas por hora"],
  },
  {
    icon: MapPin,
    id: "tourism-trip",
 
    title: "Viajes turísticos",
    description:
      "Descubre los mejores destinos con nuestros tours personalizados y guías especializados.",
    image: tourismTripImage,
    features: [
      "Rutas personalizadas",
      "Guías especializados",
      "Grupos pequeños",
    ],
  },
  
  //* Additional Services
   {
    icon: Plane,
    title: "Envio de Paquetes",
    description: "Soluciones de entrega de paquetes rápidas y seguras",
    id: "package-delivery",
    image: packageDeliveryImage,
   
    features: ["Entrega rápida", "Seguimiento en tiempo real", "Seguro de envío"],
  },
  {
    icon: Car,
    title: "Viajes escolares",
    description: "Transporte seguro y puntual para estudiantes.",
    id: "school-transport",
    image: schoolTransportImage,
    features: ["Conductores capacitados", "Vehículos adaptados", "Rutas seguras"],
  },
  {
    icon: Shield,
    title: "Carga y mudanzas",
    description: "Servicios de carga y mudanza eficientes y seguros.",
    id: "cargo-moving",
    image: cargoMovingImage,
    features: ["Transporte seguro", "Embalaje profesional", "Seguimiento de envíos"],
  },
];


import { Plane, Clock, MapPin, Car, Shield } from "@lucide/astro";

export const SERVICES = [
  {
    icon: Plane,
    id: "airport-transfer",
  
    title: "Traslado al aeropuerto",
    description:
      "Servicio confiable y puntual para llegar a tiempo a tu vuelo. Monitoreo de vuelos en tiempo real.",
    // image: airportImage,
    features: ["Monitoreo de vuelos", "Servicio 24/7", "Tarifas fijas"],
  },
  {
    icon: Clock,
    id: "hourly-service",
  
    title: "Servicio por horas",
    description:
      "Disponibilidad total durante el tiempo que necesites. Ideal para reuniones de trabajo y eventos.",
    
    features: ["Flexibilidad total", "Conductor dedicado", "Tarifas por hora"],
  },
  {
    icon: MapPin,
    id: "tourist-trips",
 
    title: "Viajes turísticos",
    description:
      "Descubre los mejores destinos con nuestros tours personalizados y guías especializados.",
    // image: tourismImage,
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
   
    features: ["Entrega rápida", "Seguimiento en tiempo real", "Seguro de envío"],
  },
  {
    icon: Car,
    title: "Viajes escolares",
    description: "Transporte seguro y puntual para estudiantes.",
    id: "school-transport",
 
    features: ["Conductores capacitados", "Vehículos adaptados", "Rutas seguras"],
  },
  {
    icon: Shield,
    title: "Carga y mudanzas",
    description: "Servicios de carga y mudanza eficientes y seguros.",
    id: "cargo-moving",
   
    features: ["Transporte seguro", "Embalaje profesional", "Seguimiento de envíos"],
  },
];


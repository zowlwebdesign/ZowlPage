export interface Project {
  id: string;
  pA: string;
  pB: string;
  url: string;
  img: string;
  cat: string;
  name: string;
  mono: string;
}

export const projects: Project[] = [
  {
    id: 'arum',
    pA: '#8FA88C',
    pB: '#D98E5A',
    url: 'arummode.netlify.app',
    img: 'https://arummode.netlify.app/img/heroblank.jpeg',
    cat: 'E-commerce sensorial',
    name: 'ARUM',
    mono: 'A',
  },
  {
    id: 'lssoluciones',
    pA: '#0E3B2E',
    pB: '#D4AF37',
    url: 'lssoluciones.netlify.app',
    img: 'https://lssoluciones.netlify.app/solucionesmetalmecanicas.png',
    cat: 'Vitrina de producto',
    name: 'Soluciones Metalmecánicas',
    mono: 'S',
  },
  {
    id: 'brisapastel',
    pA: '#C9B6E4',
    pB: '#F2A6C6',
    url: 'storeblue.netlify.app',
    img: 'https://storeblue.netlify.app/assets/logo.png',
    cat: 'E-commerce + WhatsApp',
    name: 'Brisa Pastel',
    mono: 'B',
  },
  {
    id: 'metrika',
    pA: '#6B6B63',
    pB: '#1a1a1a',
    url: 'metrikaarquitectura.com',
    img: 'https://metrikaarquitectura.com/metrika-logo.png',
    cat: 'Portafolio editorial',
    name: 'Metrika Arquitectura',
    mono: 'M',
  },
  {
    id: 'homelife',
    pA: '#1E6FA8',
    pB: '#EAF4FA',
    url: 'homelife.com.co',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cH6h02luE7aSzAYG1lAdCj7lEAm37dhMBIv9Lw23qRAk0k8wS70lGDg&s=10',
    cat: 'E-commerce de salud',
    name: 'HomeLife',
    mono: 'H',
  },
  {
    id: 'lameca',
    pA: '#3D4A2E',
    pB: '#C77B3B',
    url: 'lamecaglamping.com',
    img: 'https://www.lamecaglamping.com/og-image.png',
    cat: 'Turismo & hospitalidad',
    name: 'La Meca Glamping',
    mono: 'L',
  },
  {
    id: 'danisan',
    pA: '#8C1F1F',
    pB: '#111111',
    url: 'carnicosdanisan.com',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ihDx7yqC7jler9Q_rDitwvtLB4c-Hvj0PPFCQr5qkID-2liehC5BMgD8&s=10',
    cat: 'Marca industrial',
    name: 'Danisan Cárnicos',
    mono: 'D',
  },
  {
    id: 'axon',
    pA: '#17324D',
    pB: '#7C8B99',
    url: 'axoncompany.com.co',
    img: 'https://axoncompany.com.co/images/ax.png',
    cat: 'Sitio corporativo',
    name: 'Axon Company',
    mono: 'Ax',
  },
];

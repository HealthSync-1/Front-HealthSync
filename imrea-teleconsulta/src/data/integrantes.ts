
import MaiconImg from '../assets/img/Maicon.png';
import RichardImg from '../assets/img/Richard.jpeg';
import LauraImg from '../assets/img/laura.jpeg';

export type Integrante = {
  rm: string;
  nome: string;
  turma: string;
  img: string; 
  github: string;
  linkedin: string;
};

export const INTEGRANTES: Integrante[] = [
  {
    rm: "561279",
    nome: "Maicon Douglas",
    turma: "1TDSPW",
    img: MaiconImg, 
    github: "https://github.com/MaiconDouglas-dev",
    linkedin: "https://www.linkedin.com/in/maicon-douglas-b244571b5/",
  },
  {
    rm: "566127",
    nome: "Richard Freitas",
    turma: "1TDSPW",
    img: RichardImg,
    github: "https://github.com/vlonerickk",
    linkedin: "https://linkedin.com/in/richard-freitas",
  },
  {
    rm: "566376",
    nome: "Laura Lopes",
    turma: "1TDSPW",
    img: LauraImg,
    github: "https://github.com/Laura853",
    linkedin: "https://www.linkedin.com/in/laura-lopes-a5937a353",
  },
];
import { BsArrowDown } from 'react-icons/bs';

export const Menu = [
  {
    name: 'Home',
    path: '#home',
    active: true,
    icon: false,
  },
  {
    name: 'Sobre',
    path: '#sobre',
    active: false,
    icon: false,
  },
  {
    name: 'Benefícios',
    path: '#home',
    active: false,
    icon: <BsArrowDown />,
  },
  {
    name: 'Planos',
    path: '#planos',
    active: false,
    icon: false,
  },
  {
    name: 'FAQ',
    path: '#fag',
    active: false,
    icon: false,
  },
  {
    name: 'Blog',
    path: '#blog',
    active: false,
    icon: false,
  },
  {
    name: 'Contato',
    path: '#contato',
    active: false,
    icon: false,
  },
];

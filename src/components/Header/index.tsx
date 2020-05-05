import React, { MouseEvent } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

// function handleClick(event: MouseEvent): void {
//   const parent = event.currentTarget.parentElement;
//   parent &;
//   console.log(event.currentTarget.parentElement);
// }

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <li className="item active">
          <Link to="/">Listagem</Link>
        </li>
        <li className="item ">
          <Link to="/import">Importar</Link>
        </li>
      </nav>
    </header>
  </Container>
);

export default Header;

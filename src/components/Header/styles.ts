import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      list-style: none;
      display: flex;
      a {
        flex: 1;
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        opacity: 0.8;

        /* & + a {
          margin-left: 32px;
        } */

        &:hover {
          opacity: 0.6;
        }
      }

      li {
        margin-left: 32px;
      }

      .active a {
        opacity: 1;
      }

      .active::after {
        content: '';
        position: absolute;
        width: 75px;
        height: 2px;
        display: block;
        top: 69px;
        background: #ff872c;
      }
    }
  }
`;

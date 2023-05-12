import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from 'react-router-dom';
import React from 'react';
import './styles/navbar.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { sharedStateContext } from './contexts/SharedStatesContext';
import { Button } from 'rsuite';

export default function Navbar({ setIsCartVisible }) {
  let { noOfItemsInCart } = React.useContext(sharedStateContext);

  return (
    <>
      <nav id="navbar">
        <Button className="navElem" appearance="subtle">
          <Link className="links" to="/">
            <HomeIcon />
            &nbsp;Home
          </Link>
        </Button>
        <Button
          style={{
            padding: '3px',
            textAlign: 'center',
            display: 'flex',
            fontSize: '60px',
          }}
          className="navElem"
          onClick={() => setIsCartVisible(prev => !prev)}
        >
          <AiOutlineShoppingCart />
          <span
            style={{
              fontSize: '20px',
              borderRadius: '10px',
              backgroundColor: 'transparent',
              marginLeft: '-45%',
              marginTop: '-18%',
            }}
          >
            {noOfItemsInCart === '0' ? '' : noOfItemsInCart}
          </span>
        </Button>
      </nav>
    </>
  );
}

import { Container, Header, Content, Footer, Button } from 'rsuite';
import React from 'react';
import { cartFromContext } from './contexts/CartContext';

export default function ProductsCard({
  id,
  name,
  price,
  currency,
  delivery,
  thumbnail,
  inStock,
  categoryId,
  onSale,
}) {
  let { addToCart } = React.useContext(cartFromContext);
  let item = {
    [id]: {
      name: name,
      price: price,
      currency: currency,
      thumbnail: thumbnail,
      quantity: 1,
    },
  };

  return (
    <>
      <div
        id={`prod-${id}`}
        key={`prod-${id}`}
        className={`${categoryId}`}
        style={{ opacity: inStock === true ? '1' : '0.7' }}
      >
        <img className="prodImages" src={thumbnail} />
        <Container>
          <Header>
            <p className="prodNames">{name}</p>
          </Header>
          <Content>
            <p
              className="other-details"
              style={{
                fontSize: '16px',
                color: delivery === true ? '#007600' : '#c44d56',
              }}
            >
              <i>{!delivery && 'Not'}&nbsp;Available for delivery</i>
            </p>
            <br />

            <p
              className="other-details"
              style={{
                fontSize: '16px',
                color: onSale === true ? '#031c81' : '#f80000',
              }}
            >
              <i>{!onSale && 'Not'}&nbsp;For Sale</i>
            </p>
            <br />
          </Content>
          <Footer>
            <p className="price">$&nbsp;{price}</p>
            {inStock === true ? (
              <Button className="addToCart" onClick={() => addToCart(item)}>
                Add to Cart
              </Button>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <h5 style={{ margin: 'auto', textAlign: 'center' }}>
                  Out Of Stock
                </h5>
              </div>
            )}
          </Footer>
        </Container>
      </div>
    </>
  );
}

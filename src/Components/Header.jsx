import React,{useState} from 'react'
import styled from 'styled-components';
import {BiMenu} from 'react-icons/bi'
import {MdOutlineShoppingCart} from 'react-icons/md'


const Header = () => {
  const [cartNum,setCartNum] = useState(1);
  return (
    <Container>
      <BiMenu className='menu-ic' />
      <h2>RCL Ecommerce</h2>
      <CartContainer>
      <MdOutlineShoppingCart className='cart-ic'/>
      { cartNum!==0 && <span className="cart-number">{cartNum}</span>}
      </CartContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid;
  
  .menu-ic {
    padding-left: 10px;
    font-size: 25px;
  }
  
`;

const CartContainer = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  .cart-ic {
    font-size: 25px;
  }
  .cart-number {
    position: absolute;
    background-color: black;
    color: white;
    top: 4px;
    right: 4px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    font-size: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Image = styled.img`
  
`;



export default Header;
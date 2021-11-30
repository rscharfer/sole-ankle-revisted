/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const MobileMenuWrapper = styled.div`
 
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;

  padding-left: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-right: 22px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PopOutNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;


  & > a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${COLORS.gray[900]};
    font-size: calc(18/16)rem;
    /*font-size: 1.125rem;*/
    font-weight: 600;

    &:visited {
      color: ${COLORS.secondary}
    }
  } 
`

const ButtonWrapper = styled.div`
  align-self: flex-end;
  flex: 1;
`;

const PopOutFooter = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  & > a {
    text-decoration: none;
    color: ${COLORS.gray[700]}
  } 
`;

const Overlay = styled.div`
  background-color: rgba(96, 100, 108, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`



const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
    <MobileMenuWrapper>
    <ButtonWrapper>
      <UnstyledButton onClick={onDismiss}>
        <Icon id='close'/>
        <VisuallyHidden>Dismiss menu</VisuallyHidden>
      </UnstyledButton>
    </ButtonWrapper>
    <PopOutNav>
      <a href="/sale">Sale</a>
      <a href="/new">New&nbsp;Releases</a>
      <a href="/men">Men</a>
      <a href="/women">Women</a>
      <a href="/kids">Kids</a>
      <a href="/collections">Collections</a>
    </PopOutNav>
    <PopOutFooter>
      <a href="/terms">Terms and Conditions</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/contact">Contact Us</a>
    </PopOutFooter>
    </MobileMenuWrapper>
    </Overlay>
  );
};

export default MobileMenu;

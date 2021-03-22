import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { Github } from './FooterIcons';

const FooterWrapper = styled.footer`
    
`;
FooterWrapper.Bottom = styled.div`
    background-color: #332261;
    height:34px

`;

FooterWrapper.IconWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color: #8268CA;
    height:84px;
    width:234px;
    position:relative;
    left:50%;
    bottom:-20px;
    transform: translateX(-50%);
    border-radius: ${theme.borderRadius};
`;
FooterWrapper.IconWrapper.Icon = styled.div`
    color: #332261;

`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterWrapper.IconWrapper>
        <FooterWrapper.IconWrapper.Icon>
          <Github />
        </FooterWrapper.IconWrapper.Icon>
        <FooterWrapper.IconWrapper.Icon>
          <Github />
        </FooterWrapper.IconWrapper.Icon>
        <FooterWrapper.IconWrapper.Icon>
          <Github />
        </FooterWrapper.IconWrapper.Icon>
      </FooterWrapper.IconWrapper>
      <FooterWrapper.Bottom />
    </FooterWrapper>
  );
}

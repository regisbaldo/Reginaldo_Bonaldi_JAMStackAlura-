/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';
import { propToStyle } from '../../../theme/utils/propToStyle';

const FooterWrapper = styled.footer`
  ${propToStyle('alignSelf')}

  width:320px;
  border-top: 1px solid ;
  text-align:center;
`;
FooterWrapper.IconWrapper = styled.div`
  margin-top:42px;
  display:flex;
  flex-direction:row;
  justify-content: center;
`;

FooterWrapper.Icon = styled.img`
  margin-left:10px;
  margin-right:10px;
`;

FooterWrapper.Text = styled.div`
  margin-top:42px;
 
`;

export default function Footer({ ...props }) {
  return (
    <FooterWrapper {...props}>
      <FooterWrapper.IconWrapper>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/reginaldobonaldi">
          <FooterWrapper.Icon src="/images/linkedin.svg" />
        </a>
        <a rel="noreferrer" target="_blank" href="https://github.com/regisbaldo">
          <FooterWrapper.Icon src="/images/Github.svg" />
        </a>
      </FooterWrapper.IconWrapper>
      <FooterWrapper.Text>
        <Text as="p" variant="TitleFooter">
          Developed by Reginaldo Simon Bonaldi
        </Text>
        <Text as="p" variant="TitleFooter">
          reginaldobonaldi22@gmail.com
        </Text>
      </FooterWrapper.Text>
    </FooterWrapper>
  );
}

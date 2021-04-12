/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../foundation/Text';

const CardWrapper = styled.div`
  width:210px;
  background-color: #39CC9B;
  border-radius: 5px;
  margin-bottom:30px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
CardWrapper.SubTitle = styled.div`


  margin-top:12px;
  padding-top:2px;
  padding-bottom:2px;
  width:149px;
  background-color:  #FF79C6;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  align-items:center;
  
`;
CardWrapper.Title = styled.div`
  color: #ffffff;
  padding-bottom:26px;
  font-family:'Poppins', sans-serif;
  ${({ subTitle }) => {
    if (!subTitle) {
      return css`
      padding-top:12px;
      padding-bottom:12px;
      
      `;
    }
    return null;
  }}
`;

export default function Card({
  title, subTitle, ...props
}) {
  return (
    <CardWrapper {...props}>
      {subTitle
      && (
      <CardWrapper.SubTitle>
        <Text letterSpacing="3px" textAlign="center" as="span" variant="subTitleCard">
          {subTitle}
        </Text>
      </CardWrapper.SubTitle>
      )}
      <CardWrapper.Title subTitle={subTitle} {...props}>
        <Text textAlign="center" as="div" variant="titleCard">
          {title}
        </Text>
      </CardWrapper.Title>
    </CardWrapper>

  );
}

Card.defaultProps = {
  title: '',
  subTitle: '',
};

Card.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

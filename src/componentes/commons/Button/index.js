import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export default function Button({ type, text, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper type={type} {...props}>
      <ButtonWrapper.Text>
        {text}
      </ButtonWrapper.Text>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  cursor:pointer;
  height: 36px;
  border: none;
  background-color: #39CC9B;
  ${(props) => {
    if (props.type === 'secondary') {
      return css`
      background-color: #535353;
      transition: background-color 0.2s ease;
      &:hover{
      background-color: #39CC9B;
      }
      `;
    }
    return css`
      background-color: #39CC9B;
      transition: background-color 0.2s ease;
      &:hover{
      background-color: #535353;
      }
      `;
  }}
  border-radius: 5px;
`;
ButtonWrapper.Text = styled.span`
  margin-left:5px;
  margin-right:5px;
  color: #FFFFFF;
  font-size:12px
`;

Button.defaultProps = {
  type: 'primary',
  text: '',
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  text: PropTypes.string,
};

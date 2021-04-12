import React from 'react';
import styled, { css } from 'styled-components';
import { Text } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const BaseCover = styled.div`
  padding-top: 96px;
  width:320px;
  display:flex;
  flex-direction:column;
  ${breakpointsMedia({
    md: css`
  padding-top: 90px;
     width:446px;
`,
  })}
`;

BaseCover.HelloCard = styled.div`
  padding-right:22px;
  padding-left:22px;
  text-align: center;
  display:flex;
  flex-direction:cow;
  align-items:center;
  align-self: flex-end;
  width: 265px;
  height: 250px;
  background-color: #535353;
  color: #39CC9B;
  font-weight: 700;
  z-index: 1;
  font-size:18px;
  ${breakpointsMedia({
    md: css`
      width: 369px;
      height: 348px;
`,
  })}
`;

BaseCover.WelcomeCard = styled.div`
  padding-right:48px;
  padding-left:48px;
  text-align: center;
  display:flex;
  flex-direction:row;
  align-items:center;
  color: #ffffff;
  width: 240px;
  height: 60px;
  background-color: #39CC9B;
  z-index: 2;
  position: relative;
  top: -30px;
  ${breakpointsMedia({
    md: css`
      width: 332px;
      height: 84px;
`,
  })}
`;

export default function Cover() {
  return (
    <BaseCover>
      <BaseCover.HelloCard>
        <Text variant="titleCover">
          Hi! I`m
          {' '}
          <Text variant="titleCover" color="background.light">
            Reginaldo
          </Text>
          , a developer based in Brazil.
        </Text>

      </BaseCover.HelloCard>
      <BaseCover.WelcomeCard>
        <Text variant="subTitleCover">
          welcome do my portfolio
        </Text>
      </BaseCover.WelcomeCard>
    </BaseCover>
  );
}

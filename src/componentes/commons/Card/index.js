/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../foundation/Text';
import { Star } from './star';
import { Grid } from '../../foundation/layout/Grid';

export default function Card({
  star, titulo, texto, ...props
}) {
  return (
    <BaseCard {...props} flexDirection={{ xs: 'column', md: 'row' }}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 7 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="row"
            paddingTop={{ xs: 0, md: 0 }}
            paddingBottom={{ xs: 0, md: 0 }}
          >
            {star && (
              <Star />
            )}
            <CardImagem src="/images/instalura.webp" />
          </Grid.Col>
          <Grid.Col
            offset={{ xs: 0, md: 0 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="row"
            paddingTop={{ xs: 0, md: 0 }}
            paddingBottom={{ xs: 0, md: 0 }}
          >
            <TextArea>
              <TitleCard>
                <Text as="p" variant="titleCard">{titulo}</Text>
              </TitleCard>
              <DescriptionCard>
                <Text as="p" variant="titleCard">{texto}</Text>
              </DescriptionCard>
            </TextArea>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

    </BaseCard>

  );
}

const BaseCard = styled.div`
display:flex;
flex-direction:column;
justify-content:start;
align-items:center;
padding-bottom:40px;
flex:1;
`;

const TitleCard = styled.div`
font-size:20px;
font-weight:bold;
text-align:center;
`;

const DescriptionCard = styled.div`
font-size:20px;
font-weight:bold;
text-align:start;
`;
const TextArea = styled.div`
height:100%;

display:flex;
flex-direction:column;
justify-content:start;

`;

export const CardImagem = styled.img`
    width:100%;
    max-width: 500px;
`;

Card.defaultProps = {
  star: false,
  titulo: '',
  texto: '',
};

Card.propTypes = {
  star: PropTypes.bool,
  titulo: PropTypes.string,
  texto: PropTypes.string,
};

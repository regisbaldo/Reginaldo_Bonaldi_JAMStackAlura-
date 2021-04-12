import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../foundation/Text';
import { propToStyle } from '../../../theme/utils/propToStyle';

const SectionWrapper = styled.div`
display:flex;
flex-direction:column;
${propToStyle('alignItems')}
${propToStyle('paddingTop')}

`;
SectionWrapper.Head = styled.div`
  padding-bottom:60px
`;
SectionWrapper.Body = styled.div`
`;

export default function Section({ name, children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SectionWrapper {...props}>
      <SectionWrapper.Head>
        <Text textAlign="center" as="p" variant="section">
          {name}
        </Text>
      </SectionWrapper.Head>
      <SectionWrapper.Body>
        {children}
      </SectionWrapper.Body>
    </SectionWrapper>
  );
}

Section.defaultProps = {
  name: '',
};

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

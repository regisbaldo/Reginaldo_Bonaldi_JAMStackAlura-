import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

const subTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight};
    line-height: ${theme.typographyVariants.subTitle.lineHeight};
  `}
`;
const titleCard = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleCard.fontSize};
    font-weight: ${theme.typographyVariants.titleCard.fontWeight};
    line-height: ${theme.typographyVariants.titleCard.lineHeight};
  `}
`;
const subTitleCard = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.subTitleCard.fontSize};
    font-weight: ${theme.typographyVariants.subTitleCard.fontWeight};
    line-height: ${theme.typographyVariants.subTitleCard.lineHeight};
  `}
`;
const TitleFooter = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.TitleFooter.fontSize};
    font-weight: ${theme.typographyVariants.TitleFooter.fontWeight};
    line-height: ${theme.typographyVariants.TitleFooter.lineHeight};
  `}
`;
const titleCover = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleCover.fontSize};
    font-weight: ${theme.typographyVariants.titleCover.fontWeight};
    line-height: ${theme.typographyVariants.titleCover.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.titleCoverMD.fontSize};
          font-weight: ${theme.typographyVariants.titleCoverMD.fontWeight};
          line-height: ${theme.typographyVariants.titleCoverMD.lineHeight};

        `}
      `,
  })}
`;
const subTitleCover = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.subTitleCover.fontSize};
    font-weight: ${theme.typographyVariants.subTitleCover.fontWeight};
    line-height: ${theme.typographyVariants.subTitleCover.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.subTitleCoverMD.fontSize};
          font-weight: ${theme.typographyVariants.subTitleCoverMD.fontWeight};
          line-height: ${theme.typographyVariants.subTitleCoverMD.lineHeight};

        `}
      `,
  })}
`;
const section = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.section.fontSize};
    font-weight: ${theme.typographyVariants.section.fontWeight};
    line-height: ${theme.typographyVariants.section.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.sectionMD.fontSize};
          font-weight: ${theme.typographyVariants.sectionMD.fontWeight};
          line-height: ${theme.typographyVariants.sectionMD.lineHeight};

        `}
      `,
  })}
`;

export const TextStyleVariants = {
  smallestException,
  paragraph1,
  subTitle,
  titleCard,
  subTitleCard,
  TitleFooter,
  titleCover,
  subTitleCover,
  section,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
      color: #2B1D51;
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
      color: #2B1D51;

        `}
      `,
  })}
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('letterSpacing')}
`;

export function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['title', 'paragraph1', 'titleCover', 'subTitleCover',
    'smallestException', 'subTitle', 'titleCard', 'subTitleCard', 'TitleFooter', 'section']),
};

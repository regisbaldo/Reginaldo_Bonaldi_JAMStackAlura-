import React from 'react';
import Button from '../Button';

import { HeaderWrapper } from './HeaderWrapper';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.BrandWrapper>
        <HeaderWrapper.BrandImage src="/images/logo.jpeg" />
      </HeaderWrapper.BrandWrapper>
      <HeaderWrapper.Navbar>
        <Button type="primary" text="Contact me" />
      </HeaderWrapper.Navbar>
    </HeaderWrapper>

  );
}

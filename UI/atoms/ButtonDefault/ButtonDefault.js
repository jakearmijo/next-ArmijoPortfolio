import React from 'react';
import { StyledDefaultButton } from './ButtonDefault.style'

const ButtonDefault = ( { title } ) => (
  <div>
    <div textalign="center">
      <StyledDefaultButton>{title}</StyledDefaultButton>
    </div>
  </div>
);

export default ButtonDefault;
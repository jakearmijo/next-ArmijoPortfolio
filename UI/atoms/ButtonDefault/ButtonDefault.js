import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { StyledDefaultButton } from './ButtonDefault.style'

const ButtonDefault = ( { title } ) => (
  <Row>
    <Col textAlign="center">
      <StyledDefaultButton>{title}</StyledDefaultButton>
    </Col>
  </Row>
);

export default ButtonDefault;
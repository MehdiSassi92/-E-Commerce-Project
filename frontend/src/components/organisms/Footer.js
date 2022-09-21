import React from 'react';
import { Col, Row } from '../../styles/bootstrap.style';
import { Container } from '../../styles/main.styles';

export default function Footer() {
  return (
    <div style={{ background: '#f7f8fa' }}>
    <Container>
      <Row style={{ margin: '0', padding: '2rem 0' }}>
        <Col alignItems="center" justifyContent="space-evenly">
         <p>Copyright.</p>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

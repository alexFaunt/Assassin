import React from 'react'
import styled from 'styled-components/native'
import Test from '../Test/Test'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`

export default () => (
  <Container>
    <Test />
  </Container>
)

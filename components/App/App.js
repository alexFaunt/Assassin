import React from 'react'
import styled from 'styled-components'
import Test from '../Test/Test'

const Container = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
  background-color: #F5FCFF;
`

export default () => (
  <Container>
    <Test />
  </Container>
)

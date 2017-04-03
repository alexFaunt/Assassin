import React from 'react'
import styled from 'styled-components'
import Test from '../Test/Test'

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`

export default () => (
  <Container>
    <Test />
  </Container>
)

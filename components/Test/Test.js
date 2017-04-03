import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  background-color: ${({ theme }) => theme.colors.secondary};
`
export default () => <Text>Test web</Text>

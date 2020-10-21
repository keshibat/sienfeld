import React from 'react'
import styled from '@emotion/styled'

const Nav = styled.div(props => ({
  textDecoration: 'underline',
  fontSize: '1.25rem',
  fontWeight: '500',
}));

const Navigation = () => {
  return (
    <Nav>
      <p>Sign Out</p>
    </Nav>
  )
}

export default Navigation

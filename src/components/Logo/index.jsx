import React from 'react'
import styled from '@emotion/styled'
import Brain from '../../assets/brain.png';

const Div = styled.div(props => ({
  width: '150',
  height: '150',
  background: 'linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%)',
}));

const LogoDiv = styled.div(props => ({

}));

const Logo = () => {
  return (
    <Div>
    <LogoDiv><img src={Brain} alt="brain"/></LogoDiv>
    </Div>
  )
}

export default Logo

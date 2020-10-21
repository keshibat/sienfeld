import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const FormDiv = styled.div(props => ({
  display: 'flex',
  justifyContent: 'center',
  width: '700px',
  background: 'yellow',
  height: '50px',
}));

const Input = styled.input(props => ({
}));

const Button = styled.button(props => ({
  backgroundColor: '#7B3CFF',
}));

const ImageLinkForm = () => {
  return (
    <Container>
      <div style={{marginBottom: '1.875rem'}}>{'This Magic Brain will detect faces in your pictures. Give it try'}</div>
      <FormDiv>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div><Input type='text'></Input></div>
          <div><Button>Detect</Button></div>
        </div>
      </FormDiv>
    </Container>
  )
}

export default ImageLinkForm

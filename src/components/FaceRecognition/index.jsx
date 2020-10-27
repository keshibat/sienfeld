import React from 'react'
import styled from '@emotion/styled'

const PictureContainer = styled.div(props => ({
    display: 'flex',
    justifyContent: 'center'

}));

const FaceRecognition = ({imageUrl}) => {
  return (
    <PictureContainer>
      <div style={{positon: 'absolute'}}>
      <img src={imageUrl} width='500px' hegiht='auto' alt="" />
      </div>
    </PictureContainer>
  )
}

export default FaceRecognition

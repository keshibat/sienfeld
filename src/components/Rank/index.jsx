import React from 'react'
import styled from '@emotion/styled'

const RankContainer = styled.div(props => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const Rank = () => {
  return (
    <RankContainer>
      <div style={{fontFamily: 'Courier New', color: '#fff'}}>Sienfeld your current rank is</div>
      <div style={{fontFamily: 'Courier New', fontSize: '25px', color: '#fff'}}>#5</div>
    </RankContainer>
  )
}

export default Rank

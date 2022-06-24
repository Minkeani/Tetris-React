import React from 'react'
import Display from './Display'
import StartBtn from './StartBtn'
import Stage from './Stage'

import { createStage } from '../gameHelpers'

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
            <div>
                 <Display text='Score'/>
                 <Display text='Rows'/>
                 <Display text='Level'/>
            </div>
            <StartBtn/>
        </aside>
      </StyledTetris>
      
    </StyledTetrisWrapper>
  )
}

export default Tetris

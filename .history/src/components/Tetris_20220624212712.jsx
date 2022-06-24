import React from 'react'
import Display from './Display'
import StartBtn from './StartBtn'
import Stage from './Stage'

import { createStage } from '../gameHelpers'

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
        <Stage stage={createStage()} />
        <aside>
            <div>
                 <Display text='Score'/>
                 <Display text='Rows'/>
                 <Display text='Level'/>
            </div>
            <StartBtn/>
        </aside>
           
      
    </StyledTetrisWrapper>
  )
}

export default Tetris

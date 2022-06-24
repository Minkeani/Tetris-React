import React from 'react'
import styles from './Tetris.module.scss'
import Display from './Display'
import StartBtn from './StartBtn'
import Stage from './Stage'

import { createStage } from '../gameHelpers'

const Tetris = () => {
  return (
    <div>
        <Stage stage={createStage()} />
        <aside>
            <div>
                 <Display text='Score'/>
                 <Display text='Rows'/>
                 <Display text='Level'/>
            </div>
            <StartBtn/>
        </aside>
           
      
    </div>
  )
}

export default Tetris

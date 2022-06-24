import React from 'react'
import styles from './Tetris.module.scss'
import Display from '../Display/Display'
import StartBtn from '../StartBtn/StartBtn'
import Stage from '../Stage/Stage'

const Tetris = () => {
  return (
    <div>
        <Stage/>
        <aside>
            <Display text='Score'/>
            <Display text='Rows'/>
            <Display text='Level'/>
        </aside>
      
    </div>
  )
}

export default Tetris

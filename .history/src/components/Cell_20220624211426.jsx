import React from 'react'
import styles from './Cell.module.scss'
import StyledCell from './styled/StyledCell'
import { TETROMINES } from '../tetromines'

const Cell = ({ type }) => {
  return (
    <StyledCell type={type} color={TETROMINES[type].color}>
      cell
    </StyledCell>
  )
}

export default Cell

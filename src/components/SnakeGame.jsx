import { useEffect, useMemo, useState } from 'react'
import {
  createInitialState,
  DIRECTIONS,
  GAME_STATUS,
  setDirection,
  setStatus,
  stepState,
} from '../game/snakeLogic'

const TICK_MS = 140

const KEY_TO_DIRECTION = {
  ArrowUp: DIRECTIONS.UP,
  ArrowDown: DIRECTIONS.DOWN,
  ArrowLeft: DIRECTIONS.LEFT,
  ArrowRight: DIRECTIONS.RIGHT,
  w: DIRECTIONS.UP,
  a: DIRECTIONS.LEFT,
  s: DIRECTIONS.DOWN,
  d: DIRECTIONS.RIGHT,
}

function SnakeGame() {
  const [state, setState] = useState(() => createInitialState())

  useEffect(() => {
    if (state.status !== GAME_STATUS.RUNNING) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setState((current) => stepState(current))
    }, TICK_MS)

    return () => window.clearInterval(timer)
  }, [state.status])

  useEffect(() => {
    function onKeyDown(event) {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      const direction = KEY_TO_DIRECTION[key]

      if (direction) {
        event.preventDefault()
        setState((current) => {
          const updated = setDirection(current, direction)
          if (updated.status === GAME_STATUS.IDLE) {
            return setStatus(updated, GAME_STATUS.RUNNING)
          }
          return updated
        })
      }

      if (event.code === 'Space') {
        event.preventDefault()
        setState((current) => {
          if (current.status === GAME_STATUS.RUNNING) {
            return setStatus(current, GAME_STATUS.PAUSED)
          }

          if (current.status === GAME_STATUS.PAUSED || current.status === GAME_STATUS.IDLE) {
            return setStatus(current, GAME_STATUS.RUNNING)
          }

          return current
        })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const occupied = useMemo(() => {
    return new Set(state.snake.map(({ x, y }) => `${x},${y}`))
  }, [state.snake])

  function restart() {
    setState(() => setStatus(createInitialState(), GAME_STATUS.RUNNING))
  }

  function togglePause() {
    setState((current) => {
      if (current.status === GAME_STATUS.RUNNING) {
        return setStatus(current, GAME_STATUS.PAUSED)
      }

      if (current.status === GAME_STATUS.PAUSED || current.status === GAME_STATUS.IDLE) {
        return setStatus(current, GAME_STATUS.RUNNING)
      }

      return current
    })
  }

  function handleDirection(direction) {
    setState((current) => {
      const updated = setDirection(current, direction)
      if (updated.status === GAME_STATUS.IDLE) {
        return setStatus(updated, GAME_STATUS.RUNNING)
      }
      return updated
    })
  }

  const cells = []
  for (let y = 0; y < state.gridSize; y += 1) {
    for (let x = 0; x < state.gridSize; x += 1) {
      const key = `${x},${y}`
      const isHead = state.snake[0].x === x && state.snake[0].y === y
      const isSnake = occupied.has(key)
      const isFood = state.food && state.food.x === x && state.food.y === y

      let className = 'snake-cell'
      if (isSnake) className += ' snake-cell-snake'
      if (isHead) className += ' snake-cell-head'
      if (isFood) className += ' snake-cell-food'

      cells.push(<div key={key} className={className} />)
    }
  }

  return (
    <section className="snake-game" aria-label="Snake game">
      <div className="snake-topbar">
        <p>Score: {state.score}</p>
        <p>
          {state.status === GAME_STATUS.GAME_OVER && 'Game over'}
          {state.status === GAME_STATUS.PAUSED && 'Paused'}
          {state.status === GAME_STATUS.IDLE && 'Ready'}
          {state.status === GAME_STATUS.RUNNING && 'Running'}
        </p>
      </div>

      <div
        className="snake-grid"
        style={{
          gridTemplateColumns: `repeat(${state.gridSize}, 1fr)`,
        }}
      >
        {cells}
      </div>

      <div className="snake-actions">
        <button type="button" className="btn btn-primary" onClick={togglePause}>
          {state.status === GAME_STATUS.RUNNING ? 'Pause' : 'Start / Resume'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={restart}>
          Restart
        </button>
      </div>

      <div className="snake-controls" aria-label="Directional controls">
        <button type="button" className="btn btn-secondary" onClick={() => handleDirection(DIRECTIONS.UP)}>
          Up
        </button>
        <div className="snake-controls-row">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleDirection(DIRECTIONS.LEFT)}
          >
            Left
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleDirection(DIRECTIONS.DOWN)}
          >
            Down
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleDirection(DIRECTIONS.RIGHT)}
          >
            Right
          </button>
        </div>
      </div>

      <p className="snake-help">Use Arrow keys or WASD. Space toggles pause/resume.</p>
    </section>
  )
}

export default SnakeGame

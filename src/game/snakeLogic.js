export const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
}

export const DEFAULT_GRID_SIZE = 16

const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  PAUSED: 'paused',
  GAME_OVER: 'gameover',
}

function pointsEqual(a, b) {
  return a.x === b.x && a.y === b.y
}

function isOppositeDirection(a, b) {
  return a.x === -b.x && a.y === -b.y
}

function buildInitialSnake(gridSize) {
  const midX = Math.floor(gridSize / 2)
  const midY = Math.floor(gridSize / 2)

  return [
    { x: midX, y: midY },
    { x: midX - 1, y: midY },
    { x: midX - 2, y: midY },
  ]
}

export function placeFood(snake, gridSize, random = Math.random) {
  const occupied = new Set(snake.map(({ x, y }) => `${x},${y}`))
  const freeCells = []

  for (let y = 0; y < gridSize; y += 1) {
    for (let x = 0; x < gridSize; x += 1) {
      const key = `${x},${y}`
      if (!occupied.has(key)) {
        freeCells.push({ x, y })
      }
    }
  }

  if (freeCells.length === 0) {
    return null
  }

  const index = Math.floor(random() * freeCells.length)
  return freeCells[index]
}

export function createInitialState({
  gridSize = DEFAULT_GRID_SIZE,
  random = Math.random,
} = {}) {
  const snake = buildInitialSnake(gridSize)

  return {
    gridSize,
    snake,
    direction: DIRECTIONS.RIGHT,
    nextDirection: DIRECTIONS.RIGHT,
    food: placeFood(snake, gridSize, random),
    score: 0,
    status: STATUS.IDLE,
  }
}

export function setDirection(state, direction) {
  if (!direction) {
    return state
  }

  if (isOppositeDirection(direction, state.direction)) {
    return state
  }

  return {
    ...state,
    nextDirection: direction,
  }
}

export function setStatus(state, status) {
  return {
    ...state,
    status,
  }
}

export function stepState(state, { random = Math.random } = {}) {
  if (state.status !== STATUS.RUNNING) {
    return state
  }

  const direction = state.nextDirection
  const nextHead = {
    x: state.snake[0].x + direction.x,
    y: state.snake[0].y + direction.y,
  }
  const ateFood = state.food && pointsEqual(nextHead, state.food)

  const outsideGrid =
    nextHead.x < 0 ||
    nextHead.y < 0 ||
    nextHead.x >= state.gridSize ||
    nextHead.y >= state.gridSize

  const collisionBody = ateFood ? state.snake : state.snake.slice(0, -1)
  const hitsSnake = collisionBody.some((part) => pointsEqual(part, nextHead))

  if (outsideGrid || hitsSnake) {
    return {
      ...state,
      status: STATUS.GAME_OVER,
    }
  }

  const nextSnake = [nextHead, ...state.snake]

  if (!ateFood) {
    nextSnake.pop()
  }

  const nextFood = ateFood ? placeFood(nextSnake, state.gridSize, random) : state.food
  const nextStatus = nextFood ? STATUS.RUNNING : STATUS.GAME_OVER

  return {
    ...state,
    snake: nextSnake,
    direction,
    nextDirection: direction,
    food: nextFood,
    score: ateFood ? state.score + 1 : state.score,
    status: nextStatus,
  }
}

export const GAME_STATUS = STATUS

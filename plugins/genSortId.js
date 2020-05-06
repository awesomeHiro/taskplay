import { nanoid } from 'nanoid'

// eslint-disable-next-line prettier/prettier
const firstSortId = Array(50).fill('-').join('')
// eslint-disable-next-line prettier/prettier
const lastSortId = Array(50).fill('z').join('')
export const genSortId = ({ prevId = firstSortId, nextId = lastSortId }) => {
  if (nextId < prevId) {
    throw new Error(`sortId is reversed at ${prevId}  ${nextId}`)
  }
  ;[prevId, nextId] = [prevId, nextId].sort()

  let id
  while (true) {
    id = nanoid(50)
    if (prevId < id && id < nextId) return id
  }
}

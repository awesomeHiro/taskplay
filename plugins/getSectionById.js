import sections from '~/store/sections.json'

export const getSectionById = id => {
  return sections.find(x => x.id === id) || { name: '' }
}

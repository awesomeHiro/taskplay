import sections from '~/store/fire-store/sections.json'

export const getSectionById = id => {
  return sections.find(x => x.id === id) || { name: '' }
}

interface About {
  _id: string
  description: string
}
interface Knowledge {
  _id: string
  link?: string
  title: string
  image: string
}
interface Project {
  _id: string
  title: string
  description?: string
  link: string
  image: string
  spotlight: boolean
  color?: string
}
interface Social {
  _id: string
  title: string
  image?: string
  link: string
}
interface Multi {
  about: About | null
  knowledges: Knowledge[]
  projects: Project[]
  social: Social[]
}

export { About, Knowledge, Project, Social, Multi }

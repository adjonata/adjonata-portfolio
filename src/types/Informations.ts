export interface About {
  _id: string
  description: string
}

export interface Knowledge {
  _id: string
  link?: string
  title: string
  image: string
}

export interface Experience {
  _id: string
  company: string
  description: string
  office: string
  technologies: Knowledge[]
  startDate: Date
  endDate: Date | null
  isCurrently: boolean
}

export interface Project {
  _id: string
  title: string
  description?: string
  link: string
  image: string
  spotlight: boolean
  color?: string
}

export interface Social {
  _id: string
  title: string
  image?: string
  link: string
}

export interface Multi {
  about: About | null
  knowledges: Knowledge[]
  projects: Project[]
  social: Social[]
}

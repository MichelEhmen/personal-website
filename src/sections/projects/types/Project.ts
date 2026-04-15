export type Project = {
  title: string
  description: string
  technologies: string[]
  location?: string
  fromDate: Date
  toDate?: Date // undefined = ongoing
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const worksDir = path.join(process.cwd(), 'content/works')

export type WorkMeta = {
  slug: string
  title: string
  area: string
  phase: string
  period: string
  summary: string
}

export type Work = WorkMeta & {
  content: string
}

export function getAllWorks(): WorkMeta[] {
  const files = fs.readdirSync(worksDir)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(worksDir, filename), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? '',
        area: data.area ?? '',
        phase: data.phase ?? '',
        period: data.period ?? '',
        summary: data.summary ?? '',
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

export function getWork(slug: string): Work {
  const filepath = path.join(worksDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? '',
    area: data.area ?? '',
    phase: data.phase ?? '',
    period: data.period ?? '',
    summary: data.summary ?? '',
    content,
  }
}

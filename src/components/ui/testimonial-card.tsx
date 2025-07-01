
import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  handle?: string
  avatar?: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  return (
    <div className="relative w-80 cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center gap-1 p-6">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-nowrap">
            <div className="flex flex-col">
              <p className="font-bold text-lg text-zinc-900 dark:text-white mb-2">{author.name}</p>
            </div>
          </figcaption>
          <blockquote className="text-sm text-zinc-700 dark:text-gray-200 font-semibold leading-relaxed">
            {text}
          </blockquote>
        </div>
      </div>
    </div>
  )
}

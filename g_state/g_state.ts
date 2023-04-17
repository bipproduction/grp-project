import { signal } from "@preact/signals-react"

export const sUser = signal<{[key: string]: any} | null>(null)
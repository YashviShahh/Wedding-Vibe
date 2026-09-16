import { useCallback, useSyncExternalStore } from 'react'
import type { Look } from '../types'

const STORAGE_KEY = 'weddingvibe:saved-looks'

function readStorage(): Look[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Look[]) : []
  } catch {
    return []
  }
}

function writeStorage(looks: Look[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(looks))
  } catch {
    // private browsing / storage disabled — saving silently no-ops
  }
}

let savedLooks = readStorage()
const listeners = new Set<() => void>()

function setSavedLooks(next: Look[]) {
  savedLooks = next
  writeStorage(next)
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return savedLooks
}

export function useWishlist() {
  const saved = useSyncExternalStore(subscribe, getSnapshot)

  const isSaved = useCallback((id: string) => saved.some((l) => l.id === id), [saved])

  const toggle = useCallback((look: Look) => {
    const next = savedLooks.some((l) => l.id === look.id)
      ? savedLooks.filter((l) => l.id !== look.id)
      : [...savedLooks, look]
    setSavedLooks(next)
  }, [])

  return { saved, isSaved, toggle }
}

export interface ArtworkCrop {
  x: number
  y: number
  width: number
  height: number
}

export interface Game {
  id: string
  title: string
  genres: string[]
  releaseDate: string
  displayReleaseDate: string
  fileSize: string
  developer: string
  publisher: string
  description: string
  tags: string[]
  artwork: ArtworkCrop
  addedOrder: number
}

export type SortOption = 'recent' | 'title' | 'release'
export type ViewMode = 'grid' | 'list'
export type DetailTab = 'overview' | 'screenshots' | 'details'

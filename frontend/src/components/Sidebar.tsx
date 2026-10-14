import type { Game } from '../types/game'
import { Icon } from './Icon'

interface SidebarProps {
  activeGenre: string
  games: Game[]
  onGenreChange: (genre: string) => void
  onUnavailable: (section: string) => void
}

const navigation = [
  { label: 'Games', icon: 'gamepad' as const, active: true },
  { label: 'Library', icon: 'library' as const },
  { label: 'Favorites', icon: 'heart' as const },
  { label: 'Downloads', icon: 'download' as const },
  { label: 'Settings', icon: 'settings' as const },
]

const genreIcons: Record<string, string> = {
  'All Genres': '▦',
  Action: '✥',
  Adventure: '▲',
  RPG: '⚔',
  Sports: '◉',
  Racing: '⚑',
  Fighting: '✊',
  Shooter: '⊙',
  Strategy: '♟',
  Simulation: '◒',
  Horror: '☠',
  Puzzle: '✚',
}

const genres = [
  'All Genres',
  'Action',
  'Adventure',
  'RPG',
  'Sports',
  'Racing',
  'Fighting',
  'Shooter',
  'Strategy',
  'Simulation',
  'Horror',
  'Puzzle',
]

export function Sidebar({
  activeGenre,
  games,
  onGenreChange,
  onUnavailable,
}: SidebarProps) {
  function getGenreCount(genre: string) {
    if (genre === 'All Genres') {
      return games.length
    }

    return games.filter((game) => game.genres.includes(genre)).length
  }

  return (
    <aside className="sidebar">
      <div className="brand" aria-label="EJ Gaming Hub">
        <Icon name="gamepad" size={62} />
        <div>
          <strong>EJ</strong>
          <span>GAMING HUB</span>
        </div>
      </div>

      <nav className="primary-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <button
            className={item.active ? 'nav-item nav-item--active' : 'nav-item'}
            type="button"
            key={item.label}
            aria-current={item.active ? 'page' : undefined}
            onClick={() => !item.active && onUnavailable(item.label)}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-divider" />
      <h2 className="sidebar-heading">Genres</h2>
      <div className="genre-list" aria-label="Filter games by genre">
        {genres.map((genre) => (
          <button
            type="button"
            key={genre}
            className={activeGenre === genre ? 'genre-item genre-item--active' : 'genre-item'}
            onClick={() => onGenreChange(genre)}
            aria-pressed={activeGenre === genre}
          >
            <span className="genre-icon" aria-hidden="true">{genreIcons[genre] ?? '◆'}</span>
            <span>{genre}</span>
            <span className="genre-count">{getGenreCount(genre)}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

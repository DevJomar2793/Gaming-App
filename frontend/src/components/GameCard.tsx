import type { Game, ViewMode } from '../types/game'
import { GameArtwork } from './GameArtwork'

interface GameCardProps {
  game: Game
  isSelected: boolean
  viewMode: ViewMode
  onSelect: (game: Game) => void
}

export function GameCard({ game, isSelected, viewMode, onSelect }: GameCardProps) {
  return (
    <button
      type="button"
      className={`game-card game-card--${viewMode}${isSelected ? ' game-card--selected' : ''}`}
      onClick={() => onSelect(game)}
      aria-pressed={isSelected}
    >
      <div className="game-card__art">
        <GameArtwork artwork={game.artwork} title={game.title} />
      </div>
      <div className="game-card__content">
        <strong>{game.title}</strong>
        {viewMode === 'list' && (
          <span>{game.genres.join(' · ')} · {game.fileSize}</span>
        )}
      </div>
    </button>
  )
}

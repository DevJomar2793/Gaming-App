import type { Game, SortOption, ViewMode } from '../types/game'
import { GameCard } from './GameCard'
import { Icon } from './Icon'

interface GameCollectionProps {
  games: Game[]
  selectedGameId: string
  sortOption: SortOption
  viewMode: ViewMode
  onGameSelect: (game: Game) => void
  onSortChange: (sort: SortOption) => void
  onViewChange: (view: ViewMode) => void
  onResetFilters: () => void
}

export function GameCollection({
  games,
  selectedGameId,
  sortOption,
  viewMode,
  onGameSelect,
  onSortChange,
  onViewChange,
  onResetFilters,
}: GameCollectionProps) {
  return (
    <section className="collection" aria-labelledby="collection-title">
      <div className="collection-header">
        <h1 id="collection-title">All PS4 Games <span>({games.length})</span></h1>

        <div className="collection-controls">
          <label className="sort-control">
            <span>Sort by:</span>
            <select
              value={sortOption}
              onChange={(event) => onSortChange(event.target.value as SortOption)}
            >
              <option value="recent">Recently Added</option>
              <option value="title">Title A–Z</option>
              <option value="release">Release Date</option>
            </select>
          </label>

          <div className="view-toggle" aria-label="Game display style">
            <button
              type="button"
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => onViewChange('grid')}
              aria-label="Grid view"
              aria-pressed={viewMode === 'grid'}
            >
              <Icon name="grid" />
            </button>
            <button
              type="button"
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => onViewChange('list')}
              aria-label="List view"
              aria-pressed={viewMode === 'list'}
            >
              <Icon name="list" />
            </button>
          </div>
        </div>
      </div>

      {games.length > 0 ? (
        <div className={`game-grid game-grid--${viewMode}`}>
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isSelected={game.id === selectedGameId}
              viewMode={viewMode}
              onSelect={onGameSelect}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span aria-hidden="true">🎮</span>
          <h2>No games found</h2>
          <p>Try another search or clear your genre filter.</p>
          <button type="button" onClick={onResetFilters}>Reset filters</button>
        </div>
      )}
    </section>
  )
}

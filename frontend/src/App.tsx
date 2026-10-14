import { useMemo, useState } from 'react'
import './App.css'
import { GameCollection } from './components/GameCollection'
import { GameDetails } from './components/GameDetails'
import { Sidebar } from './components/Sidebar'
import { games } from './data/games'
import type { DetailTab, Game, SortOption, ViewMode } from './types/game'

function App() {
  const [search, setSearch] = useState('')
  const [activeGenre, setActiveGenre] = useState('All Genres')
  const [sortOption, setSortOption] = useState<SortOption>('recent')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [selectedGameId, setSelectedGameId] = useState(games[0].id)
  const [favoriteIds, setFavoriteIds] = useState<string[]>(['god-of-war'])
  const [detailTab, setDetailTab] = useState<DetailTab>('overview')
  const [notice, setNotice] = useState('')

  const filteredGames = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return games
      .filter((game) => {
        const matchesSearch = game.title.toLowerCase().includes(normalizedSearch)
        const matchesGenre =
          activeGenre === 'All Genres' || game.genres.includes(activeGenre)

        return matchesSearch && matchesGenre
      })
      .sort((firstGame, secondGame) => {
        if (sortOption === 'title') {
          return firstGame.title.localeCompare(secondGame.title)
        }

        if (sortOption === 'release') {
          return (
            new Date(secondGame.releaseDate).getTime() -
            new Date(firstGame.releaseDate).getTime()
          )
        }

        return secondGame.addedOrder - firstGame.addedOrder
      })
  }, [activeGenre, search, sortOption])

  const selectedGame =
    games.find((game) => game.id === selectedGameId) ?? games[0]

  function selectGame(game: Game) {
    setSelectedGameId(game.id)
    setDetailTab('overview')
  }

  function toggleFavorite(gameId: string) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(gameId)
        ? currentIds.filter((id) => id !== gameId)
        : [...currentIds, gameId],
    )
  }

  function resetFilters() {
    setSearch('')
    setActiveGenre('All Genres')
  }

  function showNotice(message: string) {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2600)
  }

  return (
    <div className="app-shell">
      <Sidebar
        activeGenre={activeGenre}
        games={games}
        onGenreChange={setActiveGenre}
        onUnavailable={(section) =>
          showNotice(`${section} will be added from its own mockup.`)
        }
      />

      <main className="main-area">
        <header className="topbar">
          <label className="search-box">
            <span className="search-icon" aria-hidden="true" />
            <span className="sr-only">Search PS4 games</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search PS4 games..."
            />
          </label>
        </header>

        <div className="dashboard-content">
          <GameCollection
            games={filteredGames}
            selectedGameId={selectedGame.id}
            sortOption={sortOption}
            viewMode={viewMode}
            onGameSelect={selectGame}
            onSortChange={setSortOption}
            onViewChange={setViewMode}
            onResetFilters={resetFilters}
          />

          <GameDetails
            game={selectedGame}
            activeTab={detailTab}
            isFavorite={favoriteIds.includes(selectedGame.id)}
            onTabChange={setDetailTab}
            onFavoriteToggle={() => toggleFavorite(selectedGame.id)}
            onPlay={() => showNotice(`Launch request sent for ${selectedGame.title}.`)}
            onMore={() => showNotice(`More options for ${selectedGame.title} are not available yet.`)}
          />
        </div>
      </main>

      {notice && (
        <div className="toast" role="status">
          {notice}
        </div>
      )}
    </div>
  )
}

export default App

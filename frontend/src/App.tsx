import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { GameCatalogPage } from './pages/GameCatalogPage'

function App() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(['god-of-war'])

  function toggleFavorite(gameId: string) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(gameId)
        ? currentIds.filter((id) => id !== gameId)
        : [...currentIds, gameId],
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/games" replace />} />
      <Route
        path="/games"
        element={
          <GameCatalogPage
            title="All PS4 Games"
            searchPlaceholder="Search PS4 games..."
            showDownloadAction
            favoriteIds={favoriteIds}
            onFavoriteToggle={toggleFavorite}
          />
        }
      />
      <Route
        path="/library"
        element={
          <GameCatalogPage
            title="My Library"
            searchPlaceholder="Search your library..."
            favoriteIds={favoriteIds}
            onFavoriteToggle={toggleFavorite}
          />
        }
      />
      <Route path="*" element={<Navigate to="/games" replace />} />
    </Routes>
  )
}

export default App

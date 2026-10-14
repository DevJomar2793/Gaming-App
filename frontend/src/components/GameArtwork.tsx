import dashboardMockup from '../../../mockups/EJ Gaming Hub PS4 Dashboard.png'
import type { ArtworkCrop } from '../types/game'

interface GameArtworkProps {
  artwork: ArtworkCrop
  title: string
  hero?: boolean
  useMockupHero?: boolean
}

export function GameArtwork({
  artwork,
  title,
  hero = false,
  useMockupHero = false,
}: GameArtworkProps) {
  const crop = useMockupHero
    ? { x: 1074, y: 166, width: 441, height: 241 }
    : artwork

  return (
    <svg
      className={hero ? 'artwork artwork--hero' : 'artwork'}
      viewBox={`${crop.x} ${crop.y} ${crop.width} ${crop.height}`}
      role="img"
      aria-label={`${title} artwork`}
      preserveAspectRatio={hero ? 'xMidYMid slice' : 'xMidYMid meet'}
    >
      <image href={dashboardMockup} width="1536" height="1024" />
    </svg>
  )
}

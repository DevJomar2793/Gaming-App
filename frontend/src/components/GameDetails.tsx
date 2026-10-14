import type { DetailTab, Game } from "../types/game";
import { GameArtwork } from "./GameArtwork";
import { Icon } from "./Icon";

interface GameDetailsProps {
  game: Game;
  activeTab: DetailTab;
  isFavorite: boolean;
  onTabChange: (tab: DetailTab) => void;
  onFavoriteToggle: () => void;
  onDownload: () => void;
  onMore: () => void;
}

const tabs: DetailTab[] = ["overview", "screenshots", "details"];

export function GameDetails({
  game,
  activeTab,
  isFavorite,
  onTabChange,
  onFavoriteToggle,
  onDownload,
  onMore,
}: GameDetailsProps) {
  return (
    <aside className="game-details" aria-label={`${game.title} details`}>
      <div className="details-hero">
        <GameArtwork
          artwork={game.artwork}
          title={game.title}
          hero
          useMockupHero={game.id === "god-of-war"}
        />
        <button
          type="button"
          className={
            isFavorite
              ? "favorite-button favorite-button--active"
              : "favorite-button"
          }
          onClick={onFavoriteToggle}
          aria-label={
            isFavorite
              ? `Remove ${game.title} from favorites`
              : `Add ${game.title} to favorites`
          }
          aria-pressed={isFavorite}
        >
          <Icon name="heart" />
        </button>
      </div>

      <div className="details-summary">
        <div className="details-cover">
          <GameArtwork artwork={game.artwork} title={game.title} />
        </div>
        <div>
          <h2>{game.title}</h2>
          <div className="summary-badges">
            <span>
              <Icon name="gamepad" size={15} /> PS4
            </span>
            <span>{game.genres.slice(0, 2).join(" / ")}</span>
          </div>
        </div>
      </div>

      <div className="details-actions">
        <button className="play-button" type="button" onClick={onDownload}>
          <Icon name="download" size={19} /> Download
        </button>
        <button
          className="more-button"
          type="button"
          onClick={onMore}
          aria-label="More game options"
        >
          ⋮
        </button>
      </div>

      <div className="detail-tabs" role="tablist" aria-label="Game information">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => onTabChange(tab)}
          >
            {tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="detail-tab-content">
        {activeTab === "overview" && <Overview game={game} />}
        {activeTab === "screenshots" && <Screenshots game={game} />}
        {activeTab === "details" && <FullDetails game={game} />}
      </div>
    </aside>
  );
}

function Overview({ game }: { game: Game }) {
  return (
    <>
      <p className="game-description">{game.description}</p>
      <div className="metadata-grid">
        <Metadata
          icon="calendar"
          label="Release Date"
          value={game.displayReleaseDate}
        />
        <Metadata icon="drive" label="File Size" value={game.fileSize} />
        <Metadata icon="people" label="Developer" value={game.developer} />
        <Metadata icon="building" label="Publisher" value={game.publisher} />
      </div>
      <div className="tag-list">
        {game.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </>
  );
}

function Screenshots({ game }: { game: Game }) {
  return (
    <div className="screenshot-grid">
      {[1, 2, 3].map((number) => (
        <div className={`screenshot screenshot--${number}`} key={number}>
          <GameArtwork
            artwork={game.artwork}
            title={`${game.title} screenshot ${number}`}
            hero
          />
        </div>
      ))}
    </div>
  );
}

function FullDetails({ game }: { game: Game }) {
  return (
    <dl className="full-details">
      <div>
        <dt>Platform</dt>
        <dd>PlayStation 4</dd>
      </div>
      <div>
        <dt>Release date</dt>
        <dd>{game.displayReleaseDate}</dd>
      </div>
      <div>
        <dt>Developer</dt>
        <dd>{game.developer}</dd>
      </div>
      <div>
        <dt>Publisher</dt>
        <dd>{game.publisher}</dd>
      </div>
      <div>
        <dt>File size</dt>
        <dd>{game.fileSize}</dd>
      </div>
    </dl>
  );
}

function Metadata({
  icon,
  label,
  value,
}: {
  icon: "calendar" | "drive" | "people" | "building";
  label: string;
  value: string;
}) {
  return (
    <div className="metadata-item">
      <Icon name={icon} size={27} />
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

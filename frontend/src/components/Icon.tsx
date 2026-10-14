interface IconProps {
  name:
    | 'gamepad'
    | 'library'
    | 'heart'
    | 'download'
    | 'settings'
    | 'grid'
    | 'list'
    | 'play'
    | 'calendar'
    | 'drive'
    | 'people'
    | 'building'
  size?: number
}

export function Icon({ name, size = 22 }: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (name === 'gamepad') {
    return (
      <svg {...commonProps}>
        <path d="M6.5 7h11a4 4 0 0 1 3.8 5.2l-1.5 4.6a2.4 2.4 0 0 1-4.1.8L14.2 16H9.8l-1.5 1.6a2.4 2.4 0 0 1-4.1-.8l-1.5-4.6A4 4 0 0 1 6.5 7Z" />
        <path d="M7 11v4M5 13h4M16.5 11.5h.01M18.5 14h.01" />
      </svg>
    )
  }

  if (name === 'heart') {
    return (
      <svg {...commonProps}>
        <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6l1.2 1.2L12 21l7.6-7.6 1.2-1.2a5.4 5.4 0 0 0 0-7.6Z" />
      </svg>
    )
  }

  if (name === 'download') {
    return (
      <svg {...commonProps}>
        <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19v2h16v-2" />
      </svg>
    )
  }

  if (name === 'settings') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </svg>
    )
  }

  if (name === 'grid') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    )
  }

  if (name === 'list') {
    return (
      <svg {...commonProps}>
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    )
  }

  if (name === 'play') {
    return <svg {...commonProps} fill="currentColor"><path d="m8 5 11 7-11 7Z" stroke="none" /></svg>
  }

  if (name === 'calendar') {
    return <svg {...commonProps}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
  }

  if (name === 'drive') {
    return <svg {...commonProps}><path d="M5 5h14l2 11H3L5 5Z" /><path d="M3 16v3h3v-3m12 0v3h3v-3M8 12h8" /></svg>
  }

  if (name === 'people') {
    return <svg {...commonProps}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20v-2a5 5 0 0 1 10 0v2m2-6a4 4 0 0 1 6 3.5V20" /></svg>
  }

  if (name === 'building') {
    return <svg {...commonProps}><path d="M4 21V7l8-4 8 4v14M2 21h20M8 9h1m6 0h1M8 13h1m6 0h1M8 17h1m6 0h1" /></svg>
  }

  return (
    <svg {...commonProps}>
      <path d="M5 4h3v16H5zM10.5 6h3v14h-3zM16 3h3v17h-3z" />
    </svg>
  )
}

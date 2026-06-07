// Small inline emoji per common link type. Keys are matched
// case-insensitively against the link's label.
export const linkIcons: Record<string, string> = {
  arxiv:       '📜',
  pdf:         '📄',
  code:        '💻',
  huggingface: '🤗',
  project:     '🌐',
  poster:      '🖼️',
  video:       '🎬',
}

export function iconFor(label: string): string | undefined {
  return linkIcons[label.toLowerCase()]
}

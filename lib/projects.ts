export type Project = {
  slug: string
  title: string
  subtitle: string
  role: string
  timeline: string
  tools: string[]
  tags: string[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'eyewitness',
    title: 'Eyewitness: Attention, Memory, and the Illusion of Certainty',
    subtitle: 'Real-time gaze vectors and attention analytics.',
    role: 'Designer + Full-stack Developer',
    timeline: 'KTPHacks 2025 — 1st Place',
    tools: ['React','Node.js','TensorFlow.js'],
    tags: ['AI','Data Viz','Real-time'],
    highlights: ['30 FPS gaze vectors','Heatmap overlays','AI summaries of attention regions']
  },
  {
    slug: 'devdyn-lab',
    title: 'Multimodal Data Visualization for Developmental Research',
    subtitle: 'Multimodal visualization for synchronized signals and video.',
    role: 'Data Visualization Researcher (Design + Engineering)',
    timeline: 'Jan 2024 — Aug 2024',
    tools: ['React', 'D3', 'WebRTC'],
    tags: ['Data Viz','Systems','Research'],
    highlights: ['Real-time synchronized signals + video','Offline access','Performance optimization']
  },
  {
    slug: 'ktp-mobile-application',
    title: 'KTP Mobile Application',
    subtitle: 'Cross-chapter social platform with real-time leaderboards.',
    role: 'Designer + Full-stack Developer',
    timeline: 'KTPHacks 2024 — 2nd Place',
    tools: ['Flutter','Firebase','Firestore','Material 3'],
    tags: ['Mobile','Real-time','Cross-platform'],
    highlights: ['Live leaderboards','Stream-based data model','Image caching & optimized queries','Consistent iOS/Android UI']
  },
  {
    slug: 'healthcare-accessibility',
    title: 'Healthcare Accessibility: Fast Provider Discovery from Messy Data',
    subtitle: 'Normalize messy provider data and enable fast search.',
    role: 'Designer + Developer',
    timeline: 'May 2023 — Oct 2023',
    tools: ['Next.js','Postgres','Elasticsearch'],
    tags: ['Data','Search','Performance'],
    highlights: ['Data normalization','High-throughput queries','Reduced search time']
  }
]

import NotepadChrome from '@/components/WindowChrome/NotepadChrome'

export default function About() {
  return (
    <NotepadChrome theme="plain">
      <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono" style={{ color: '#000' }}>{`============================================
  about.txt — Karim El Guerzyfy
============================================

WHO AM I
--------
Frontend Developer based in Germany.
Self-taught. Focused on React, Next.js,
TypeScript, and modern UI development.

Currently building projects and expanding
skills in API integration and responsive
design.

Completed the Meta Frontend Developer
Professional Certificate (Coursera).

WHAT I DO
---------
I build web interfaces that are functional,
thoughtful, and a little bit different.

This portfolio is an example — instead of
a standard page, I built a Windows XP
desktop. Because why not.

LINKS
-----
GitHub   →  github.com/KarimElGuerzyfy
Email    →  [placeholder@email.com]
Location →  Germany

============================================
`}</pre>
    </NotepadChrome>
  )
}
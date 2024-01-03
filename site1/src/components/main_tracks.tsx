import _ from "lodash"
import React from "react"

const tracks = [
  {
    name: "First of the Year (Equinox)",
    authors: ["Skrillex"]
  },
  {
    name: "Kill EVERYBODY",
    authors: ["Skrillex"]
  },
  {
    name: "Recess",
    authors: ["Skrillex"]
  },
  {
    name: "Right In",
    authors: ["Skrillex"]
  },
  {
    name: "Rock 'n' Roll (Will Take You to the Mountain)",
    authors: ["Skrillex"]
  },
  {
    name: "Ruffneck - Full Flex",
    authors: ["Skrillex"]
  },
  {
    name: "Bangarang (feat. Sirah)",
    authors: ["Skrillex", "Sirah"]
  },
  {
    name: "Kyoto (feat. Sirah)",
    authors: ["Skrillex", "Sirah"]
  },
  {
    name: "Cinema - Skrillex Remix",
    authors: ["Benny Benassi", "Gary Go", "Skrillex"]
  },
  {
    name: "The Island, Pt. 1 (Dawn) - Skrillex Remix",
    authors: ["Pendulum", "Skrillex"]
  },
  {
    name: "Mumbai Power",
    authors: ["Skrillex", "BEAM"]
  },
  {
    name: "Make It Bun Dem",
    authors: ["Skrillex", "Damian Marley"]
  },
  {
    name: "Ragga Bomb (feat. Ragga Twins) - Skrillex & Zomboy Remix",
    authors: ["Skrillex", "Ragga Twins", "Zomboy"]
  },
]

export default function Main() {
  tracks.sort((a, b) => a.name > b.name ? 1 : -1)
  const rows: JSX.Element[] = []
  const row_spans = Array(tracks.length).fill(1)
  tracks.slice().reverse().forEach((track, i, array) => {
    if (i > 0 && _.isEqual(array[i - 1].authors, track.authors)) {
      row_spans[i] = (row_spans[i - 1] || 1) + 1
      row_spans[i - 1] = undefined
    }
  })
  row_spans.reverse()
  tracks.forEach((track, i) => {
    rows.push(
      <tr key={track.name}>
        <td>{track.name}</td>
        {row_spans[i] &&
          <td rowSpan={row_spans[i]}>{track.authors.join(", ")}</td>}
      </tr>
    )
  })
  return (
    <main>
      <h1>Skrillex - EDM artist</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Track</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </main >
  )
}

import _ from "lodash"
import React from "react"

const tracks = [
  {
    name: "Without Me",
    authors: ["Eminem"]
  },
  {
    name: "Forgot About Dre",
    authors: ["Dr. Dre", "Eminem"]
  },
  {
    name: "What's The Difference",
    authors: ["Dr. Dre", "Eminem", "Xzibit"]
  },
  {
    name: "The Real Slim Shady",
    authors: ["Eminem"]
  },
  {
    name: "Lose Yourself",
    authors: ["Eminem"]
  },
  {
    name: "My Name Is",
    authors: ["Eminem"]
  },
  {
    name: "'Till I Collapse",
    authors: ["Eminem"]
  },
  {
    name: "Rap God",
    authors: ["Eminem"]
  },
  {
    name: "Berzerk",
    authors: ["Eminem"]
  },
  {
    name: "Venom",
    authors: ["Eminem"]
  },
  {
    name: "Just Lose It",
    authors: ["Eminem"]
  },
  {
    name: "Godzilla",
    authors: ["Eminem", "Juice WRLD"]
  },
  {
    name: "Kamikaze",
    authors: ["Eminem"]
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
      <h1>Eminem - Rap artist</h1>
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

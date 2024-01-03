import Cover from "./cover"

export default function Main() {
  const covers = []
  for (let i = 1; i <= 10; i++) {
    const cover = `cover${i}.jpg`
    const alt = `Cover ${i} from Skrillex album`
    covers.push(<Cover key={i} cover={cover} alt={alt} />)
  }
  return (
    <main>
      <h1>Skrillex - EDM artist</h1>
      <div style={{ width: "100%" }}>
        <p>Some of the album covers:</p>
        <div id="covers">
          {covers}
        </div>
      </div>
    </main >
  )
}

export type FooterProps = {
  text?: string
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="text-muted">{props.text || ''}</span>
      </div>
    </footer>
  )
}

import React from "react"

export type ActivePage = "covers" | "tracks"

export type HeaderProps = {
  current_page: ActivePage
  set_current_page: React.Dispatch<React.SetStateAction<ActivePage>>
}

export default function Header(props: HeaderProps) {
  function clicked(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const clicked_page = (event.target as HTMLAnchorElement).id as ActivePage
    props.set_current_page(clicked_page)
  }
  const pages = ["tracks", "covers"]
  const nav_links: JSX.Element[] = []
  pages.forEach(page => {
    const classes = `nav-link${props.current_page === page ? " active" : ''}`
    const name = page[0].toUpperCase() + page.slice(1)
    nav_links.push(
      <li className="nav-item">
        <a href="." id={page} className={classes} onClick={clicked}>{name}</a>
      </li>
    )
  })
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        {nav_links}
      </ul>
    </header>
  )
}

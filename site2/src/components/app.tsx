import { useState } from "react"

import Footer from "./footer"
import Header, { ActivePage } from "./header"
import Main from "./main"

export default function Head() {
  const [page, set_page] = useState("tracks" as ActivePage)
  return (
    <>
      <Header current_page={page} set_current_page={set_page} />
      <Main current_page={page} />
      <Footer text="lab6 site2 (Andrew Voynov)" />
    </>
  )
}

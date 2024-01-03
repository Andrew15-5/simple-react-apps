import { ActivePage } from "./header"
import MainCovers from "./main_covers"
import MainTracks from "./main_tracks"

type MainProps = {
  current_page: ActivePage
}

export default function Main(props: MainProps) {
  function get_main(current_page: ActivePage) {
    switch (current_page) {
      case "tracks": return <MainTracks />
      case "covers": return <MainCovers />
    }
  }
  return get_main(props.current_page)
}

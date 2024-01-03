import { Helmet } from "react-helmet-async"

export type HeadProps = {
  title?: string
}

export default function Head(props: HeadProps) {
  return (
    <Helmet>
      {props.title && <title>{props.title}</title>}
    </Helmet>
  )
}

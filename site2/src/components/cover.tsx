export type CoverType = {
  cover: string,
  alt: string
}

export default function Cover(props: CoverType) {
  return (
    <div className="cover">
      <img src={"/images/covers/" + props.cover} alt={props.alt} />
    </div>
  )
}

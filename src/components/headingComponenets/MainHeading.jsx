export default function MainHeading(props) {
  return (
    <div
      className="main-heading"
      style={{ fontSize: props.fontSize, fontWeight: props.fontWeight }}
    >
      {props.value}
    </div>
  );
}

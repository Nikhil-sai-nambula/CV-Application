export default function BoldSubHeading(props) {
  return (
    <>
      <div
        className="bold-sub-heading"
        style={{ fontWeight: props.fontWeight, fontSize: props.fontSize }}
      >
        {props.value}
      </div>
    </>
  );
}

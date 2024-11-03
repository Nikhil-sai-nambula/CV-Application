export default function SubHeading(props) {
  return (
    <>
      <div
        className="sub-heading"
        style={{ fontWeight: props.fontWeight, fontSize: props.fontSize }}
      >
        {props.value}
      </div>
    </>
  );
}

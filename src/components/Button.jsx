export default function Button(props) {
  return (
    <>
      <button className="button-89" onClick={props.onClick} value={props.value}>
        {props.value}
      </button>
    </>
  );
}

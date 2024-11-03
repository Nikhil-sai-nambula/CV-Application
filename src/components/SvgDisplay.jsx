import StarIcon from "../assets/star-svgrepo-com.svg";

export default function SvgDisplay(props) {
  const rating = Math.max(0, parseInt(props.rating, 10) || 0);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {[...Array(rating)].map((_, index) => (
        <img key={index} src={StarIcon} alt="Star" width="15" height="15" />
      ))}
    </div>
  );
}

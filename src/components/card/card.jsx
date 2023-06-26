import "./card.css";

const Card = (props) => {
  const handleDel = () => {
    props.onDel(props.data.id);
  };
  const handleEd = () => {
    props.onEd(props.data.id);
  };
  return (
    <div className="card">
      <div className="icon">
        <i class="bi bi-trash3" onClick={handleDel}></i>
        <i class="bi bi-pencil-square" onClick={handleEd}></i>
      </div>
      <div className="card_1">
        <h3>
          <i class="bi bi-person-square"></i> {props.data.name}
        </h3>

        <h3>
          <i class="bi bi-envelope-at"></i> {props.data.email}
        </h3>

        <h3>
          <i class="bi bi-telephone"></i> {props.data.phno}
        </h3>
      </div>
    </div>
  );
};

export default Card;

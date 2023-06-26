import "./styles.css";
import { useState } from "react";
import Card from "./components/card/card";
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [formDataArray, setFormDataArray] = useState([]);
  const [state, setState] = useState(0);
  const [id, setId] = useState(null);
  const [togglebtn, settog] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setState(state + 1);
    console.log(state);
    const formData = {
      id: state,
      name: name,
      email: email,
      phno: phno
    };

    setFormDataArray([...formDataArray, formData]);

    // Reset form fields
    setName("");
    setEmail("");
    setPhno("");
  };

  const handleDeleteCard = (cardId) => {
    // Filter out the card with the given ID and update the state
    setFormDataArray(formDataArray.filter((card) => card.id !== cardId));
  };

  const handleEditCard = (id) => {
    let newedit = formDataArray.find((elem) => {
      return elem.id === id;
    });
    settog(false);
    setId(id);
    setName(newedit.name);
    setEmail(newedit.email);
    setPhno(newedit.phno);
  };

  const edititem = () => {
    setFormDataArray((data) =>
      data.map((el) => {
        if (el.id === id) {
          return { ...el, name: name, email: email, phno: phno };
        }
        return el;
      })
    );
    setName("");
    setEmail("");
    setPhno("");
    setId(null);
    settog(true);
  };
  return (
    <div className="App">
      <div className="Top_bar">User INFO</div>
      <div className="container">
        <div className="right_side">
          <h2>Add user</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="ele1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
            <input
              type="email"
              name="ele2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="ele3"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
              placeholder="Phno..."
              required
            />
            {togglebtn ? (
              <button type="submit"> Add details </button>
            ) : (
              <button type="edit" onClick={edititem}>
                Edit
              </button>
            )}
          </form>
        </div>
        <div className="leftSide">
          {formDataArray.map((data, index) => (
            <Card
              data={data}
              key={index}
              onDel={handleDeleteCard}
              onEd={handleEditCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

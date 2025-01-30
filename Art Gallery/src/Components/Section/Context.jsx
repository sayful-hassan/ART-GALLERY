import "./Context.css";
import mainBackground from "../../assets/image of art-gallery project/analog art/maincharacter.jpg";

function Context() {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-12">
          <img src={mainBackground} />
          <h2>art by</h2>
          <h1>SAIFUL HASSAN</h1>
        </main>
      </div>
    </div>
  );
}

export default Context;

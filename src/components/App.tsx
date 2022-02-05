import { Fragment } from "react";
import { Canvas } from "./Canvas";
import "./App.css";
import { Header } from "./Header/Header";

function App() {
  return (
    <div className="app">
      <Canvas />
      <Header />

      <div className="container">
        <section className="sec center-xy">
          <h1>react-three-fiber</h1>
        </section>
        <section className="sec">
          {new Array(10).fill(0).map((_, i) => (
            <Fragment key={i}>
              <h2>{`section ${i + 1}`}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dignissimos error soluta, ab
                reprehenderit ut ducimus nesciunt dolorem maiores maxime architecto ipsa quia cum. Officia rerum enim
                deserunt, labore aperiam, quidem nihil illo reiciendis cum dolorum delectus. Repellendus dolorem magnam
                voluptates ea? Cum esse minus nemo quidem ipsam libero corporis aperiam atque qui nobis eos amet velit
                illum suscipit molestias vitae porro, laboriosam quisquam incidunt harum consectetur nostrum quia.
                Excepturi inventore aperiam voluptates sapiente at. Officia est rem dicta dignissimos exercitationem
                ducimus soluta doloremque, tempora, possimus veritatis ipsam optio hic aspernatur aliquam vel neque
                velit pariatur fuga vitae sunt expedita?
              </p>
            </Fragment>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;

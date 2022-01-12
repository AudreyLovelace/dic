import React from "react";

export default function Section1(props) {
  if (props.dictionary !== null) {
    let elements = props.dictionary.meanings;
    console.log(elements);

    return (
      <div>
        {elements.map((element, index) => {
          return (
            <section key={index} className="part">
              <h4>{element.partOfSpeech}</h4>
              <br />
              <p>{element.definitions[0].definition}</p>
              <br />
              <em>{element.definitions[0].example}</em>
              <br />
              <br />
              <br />
              <h5>Similar:</h5>
            </section>
          );
        })}
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

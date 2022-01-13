import React from "react";
import Synonyms from "./Synonyms";

export default function Section1(props) {
  if (props.dictionary !== null) {
    console.log(props.dictionary.meanings);

    return (
      <div>
        {props.dictionary.meanings.map((element, index) => {
          return (
            <section key={index} className="part">
              <h4>{element.partOfSpeech}</h4>
              <br />
              <p>{element.definitions[0].definition}</p>
              <br />
              <em>{element.definitions[0].example}</em>
              <br />
              <br />

              <Synonyms words={element.definitions[0].synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

import React from "react";

export default function Section1(props) {
  if (props.dictionary !== null) {
    return (
      <section className="part">
        <h1>{props.dictionary.word}</h1>
      </section>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
export default function Section1(props) {
  if (props.dictionary !== null) {
    console.log(props.dictionary.phonetics);

    return (
      <section className="part">
        <h1>{props.dictionary.word}</h1>
        <ul>
          {props.dictionary.phonetics.map((element, index) => {
            if (element.audio !== undefined) {
              let audioMp3 = new Audio(element.audio);
              function start(event) {
                event.preventDefault();
                audioMp3.play();
              }
              return (
                <li key={index}>
                  <a href="/" title="" onClick={start}>
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}[{element.text}]
                  <br />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </section>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default function Synonyms(props) {
  if (props.words[0] !== undefined) {
    return (
      <ul>
        <h4>synonyms:</h4>
        {props.words.map((element, index) => {
          return (
            <li key={index}>
              {element} {"\u00A0"}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}

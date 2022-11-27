import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";

const Definition = () => {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();
  console.log("Word", word);

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
        }
        return res.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);

  if (notFound) {
    return (
      <>
        <NotFound />
        <Link to='/dictionary'>Search Another</Link>
      </>
    );
  }
  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition</h1>
          {word.map((meaning) => (
            <p key={uuidv4()}>
              <span style={{ color: "red" }}>
                {meaning.partOfSpeech + ": "}
              </span>
              {meaning.definitions[0].definition}
            </p>
          ))}
        </>
      ) : null}
    </>
  );
};

export default Definition;

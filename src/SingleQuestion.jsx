import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  //   const [showText, setShowText] = useState(false);

  const selectId = activeId === id;

  return (
    <article className="single-question">
      <header>
        <h2 className="question">{title}</h2>
        <button onClick={() => toggleQuestion(id)}>
          {selectId ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {selectId && <p className="info">{info}</p>}
    </article>
  );
};
export default SingleQuestion;

import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info }) => {
  const [showText, setShowText] = useState(false);
  return (
    <article className="single-question">
      <header>
        <h2 className="question">{title}</h2>
        <button>{showText ? <AiOutlinePlus /> : <AiOutlineMinus />}</button>
      </header>
      <p className="info">{showText && info}</p>
    </article>
  );
};
export default SingleQuestion;

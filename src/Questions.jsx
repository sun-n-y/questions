import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
  return (
    <>
      <h1>Questions</h1>
      <div className="questions">
        {questions.map((question) => {
          return <SingleQuestion {...question} key={question.id} />;
        })}
      </div>
    </>
  );
};
export default Questions;

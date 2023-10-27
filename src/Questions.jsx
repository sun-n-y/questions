import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
  return (
    <>
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion {...question} key={question.id} />;
      })}
    </>
  );
};
export default Questions;

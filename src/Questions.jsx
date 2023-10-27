import SingleQuestion from './SingleQuestion';

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <>
      <h1>Questions</h1>
      <div className="questions">
        {questions.map((question) => {
          return (
            <SingleQuestion
              {...question}
              key={question.id}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </div>
    </>
  );
};
export default Questions;

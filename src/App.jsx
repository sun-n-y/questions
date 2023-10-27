import { useState } from 'react';
import data from './data';
import Questions from './Questions';

function App() {
  const [questions, setQuestions] = useState(data);

  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newId = activeId === id ? null : id;
    setActiveId(newId);
  };

  return (
    <>
      <main>
        <Questions
          questions={questions}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      </main>
    </>
  );
}

export default App;

import React, { useState } from "react";
import data from "./data";

import Question from "./Question";
function Accordion() {
  const [questions, setQuestion] = useState(data);

  return (
    <main>
      <section>
        <div className="title">
          <h2>FAQ?</h2>
          <div className="underline"></div>
        </div>
        <div className="container">
          <h3>questions and answers about login</h3>
          <div>
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accordion;

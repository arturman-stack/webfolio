"use client";

import React, {useState} from 'react';
import Link from "next/link";

const Test = ({data}) => {
  const {test} = data;
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [scorePercent, setScorePercent] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [incorrectAnswer, setIncorrectAnswer] = useState(null);

  const handleAnswerClick = (questionIndex, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  const handleFinishClick = () => {
    setShowConfirmModal(true);
  };

  const confirmFinish = () => {
    setShowConfirmModal(false);
    setIsFinished(true);

    const results = test.questions.map((question, index) => {
      const selected = selectedAnswers[index];
      const isCorrect = selected === question.correctAnswer;
      return {
        question: question.question,
        selectedAnswer: selected || null,
        correctAnswer: question.correctAnswer,
        isCorrect,
      };
    });

    const correctCount = results.filter(result => result.isCorrect).length;
    const incorrectCount = results.filter(result => !result.isCorrect).length;
    setCorrectAnswer(correctCount);
    setIncorrectAnswer(incorrectCount);

    const percentCorrect = (correctCount / test.questions.length) * 100;
    const roundedPercent = Math.round(percentCorrect);
    setScorePercent(roundedPercent);

    const existingResults = JSON.parse(localStorage.getItem("testResults")) || [];
    const updatedResults = [...existingResults];
    const existingIndex = updatedResults.findIndex(result => result.id === test.id);

    if (existingIndex !== -1) {
      updatedResults[existingIndex].percent = roundedPercent;
    } else {
      updatedResults.push({id: test.id, percent: roundedPercent});
    }

    localStorage.setItem("testResults", JSON.stringify(updatedResults));
  };

  return (
    <div className="px-[10vw] pb-[5vw] pt-[2vw] flex flex-col gap-[1vw] min-h-[38.85vw] relative">
      <h1 className="text-primary-500 text-h1 font-bold capitalize">{test?.title}</h1>

      <div className="flex flex-col gap-[1vw] divide-y-4">
        {test?.questions?.map((question, questionIndex) => (
          <div key={questionIndex} className="flex flex-col gap-[.5vw] pt-[1vw]">
            <h2 className="text-primary-500 text-main font-bold capitalize">{question.question}</h2>
            <div className="flex flex-wrap gap-[1vw]">
              {question?.options?.map((option, index) => {
                const isSelected = selectedAnswers[questionIndex] === option;
                const isCorrectAnswer = isFinished && question.correctAnswer === option;
                const isWrongAnswer = isFinished && isSelected && !isCorrectAnswer;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(questionIndex, option)}
                    className={`text-p font-bold capitalize px-[1vw] py-[.5vw] border-[.1vw] rounded-full 
                      ${isSelected ? "bg-primary-500/60 text-white-500" : "text-black-400 border-primary-500"} 
                      ${isCorrectAnswer ? `!bg-[#13AD54] !text-white-500 ${!isSelected ? "border-[#C8102E]" : ""}` : ""}
                      ${isWrongAnswer ? "!bg-[#C8102E] !text-white-500" : ""}`}
                    disabled={isFinished}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between items-center mt-4">
        <div className="text-green-600 text-lg font-bold">
          {isFinished ? `Արդյունք: ${scorePercent}%, Ճիշտ պատասխաններ։՝ ${correctAnswer}, Սխալ պատասխաններ՝ ${incorrectAnswer}` : null}
        </div>
        {!isFinished ? (
          <button
            className={`w-max text-black-400 text-p font-bold capitalize 
            px-[1vw] py-[.5vw] border-[.1vw] border-primary-500 rounded-full duration-500 
            ${isFinished ? "hover:bg-secondary-500 hover:text-black-400" : "hover:bg-black-500 hover:text-secondary-500"}`}
            onClick={handleFinishClick}
            disabled={isFinished}
          >
            Ավարտել
          </button>
        ) : (
          <Link
            href={"/tests"}
            className="w-max text-black-400 text-p font-bold capitalize
            px-[1vw] py-[.5vw] border-[.1vw] border-primary-500 rounded-full duration-500 hover:bg-black-500 hover:text-secondary-500"
          >Թեստեր</Link>
        )}
      </div>

      {/* Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white-500 p-[2vw] rounded-2xl shadow-xl animate-fade-in-up transition-all">
            <h2 className="text-xl font-bold text-primary-500 mb-2">Վստա՞հ եք</h2>
            <p className="text-p text-black-400 mb-4">Ցանկանում եք ավարտել թեստը:</p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-sm font-bold rounded-full border border-gray-400 hover:bg-gray-200"
              >
                Չեղարկել
              </button>
              <button
                onClick={confirmFinish}
                className="px-4 py-2 text-sm font-bold rounded-full bg-primary-500 text-white-500 hover:bg-primary-600"
              >
                Այո, ավարտել
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;

import React from 'react';
import { questions } from './data/questions';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Self-Reflection Questionnaire</h1>
          
          <ol className="space-y-6">
            {questions.map((question) => (
              <li 
                key={question.id}
                className="text-gray-700 text-lg leading-7 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="font-semibold text-gray-900">#{question.id}.</span> {question.text}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p className="mb-2">Made on <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            ZAPT
          </a></p>
        </div>
      </div>
    </div>
  );
}
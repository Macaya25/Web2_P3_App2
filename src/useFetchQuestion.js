import { useState, useEffect, useContext } from 'react';
import { fetchQuestion } from './Fetchs';
import API_CONTEXT from "./APIContext"

export function useFetchQuestion() {
  const [questionData, setQuestionData] = useState({question:'', type:-1, questionOrder:0, options:[]})
  const [hookState, setHookState] = useState(false)

  const {evaluationId, memberId} = useContext(API_CONTEXT)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchQuestion(evaluationId, memberId);
        setQuestionData({question:data.question, type:data.question_type, questionOrder: data.order})
       
        if(typeof data.options != "undefined"){
          setQuestionData(previousData => {
            const optionString = data.options.split(',')
            return {...previousData, options:optionString}
          });
        } else{
          setQuestionData(previousData => {
            return {...previousData, questionOrder:-1}
          });
          console.log("No more questions available.");
        }

      } catch (error) {
        console.log('Error fetching question:', error);
      }
    }

    fetchData();
  }, [hookState]);

  return { questionData, hookState, setHookState };
}

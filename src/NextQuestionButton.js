import React, { useContext } from 'react'
import { sendQuestion } from "./Fetchs"
import { useFetchQuestion } from './useFetchQuestion';
import API_CONTEXT from "./APIContext"

export default function NextQuestionButton({selectedValue, hookState, setHookState}) {
  //TODO: Implement function to send question to API
  const {evaluationId, memberId} = useContext(API_CONTEXT)
  
  const handleNextQuestion = () => {
    // Handle the selected value here, e.g., pass it to an API call or perform some other action
    console.log('Selected Value:', selectedValue);
    sendQuestion(evaluationId, memberId, selectedValue).then(
        setHookState(!hookState)
    )
  };

  return (
    <button type="button" className="btn btn-secondary" onClick={handleNextQuestion}>Send</button>
  )
}

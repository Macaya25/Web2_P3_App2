import { useEffect, useState, useContext } from "react";
import {fetchQuestion} from './Fetchs'
import Question from './Question'
import { useFetchQuestion } from './useFetchQuestion';
import ProgressBar from "./ProgressBar";

export default function Menu2({questionAmount}) {
  const { questionData, hookState, setHookState } = useFetchQuestion();
  

  return (
    <>
    {console.log("Data: ",questionData)}
    <ProgressBar question={questionData['questionOrder']} questionAmount={questionAmount}/>
    <Question question={questionData['question']} questionType={questionData['type']} questionOptions={questionData['options']} 
    hookState={hookState} setHookState={setHookState}/>
    </>
    
  )
}

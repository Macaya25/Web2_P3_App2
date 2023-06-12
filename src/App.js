import { useEffect, useState, useRef } from "react";
import API_CONTEXT from "./APIContext"
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";

function App() {
  const [menuState, setMenuState] = useState(1);
  const [questionAmount, setQuestionAmount] = useState(0);

  const contextValue = {
    evaluationId: 8,
    memberId: 1
  }


  return (
    <API_CONTEXT.Provider value={contextValue}>
      {/* MenuState 1 is the intro menu */}
      {menuState === 1 && (
      <>
        <Menu1 setMenuState={setMenuState} setQuestionAmount={setQuestionAmount}/>
      </>)}

      {/* MenuState 2 is the menu for answering questions */}
      {menuState === 2 && (
      <>
        <Menu2 questionAmount={questionAmount}/>
      </>)}
      
    </API_CONTEXT.Provider>
  );
}

export default App;

import React from 'react'

export default function ProgressBar({question, questionAmount}) {
  // If question === -1 then no more questions to answer
  if (question === -1){
    question = questionAmount;
  }
  else{
    question -= 1;
  }
  const progress = Math.round((question / questionAmount) * 100);
  console.log("Progress: ", progress);
  return (
    <>
      <div className="card">
        <h5 className="card-header text-center">
          Progress
        </h5>
        <div className="card-body">
          <div className="progress">
              <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" 
                  role="progressbar" style={{width: progress+"%"}} 
                  aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                  {question}/{questionAmount}
              </div>
          </div>
        </div>
      </div>

      {/* Print Results */}
      {(progress === 100) && 
      (<div>
        
      </div>)}
    </>
    
  )
}

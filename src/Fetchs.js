/* eslint-disable no-unused-vars */
// const API_URL = "https://web2-p3-backend-grupo12-63xvuvdbh-web-p3.vercel.app";
const API_URL = "http://localhost:8000";

export function fetchEvaluation(evaluationId) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/evaluations/${evaluationId}`, {
        method: "GET",
        headers: {
          // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
          // 'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch evaluation');
          }
          return response.json();
        })
        .then((data) => {
          console.log("Evaluation: ", data);
          resolve(data);
        })
        .catch((error) => {
          console.log("Evaluation Error: ", error);
          reject(error);
        });
    });
}

export function fetchGroup(groupId){
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/groups/${groupId}`, {
            method: "GET",
            headers: {
            // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
            // 'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch group.');
            }
            return response.json();
          })
          .then((data) => {
            console.log("Group: ", data);
            resolve(data);
          })
          .catch((error) => {
            console.log("Group Error: ", error);
            reject(error);
          });
    });
}

export function fetchAssignment(evaluationId){
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/evaluations/${evaluationId}/assignment`, {
            method: "GET",
            headers: {
            // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
            // 'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch group.');
            }
            return response.json();
          })
          .then((data) => {
            console.log("Assignment: ", data);
            resolve(data);
          })
          .catch((error) => {
            console.log("Group Error: ", error);
            reject(error);
          });
    });
}


export function fetchQuestion(evaluationId, memberId){
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/evaluations/${evaluationId}/assignment/${memberId}/question`, {
            method: "GET",
            headers: {
            // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
            // 'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
            if (!response.ok) {
            //   throw new Error('Failed to fetch question.');
            }
            return response.json();
          })
          .then((data) => {
            console.log("Question: ", data);
            resolve(data);
          })
          .catch((error) => {
            console.log("Question Error: ", error);
            reject(error);
          });
    });
}

export function sendQuestion(evaluationId, memberId, answer){
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/evaluations/${evaluationId}/assignment/${memberId}/question`, {
            method: "POST",
            body: JSON.stringify({
                'answer': answer
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            }
        }).then((response) => {
            if (!response.ok) {

            }
            return response.json();
          })
          .then((data) => {
            console.log("Sent Question: ", data);
            resolve(data);
          })
          .catch((error) => {
            console.log("Sent Question Error: ", error);
            reject(error);
          });
    })
}


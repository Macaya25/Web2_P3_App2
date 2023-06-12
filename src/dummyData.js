
export function dummyAssignment(){
    return {
        "id": 1,
        "name": "Assignment 1",
        "questions": [
          {
            "question": "Question 1?",
            "answer": "C",
            "difficulty": 1,
            "options": "A, B, C, D",
            "id": 1,
            "question_type": 0,
            "order": 0,
            "assignment_id": 1
          },
          {
            "question": "Question 2?",
            "answer": "True",
            "difficulty": 1,
            "options": "True, False",
            "id": 2,
            "question_type": 1,
            "order": 1,
            "assignment_id": 1
          }
        ]
      }
}

export function dummyEvaluation(){
    return {
        "id": 1,
        "_creation_date": "2023-06-08T23:31:01.167974",
        "group_id": 1,
        "name": "Evaluation 1",
        "due_date": "2023-06-08T23:30:51.001000",
        "assignment_id": 1
      }
}

export function dummyGroup(){
    return {
        "id": 1,
        "name": "Group1",
        "group_members": [
          {
            "email": "member@gmail.com",
            "last_name": "string",
            "_solved_questions_ids": "",
            "name": "member1",
            "id": 1,
            "group_id": 1
          },
          {
            "email": "member2@gmail.com",
            "last_name": "string",
            "_solved_questions_ids": "",
            "name": "member2",
            "id": 2,
            "group_id": 1
          }
        ]
      }
}

export function dummyQuestion(){
    return {
        "question_type": 0,
        "question": "True or False: Water boils at 100 degrees Celsius.",
        "options": "",
        "answer": "True",
        "order": 1,
        "difficulty": 2
      }
}
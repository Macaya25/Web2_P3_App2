import React, { useEffect, useState } from 'react';

export default function Evaluation({ evaluation }) {

  return (
    <div>
        <h1>{evaluation.name}</h1>
        <span>{"Due Date: " + evaluation.due_date}</span>
    </div>
  );
}
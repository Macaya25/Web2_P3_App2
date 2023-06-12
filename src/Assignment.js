import React, { useEffect, useState }from 'react'
import { fetchAssignment } from './Fetchs';


export default function Assignment({ assignment }) {

  return (
    <div className="card-footer">
      <small className="text-muted">{assignment.name}</small>
    </div>
  )
}

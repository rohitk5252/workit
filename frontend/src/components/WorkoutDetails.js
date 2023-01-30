import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'
// Date FNS to format date time
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
  const { dispatch } = useWorkoutContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/'+workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
<div className="workout-details">
    <h4>{workout.title}</h4>
    <p><strong>Load (kg):</strong> {workout.load}</p>
    <p><strong>Reps (kg):</strong> {workout.reps}</p>
    <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true})}</p>
    {/* <button className="delete" onClick={handleClick}>Delete</button> */}
    <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
</div>  )
}

export default WorkoutDetails

import React from 'react'

const WorkoutDetails = ({workout}) => {

  const handleClick = async () => {
    const response = await fetch('/api/workouts/'+workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok){
      
    }
  }

  return (
<div className="workout-details">
    <h4>{workout.title}</h4>
    <p><strong>Load (kg):</strong> {workout.load}</p>
    <p><strong>Reps (kg):</strong> {workout.reps}</p>
    <p>Created At: {workout.createdAt.substring(0,10)}</p>
    <button className="delete" onClick={handleClick}>Delete</button>
    {/* <span onClick={handleClick}>Delete</span> */}
</div>  )
}

export default WorkoutDetails
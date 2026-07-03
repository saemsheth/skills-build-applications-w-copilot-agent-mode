import { useState, useEffect } from 'react';
import { apiService } from '../apiService';

export function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await apiService.getWorkouts();
        // Handle both array and paginated responses
        setWorkouts(Array.isArray(data) ? data : data.workouts || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) return <div className="alert alert-info">Loading workouts...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div>
      <h2>Workouts</h2>
      <div className="row">
        {workouts.map((workout) => (
          <div key={workout._id} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
                <p className="card-text">{workout.description}</p>
                <p className="mb-2">
                  <strong>Difficulty:</strong> <span className="badge bg-primary">{workout.difficulty}</span>
                </p>
                <p className="mb-2">
                  <strong>Duration:</strong> {workout.duration} minutes
                </p>
                <p className="mb-0">
                  <strong>Target Muscles:</strong> {workout.targetMuscles?.join(', ') || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {workouts.length === 0 && <p className="text-muted">No workouts found.</p>}
    </div>
  );
}

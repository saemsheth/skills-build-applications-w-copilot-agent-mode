import { useState, useEffect } from 'react';
import { apiService } from '../apiService';

export function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await apiService.getTeams();
        // Handle both array and paginated responses
        setTeams(Array.isArray(data) ? data : data.teams || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <div className="alert alert-info">Loading teams...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div>
      <h2>Teams</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Team Name</th>
              <th>Description</th>
              <th>Members</th>
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team._id}>
                <td><strong>{team.name}</strong></td>
                <td>{team.description}</td>
                <td>{team.memberCount}</td>
                <td>{team.totalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {teams.length === 0 && <p className="text-muted">No teams found.</p>}
    </div>
  );
}

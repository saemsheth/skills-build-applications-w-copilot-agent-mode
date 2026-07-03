import { useState, useEffect } from 'react';
import { apiService } from '../apiService';

/**
 * Leaderboard component - fetches from API endpoint:
 * https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard
 */
export function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await apiService.getLeaderboard();
        // Handle both array and paginated responses
        setLeaderboard(Array.isArray(data) ? data : data.leaderboard || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return <div className="alert alert-info">Loading leaderboard...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div>
      <h2>Leaderboard</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Rank</th>
              <th>Type</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry) => (
              <tr key={entry._id}>
                <td><strong>#{entry.rank}</strong></td>
                <td>{entry.userId ? 'User' : 'Team'}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {leaderboard.length === 0 && <p className="text-muted">No leaderboard data found.</p>}
    </div>
  );
}

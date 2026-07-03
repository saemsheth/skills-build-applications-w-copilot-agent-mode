/**
 * API Service for OctoFit Tracker
 * 
 * Uses VITE_CODESPACE_NAME environment variable to build API base URL
 * Falls back to localhost:8000 if VITE_CODESPACE_NAME is not defined
 */

const getApiBaseUrl = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  
  // Check if codespace name exists and is not empty
  if (codespaceName && codespaceName.trim() !== '') {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }
  
  // Fallback to localhost
  return 'http://localhost:8000/api';
};

const API_BASE_URL = getApiBaseUrl();

export const apiService = {
  // Users
  getUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  getUserById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  },

  createUser: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to create user');
    return response.json();
  },

  // Teams
  getTeams: async () => {
    const response = await fetch(`${API_BASE_URL}/teams`);
    if (!response.ok) throw new Error('Failed to fetch teams');
    return response.json();
  },

  getTeamById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/teams/${id}`);
    if (!response.ok) throw new Error('Failed to fetch team');
    return response.json();
  },

  // Activities
  getActivities: async () => {
    const response = await fetch(`${API_BASE_URL}/activities`);
    if (!response.ok) throw new Error('Failed to fetch activities');
    return response.json();
  },

  getActivityById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/activities/${id}`);
    if (!response.ok) throw new Error('Failed to fetch activity');
    return response.json();
  },

  createActivity: async (activityData) => {
    const response = await fetch(`${API_BASE_URL}/activities`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(activityData),
    });
    if (!response.ok) throw new Error('Failed to create activity');
    return response.json();
  },

  // Leaderboard
  getLeaderboard: async () => {
    const response = await fetch(`${API_BASE_URL}/leaderboard`);
    if (!response.ok) throw new Error('Failed to fetch leaderboard');
    return response.json();
  },

  getUserLeaderboard: async () => {
    const response = await fetch(`${API_BASE_URL}/leaderboard/users`);
    if (!response.ok) throw new Error('Failed to fetch user leaderboard');
    return response.json();
  },

  getTeamLeaderboard: async () => {
    const response = await fetch(`${API_BASE_URL}/leaderboard/teams`);
    if (!response.ok) throw new Error('Failed to fetch team leaderboard');
    return response.json();
  },

  // Workouts
  getWorkouts: async () => {
    const response = await fetch(`${API_BASE_URL}/workouts`);
    if (!response.ok) throw new Error('Failed to fetch workouts');
    return response.json();
  },

  getWorkoutById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/workouts/${id}`);
    if (!response.ok) throw new Error('Failed to fetch workout');
    return response.json();
  },

  createWorkout: async (workoutData) => {
    const response = await fetch(`${API_BASE_URL}/workouts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workoutData),
    });
    if (!response.ok) throw new Error('Failed to create workout');
    return response.json();
  },
};

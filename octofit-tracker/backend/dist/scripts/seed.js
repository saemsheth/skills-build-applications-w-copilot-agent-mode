/**
 * Seed the octofit_db database with test data
 */
import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Workout from '../models/Workout.js';
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
async function seedDatabase() {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');
        // Clear existing data
        await User.deleteMany({});
        await Team.deleteMany({});
        await Activity.deleteMany({});
        await Leaderboard.deleteMany({});
        await Workout.deleteMany({});
        console.log('Cleared existing collections');
        // Create teams
        const teams = await Team.insertMany([
            {
                name: 'Octopus Athletes',
                description: 'Competitive fitness team',
                memberCount: 4,
                totalScore: 2500,
            },
            {
                name: 'Wave Runners',
                description: 'Endurance focused group',
                memberCount: 5,
                totalScore: 2800,
            },
            {
                name: 'Reef Warriors',
                description: 'Strength and conditioning crew',
                memberCount: 3,
                totalScore: 2100,
            },
        ]);
        console.log('Created teams');
        // Create users
        const users = await User.insertMany([
            {
                name: 'Alice Johnson',
                email: 'alice@octofit.com',
                teamId: teams[0]._id.toString(),
                totalActivities: 24,
            },
            {
                name: 'Bob Smith',
                email: 'bob@octofit.com',
                teamId: teams[0]._id.toString(),
                totalActivities: 18,
            },
            {
                name: 'Carol Davis',
                email: 'carol@octofit.com',
                teamId: teams[1]._id.toString(),
                totalActivities: 32,
            },
            {
                name: 'David Chen',
                email: 'david@octofit.com',
                teamId: teams[1]._id.toString(),
                totalActivities: 27,
            },
            {
                name: 'Emma Wilson',
                email: 'emma@octofit.com',
                teamId: teams[2]._id.toString(),
                totalActivities: 15,
            },
        ]);
        console.log('Created users');
        // Create activities
        await Activity.insertMany([
            {
                userId: users[0]._id.toString(),
                type: 'Running',
                duration: 45,
                distance: 7.5,
                calories: 650,
            },
            {
                userId: users[0]._id.toString(),
                type: 'Cycling',
                duration: 60,
                distance: 25,
                calories: 750,
            },
            {
                userId: users[1]._id.toString(),
                type: 'Swimming',
                duration: 30,
                distance: 1.2,
                calories: 450,
            },
            {
                userId: users[2]._id.toString(),
                type: 'Running',
                duration: 50,
                distance: 8.2,
                calories: 700,
            },
            {
                userId: users[3]._id.toString(),
                type: 'Weight Training',
                duration: 75,
                calories: 600,
            },
            {
                userId: users[4]._id.toString(),
                type: 'Yoga',
                duration: 60,
                calories: 250,
            },
        ]);
        console.log('Created activities');
        // Create leaderboard entries
        await Leaderboard.insertMany([
            {
                userId: users[2]._id.toString(),
                score: 3200,
                rank: 1,
            },
            {
                userId: users[3]._id.toString(),
                score: 2950,
                rank: 2,
            },
            {
                userId: users[0]._id.toString(),
                score: 2700,
                rank: 3,
            },
            {
                teamId: teams[1]._id.toString(),
                score: 6150,
                rank: 1,
            },
            {
                teamId: teams[0]._id.toString(),
                score: 5650,
                rank: 2,
            },
        ]);
        console.log('Created leaderboard entries');
        // Create workouts
        await Workout.insertMany([
            {
                name: 'Morning Run',
                description: 'Easy 5k run to start the day',
                difficulty: 'Easy',
                duration: 30,
                targetMuscles: ['Legs', 'Cardio'],
            },
            {
                name: 'Full Body Strength',
                description: 'Complete strength training routine',
                difficulty: 'Hard',
                duration: 90,
                targetMuscles: ['Chest', 'Back', 'Arms', 'Legs'],
            },
            {
                name: 'HIIT Session',
                description: 'High intensity interval training',
                difficulty: 'Hard',
                duration: 30,
                targetMuscles: ['Cardio', 'Core'],
            },
            {
                name: 'Yoga & Stretching',
                description: 'Relaxation and flexibility',
                difficulty: 'Easy',
                duration: 60,
                targetMuscles: ['Flexibility', 'Mind'],
            },
        ]);
        console.log('Created workouts');
        console.log('✅ Database seeded successfully');
        process.exit(0);
    }
    catch (error) {
        console.error('❌ Seed failed:', error);
        process.exit(1);
    }
}
seedDatabase();

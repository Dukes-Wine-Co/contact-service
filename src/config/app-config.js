const mongoUrl = process.env.MONGO_DB_URL;
const apiUrl = process.env.PORT ? `http://localhost:${process.env.PORT}` : 'http://localhost:3001';

const config = {
    mongoUrl,
    API_URL: `${apiUrl}/api`
};

module.exports = config;

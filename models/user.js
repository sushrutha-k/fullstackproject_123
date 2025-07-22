// models/user.js

const db = require("./db");
const bcrypt = require("bcryptjs");

class User {
    static async createUser(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        return new Promise((resolve, reject) => {
            db.query(query, [username, email, hashedPassword], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }

    static async authenticateUser(email, password) {
        const query = "SELECT * FROM users WHERE email = ?";
        return new Promise((resolve, reject) => {
            db.query(query, [email], async (err, results) => {
                if (err) return reject(err);
                if (results.length === 0) return resolve(null);
                
                const user = results[0];
                const isPasswordMatch = await bcrypt.compare(password, user.password);
                if (isPasswordMatch) resolve(user);
                else resolve(null);
            });
        });
    }
}

module.exports = User;

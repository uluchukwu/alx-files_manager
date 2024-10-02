const redisClient = require('../redis');
const dbClient = require('../db');

class AppController {
  static async getStatus(req, res) {
    const redisAlive = await redisClient.isAlive();
    const dbAlive = dbClient.isAlive();
    res.status(200).json({ redis: redisAlive, db: dbAlive });
  }

  static async getStats(req, res) {
    const usersCount = await dbClient.nbUsers();
    const filesCount = await dbClient.nbFiles();
    res.status(200).json({ users: usersCount, files: filesCount });
  }
}

module.exports = AppController;

const UserRepository = require("../repository/userRepository");

class UserController {
  async create(req, res) {
    const data = req.body;

    const user = await UserRepository.create(data);
    return res.status(201).json(user);
  }

  async show(req, res) {
    const id = req.params.id;
    let statusCode = 200;
    const user = await UserRepository.show(id);
    if (!user) {
      statusCode = 404;
    }

    return res.status(statusCode).json(user);
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body;
    const user = await UserRepository.update(id, data);

    return res.json(user);
  }

  async destroy(req, res) {
    const id = req.params.id;
    const result = await UserRepository.destroy(id);
    return res.status(204).json(result);
  }

  async list(req, res) {
    const users = await UserRepository.list();
    return res.json(users);
  }
}

module.exports = new UserController();

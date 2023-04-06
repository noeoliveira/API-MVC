const uuid = require("uuid").v4;

class UserRepository {
  db = [];

  async create(data) {
    const id = uuid();
    const user = { id, ...data };
    this.db.push(user);
    return user;
  }

  async show(id) {
    return this.db.find((item) => item.id === id);
  }

  async update(id, data) {
    let user = this.show(id);

    if (!user) {
      return user;
    }

    user = { ...user, ...data };

    this.db = this.db.map((item) => {
      if (item.id === id) {
        return user;
      }
      return item;
    });

    return user;
  }

  async destroy(id) {
    let count = 0;
    this.db = this.db.filter((item) => {
      if (item.id === id) {
        count++;
        return false;
      }
      return true;
    });
    return count;
  }

  async list() {
    return this.db;
  }
}

module.exports = new UserRepository();

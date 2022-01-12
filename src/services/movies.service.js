class Movies {
  constructor() {
    this.movies = [];
  }

  async create(data) {
    return this.movies.push(data);
  }

  find() {}

  findOne(id) {}

  update(id) {}

  delete(id) {}

  search(params) {}
}

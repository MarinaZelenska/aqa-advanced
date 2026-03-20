class GETDataByURL {
  async getJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  }

  async getAllData(urls) {
    const promises = urls.map((url) => this.getJson(url));
    return Promise.all(promises);
  }

  async getRaceData(urls) {
    const promises = urls.map((url) => this.getJson(url));
    return Promise.race(promises);
  }
}

const api = new GETDataByURL();
const urls = ["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/users/1"];

api.getAllData(urls).then((data) => console.log(data));
api.getRaceData(urls).then((data) => console.log(data));

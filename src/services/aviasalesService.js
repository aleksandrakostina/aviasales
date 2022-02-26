export default class AviasalesService {
  baseUrl = 'https://front-test.beta.aviasales.ru';

  getResponse = (url) =>
    fetch(url)
      .then((response) => response.json())
      .catch(() => {
        throw new Error('Could not get data');
      });

  getSearchId = () => this.getResponse(`${this.baseUrl}/search`);

  getTickets = (id) =>
    this.getResponse(`${this.baseUrl}/tickets?searchId=${id}`)
      .then((data) => ({ ...data, ok: true }))
      .catch(() => ({ ok: false }));
}

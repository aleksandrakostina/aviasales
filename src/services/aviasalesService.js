export default class AviasalesService {
  baseUrl = 'https://front-test.beta.aviasales.ru';

  getResponse = (url) => (
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error('Could not get data');
        }
        return response.json();
      })
      .catch(err => {
        throw new Error(err);
      })
  );

  getSearchId = () => this.getResponse(`${this.baseUrl}/search`);

  getTickets = (id) => this.getResponse(`${this.baseUrl}/tickets?searchId=${id}`);
}
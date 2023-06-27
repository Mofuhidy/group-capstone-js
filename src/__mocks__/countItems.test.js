import { testCount } from '../modules/countItems.js';

describe('pokemons counts - response is 3', () => {
  test('item counts', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(
        [
          { name: 'bulbasaur' },
          { name: 'ivysaur' },
          { name: 'charmander' },
        ],
      ),
    }));

    const res = await testCount();
    expect(res.length).toBe(3);
  });

  test('pokemons counts - null response', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(null),
    }));

    const res = await testCount();
    expect(res).toBe(null);
  });
});

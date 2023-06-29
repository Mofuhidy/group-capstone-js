import { itemsCount } from '../modules/countItems.js';

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

    const res = await itemsCount();
    expect(res.length).toBe(3);
  });

  test('pokemons counts - null response', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(null),
    }));

    const res = await itemsCount();
    expect(res).toBe(null);
  });

  test('comments count - empty response', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([]),
    }));

    const res = await itemsCount();
    expect(res.length).toBe(0); // Check if the res.length is 0
  });
});

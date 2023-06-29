import { commentsCount } from '../modules/countComments.js';

describe('comments counts', () => {
  test('comments count - response is 4', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        { username: 'user1', creation_date: '28/6/2023', comment: 'comment1' },
        { username: 'user2', creation_date: '28/6/2023', comment: 'comment2' },
        { username: 'user3', creation_date: '28/6/2023', comment: 'comment3' },
        { username: 'user4', creation_date: '28/6/2023', comment: 'comment4' },
      ]),
    }));

const count = await commentsCount();
    expect(count.length).toBe(4);
  });

  test('comments count - null response', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(null),
    }));

    const count = await commentsCount();
    expect(count).toBe(null);
  });

  test('comments count - empty response', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([]),
    }));

    const count = await commentsCount();
    expect(count.length).toBe(0); // Check if the count.length is 0
  });
});
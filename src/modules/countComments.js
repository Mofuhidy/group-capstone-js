import { comments } from './apiLinks.js';

async function getComments(id) {
  const url = `${comments}?item_id=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function commentsCount(id) {
  const data = await getComments(id);
  return data;
}

export { getComments, commentsCount };
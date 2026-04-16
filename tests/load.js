import http from 'k6/http';
import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { URLS } from '../config/urls.js';
import { randomItem, parseCSV } from '../utils/helpers.js';
import { loadOptions } from '../config/options.js';

export const options = loadOptions;

const users = new SharedArray('users', function () {
  const data = open('../data/users.csv');
  return parseCSV(data);
});


export default function () {
  const user = randomItem(users);

  const res = http.post(URLS.login, JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' },
  });

  sleep(1);
}

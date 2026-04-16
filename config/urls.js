import { CONFIG, ENV } from './env.js';

const BASE = CONFIG[ENV].baseUrl;

export const URLS = {
    login: `${BASE}/auth/login`
};
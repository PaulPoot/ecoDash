import axios from 'axios';
import { API_BASE } from 'src/config/constants';

// Resources for endpoints
export const locationsResource = axios.create({
  baseURL: `${API_BASE}/locations/`
});

export const nodesResource = axios.create({
  baseUrl: `${API_BASE}/nodes/`
});

export const sensorsResource = axios.create({
  baseUrl: `${API_BASE}/sensors/`
});

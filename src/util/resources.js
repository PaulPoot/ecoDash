import axios from 'axios';
import { API_BASE } from 'src/config/constants';

// Resources for endpoints
export const locationsResource = axios.create({
  baseURL: `${API_BASE}/Locations/`
});

export const nodesResource = axios.create({
  baseUrl: `${API_BASE}/Nodes/`
});

export const sensorsResource = axios.create({
  baseUrl: `${API_BASE}/Sensors/`
});

export const tokenResource = axios.create({
  baseUrl: `${API_BASE}/Token/`
});

export const usersResource = axios.create({
  baseUrl: `${API_BASE}/Users/`
});

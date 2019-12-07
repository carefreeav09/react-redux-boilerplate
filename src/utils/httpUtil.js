import { httpBase } from './httpBaseUtil';

export function fetch(endpoint, params) {
    return httpBase().get(`/${endpoint}`, { params });
}

export function store(endpoint, data) {
    return httpBase().post(`/${endpoint}`, data);
}

export function update(endpoint, data) {
    return httpBase().put(`/${endpoint}`, data);
}

export function destroy(endpoint, id) {
    return httpBase().delete(`/${endpoint}/${id}`);
}

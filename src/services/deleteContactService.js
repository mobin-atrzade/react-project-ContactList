import http from "./httpService";

export default function deleteContact(id) {
    return http.delete(`/contacts/${id}`);
}
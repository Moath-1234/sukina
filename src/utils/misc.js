import swal from "sweetalert";

export const handleResponse = ({ success, ...rest }) => ({ success, ...rest });

export const displayAlert = (title, text, icon, buttons) => swal({ title, text, icon, buttons });

export const mapSelectData = (data) => (Array.isArray(data) ? data.map(({ name: label, id: value, ...rest }) => ({ value, label, ...rest })) : []);

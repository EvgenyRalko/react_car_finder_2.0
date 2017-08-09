
const SERVER_HOST = 'localhost:8080';
const COWORKIO_HOST_URL = window.location.protocol + '//' + SERVER_HOST;

const WebAPI = {
    ACCOUNT_LOGIN: COWORKIO_HOST_URL + '/auth/login',
    ACCOUNT_REGISTER: COWORKIO_HOST_URL + '/auth/register',
    PROJECTS_GET_ALL: COWORKIO_HOST_URL + '/projects/getAll',
    PROJECT_GET_BY_ID: COWORKIO_HOST_URL + '/projects/getById/{projectId}'
};

export default WebAPI;

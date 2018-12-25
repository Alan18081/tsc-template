export enum CommunicationCodes {
    GET_USERS_LIST = '[UsersService] Get Users List',
    GET_USER = '[UsersService] Get User',
    GET_USER_BY_ID = '[UsersService] Get User By ID',
    GET_USER_BY_EMAIL = '[UsersService] Get User By Email',
    CREATE_USER = '[UsersService] Create User',
    UPDATE_USER = '[UsersService] Update User',
    REMOVE_USER = '[UsersService] Remove User',

    LOGIN = '[AuthService] Login User',
    AUTH_BY_TOKEN = '[AuthService] Auth By Token',

    GET_PROJECTS_LIST = '[ProjectsService] Get Projects List',
    GET_PROJECTS_LIST_BY_USER = '[ProjectsService] Get Projects By User',
    CREATE_PROJECT = '[ProjectsService] Create Project',
    UPDATE_PROJECT = '[ProjectsService] Update Project',
    REMOVE_PROJECT = '[ProjectsService] Remove Project',

    GET_STORAGES_LIST = '[ProjectsService] Get Storages List',
    CREATE_STORAGE = '[ProjectsService] Create Storage',
    UPDATE_STORAGE = '[ProjectsService] Update Storage',
    UPDATE_STORAGE_DATA = '[ProjectsService] Update Storage Data',
    REMOVE_STORAGE = '[ProjectsService] Remove Storage'
}
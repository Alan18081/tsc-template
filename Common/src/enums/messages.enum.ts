export enum Messages {
    INTERNAL_SERVER_ERROR = 'Server cannot process your request, because of internal error',

    UNAUTHORIZED = 'Unauthorized',

    USER_ALREADY_EXISTS = 'User already exists',
    USER_NOT_FOUND = 'User with that email doesn\'t exists',
    WRONG_PASSWORD = 'Wrong password',
    INVALID_TOKEN = 'Invalid token',

    PROJECT_TOKEN_NOT_FOUND = 'Auth token for project is not found',
    ACCOUNT_TOKEN_NOT_FOUND = 'Auth token for project account is not found',

    PROJECT_NOT_FOUND = 'Project doesn\'t exist',
    ACCOUNT_NOT_FOUND = 'Account doesn\'t exist',

    STORAGE_NOT_FOUND = 'Storage doesn\'t exist',
    STORAGE_NAME_ERROR = 'Storage with provided name already exists',
    STORAGE_PATH_ERROR = 'Storage with provided path already exists',
    STORAGE_DATA_ALREADY_EXISTS = 'Storage Data for provided storage already exists',

    INVALID_PERMISSIONS = 'You don\'t have permissions to do this operation',
}
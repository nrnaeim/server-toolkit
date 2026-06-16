//?==================================================================================
//? HTTP Status Code
//?==================================================================================
export const HTTP_STATUS_CODE = {
    //*==== Success ========================================================
    OK: 200,
    CREATED: 201,

    //*==== Client Error ========================================================
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,

    //*==== Server Error ========================================================
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
} as const;
export type HttpStatusCode = typeof HTTP_STATUS_CODE[keyof typeof HTTP_STATUS_CODE]
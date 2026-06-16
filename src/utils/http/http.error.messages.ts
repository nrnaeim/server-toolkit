/*
 * Title: HTTP Error Messages
 * Description:
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 2026-06-14
 */
//?==================================================================================
//? HTTP Error Messages
//?==================================================================================
export const HTTP_ERROR_MESSAGES = {
    //*==== Auth ========================================================
    LOGIN_REQUIRED: "Please login to continue",
    UNAUTHORIZED: "You are not authorized",
    FORBIDDEN: "You do not have permission",
    INVALID_CREDENTIALS: "Invalid email or password",
    PASSWORD_MISMATCH: "Passwords do not match",
    OLD_NEW_PASSWORD_REQUIRED: "Both old and new password is required",
    PASSWORD_FAILED: "Password update failed",

    //*==== Token =======================================================
    TOKEN_REQUIRED: "Valid token is required",
    TOKEN_INVALID: "Invalid token, valid token is required",
    TOKEN_EXPIRED: "Your session has expired, please login again",

    //*==== OTP =========================================================
    OTP_INVALID: "Invalid or expired OTP",

    //*==== Email =======================================================
    EMAIL_REQUIRED: "Email is required",
    EMAIL_EXIST: "Email already used",
    EMAIL_VERIFIED: "Email already verified",
    EMAIL_VERIFY: "Please verify your email to continue",
    EMAIL_VERIFIY_FAILED: "Email verification failed, plese try again",

    //*==== Phone =======================================================
    PHONE_EXIST: "Phone already used",
    PHONE_VERIFIED: "Phone already verified",
    PHONE_VERIFY: "Please verify your phone to continue",
    PHONE_VERIFIY_FAILED: "Phone verification failed, plese try again",

    //*==== User ========================================================
    USER_BLOCKED: "Your account has been blocked",
    USER_NOT_VERIFIED: "Your account is not verified",
    USER_NOT_FOUND: "User not found",
    USER_ALREADY_EXISTS: "User already exists with this email",
    USER_NOT_COMPLETE: "Please complete your profile",
    USER_ID_REQUIRED: "User ID is required",

    //*==== Order ========================================================
    ORDER_NOT_FOUND: "Order not found",
    ORDER_ALREADY_PAID: "Order has already been paid",
    ORDER_CANCELLED: "Order has been cancelled",
    ORDER_NOT_CANCELLABLE: "Order cannot be cancelled at this stage",

    //*==== Product ======================================================
    PRODUCT_ID_REQUIRED: "Product ID is required",
    PRODUCT_NOT_FOUND: "Product not found",
    PRODUCT_OUT_OF_STOCK: "Product is out of stock",
    PRODUCT_ALREADY_EXISTS: "Product already exists",

    //*==== Cart =========================================================
    CART_EMPTY: "Cart can't be empty, please add items",
    CART_CANT_BE_EMPTY: "Cart can't be empty",
    CART_NOT_FOUND: "Cart not found",

    //*==== Payment ======================================================
    PAYMENT_FAILED: "Payment failed, please try again",
    PAYMENT_INVALID: "Invalid payment request",
    PAYMENT_ALREADY_DONE: "Payment has already been completed",

    //*==== Server =======================================================
    SERVER_ERROR: "Something went wrong, please try again later",
    SERVICE_UNAVAILABLE: "Service is temporarily unavailable",
    NOT_FOUND: "The requested resource was not found",
    TOO_MANY_REQUESTS: "Too many requests, please try again later",

    //*==== Mail =========================================================
    MAIL_FAILED: "Failed to send email, please try again",
    MAIL_SERVER_DOWN: "Mail server is temporarily unavailable",

    //*==== Generic ===================================================
    VALIDATION_FAILED: "Data validation failed",
    UPDATE_FAILED: "Failed to update",
    CREATION_FAILED: "Failed to create",
    FETCH_FAILED: "Failed to ",
} as const;


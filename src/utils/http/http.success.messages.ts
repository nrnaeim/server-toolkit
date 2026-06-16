/*
 * Title: HTTP Success Messages
 * Description:
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 2026-06-12
 */

//?==================================================================================
//? HTTP Success Messages
//?==================================================================================
export const HTTP_SUCCESS_MESSAGES = {
    //*====  ========================================================
    CREATED: (key: string) => `${key} created successfully`,
    FETCHED: (key: string) => `${key} fetched successfully`,
    UPDATED: (key: string) => `${key} updated successfully`,
    DELETED: (key: string) => `${key} deleted successfully`,
    VERIFIED: (key: string) => `${key} verified successfully`,
    RESET: (key: string) => `${key} reset successfully`,
    REFRESHED: (key: string) => `${key} refreshed successfully`,
    BLOCKED: (key: string) => `${key} blocked successfully`,
    UNBLOCKED: (key: string) => `${key} unblocked successfully`,
    CANCELLED: (key: string) => `${key} cancelled successfully`,
    MAIL_SENT: (key: string) => `${key} sent successfully`,
    ITEM_ADDED: (key: string) => `Item added to ${key} successfully`,
    ITEM_REMOVED: (key: string) => `Item removed from ${key} successfully`,
    INITIATED: (key: string) => `${key} initiated successfully`,
    COMPLETED: (key: string) => `${key} completed successfully`,
} as const;


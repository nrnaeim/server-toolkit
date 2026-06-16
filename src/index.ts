/*
 * Title: Index
 * Description:
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 2026-06-14
 */
// ===============================
// Dependencies
// ===============================
import { HTTP_STATUS_CODE } from "./utils/http/http.status.code.js";
import { HTTP_ERROR_MESSAGES } from "./utils/http/http.error.messages.js";
import { HTTP_SUCCESS_MESSAGES } from "./utils/http/http.success.messages.js";
import { INPUT_VALIDATION_MESSAGES } from "./utils/input/input.validation.messages.js";
import { INPUT_FIELD_LENGTH } from "./utils/input/input.field.length.js";

//?==================================================================================
//? Server Toolkit
//?==================================================================================
const serverTookit = { HTTP_ERROR_MESSAGES, HTTP_SUCCESS_MESSAGES, HTTP_STATUS_CODE, INPUT_VALIDATION_MESSAGES };

//*==== Exporting Server Toolkit ========================================================
export default serverTookit;
export { HTTP_ERROR_MESSAGES, HTTP_SUCCESS_MESSAGES, HTTP_STATUS_CODE, INPUT_VALIDATION_MESSAGES, INPUT_FIELD_LENGTH };

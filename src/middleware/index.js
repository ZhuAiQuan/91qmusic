/**
 * 真的会谢 为什么不支持export { default as xx } from 'xx';
 */

import { default as useRequest } from "./useRequest.js";
import { default as useEnd } from "./end.js";
import { default as useParseData } from "./post.js";
import { default as useValidate } from "./useValidate.js";

export { useRequest, useEnd, useParseData, useValidate };

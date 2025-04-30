import { checkValidation } from "./helper.js";
import reqeustCors from "cors";
export const cors = (config) => {
  let initialized = false;
  if (config) checkValidation(config);
  return function (req, res, next) {
    if (!initialized) {
      initialized = true;
      reqeustCors(config);
    }
    next();
  };
};
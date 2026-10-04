import { isHttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (isHttpError(err)) {
    return res.status(err.status).json(err.message);
  }
  res
    .status(500)
    .json({ message: 'Internal Server Error', error: err.message });
};

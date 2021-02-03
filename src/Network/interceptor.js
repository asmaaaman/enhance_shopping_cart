//Handle Request
export const requestHandler = (request) => {
  return request;
};

//Handle Success
export const successHandler = (response) => {
  return response;
};

//Handle Error
export const errorHandler = (error) => {
  console.log("errrr", error);
  return Promise.reject({ ...error });
};

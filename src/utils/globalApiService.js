import axiosInstance from './apiInterceptor';
export const globalGetService = (url, params) => {
  return new Promise(
    function(resolve, reject){
      axiosInstance({
        method: 'GET',
        url: url,
        params: params
      })
      .then(response => {
        resolve(response);
      })
    }
  )
}
export const globalPostService = (url, data) => {
  return new Promise(
    function(resolve, reject){
      axiosInstance({
        method: 'POST',
        url: url,
        data: data
      })
      .then(response => {
        resolve(response);
      })
    }
  )
}

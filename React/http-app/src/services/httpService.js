import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {

    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        console.log('Logging the error', error);
        toast.error("An unexpected error occurred.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }

    return Promise.reject(error)
});


export default {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put
}
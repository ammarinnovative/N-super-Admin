import axios from 'axios';
import { baseUrl } from './Config';
let accessToken = '';

export function SetAccessToken(t) {
  accessToken = t;
}

export const POST = async (url, data = {}, headers = {}) => {
  try {
    const res = await axios.post(baseUrl+url, data, {
      headers: {
        ...headers,
      },
      validateStatus: status => {
        // console.log(status);
        return status >= 200;
      },
    });
    return res.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const PUT = async (url, data = {}, headers = {}) => {
  try {
    const res = await axios.put(baseUrl+url, data, {
      headers: {
        ...headers,
      },
      validateStatus: status => {
        // console.log(status);
        return status >= 200;
      },
    });
    return res.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const GET = async (url, headers = {}) => {
  try {
    const res = await axios.get(baseUrl+url, {
      headers: {
        ...headers,
      },
      validateStatus: status => {
        // console.log(status);
        return status >= 200;
      },
    });
    return res.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const DELETE = async (url, headers = {}) => {
  try {
    const res = await axios.delete(baseUrl+url, {
      headers: {
        ...headers,
      },
      validateStatus: status => {
        // console.log(status);
        return status >= 200;
      },
    });
    return res.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

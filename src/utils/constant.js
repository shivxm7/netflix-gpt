const APP_LOGO = import.meta.env.VITE_APP_LOGO;
const APP_USER = import.meta.env.VITE_USER_AVATAR;
const APP_BG_IMAGE = import.meta.env.VITE_BG_IMAGE;
const APP_MOVIE_API = import.meta.env.VITE_MOVIE_API;
const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;
const API_KEY = import.meta.env.VITE_GEMINI_API;
const APP_IMAGE_CDN = import.meta.env.VITE_IMAGE_CDN;

export const LOGO = APP_LOGO;

export const USER_AVATAR = APP_USER;

export const BG_IMAGE = APP_BG_IMAGE;

export const MOVIE_API = APP_MOVIE_API;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMDB_KEY,
  },
};

export const GEMINI_API_KEY = API_KEY;

export const IMG_CDN = APP_IMAGE_CDN;

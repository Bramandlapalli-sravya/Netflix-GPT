export const logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const options_api = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
  }
};

console.log(`${process.env.REACT_APP_API_TOKEN}`, "api");

export const IMG_CDN = "https://image.tmdb.org/t/p/w300"; // got this from tmdb for rendering images for movies

// this is taken from tmdb website to make an "GET" api request



export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const Video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`



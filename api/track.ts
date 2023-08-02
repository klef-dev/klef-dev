import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const {
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID: client_id,
  NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: client_secret,
  NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const { data } = await axios({
    method: "POST",
    url: TOKEN_ENDPOINT,
    headers: {
      Authorization: `Basic ${basic}`,
    },
    params: {
      grant_type: "refresh_token",
      refresh_token,
    },
  });

  return data;
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return axios.get(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ is_playing: false });
    }

    return res.status(200).json(response.data);
  } catch (error) {
    const { message } = error as Error;
    res.status(500).json({ error: message });
  }
}

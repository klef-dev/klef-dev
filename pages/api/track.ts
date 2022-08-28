import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID || "",
  clientSecret: process.env.CLIENT_SECRET || "",
});

const getToken = async () => {
  const response = await spotifyApi.clientCredentialsGrant();
  return response.body.access_token;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken();
  console.log(token);
  const response = await axios.get(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.status(200).json(response.data);
}

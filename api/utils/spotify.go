package utils

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
)

type Common struct {
	Name string `json:"name"`
	ID   string `json:"id"`
	Url  struct {
		Spotify string `json:"spotify"`
	} `json:"external_urls"`
}

type Playing struct {
	Item struct {
		Common
		Artists []Common
	}
	IsPlaying bool `json:"is_playing"`
}
type Track struct {
	ID        string   `json:"id,omitempty"`
	Name      string   `json:"name,omitempty"`
	IsPlaying bool     `json:"is_playing"`
	Artists   []Common `json:"artists,omitempty"`
	Url       string   `json:"url,omitempty"`
}

type AccessToken struct {
	AccessToken string `json:"access_token"`
	TokenType   string `json:"token_type"`
	ExpiresIn   int    `json:"expires_in"`
}

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

func GetAccessToken() (AccessToken, error) {
	client_id := os.Getenv("SPOTIFY_CLIENT_ID")
	client_secret := os.Getenv("SPOTIFY_CLIENT_SECRET")
	refresh_token := os.Getenv("SPOTIFY_REFRESH_TOKEN")

	credentials := client_id + ":" + client_secret

	// Encode the combined string to base64
	basic := base64.StdEncoding.EncodeToString([]byte(credentials))

	params := fmt.Sprintf("grant_type=refresh_token&refresh_token=%s", refresh_token)
	url := TOKEN_ENDPOINT + "?" + params

	client := &http.Client{}
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(nil))
	var accessToken AccessToken

	if err != nil {
		return accessToken, err
	}

	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	req.Header.Set("Authorization", "Basic "+basic)

	res, err := client.Do(req)
	if err != nil {
		fmt.Println("Error performing request:", err)
		return accessToken, err
	}
	defer res.Body.Close()

	data, err := io.ReadAll(res.Body)

	if err != nil {
		return accessToken, err
	}

	// Convert the JSON data into a struct
	err = json.Unmarshal(data, &accessToken)
	if err != nil {
		fmt.Println("Error decoding JSON:", err)
	}

	return accessToken, nil
}

func GetNowPlaying() (Playing, error) {
	var playing Playing

	data, err := GetAccessToken()

	if err != nil {
		return playing, err
	}

	access_token := data.AccessToken

	client := &http.Client{}

	req, err := http.NewRequest("GET", NOW_PLAYING_ENDPOINT, bytes.NewBuffer(nil))

	if err != nil {
		return playing, err
	}

	req.Header.Set("Authorization", "Bearer "+access_token)

	res, err := client.Do(req)

	if err != nil {
		fmt.Println("Error performing request:", err)
		return playing, err
	}
	defer res.Body.Close()

	response, err := io.ReadAll(res.Body)

	if err != nil {
		log.Println(err)
	} else if len(response) == 0 {
		playing.IsPlaying = false
	} else {
		err = json.Unmarshal(response, &playing)
		if err != nil {
			log.Println("Error decoding JSON:", err)
		}
	}

	return playing, nil
}

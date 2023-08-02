package main

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

type Common struct {
	Name string `json:"name"`
	ID   string `json:"id"`
}

type Playing struct {
	Item struct {
		Common
		Artists []Common
	}
	IsPlaying bool `json:"is_playing"`
}
type Track struct {
	ID        string   `json:"id"`
	Name      string   `json:"name"`
	IsPlaying bool     `json:"is_playing"`
	Artists   []Common `json:"artists"`
}

type AccessToken struct {
	AccessToken string `json:"access_token"`
	TokenType   string `json:"token_type"`
	ExpiresIn   int    `json:"expires_in"`
}

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

func main() {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	app := fiber.New()

	port := os.Getenv("PORT")
	if port == "" {
		port = "3333"
	}

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"message": "Landed successfully on klef.dev api 🚀"})
	})

	app.Get("/track", func(c *fiber.Ctx) error {
		data := getNowPlaying()

		if !data.IsPlaying {
			return c.JSON(fiber.Map{"message": "Currently not playing anything on Spotify", "data": Track{IsPlaying: false}})
		}

		return c.JSON(fiber.Map{"message": "Successfully got currently playing track", "data": Track{
			Name:      data.Item.Name,
			ID:        data.Item.ID,
			IsPlaying: data.IsPlaying,
			Artists:   data.Item.Artists,
		}})
	})

	log.Fatal(app.Listen(":" + port))
}

func getAccessToken() AccessToken {
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

	if err != nil {
		log.Fatal(err)
	}

	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	req.Header.Set("Authorization", "Basic "+basic)

	res, err := client.Do(req)
	if err != nil {
		fmt.Println("Error performing request:", err)
	}
	defer res.Body.Close()

	data, err := io.ReadAll(res.Body)

	if err != nil {
		log.Fatal(err)
	}

	// Convert the JSON data into a struct
	var accessToken AccessToken
	err = json.Unmarshal(data, &accessToken)
	if err != nil {
		fmt.Println("Error decoding JSON:", err)
	}

	return accessToken
}

func getNowPlaying() Playing {
	data := getAccessToken()
	access_token := data.AccessToken

	client := &http.Client{}

	req, err := http.NewRequest("GET", NOW_PLAYING_ENDPOINT, bytes.NewBuffer(nil))

	if err != nil {
		log.Fatal(err)
	}

	req.Header.Set("Authorization", "Bearer "+access_token)

	res, err := client.Do(req)

	if err != nil {
		fmt.Println("Error performing request:", err)
	}
	defer res.Body.Close()

	response, err := io.ReadAll(res.Body)

	if err != nil {
		log.Fatal(err)
	}

	var playing Playing

	err = json.Unmarshal(response, &playing)
	if err != nil {
		fmt.Println("Error decoding JSON:", err)
	}

	return playing
}

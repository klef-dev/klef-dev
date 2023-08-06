package handlers

import (
	"api/utils"

	"github.com/gofiber/fiber/v2"
)

func Index(c *fiber.Ctx) error {
	return c.Status(200).JSON(fiber.Map{"message": "Landed successfully on klef.dev api 🚀"})
}

func GetTrack(c *fiber.Ctx) error {
	data, err := utils.GetNowPlaying()

	if err != nil {
		return c.Status(400).JSON(fiber.Map{"message": "Error getting currently playing track", "data": utils.Track{IsPlaying: false}})
	}

	if !data.IsPlaying {
		return c.JSON(fiber.Map{"message": "Currently not playing anything on Spotify", "data": utils.Track{IsPlaying: false}})
	}

	return c.JSON(fiber.Map{"message": "Successfully got currently playing track", "data": utils.Track{
		Name:      data.Item.Name,
		ID:        data.Item.ID,
		IsPlaying: data.IsPlaying,
		Artists:   data.Item.Artists,
		Url:       data.Item.Url.Spotify,
	}})
}

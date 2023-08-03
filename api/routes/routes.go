package routes

import (
	"api/handlers"

	"github.com/gofiber/fiber/v2"
)

func Routers(app *fiber.App) {
	app.Get("/", handlers.Index)
	app.Get("/track", handlers.GetTrack)
}

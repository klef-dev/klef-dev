package routes

import (
	"api/handlers"

	"github.com/gofiber/fiber/v2"
)

func Routers(app *fiber.App) {
	app.Get("/", handlers.Index)
	
	api := app.Group("/api")
	api.Get("/track", handlers.GetTrack)
}

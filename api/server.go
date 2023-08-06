package main

import (
	"api/routes"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
		log.Println("Error loading .env file")
	}

	app := fiber.New()
	app.Use(cors.New())

	port := os.Getenv("PORT")
	if port == "" {
		port = "3333"
	}

	routes.Routers(app)

	log.Fatal(app.Listen(":" + port))
}

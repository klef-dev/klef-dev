package main

import (
	"api/routes"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

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

	routes.Routers(app)

	log.Fatal(app.Listen(":" + port))
}

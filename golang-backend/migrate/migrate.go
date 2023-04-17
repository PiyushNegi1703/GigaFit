package main

import (
	"github.com/piyush/go-crud/initializers"
	"github.com/piyush/go-crud/models"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnecToDB()
}

func main() {
	initializers.DB.AutoMigrate(&models.Post{})
}

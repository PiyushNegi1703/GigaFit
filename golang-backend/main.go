package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/piyush/go-crud/controllers"
	"github.com/piyush/go-crud/initializers"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnecToDB()
}

func main() {
	r := gin.Default()
	r.Use(cors.Default())
	r.POST("/terms", controllers.TermsCreate)
	r.GET("/terms", controllers.GetTerms)

	r.Run()
}

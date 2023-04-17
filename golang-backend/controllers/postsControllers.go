package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/piyush/go-crud/initializers"
	"github.com/piyush/go-crud/models"
)

func TermsCreate(c *gin.Context) {
	// Get Data off post Body
	var body struct {
		Title string
		Body  string
	}

	c.Bind(&body)

	// Create Terms
	post := models.Post{Title: body.Title, Body: body.Body}
	result := initializers.DB.Create(&post)

	if result.Error != nil {
		c.Status(400)
		return
	}

	// Return it
	c.JSON(200, gin.H{
		"post": post,
	})
}

func GetTerms(c *gin.Context) {
	// Get the terms
	var posts []models.Post
	initializers.DB.Find(&posts)

	// Respond with them
	c.JSON(200, gin.H{
		"posts": posts,
	})
}

import express from "express"
import fetch from "node-fetch"

export const reviewsRouter = express.Router() 

const getPlacesController = async (req, res) => {
    console.log("get places")
    const query = req.query.q || "McDonalds"
    const key = process.env.GOOGLE_API_KEY
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=name,rating,formatted_address&key=${process.env.GOOGLE_API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
}

const getReviewsController = async (req, res) => {
    console.log("get reviews")
    const query = req.query.q || "McDonalds"
    const key = process.env.GOOGLE_API_KEY
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${process.env.GOOGLE_API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
}

reviewsRouter.get("/", getPlacesController);
reviewsRouter.get("/reviews", getPlacesController);
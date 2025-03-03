import food_delivery from './food-delivery.png'
import shopping_app from './shopping-app.png'
import e_commerce_panel from './e-commerce-admin-panel.png'
import youtube_clone from './youtube_clone.png'
import food_delivery_landing from './Food-Delivery-landing.png'
import shopping_app_landing from './Shopping-Mall-landing.png'
import e_commerce_panel_landing from './E-commerce-panel-landing.png'
import youtube_clone_landing from './Youtube-Clone-landing.png'



import css3 from './css3-original.svg'
import express from './express-original-wordmark.svg'
import nodejs from './nodejs-original.svg'
import html5 from './html5-original.svg'
import react from './react-original.svg'
import javascript from './javascript-plain.svg'
import mongodb from './mongodb-original-wordmark.svg'




export const skills = [
    { name: "HTML", img: html5, percentage: 95 },
    { name: "CSS", img: css3, percentage: 87 },
    { name: "JavaScript", img: javascript, percentage: 83 },
    { name: "React", img: react, percentage: 86 },
    { name: "NodeJs", img: nodejs, percentage: 88 },
    { name: "Express", img: express, percentage: 91 },
    { name: "MongoDB", img: mongodb, percentage: 94 },
]



export const projects = [
    {
        id: 1,
        name: "Tomato",
        description: "Get your favourite food delivered right to your doorstep with Tomato, the ultimate food delivery app.",
        img: [food_delivery, food_delivery_landing],
        tools: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "axios", "Cloudinary", "Paystack", "React-toastify"],
        buttons: ["View Live", "GitHub"]
    },
    {
        id: 2,
        name: "Shopping Mall",
        description: "Experience the thrill of shopping at your fingertips with Shopping Mall, the premier cloth shopping mall app.",
        img: [shopping_app, shopping_app_landing],
        tools: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "axios", "react-slick", "cloudinary", "paystack", "react-toastify"],
        buttons: ["View Live", "GitHub"]
    },
    {
        id: 3,
        name: "Shopping Mall Admin Panel",
        description: "Shopping Mall Admin Panel is a powerful tool designed to help you manage your shopping app efficiently.",
        img: [e_commerce_panel, e_commerce_panel_landing],
        tools: ["ReactJs", "TailwindCss", "NodeJs", "ExpressJs", "MongoDB", "Multer", "Cloudinary"],
        buttons: ["GitHub"]
    },
    {
        id: 4,
        name: "VidTube",
        description: "VidTube is a video sharing platform designed to provide a seamless and enjoyable experience for creators and viewers alike.",
        features: ["Youtube features"],
        img: [youtube_clone, youtube_clone_landing],
        tools: ["ReactJs", "react-router-dom", "Google Developers"],
        buttons: ["View Live", "GitHub"]
    }
]
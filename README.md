# Twinkle Toes

**Twinkle Toes** is an e-commerce store that specializes in everyone's favorite accessory: sparkley shoes.

[Deployed Site](https://sharp-kilby-04a8bc.netlify.app/) can be accessed here.

## Description

**Twinkle Toes** is an application built using the MERN stack (i.e. a React front-end and a MongoDB + Express back-end).

The application allows customers to browse the inventory of **Twinkle Toes** and leave reviews on products. 

Furthermore, the application gives admins full-CRUD functionality (i.e. the ability to create, read, update, and delete products from the backend).

## Collaboration

This was the first project in which I co-coded with other software engineers. Serving as Git Manager, this project taught me how to handle the Git Workflow with a remote team.

In addition, this project was a collaboration with General Assembly's UX/UI cohort. The UX/UI team that we were paired with produced the wireframes and we were tasked with bringing them to life.

## Key Components & MVP

### MVP

In order to achieve minimum viable product (MVP), the following functions and components are required:

* Deploy Back-End to MongoDB using Heroku

* Build Express Back-End

* Full CRUD-functionality

* Create React App with the following screens:

  * Home

  * Products

  * ProductDetail

  * ProductCreate (form)

  * SearchResults

* Detailed CSS to UI/UX resemble wireframes

### Post-MVP

The following components and functionns were prioritized for post-MVP:

* Site-wide Product Search functionality

* Product Review Feature (Form)

* Photo File Upload

## Component Heirarchy

<img src="https://i.imgur.com/knWSWxm.png" width=60%>

### Repo Structure

```
|_db
             |_connection.js (connects to MongoDB)
|_models
             |_product.js (model for one product)
|_seed
             |_products.js (contains product seed data)
|_controllers
             |_products.js
|_routes
             |_products.js
|_client
             |_src
                  |_app.js
                  |_components
                              |_Edit
                              |_HeroCarousel
                              |_PopularCarousel
                              |_PopularProduct
                              |_Product
                              |_ReviewForm
                              |_Reviews
                              |_Search
                              |_shared
                              |_SimilarItems
                              |_Sort
                              |_StarRating
                  |_screens
                              |_Home
                              |_ProductCreate
                              |_ProductDetail
                              |_Products
                              |_SearchResults
                  |_services

                              |_apiConfig.js
                              |_products.js
                  |_utils
                              |_sort.js
```

## Wireframes

**Home Page**

<img src="https://i.imgur.com/0i0fjBP.png" width=60%>

**Product Gallery**

<img src="https://i.imgur.com/j9iBn6S.png" width=60%>

**Product Detail**

<img src="https://i.imgur.com/3SoKOfR.png" width=60%>

**Search Page**

<img src="https://i.imgur.com/TCsqNWK.png" width=60%>

**Add Products**

<img src="https://i.imgur.com/HcN9Alx.png" width=60%>

## Functionality & Sample Code

### Custom-Made Carousels

### Review Stars Component

### Edit Product Modal

### Product Sort

### Product Sort

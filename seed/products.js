const db = require('../db/connection')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products =
    [
      {
        "name": "Dark Sparkle Sneaker",
        "imgURL": "https://i.imgur.com/KyYqUm6.jpg",
        "imgURL2": "https://i.imgur.com/N0XlqWl.jpg",
        "imgURL3": "https://i.imgur.com/Qd7i5PI.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "price": "300.00",
        "admin_rating": 3,
        "tag": "street"
      },
      {
        "name": "Sequin Lace Up",
        "imgURL": "https://i.imgur.com/mgPubwh.jpg",
        "imgURL2": "https://i.imgur.com/asVaROp.jpg",
        "imgURL3": "https://i.imgur.com/Vw70Jqf.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "price": "279.00",
        "admin_rating": 2,
        "tag": "formal",
      },
      {
        "name": "Embellished Satin Boot",
        "imgURL": "https://i.imgur.com/t1X3HzP.jpg",
        "imgURL2": "https://i.imgur.com/k8ds7zT.jpg",
        "imgURL3": "https://i.imgur.com/w16xmbn.jpg",
        "description": "Looks like something that would be worn by Sunny Shine on Sci-Fi's Happy! .",
        "price": "219.00",
        "admin_rating": 3,
        "tag": "formal",
      },
      {
        "name": "Glitter D’Orsay Pump 1",
        "imgURL": "https://i.imgur.com/OqzzcL5.jpg",
        "imgURL2": "https://i.imgur.com/XWdR2wZ.jpg",
        "imgURL3": "https://i.imgur.com/fCsg1yS.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "price": "320.00",
        "admin_rating": 4,
        "tag": "formal",
      },
      {
        "name": "Glitter D’Orsay Pump",
        "imgURL": "https://i.imgur.com/OqzzcL5.jpg",
        "imgURL2": "https://i.imgur.com/XWdR2wZ.jpg",
        "imgURL3": "https://i.imgur.com/fCsg1yS.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "price": "320.00",
        "admin_rating": 4,
        "tag": "formal",
      },
      {
        "name": "Gem-Wrapped Loafer",
        "imgURL": "https://i.imgur.com/G8ivvOO.jpg",
        "imgURL2": "https://i.imgur.com/ax9v6pQ.jpg",
        "imgURL3": "https://i.imgur.com/0BJfWDM.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "price": "300.00",
        "admin_rating": 4,
        "tag": "street",
        "reviews": [
          {
            "author": "Sequin Fanatic",
            "rating": 4,
            "description": "I'm going to be a bridesmaid and wanted shoes that would be supple and comfortable. They looked narrow when I first took them out of the box but they were a lovely fit. They looked so much better in real life and great on."
          },
          {
            "author": "Todd",
            "rating": 2,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie aliquet justo eu volutpat. Sed lobortis turpis vel ex pharetra aliquet. Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
          }]
      },
      {
        "name": "JC Tassel Heel",
        "imgURL": "https://i.imgur.com/xJ7av8a.jpg",
        "imgURL2": "https://i.imgur.com/FPG6Y6A.jpg",
        "imgURL3": "https://i.imgur.com/ipvxrPK.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie aliquet justo eu volutpat. Sed lobortis turpis vel ex pharetra aliquet. Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
        "price": "300.00",
        "admin_rating": 3,
        "tag": "formal",
      },
      {
        "name": "CL Ballroom Heel",
        "imgURL": "https://i.imgur.com/llblBst.jpg",
        "imgURL2": "https://imgur.com/3lvljFZ.jpg",
        "imgURL3": "https://imgur.com/snEDGNL.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie aliquet justo eu volutpat. Sed lobortis turpis vel ex pharetra aliquet. Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
        "price": "300.00",
        "admin_rating": 3,
        "tag": "formal",
        "reviews": [
          {
            "author": "Sequin Fanatic",
            "rating": 4,
            "description": "I'm going to be a bridesmaid and wanted shoes that would be supple and comfortable. They looked narrow when I first took them out of the box but they were a lovely fit. They looked so much better in real life and great on."
          },
          {
            "author": "Todd",
            "rating": 2,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie aliquet justo eu volutpat.Sed lobortis turpis vel ex pharetra aliquet.Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
          },
          {
            "author": "Jessie & James",
            "rating": 3,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie aliquet justo eu volutpat.Sed lobortis turpis vel ex pharetra aliquet.Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
          },
        ],
      },
      {
        "name": "D & G Shiny Slip On",
        "imgURL": "https://i.imgur.com/e715hfs.jpg",
        "imgURL2": "https://i.imgur.com/VHiHMWg.jpg",
        "imgURL3": "https://i.imgur.com/CG8lMBC.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie aliquet justo eu volutpat.Sed lobortis turpis vel ex pharetra aliquet.Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
        "price": "300.00",
        "admin_rating": 3,
        "tag": "street",
        "reviews": [
          {
            "author": "Sequin Fanatic",
            "rating": 4,
            "description": "I'm going to be a bridesmaid and wanted shoes that would be supple and comfortable. They looked narrow when I first took them out of the box but they were a lovely fit. They looked so much better in real life and great on.",
          },
          {
            "author": "Father Christmas",
            "rating": 4,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie aliquet justo eu volutpat.Sed lobortis turpis vel ex pharetra aliquet.Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
          },
          {
            "author": "Santa Claus 3",
            "rating": 1,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie aliquet justo eu volutpat.Sed lobortis turpis vel ex pharetra aliquet.Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
          },
        ],
      },
      {
        "name": "MM Silver Sneaker",
        "imgURL": "https://i.imgur.com/MG130rL.png",
        "imgURL2": "https://i.imgur.com/waLhutY.png",
        "imgURL3": "https://i.imgur.com/kZPFifk.png",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie aliquet justo eu volutpat.Sed lobortis turpis vel ex pharetra aliquet.Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
        "price": "300.00",
        "admin_rating": 4,
        "tag": "street",
        "reviews": [
          {
            "author": "Sequin Fanatic",
            "rating": 4,
            "description": "I'm going to be a bridesmaid and wanted shoes that would be supple and comfortable. They looked narrow when I first took them out of the box but they were a lovely fit. They looked so much better in real life and great on.",
          },
          {
            "author": " Simona Halep",
            "rating": 3,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie aliquet justo eu volutpat.Sed lobortis turpis vel ex pharetra aliquet.Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
          },
          {
            "author": "Tim Burton",
            "rating": 5,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie aliquet justo eu volutpat.Sed lobortis turpis vel ex pharetra aliquet.Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
          },
        ],
      },
      {
        "name": "Spiked Toe Sneaker",
        "imgURL": "https://i.imgur.com/ZRrSyBX.jpg",
        "imgURL2": "https://i.imgur.com/IlMhpiD.jpg",
        "imgURL3": "https://i.imgur.com/nQtcNMv.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis molestie aliquet justo eu volutpat.Sed lobortis turpis vel ex pharetra aliquet.Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
        "price": "165.00",
        "admin_rating": 3,
        "tag": "street",
        "reviews": [
          {
            "author": "Sequin Fanatic",
            "rating": 4,
            "description": "I'm going to be a bridesmaid and wanted shoes that would be supple and comfortable. They looked narrow when I first took them out of the box but they were a lovely fit. They looked so much better in real life and great on.",
          }, {
            "author": "Lady Gaga",
            "rating": 3,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie aliquet justo eu volutpat. Sed lobortis turpis vel ex pharetra aliquet. Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
          }, {
            "author": "Don Juan",
            "rating": 2,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie aliquet justo eu volutpat. Sed lobortis turpis vel ex pharetra aliquet. Sed hendrerit, tellus id mollis scelerisque, sapien magna auctor velit.",
          }
        ]
      },


    ]
  await Product.deleteMany()
  await Product.insertMany(products)
  console.log("Created products!")
}
const run = async () => {
  await main()
  db.close()
}

run()
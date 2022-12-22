# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.delete_all
Product.delete_all
Category.delete_all

User.create!(fullname: 'Mayengbam Ranjit Luwang', email: "aboongm@yahoo.com", password: "@aB123456", role: "admin", mobileNo: "9383216094", address: 'House No 197, Singjamei Mayengbam Leikai, Imphal, Manipur, 795001', avatar: "https://avatars.githubusercontent.com/u/49184579?s=96&v=4")

User.create!(fullname: 'Oybek Kayumov', email: "oybek_k@yahoo.com", password: "@aB123456", role: "admin", mobileNo: "1234567890", address: 'Taskent district, Parkent, Taskent, Uzbekistan', avatar: "https://avatars.githubusercontent.com/u/85465559?v=4")

User.create!(fullname: 'Clementine Bauch', email: "Nathan@yesenia.net", password: "@aB123456", role: "seller", mobileNo: "1463123478", address: 'House No 197, Suite 847, McKenziehaven, Douglas Extension, 795001', avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80")

User.create!(fullname: 'Chris May', email: "chris@yahoo.com", password: "@aB123456", role: "seller", mobileNo: "9383216090", address: 'House No 197, Suite 847, McKenziehaven, Douglas Extension, 795001', avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80")

User.create!(fullname: 'Kurtis Weissnat', email: "Telly.Hoeger@billy.biz", password: "@aB123456", role: "buyer", mobileNo: "8527567890", address: 'ex Trail, Suite 280, Howemouth', avatar: "https://media.istockphoto.com/id/500214897/photo/close-up-portrait-of-man.jpg?s=612x612&w=is&k=20&c=P1Xj5l7XEOt5EHtzx7VLulqFELtLhcN3BwaO3Ke7dOY=")

Category.create!(
title: "Electronics",
image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",
code_number: 1
)

Category.create!(
title: "Computer & Accessories",
image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
code_number: 2
)

Category.create!(
title: "Health & Personal Care",
image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg",
code_number: 3
)

Category.create!(
title: "Fashions",
image: "https://m.media-amazon.com/images/I/618E1D4hM6L._MCnd_AC_UL320_.jpg",
code_number: 4
)

Category.create!(
title: "Software",
image: "https://m.media-amazon.com/images/I/71lBKSgG0rL._AC_UL320_.jpg",
code_number: 5
)

Category.create!(
title: "Toys & Games",
image: "https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg",
code_number:6
)

Category.create!(
title: "Home & Kitchen",
image: "https://m.media-amazon.com/images/I/61YyfJSvxHL._AC_UF226,226_FMjpg_.jpg",
code_number: 7
)

Category.create!(
title: "Beauty Care",
image: "https://m.media-amazon.com/images/I/41ZBJlrrbEL._AC_UF226,226_FMjpg_.jpg",
code_number: 8
)

Category.create!(
title: "Miscellaneous",
image: "https://m.media-amazon.com/images/I/51HyTjFJy5L._AC_UF226,226_FMjpg_.jpg",
code_number: 9
)

Product.create!(
    title:"LG UQ7590 86-Inch Class UHD Smart TV 86UQ7590PUD, 2022 - AI-Powered 4K, Alexa Built-In",
    price: 1999,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/A1VI0Hc56lL._AC_SX425_.jpg",
    category_id: 1,
    seller_id: 3 
)

Product.create!(
    title:"Amazon Fire TV 55inch Omni Series 4K UHD smart TV, hands-free with Alexa",
    price: 559.99,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/616og3I0RLL._AC_SX522_.jpg",
    category_id: 1,
    seller_id: 3 
)

Product.create!(
    title:"SAMSUNG 65-Inch Class QLED Q60B Series - 4K UHD Dual LED Quantum HDR Smart TV with Xbox Game Pass and Alexa Built-in (QN65Q60BAFXZA, 2022 Model)",
    price: 997.99,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/81inMIbTO9L._AC_SX425_.jpg",
    category_id: 1,
    seller_id: 3 
)
Product.create!(
    title:"Apple iPhone 13 Pro (512GB, Silver) [Locked] + Carrier Subscription",
    price: 1299,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/617FFRO3vcL._FMwebp__.jpg",
    category_id: 1,
    seller_id: 3 
)
Product.create!(
    title:"Apple iPhone 13 Pro Max (512GB, Sierra Blue) [Locked] + Carrier Subscription",
    price: 1299.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61i8Vjb17SL._FMwebp__.jpg",
    category_id: 1,
    seller_id: 3 
)
Product.create!(
    title:"SAMSUNG Galaxy Note 20 Ultra 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, S Pen Included, Mobile Gaming, 6.9” Infinity-O Display Screen, Long Battery Life, US Version, Mystic Bronze",
    price: 1029.97,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81AT+Flc+EL._AC_SX679_.jpg",
    category_id: 1,
    seller_id: 3 
)
Product.create!(
    title:"SAMSUNG Galaxy Z Flip 3 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, Flex Mode, Super Steady Camera, Ultra Compact, US Version, Cream",
    price: 899.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/513ajbeo3OL._AC_SX425_.jpg",
    category_id: 1,
    seller_id: 3 
)


Product.create!(
    title:"2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold",
    price: 999,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX425_.jpg",
    category_id: 2,
    seller_id: 3 
)

Product.create!(
    title:"2022 Apple MacBook Pro Laptop with M2 chip: 13-inch Retina Display, 8GB RAM, 512GB ​​​​​​​SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera. Works with iPhone and iPad; Silver",
    price: 1499,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_SX425_.jpg",
    category_id: 2,
    seller_id: 3 
)

Product.create!(
    title:"2022 Newest Lenovo Ideapad 3 Laptop, 15.6 inch HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, HDMI, Webcam, Wi-Fi 5, Bluetooth, Windows 11 Home, Almond",
    price: 959,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_SX425_.jpg",
    category_id: 2,
    seller_id: 3 
)

Product.create!(
    title:"Newest HP All-in-One Desktop, 27 inch FHD Display, 12th Gen Intel Core i7-1255U, 32GB RAM, 2TB SSD, Webcam, HDMI, RJ-45, Wired Keyboard&Mouse, WiFi 6, Windows 11 Home, Black",
    price: 1389,
    rating: 5,
    image: "https://m.media-amazon.com/images/I/71ElOPf09nL._AC_UY218_.jpg",
    category_id: 2,
    seller_id: 3 
)
Product.create!(
    title:"2022 Newest Dell Inspiron 7700 All-in-One Desktop, 27 inch FHD Touchscreen, 11th Gen Intel i7-1165G7, GeForce MX330, 64GB RAM, 2TB SSD, IR Camera, WiFi 6, Wireless KB&Mouse, Win 11 Home",
    price: 1789,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71Yqyi6Rx+L._AC_SX425_.jpg",
    category_id: 2,
    seller_id: 3 
)

Product.create!(
    title:"TheraFace PRO - Handheld Facial Massage Device - Compact Electric Face and Skin Care Therapy Tool - 8-in-1 Treatment with Microcurrent and LED Light Therapy Rings for Ultimate Personal Beauty, White",
    price: 399,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61PBybuLuBL._AC_UL320_.jpg",
    category_id: 3,
    seller_id: 3 
)

Product.create!(
    title:"Colgate Max Fresh Advanced Whitening Toothpaste, Clean Mint Toothpaste for Bad Breath, 6.3 Oz Tube, 3 Pack",
    price: 6.15,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/617NBXrhZSL._SX425_.jpg",
    category_id: 3,
    seller_id: 3 
)

Product.create!(
    title:"Back Brush Long Handle for Shower, 20.5” Back Bath Brush for Shower, Back Scrubber, Exfoliation and Improved Skin Health for Elderly with Limited Arm Movement, Disabled, Pregnant Women",
    price: 15.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71K0XwCObgL._AC_SX569_.jpg",
    category_id: 3,
    seller_id: 3 
)


Product.create!(
    title:"Kancystore Womens Crewneck Sweatshirts Color Block Long Sleeve Side Split Tunic Tops Shirts",
    price: 22.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81uXoTdh7uL._AC_UX425_.jpg",
    category_id: 4,
    seller_id: 3 
)

Product.create!(
    title:"Miusey Womens Sleeveless Loose Fit Yoga Workout Racerback Tank Top",
    price: 24.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81U1+2HHwaL._AC_UY500_.jpg",
    category_id: 4,
    seller_id: 3 
)
Product.create!(
    title:"KINLONSAIR Women’s Long Sleeve Henley T Shirts Button Down Slim Fit Tops Scoop Neck Ribbed Knit Shirts",
    price: 21.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71fVJNqrOJL._AC_UX385_.jpg",
    category_id: 4,
    seller_id: 3 
)
Product.create!(
    title:"ANRABESS 2022 Fall Fashion Oversized Button Down Cardigan Long Sleeve V Neck Waffle Pullover Sweater",
    price: 34.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71Bfk1kxpyL._AC_UY500_.jpg",
    category_id: 4,
    seller_id: 3 
)

Product.create!(
    title:"https://m.media-amazon.com/images/I/71Bfk1kxpyL._AC_UY500_.jpg",
    price: 32.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81deQ9Hg2wL._AC_UY500_.jpg",
    category_id: 4,
    seller_id: 3 
)

Product.create!(
    title:"TurboTax Deluxe 2022 Tax Software, Federal and State Tax Return, [PC/MAC Download]",
    price: 55.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71IgMkror-L._AC_SX679_.jpg",
    category_id: 5,
    seller_id: 3 
)

Product.create!(
    title:"Pinnacle Studio 26 Ultimate | Pro-Level Video Editing & Screen Recording Software [PC Download]",
    price: 79.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71Ob-khrtbL._AC_SX679_.jpg",
    category_id: 5,
    seller_id: 3 
)

Product.create!(
    title:"Adobe Photoshop Elements 2023 & Premiere Elements 2023 | PC Code | Software Download | Photo Editing | Video Editing",
    price: 97.49,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81HjmxY5bcL._AC_SY679_.jpg",
    category_id: 5,
    seller_id: 3 
)

Product.create!(
    title:"TOMY Pop Up Pirate Game - Provides Plenty of Swashbucklin' Fun on Family Game Night",
    price: 15.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81CsaFs+OvL._AC_SX569_.jpg",
    category_id: 6,
    seller_id: 3 
)

Product.create!(
    title:"Winning Fingers Flashing Cube Electronic Memory & Brain Game | 4-in-1 Handheld Game for Kids | STEM Toy for Kids Boys and Girls | Fun Gift Toy for Kids Ages 6-12 Years Old",
    price: 39.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/81aAQAycUcL._AC_SX569_.jpg",
    category_id: 6,
    seller_id: 3 
)

Product.create!(
    title:"Midea WHD-113FSS1 Compact Refrigerator, 3.1 cu ft, Stainless Steel",
    price: 249.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61gf8uBCv6L._AC_SX679_.jpg",
    category_id: 7,
    seller_id: 3 
)
Product.create!(
    title:"RCA RFR322 Mini Refrigerator, Compact Freezer Compartment, Adjustable Thermostat Control, Reversible Door, Ideal Fridge for Dorm, Office, Apartment, Platinum Stainless, 3.2 Cubic Feet",
    price: 187.31,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61KAQrTihmL._AC_SX679_.jpg",
    category_id: 7,
    seller_id: 3 
)
Product.create!(
    title:"vesgolden 24 inchwine cooler Refrigerator 53 Bottle compressor freestanding or built-inUnder CounterHome Kitchen wine fridge ​for champagne,sparkling wine,white red wine Clear Glass Door for Office",
    price: 859,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71Mw44AfPOL._AC_SX679_.jpg",
    category_id: 7,
    seller_id: 3 
)
Product.create!(
    title:"VINERIE Premium 24 Inch Wine Cooler Refrigerators, 46 Bottle Dual Zone Built-in or Freestanding Fridge with Upgrade Compressor & Tempered Glass Door, 41F-73F Digital Temperature Control",
    price: 899.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71BZBokWeJL._AC_SX679_.jpg",
    category_id: 7,
    seller_id: 3 
)

Product.create!(
    title:"Reusable Cube Silicone Mold Ice Roller With Brush For Face Cold Therapy Facial Massage Roller (Blue)",
    price: 5.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/61sf7QooM6L._SX425_.jpg",
    category_id: 8,
    seller_id: 3 
)
Product.create!(
    title:"24K Gold Under Eye Patches - 20 Pack Under Eye Mask Amino Acid & Collagen, Under Eye Mask for Face Care, Eye Masks for Dark Circles and Puffiness, Under Eye Masks for Beauty & Personal Care",
    price: 14.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71gKiY8owLL._SX425_.jpg",
    category_id: 8,
    seller_id: 3 
)
Product.create!(
    title:"Under Eye Patches -120 PCS (60 Pairs) - Eye Mask Amino Acid & Collagen for Face Care - Eye Gel Treatment Masks for Dark Circles and Puffiness - Beauty & Personal Care - Reduce Wrinkles and Fine Lines Undereye",
    price: 8.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71lQMhcAQIL._SX425_.jpg",
    category_id: 8,
    seller_id: 3 
)
Product.create!(
    title:"Dead Sea Mud Mask - Enhanced with Collagen - Reduces Blackheads, Pores, Acne, & Oily Skin - Visibly Healthier Face & Body Complexion - All Natural Anti-Aging Formula for Women & Men",
    price: 14.95,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71oR18iKD4L._SX425_.jpg",
    category_id: 8,
    seller_id: 3 
)




Product.create!(
    title:"TIMBER RIDGE 21.3 inch x 22 inch Banyon Zero Gravity Bungee Folding Patio Reclining Lounge Chair",
    price: 122.08,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71NsB+5NPGL._AC_SX569_.jpg",
    category_id: 9,
    seller_id: 3 
)

Product.create!(
    title:"Goallim Portable USB Heated Blanket, 3 Heating Levels Electric Heated Throw Blanket Pillow Shawl Wrap for Outdoor Home, Car, Camping, Travel, and Stadium Sports, 58” x 38” (Battery Pack Not Included)",
    price: 59.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71Zu5pZcWNL._AC_SX679_.jpg",
    category_id: 9,
    seller_id: 3 
)

Product.create!(
    title:"Sports Sunglasses, Tuecota Polarized Sunglasses, UV400 Protection Cycling Glasses, Sports Glasses goggles for Men Women, Fishing, Golf, Running, Hiking, Baseball Outdoor Sports Glasses",
    price: 12.99,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/51g+dKj+rdL._AC_UL320_.jpg",
    category_id: 9,
    seller_id: 3 
)


# Order.create!(    
#     amount: 2189.96, 
#     buyer_id: 4,
#     purchase: [{
        
#         title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
#         price: 1094.98,
#         rating: 4,
#         image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
#         category_id: 2,
#         seller_id: 3,
#         product_id: 6 
#       },
#       {
            
#         title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
#         price: 1094.98,
#         rating: 4,
#         image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
#         category_id: 2,
#         seller_id: 3,
#         product_id: 6 
#       }
#     ]
# )

# Order.create!(    
#     amount: 399.98, 
#     buyer_id: 4,
#     purchase: [
#         {
#             title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
#             price: 199.99,
#             rating: 3,
#             image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
#             category_id: 2,
#             seller_id: 3,
#             product_id: 3  

#         },
#         {
#             title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
#             price: 199.99,
#             rating: 3,
#             image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
#             category_id: 2,
#             seller_id: 3,
#             product_id: 3  

#         }
#     ]        
# )

const productlist = [
    {
        name: "Samsung S20 ultra",
        price: 190000,
        imageUrl: "https://images.samsung.com/is/image/samsung/assets/vn/smartphones/galaxy-s20/buy/S20-FE_CloudWhite-Orange_ExclusiveColor_MO_img_SouthEastAsia_SAVINA_vn.jpg",
        id: "product2",
        catogory: "Mobile phones"
        
    },
    {
        name: "Realme powerbank",
        price: 4000,
        imageUrl: "data:image/jpeg;base64,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",
        id: "product3",
        catogory: "Mobile accessories"
    },
    {
        name: "Ronnin handfree",
        price: 1000,
        imageUrl: "https://salyzpn7evhj.cdn.shift8web.com/wp-content/uploads/2024/04/ronin-type-c-crystal-clear-sound-handsfree.jpg",
        id: "product4",
        catogory: "Mobile accessories"
    },
    {
        name: "Super fast charger",
        price: 2000,
        imageUrl: "https://m.media-amazon.com/images/I/71On7qvP4tL.jpg",
        id: "product5",
        catogory: "Mobile accessories"
    }, {
        name: "Realme C21",
        price: 35000,
        imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/realme-c21.jpg",
        id: "product6",
        catogory: "Mobile phones"
    },
    {
        name: "Samsung S21",
        price: 200000,
        imageUrl: "https://images.priceoye.pk/samsung-galaxy-s21-ultra-pakistan-priceoye-g8bhv.jpg",
        id: "product1",
        catogory: "Mobile phones",
    },
    {
        name: "Samsung smart TV",
        price: 200000,
        imageUrl: "https://images.samsung.com/is/image/samsung/pk-fhd-t5300-ua43t5300auxmm-frontblack-265965080?$650_519_PNG$",
        id: "product7",
        catogory: "electronics"
    },
    {
        name: "Micro wave oven",
        price: 77000,
        imageUrl: "data:image/jpeg;base64,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",
        id: "product8",
        catogory: "electronics"
    }, {
        name: "Refigerator",
        price: 100000,
        imageUrl: "https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12640121-0-M.jpg",
        id: "product9",
        catogory: "electronics"
    },
    {
        name: "Sofa set",
        price: 400000,
        imageUrl: "https://urbangalleria.com/cdn/shop/products/17_93b549d5-2831-4b38-91ca-3f8f9ea16474_1024x1024.jpg?v=1604580201",
        id: "product10",
        catogory: "furnitures"
    },
    {
        name: "Dine Table set",
        price: 50000,
        imageUrl: "https://www.apnafurniture.pk/wp-content/uploads/2023/01/Toby-6-Seater-Bench-001.jpg",
        id: "product11",
        catogory: "furnitures"
    }, {
        name: "Bed set",
        price: 350000,
        imageUrl: "https://habitt.com/cdn/shop/files/weekendoffer-05_large.jpg?v=1685015914",
        id: "product12",
        catogory: "furnitures"
    }
]
export default productlist;
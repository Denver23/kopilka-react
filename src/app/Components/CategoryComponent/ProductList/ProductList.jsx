import React from 'react';
import Product from "./Product/Product";
import s from './ProductList.module.scss';

const ProductList = () => {
    let products = [
        {
            "id": '1',
            'title': 'iPhone 11 Pro',
            'price': '49.99',
            'additional': 'Green',
            "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg'
        },
        {
            "id": '2',
            'title': 'iPhone 6',
            'price': '49.99',
            'additional': 'Gold',
            "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg'
        },
        {
            "id": '3',
            'title': 'iPhone 5s',
            'price': '49.99',
            'additional': 'Silver',
            "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg'
        },
        {
            "id": '4',
            'title': 'iPhone 7 Plus',
            'price': '49.99',
            'additional': 'Pink Gold',
            "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg'
        },
        {
            "id": '5',
            'title': 'iPhone 8',
            'price': '49.99',
            'additional': 'Space Gray',
            "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg'
        },
        {
            "id": '6',
            'title': 'iPhone X',
            'price': '49.99',
            'additional': 'Space Gray',
            "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg'
        },
        {
            "id": '7',
            'title': 'Google Pixel 3',
            'price': '49.99',
            'additional': 'Black',
            "imageUrl": 'https://avatars.mds.yandex.net/get-mpic/1332324/img_id4935485695094159419.jpeg/9hq'
        },
        {
            "id": '8',
            'title': 'Samsung Galaxy S10 Plus',
            'price': '49.99',
            'additional': 'Blue',
            "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg'
        },
        {
            "id": '9',
            'title': 'LG G8',
            'price': '49.99',
            'additional': 'Gray',
            "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg'
        },
        {
            "id": '10',
            'title': 'iPhone 7 Plus',
            'price': '49.99',
            'additional': 'Pink Gold',
            "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg'
        },
    ];

    return (
        <div className={s.productList}>
            {products.map((prod) => {
                return <Product data={prod}/>
            })}
        </div>
    )
}

export default ProductList;
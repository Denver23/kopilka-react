import React from "react";
import Product from './../ProductList/Product/Product';
import s from './BestSellers.module.scss';
import {NavLink} from "react-router-dom";

const BestSellers = (props) => {
    let products = [
        {
            "id": '1',
            'title': 'iPhone 11 Pro',
            'price': '49.99',
            'additional': 'Green',
            "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
            'style': 'bestSellers'
        },
        {
            "id": '2',
            'title': 'iPhone 6',
            'price': '49.99',
            'additional': 'Gold',
            "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
            'style': 'bestSellers'
        },
        {
            "id": '3',
            'title': 'iPhone 5s',
            'price': '49.99',
            'additional': 'Silver',
            "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
            'style': 'bestSellers'
        },
        {
            "id": '4',
            'title': 'iPhone 7 Plus',
            'price': '49.99',
            'additional': 'Pink Gold',
            "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
            'style': 'bestSellers'
        }];

    return (
        <div className={s.bestSellersWrapper}>
            <div className={s.bestSellersBlock}>
                <span className={s.title}>Best Sellers</span>
                <div className={s.productList}>
                    {products.map((prod) => {
                        return <Product data={prod}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default BestSellers;
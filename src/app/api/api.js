export const authAPI = {
    login(login, password, rememberMe) {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(1000, 3000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {
                if (login !== undefined && password !== undefined) {
                    let cookieLifeCycle = rememberMe ? 3600000 : 3600;
                    setCookie('user', login, {'samesite': 'lax','max-age': cookieLifeCycle})
                    resolve({resultCode: 1, data: {id: '1', email: login + '@gmail.com', login: login}})
                } else {
                    resolve({resultCode: 0, data: {messages: ['Login or password incorrectly']}})
                }
            }, timer)
        })
    },
    me() {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(200, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {
                let user = getCookie('user');
                if(user !== undefined) {
                    resolve({resultCode: 1, data: {id: '1', login: user, email: user + '@gmail.com'}})
                }
                resolve({resultCode: 0, data: {id: '1', login: user, email: user + '@gmail.com'}})
            }, timer)
        })
    },
    signUp(data) {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(200, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {
                let randomNumber = randomInteger(0, 100);
                let responseCode = (randomNumber <= 70) ? 1 : 0;
                if(responseCode === 1) {
                    resolve({resultCode: responseCode})
                    let cookieLifeCycle = 3600000;
                    setCookie('user', data.login, {'samesite': 'lax','max-age': cookieLifeCycle})
                } else {
                    resolve({resultCode: responseCode, data: {message: 'Cant sign up your profile'}})
                }
            }, timer)
        })
    },
    signOut() {
        deleteCookie('user');
    },
    loadProfile(id) {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(200, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {
                let user = getCookie('user');
                let result = {name: 'userName', surname: 'userSurname', login: user, email: `${user}@gmail.com`, phone: '+3(045)-321-43-13', numberOfPurchases: 10};
                resolve({resultCode: 1, data: result})
            }, timer)
        })
    },
    changeProfile(data) {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(200, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {
                let result = randomInteger(0, 10);
                let resultCode = result < 7 ? 1 : 0;
                resolve({resultCode})
            }, timer)
        })
    }
}

export const prGroupAPI = {
    loadPrGroup(type, url) {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(500, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {
                if (type === "category") {

                    let categories = {
                        'home': {
                            "productCount": 157,
                            'id': 0,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Top Sales',
                                    'url': 'top-sales',
                                    'hasPtypes': true,
                                    'ptypesList': [
                                        {
                                            'ptypeTitle': 'Cell Phones',
                                            'url': 'cell-phones'
                                        },
                                        {
                                            'ptypeTitle': 'Cameras',
                                            'url': 'cameras'
                                        },
                                        {
                                            'ptypeTitle': 'Computers',
                                            'url': 'computers'
                                        },
                                        {
                                            'ptypeTitle': 'TV, Audio',
                                            'url': 'tv-audio'
                                        },
                                        {
                                            'ptypeTitle': 'Video Games',
                                            'url': 'video-games'
                                        }
                                    ]
                                },
                                {
                                    'categoryTitle': 'Brand Focus',
                                    'url': 'brand-focus',
                                    'hasPtypes': true,
                                    'ptypesList': [
                                        {
                                            'ptypeTitle': 'Cell Phones',
                                            'url': 'cell-phones'
                                        },
                                        {
                                            'ptypeTitle': 'Cameras',
                                            'url': 'cameras'
                                        },
                                        {
                                            'ptypeTitle': 'Computers',
                                            'url': 'computers'
                                        },
                                        {
                                            'ptypeTitle': 'TV, Audio',
                                            'url': 'tv-audio'
                                        },
                                        {
                                            'ptypeTitle': 'Video Games',
                                            'url': 'video-games'
                                        }
                                    ]
                                },
                                {
                                    'categoryTitle': 'Hi-Tech',
                                    'url': 'hi-tech',
                                    'hasPtypes': true,
                                    'ptypesList': [
                                        {
                                            'ptypeTitle': 'Cell Phones',
                                            'url': 'cell-phones'
                                        },
                                        {
                                            'ptypeTitle': 'Cameras',
                                            'url': 'cameras'
                                        },
                                        {
                                            'ptypeTitle': 'Computers',
                                            'url': 'computers'
                                        },
                                        {
                                            'ptypeTitle': 'TV, Audio',
                                            'url': 'tv-audio'
                                        },
                                        {
                                            'ptypeTitle': 'Video Games',
                                            'url': 'video-games'
                                        }
                                    ]
                                },
                                {
                                    'categoryTitle': 'Home',
                                    'url': 'home',
                                    'hasPtypes': true,
                                    'ptypesList': [
                                        {
                                            'ptypeTitle': 'Cell Phones',
                                            'url': 'cell-phones'
                                        },
                                        {
                                            'ptypeTitle': 'Cameras',
                                            'url': 'cameras'
                                        },
                                        {
                                            'ptypeTitle': 'Computers',
                                            'url': 'computers'
                                        },
                                        {
                                            'ptypeTitle': 'TV, Audio',
                                            'url': 'tv-audio'
                                        },
                                        {
                                            'ptypeTitle': 'Video Games',
                                            'url': 'video-games'
                                        }
                                    ]
                                },
                                {
                                    'categoryTitle': 'Sale',
                                    'url': 'sale',
                                    'hasPtypes': true,
                                    'ptypesList': [
                                        {
                                            'ptypeTitle': 'Cell Phones',
                                            'url': 'cell-phones'
                                        },
                                        {
                                            'ptypeTitle': 'Cameras',
                                            'url': 'cameras'
                                        },
                                        {
                                            'ptypeTitle': 'Computers',
                                            'url': 'computers'
                                        },
                                        {
                                            'ptypeTitle': 'TV, Audio',
                                            'url': 'tv-audio'
                                        },
                                        {
                                            'ptypeTitle': 'Video Games',
                                            'url': 'video-games'
                                        }
                                    ]
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'top-sales': {
                            "productCount": 85,
                            'id': 1,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'brand-focus': {
                            "productCount": 85,
                            'id': 2,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'hi-tech': {
                            "productCount": 85,
                            'id': 3,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'sale': {
                            "productCount": 85,
                            'id': 4,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'cell-phones': {
                            "productCount": 85,
                            'id': 5,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'cameras': {
                            "productCount": 85,
                            'id': 6,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'computers': {
                            "productCount": 85,
                            'id': 7,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'tv-audio': {
                            "productCount": 85,
                            'id': 8,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'video-games': {
                            "productCount": 85,
                            'id': 9,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'projects': {
                            "productCount": 85,
                            'id': 9,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        },
                        'best-sellers': {
                            "productCount": 85,
                            'id': 9,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }, {
                                "title": "Brands",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'apple', "placeholder": 'Apple'},
                                    {'name': 'samsung', "placeholder": 'Samsung'},
                                    {'name': 'google', "placeholder": 'Google'},
                                    {'name': 'lg', "placeholder": 'LG'}
                                ]
                            }],
                            'categories': [
                                {
                                    'categoryTitle': 'Cell Phones',
                                    'url': 'cell-phones',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Cameras',
                                    'url': 'cameras',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Computers',
                                    'url': 'computers',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'TV, Audio',
                                    'url': 'tv-audio',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                },
                                {
                                    'categoryTitle': 'Video Games',
                                    'url': 'video-games',
                                    'hasPtypes': false,
                                    'ptypesList': []
                                }
                            ],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://wf.cdn.gmru.net/ms/data/newsx/fdad382c5e6ce0f0ac266a5d3ba27678.jpg',
                                'http://www.radionetplus.ru/uploads/posts/2013-04/thumbs/1365401196_teplye-oboi-1.jpeg',
                                'https://focus.ua/storage/pub/images/2017/0367503_2615387.jpg',
                                'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',
                                'http://luxfon.com/large/201203/1193.jpg']
                        }
                    }

                    let result = categories[url];

                    if(Object.keys(categories).includes(url, 0)) {
                        resolve({resultCode: 1, data: {...result}})
                    } else {
                        resolve({resultCode: 0})
                    }

                } else if (type === "brand") {

                    let brands = {
                        'apple': {
                            "productCount": 85,
                            'id': 1,
                            "products": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '5',
                                    'brand': 'Apple',
                                    'title': 'iPhone 8',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '6',
                                    'brand': 'Apple',
                                    'title': 'iPhone X',
                                    'price': '49.99',
                                    'additional': 'Space Gray',
                                    "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                                {
                                    "id": '10',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'categoryList'
                                },
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg']
                        },
                        'samsung': {
                            "productCount": 85,
                            'id': 2,
                            "products": [
                                {
                                    "id": '8',
                                    'brand': 'Samsung',
                                    'title': 'Samsung Galaxy S10 Plus',
                                    'price': '49.99',
                                    'additional': 'Blue',
                                    "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                    'style': 'categoryList'
                                }
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://cdn.cybercalm.org/wp-content/uploads/2019/03/18110824/Samsung-Galaxy-S10-user.jpg']
                        },
                        'lg': {
                            "productCount": 85,
                            'id': 3,
                            "products": [
                                {
                                    "id": '9',
                                    'brand': 'LG',
                                    'title': 'LG G8',
                                    'price': '49.99',
                                    'additional': 'Gray',
                                    "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                    'style': 'categoryList'
                                }
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['https://img.wallpapersafari.com/desktop/1920/1080/98/34/qoaiRK.png']
                        },
                        'google': {
                            "productCount": 85,
                            'id': 4,
                            "products": [
                                {
                                    "id": '7',
                                    'brand': 'Google',
                                    'title': 'Google Pixel 3',
                                    'price': '49.99',
                                    'additional': 'Black',
                                    "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                    'style': 'categoryList'
                                }
                            ],
                            "refines": [{
                                "title": "Available",
                                "type": "radio",
                                "items": [
                                    {'name': 'in storage', "placeholder": 'In Storage'},
                                    {'name': 'in online-shop', "placeholder": 'In Online-Shop'}
                                ]
                            }, {
                                "title": "Condition",
                                "type": "checkbox",
                                "items": [
                                    {'name': 'new', 'placeholder': 'New'},
                                    {'name': 'manufacter refurbished', 'placeholder': 'Manufacter Refurbished'},
                                    {'name': 'seller refurbished', 'placeholder': 'Seller Refurbished'},
                                    {'name': 'used', 'placeholder': 'Used'},
                                    {'name': 'for parts or not working', 'placeholder': 'For Parts or not Working'}
                                ]
                            }, {
                                "title": "Delivery Options",
                                "type": "radio",
                                "items": [
                                    {'name': 'free', "placeholder": 'FREE'},
                                    {'name': '$4.99', "placeholder": '$4.99'}
                                ]
                            }],
                            "reviews": [{
                                'name': 'Calia Fields',
                                'work': 'UX Expert',
                                'photo': 'https://files.adme.ru/files/news/part_127/1277165/9774815-1111-650-23bb600183-1484650749.jpg',
                                'message': 'This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.'
                            }, {
                                'name': 'Alexander Lee',
                                'work': 'Founder',
                                'photo': 'http://ki.ill.in.ua/m/670x450/24433504.jpg',
                                'message': 'Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.'
                            }, {
                                'name': 'Lenora Sandoval',
                                'work': 'Product Manager',
                                'photo': 'https://lifeimg.pravda.com/images/doc/0/d/0d188c4-khoroshchak-1.jpg',
                                'message': 'This sounded a very good reason, and Alice was quite pleased to know it. \'I never thought of that before!\' she said.'
                            }],
                            "bestSellers": [
                                {
                                    "id": '1',
                                    'brand': 'Apple',
                                    'title': 'iPhone 11 Pro',
                                    'price': '49.99',
                                    'additional': 'Green',
                                    "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '2',
                                    'brand': 'Apple',
                                    'title': 'iPhone 6',
                                    'price': '49.99',
                                    'additional': 'Gold',
                                    "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '3',
                                    'brand': 'Apple',
                                    'title': 'iPhone 5s',
                                    'price': '49.99',
                                    'additional': 'Silver',
                                    "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                    'style': 'bestSellers'
                                },
                                {
                                    "id": '4',
                                    'brand': 'Apple',
                                    'title': 'iPhone 7 Plus',
                                    'price': '49.99',
                                    'additional': 'Pink Gold',
                                    "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                    'style': 'bestSellers'
                                }],
                            'slides': ['http://fullhdwall.com/wp-content/uploads/2016/02/Abstract-Google-Wallpaper.jpeg']
                        }
                    }

                    let result = brands[url];

                    if(Object.keys(brands).includes(url, 0)) {
                        resolve({resultCode: 1, data: {...result}})
                    } else {
                        resolve({resultCode: 0})
                    }
                }
            }, timer)
        })
    }
}

export const productAPI = {
    loadProduct(id, brand) {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(500, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {

                let products = [
                    {
                        "id": 1,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 11 XS Max',
                        "parentProducts": [
                            {
                                'sku': 'i-11-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-gl-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://hotline.ua/img/tx/207/2070816675.jpg',
                                thumbnail: 'https://hotline.ua/img/tx/207/2070816675.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188',
                                thumbnail: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://yellow.ua/media/wysiwyg/iphone11-select-2019-family.jpg',
                                thumbnail: 'https://yellow.ua/media/wysiwyg/iphone11-select-2019-family.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://www.iphones.ru/wp-content/uploads/2019/11/aaa22-1240x630.jpg',
                                thumbnail: 'https://www.iphones.ru/wp-content/uploads/2019/11/aaa22-1240x630.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom[:os:]Features: Quad-LED dual-tone flash, HDR (photo/panorama), panorama, HDR[:os:]Video: 2160p@24/30/60fps, 1080p@30/60/120/240fps[:os:]Selfie Camera: First - 7 MP, f/2.2, 32mm (standard)[:os:]Selfie Camera: Second - SL 3D camera[:os:]Features: HDR[:os:]Video: 1080p@30fps[:os:]Loudspeaker: Yes, with stereo speakers[:os:]3.5mm jack: No[:os:]WLAN: Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot[:os:]Bluetooth: 5.0, A2DP, LE[:os:]GPS: Yes, with A-GPS, GLONASS, GALILEO, QZSS[:os:]NFC: Yes[:os:]Radio: No[:os:]USB: 2.0, proprietary reversible connector[:os:]Sensors: Face ID, accelerometer, gyro, proximity, compass, barometer[:os:]Battery: Non-removable Li-Ion 2716 mAh battery (10.35 Wh)[:os:]Charging: Fast battery charging 15W, USB Power Delivery 2.0, Qi wireless charging[:os:]Talk time: Up to 21 h (3G)[:os:]Music play: Up to 60 h\n',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '2',
                                'brand': 'Apple',
                                'title': 'iPhone 6',
                                'price': '49.99',
                                'additional': 'Gold',
                                "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '9',
                                'brand': 'LG',
                                'title': 'LG G8',
                                'price': '49.99',
                                'additional': 'Gray',
                                "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 6',
                        "parentProducts": [
                            {
                                'sku': 'i-6-64-bl',
                                'price': 500,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black'
                                }
                            },
                            {
                                'sku': 'i-6-64-wh',
                                'price': 520,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White'
                                }
                            },
                            {
                                'sku': 'i-6-128-bl',
                                'price': 540,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black'
                                }
                            },
                            {
                                'sku': 'i-6-128-wh',
                                'price': 480,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White'
                                }
                            },
                            {
                                'sku': 'i-6-128-wh',
                                'price': 515,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://i8.rozetka.ua/goods/15584185/156963094_images_15584185961.png',
                                thumbnail: 'https://i8.rozetka.ua/goods/15584185/156963094_images_15584185961.png',
                                alt: 'Apple® - iPhone 6'
                            },
                            {
                                original: 'https://i.citrus.ua/uploads/shop/1/2/12976fd9b43aa2437c60b0faa8597495.jpg',
                                thumbnail: 'https://i.citrus.ua/uploads/shop/1/2/12976fd9b43aa2437c60b0faa8597495.jpg',
                                alt: 'Apple® - iPhone 6'
                            },
                            {
                                original: 'https://s.appleinsider.ru/2019/06/iphone6-750x500.jpg',
                                thumbnail: 'https://s.appleinsider.ru/2019/06/iphone6-750x500.jpg',
                                alt: 'Apple® - iPhone 6'
                            },
                            {
                                original: 'https://main-cdn.goods.ru/big2/hlr-system/1692524/100002060975b0.jpg',
                                thumbnail: 'https://main-cdn.goods.ru/big2/hlr-system/1692524/100002060975b0.jpg',
                                alt: 'Apple® - iPhone 6'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '1',
                                'brand': 'Apple',
                                'title': 'iPhone 11 Pro',
                                'price': '49.99',
                                'additional': 'Green',
                                "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '3',
                                'brand': 'Apple',
                                'title': 'iPhone 5s',
                                'price': '49.99',
                                'additional': 'Silver',
                                "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 5S',
                        "parentProducts": [
                            {
                                'sku': 'i-5s-64-bl',
                                'price': 200,
                                'avaibility': true,
                                'options': {}
                            }
                        ],
                        "images": [
                            {
                                original: 'https://swipe.ua/content/images/31/iphone_5s_16gb_space_gray-53085618631329_small11.jpg',
                                thumbnail: 'https://swipe.ua/content/images/31/iphone_5s_16gb_space_gray-53085618631329_small11.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://hotline.ua/img/tx/398/398390695.jpg',
                                thumbnail: 'https://hotline.ua/img/tx/398/398390695.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://ipodrom.ua/content/images/4/apple-iphone-5s-16gb-space-gray-new-90882531346546_small11.jpg',
                                thumbnail: 'https://ipodrom.ua/content/images/4/apple-iphone-5s-16gb-space-gray-new-90882531346546_small11.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://www.iphones.ru/wp-content/uploads/2019/01/0-15-1240x720.jpg',
                                thumbnail: 'https://www.iphones.ru/wp-content/uploads/2019/01/0-15-1240x720.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom[:os:]Features: Quad-LED dual-tone flash, HDR (photo/panorama), panorama, HDR[:os:]Video: 2160p@24/30/60fps, 1080p@30/60/120/240fps[:os:]Selfie Camera: First - 7 MP, f/2.2, 32mm (standard)[:os:]Selfie Camera: Second - SL 3D camera[:os:]Features: HDR[:os:]Video: 1080p@30fps[:os:]Loudspeaker: Yes, with stereo speakers',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 7 Plus',
                        "parentProducts": [
                            {
                                'sku': 'i-7-plus-64',
                                'price': 550,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb'
                                }
                            },
                            {
                                'sku': 'i-7-plus-128',
                                'price': 580,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                                thumbnail: 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://i.eldorado.ua/goods_images/1038946/6466595-1575108560.jpg',
                                thumbnail: 'https://i.eldorado.ua/goods_images/1038946/6466595-1575108560.jpg',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://cdn.svyaznoy.ru/upload/iblock/6f7/iphone7_2up_matblk_us-en-print-tsgep.jpg',
                                thumbnail: 'https://cdn.svyaznoy.ru/upload/iblock/6f7/iphone7_2up_matblk_us-en-print-tsgep.jpg',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://www.ixbt.com/td/iphone-7-test/iphone-7.png',
                                thumbnail: 'https://www.ixbt.com/td/iphone-7-test/iphone-7.png',
                                alt: 'Apple® - iPhone 7 Plus'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": '',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '8',
                                'brand': 'Samsung',
                                'title': 'Samsung Galaxy S10 Plus',
                                'price': '49.99',
                                'additional': 'Blue',
                                "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '9',
                                'brand': 'LG',
                                'title': 'LG G8',
                                'price': '49.99',
                                'additional': 'Gray',
                                "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '10',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 8',
                        "parentProducts": [
                            {
                                'sku': 'i-8-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-gl-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone8-plus-gold-select-2018?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1550795417455',
                                thumbnail: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone8-plus-gold-select-2018?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1550795417455',
                                alt: 'Apple® - iPhone 8'
                            },
                            {
                                original: 'https://stylus.ua/thumbs/568x568/06/2a/633433.jpeg',
                                thumbnail: 'https://stylus.ua/thumbs/568x568/06/2a/633433.jpeg',
                                alt: 'Apple® - iPhone 8'
                            },
                            {
                                original: 'https://i1.wp.com/itc.ua/wp-content/uploads/2017/11/9-7.jpg?fit=1200%2C800&quality=100&strip=all&ssl=1',
                                thumbnail: 'https://i1.wp.com/itc.ua/wp-content/uploads/2017/11/9-7.jpg?fit=1200%2C800&quality=100&strip=all&ssl=1',
                                alt: 'Apple® - iPhone 8'
                            },
                            {
                                original: 'https://y.ua/thumbs/640x358/45/7b/1048799.png',
                                thumbnail: 'https://y.ua/thumbs/640x358/45/7b/1048799.png',
                                alt: 'Apple® - iPhone 8'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom[:os:]Features: Quad-LED dual-tone flash, HDR (photo/panorama), panorama, HDR[:os:]Video: 2160p@24/30/60fps, 1080p@30/60/120/240fps[:os:]Selfie Camera: First - 7 MP, f/2.2, 32mm (standard)[:os:]Selfie Camera: Second - SL 3D camera[:os:]Features: HDR[:os:]Video: 1080p@30fps[:os:]Loudspeaker: Yes, with stereo speakers[:os:]3.5mm jack: No[:os:]WLAN: Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot[:os:]Bluetooth: 5.0, A2DP, LE[:os:]GPS: Yes, with A-GPS, GLONASS, GALILEO, QZSS[:os:]NFC: Yes[:os:]Radio: No[:os:]USB: 2.0, proprietary reversible connector[:os:]Sensors: Face ID, accelerometer, gyro, proximity, compass, barometer[:os:]Battery: Non-removable Li-Ion 2716 mAh battery (10.35 Wh)[:os:]Charging: Fast battery charging 15W, USB Power Delivery 2.0, Qi wireless charging[:os:]Talk time: Up to 21 h (3G)[:os:]Music play: Up to 60 h\n',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '2',
                                'brand': 'Apple',
                                'title': 'iPhone 6',
                                'price': '49.99',
                                'additional': 'Gold',
                                "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '8',
                                'brand': 'Samsung',
                                'title': 'Samsung Galaxy S10 Plus',
                                'price': '49.99',
                                'additional': 'Blue',
                                "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '9',
                                'brand': 'LG',
                                'title': 'LG G8',
                                'price': '49.99',
                                'additional': 'Gray',
                                "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone X',
                        "parentProducts": [
                            {
                                'sku': 'i-x-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://i2.rozetka.ua/goods/13685454/115889473_images_13685454949.jpg',
                                thumbnail: 'https://i2.rozetka.ua/goods/13685454/115889473_images_13685454949.jpg',
                                alt: 'Apple® - iPhone X'
                            },
                            {
                                original: 'https://i2.rozetka.ua/goods/15089230/132348458_images_15089230809.jpg',
                                thumbnail: 'https://i2.rozetka.ua/goods/15089230/132348458_images_15089230809.jpg',
                                alt: 'Apple® - iPhone X'
                            },
                            {
                                original: 'https://static.turbosquid.com/Preview/001224/169/G2/3D-apple-iphone-x-color-model_Z.jpg',
                                thumbnail: 'https://static.turbosquid.com/Preview/001224/169/G2/3D-apple-iphone-x-color-model_Z.jpg',
                                alt: 'Apple® - iPhone X'
                            },
                            {
                                original: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                thumbnail: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                alt: 'Apple® - iPhone X'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '2',
                                'brand': 'Apple',
                                'title': 'iPhone 6',
                                'price': '49.99',
                                'additional': 'Gold',
                                "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '8',
                                'brand': 'Samsung',
                                'title': 'Samsung Galaxy S10 Plus',
                                'price': '49.99',
                                'additional': 'Blue',
                                "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '10',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "brand": 'Google',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'Google Pixel 3',
                        "parentProducts": [
                            {
                                'sku': 'ggl-px-3-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://hotline.ua/img/tx/218/2187658605.jpg',
                                thumbnail: 'https://hotline.ua/img/tx/218/2187658605.jpg',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://hotline.ua/img/tx/181/1812898905.jpg',
                                thumbnail: 'https://hotline.ua/img/tx/181/1812898905.jpg',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/145993-phones-review-review-pixel-2-xl-review-image2-mrh3lwdcvk-jpg.webp',
                                thumbnail: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/145993-phones-review-review-pixel-2-xl-review-image2-mrh3lwdcvk-jpg.webp',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://akket.com/wp-content/uploads/2019/01/Google-Pixel-3-Lite.jpg',
                                thumbnail: 'https://akket.com/wp-content/uploads/2019/01/Google-Pixel-3-Lite.jpg',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://akket.com/wp-content/uploads/2018/10/Google-Pixel-3-i-Pixel-3-XL-52.jpeg',
                                thumbnail: 'https://akket.com/wp-content/uploads/2018/10/Google-Pixel-3-i-Pixel-3-XL-52.jpeg',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                thumbnail: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                alt: 'Google® - Pixel 3'
                            }
                        ],
                        "productBrandImage": 'http://fullhdwall.com/wp-content/uploads/2016/02/Abstract-Google-Wallpaper.jpeg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '1',
                                'brand': 'Apple',
                                'title': 'iPhone 11 Pro',
                                'price': '49.99',
                                'additional': 'Green',
                                "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "brand": 'Samsung',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'Galaxy S10 Plus',
                        "parentProducts": [
                            {
                                'sku': 'g-s10p-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://i2.rozetka.ua/goods/11052630/samsung_galaxy_s10_plus_6_128_gb_black_sm_g975fzkdsek_images_11052630657.jpg',
                                thumbnail: 'https://i2.rozetka.ua/goods/11052630/samsung_galaxy_s10_plus_6_128_gb_black_sm_g975fzkdsek_images_11052630657.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            },
                            {
                                original: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/i/m/image_product_key_visual_beyond_s10__product_image_white_181211_sm_g975_galaxys10__white.jpg',
                                thumbnail: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/i/m/image_product_key_visual_beyond_s10__product_image_white_181211_sm_g975_galaxys10__white.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            },
                            {
                                original: 'https://i.allo.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm_g975_galax_ys10__back_cardinalred.jpg',
                                thumbnail: 'https://i.allo.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm_g975_galax_ys10__back_cardinalred.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            },
                            {
                                original: 'https://ilounge.ua/files/products/anomaly-fusion-case-black-samsung-s10-plus-1.1000x.jpg',
                                thumbnail: 'https://ilounge.ua/files/products/anomaly-fusion-case-black-samsung-s10-plus-1.1000x.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            },
                            {
                                original: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                thumbnail: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            }
                        ],
                        "productBrandImage": 'https://cdn.cybercalm.org/wp-content/uploads/2019/03/18110824/Samsung-Galaxy-S10-user.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom[:os:]Features: Quad-LED dual-tone flash, HDR (photo/panorama), panorama, HDR[:os:]Video: 2160p@24/30/60fps, 1080p@30/60/120/240fps[:os:]Selfie Camera: First - 7 MP, f/2.2, 32mm (standard)[:os:]Selfie Camera: Second - SL 3D camera[:os:]Features: HDR[:os:]Video: 1080p@30fps[:os:]Loudspeaker: Yes, with stereo speakers[:os:]3.5mm jack: No[:os:]WLAN: Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot[:os:]Bluetooth: 5.0, A2DP, LE[:os:]GPS: Yes, with A-GPS, GLONASS, GALILEO, QZSS',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '10',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "brand": 'LG',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'G8',
                        "parentProducts": [
                            {
                                'sku': 'lg-g8-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://sintetiki.net/images/product/19892/767/LG-G8.png',
                                thumbnail: 'https://sintetiki.net/images/product/19892/767/LG-G8.png',
                                alt: 'LG® - G8'
                            },
                            {
                                original: 'https://images.ua.prom.st/2081739816_smartfon-lg-g8.jpg',
                                thumbnail: 'https://images.ua.prom.st/2081739816_smartfon-lg-g8.jpg',
                                alt: 'LG® - G8'
                            },
                            {
                                original: 'https://mobile-review.com/news/wp-content/uploads/LG-G8-ThinQ-Range-01.jpg',
                                thumbnail: 'https://mobile-review.com/news/wp-content/uploads/LG-G8-ThinQ-Range-01.jpg',
                                alt: 'LG® - G8'
                            },
                            {
                                original: 'https://andro-news.com/images/content/843sarena_002.jpg',
                                thumbnail: 'https://andro-news.com/images/content/843sarena_002.jpg',
                                alt: 'LG® - G8'
                            }
                        ],
                        "productBrandImage": 'https://img.wallpapersafari.com/desktop/1920/1080/98/34/qoaiRK.png',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '1',
                                'brand': 'Apple',
                                'title': 'iPhone 11 Pro',
                                'price': '49.99',
                                'additional': 'Green',
                                "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '2',
                                'brand': 'Apple',
                                'title': 'iPhone 6',
                                'price': '49.99',
                                'additional': 'Gold',
                                "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '3',
                                'brand': 'Apple',
                                'title': 'iPhone 5s',
                                'price': '49.99',
                                'additional': 'Silver',
                                "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 7 Plus',
                        "parentProducts": [
                            {
                                'sku': 'i-7-plus-64',
                                'price': 550,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb'
                                }
                            },
                            {
                                'sku': 'i-7-plus-128',
                                'price': 580,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                                thumbnail: 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://i.eldorado.ua/goods_images/1038946/6466595-1575108560.jpg',
                                thumbnail: 'https://i.eldorado.ua/goods_images/1038946/6466595-1575108560.jpg',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://cdn.svyaznoy.ru/upload/iblock/6f7/iphone7_2up_matblk_us-en-print-tsgep.jpg',
                                thumbnail: 'https://cdn.svyaznoy.ru/upload/iblock/6f7/iphone7_2up_matblk_us-en-print-tsgep.jpg',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://www.ixbt.com/td/iphone-7-test/iphone-7.png',
                                thumbnail: 'https://www.ixbt.com/td/iphone-7-test/iphone-7.png',
                                alt: 'Apple® - iPhone 7 Plus'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": '',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            }
                        ]
                    }
                ]

                let result = products.find(product => {
                    return product.id == id && product.brand.toLowerCase() == brand;
                });

                if(result !== undefined) {
                    resolve({resultCode: 1, data: {...result}})
                } else {
                    resolve({resultCode: 0})
                }

            }, timer)
        })
    },
    addToCart(brand, id, sku) {

        return new Promise((resolve, reject) => {
            let timer = randomInteger(500, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            let localProducts = JSON.parse(localStorage.getItem('cartProducts'));

            if(localProducts !== null && localProducts.find(item => {
                return item.sku == sku;
            })) {
                resolve({resultCode: 0})
                return;
            }

            setTimeout(() => {

                let products = [
                    {
                        "id": 1,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 11 XS Max',
                        'thumbnail': 'https://hotline.ua/img/tx/207/2070816675.jpg',
                        "parentProducts": [
                            {
                                'sku': 'i-11-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-gl-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 6',
                        'thumbnail': 'https://i8.rozetka.ua/goods/15584185/156963094_images_15584185961.png',
                        "parentProducts": [
                            {
                                'sku': 'i-6-64-bl',
                                'price': 500,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black'
                                }
                            },
                            {
                                'sku': 'i-6-64-wh',
                                'price': 520,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White'
                                }
                            },
                            {
                                'sku': 'i-6-128-bl',
                                'price': 540,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black'
                                }
                            },
                            {
                                'sku': 'i-6-128-wh',
                                'price': 480,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White'
                                }
                            },
                            {
                                'sku': 'i-6-128-wh',
                                'price': 515,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold'
                                }
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 5S',
                        'thumbnail': 'https://swipe.ua/content/images/31/iphone_5s_16gb_space_gray-53085618631329_small11.jpg',
                        "parentProducts": [
                            {
                                'sku': 'i-5s-64-bl',
                                'price': 200,
                                'avaibility': true,
                                'options': {}
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 7 Plus',
                        'thumbnail': 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                        "parentProducts": [
                            {
                                'sku': 'i-7-plus-64',
                                'price': 550,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb'
                                }
                            },
                            {
                                'sku': 'i-7-plus-128',
                                'price': 580,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb'
                                }
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 8',
                        'thumbnail': 'https://stylus.ua/thumbs/568x568/06/2a/633433.jpeg',
                        "parentProducts": [
                            {
                                'sku': 'i-8-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-gl-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "brand": 'Apple',
                        "productTitle": 'iPhone X',
                        'thumbnail': 'https://i2.rozetka.ua/goods/13685454/115889473_images_13685454949.jpg',
                        "parentProducts": [
                            {
                                'sku': 'i-x-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "brand": 'Google',
                        "productTitle": 'Google Pixel 3',
                        'thumbnail': 'https://hotline.ua/img/tx/218/2187658605.jpg',
                        "parentProducts": [
                            {
                                'sku': 'ggl-px-3-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "brand": 'Samsung',
                        "productTitle": 'Galaxy S10 Plus',
                        'thumbnail': 'https://i2.rozetka.ua/goods/11052630/samsung_galaxy_s10_plus_6_128_gb_black_sm_g975fzkdsek_images_11052630657.jpg',
                        "parentProducts": [
                            {
                                'sku': 'g-s10p-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "brand": 'LG',
                        "productTitle": 'G8',
                        'thumbnail': 'https://sintetiki.net/images/product/19892/767/LG-G8.png',
                        "parentProducts": [
                            {
                                'sku': 'lg-g8-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 7 Plus',
                        'thumbnail': 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                        "parentProducts": [
                            {
                                'sku': 'i-7-plus-64',
                                'price': 550,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb'
                                }
                            },
                            {
                                'sku': 'i-7-plus-128',
                                'price': 580,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb'
                                }
                            }
                        ]
                    }
                ]

                let product = products.find(product => {
                    return product.id == id;
                });
                let skuOption = product.parentProducts.find(item => {
                    return item.sku == sku;
                });
                let result = {
                    id: id,
                    brand: brand,
                    sku: sku,
                    price: skuOption.price,
                    productTitle: product.productTitle,
                    thumbnail: product.thumbnail,
                    avaibility: skuOption.avaibility,
                    options: skuOption.options,
                    quantity: 1
                }
                if(skuOption.avaibility == true) {
                    if(localStorage.getItem('cartProducts') !== null) {
                        let localProducts = JSON.parse(localStorage.cartProducts);
                        localProducts.push({id: product.id,brand: brand,sku: skuOption.sku,quantity: "1"})
                        localStorage.setItem('cartProducts', JSON.stringify(localProducts));
                    } else {
                        localStorage.setItem('cartProducts', JSON.stringify([{id: product.id,brand: brand,sku: skuOption.sku,quantity: "1"}]));
                    }
                    resolve({resultCode: 1,data: result})
                } else {
                    resolve({resultCode: 0})
                }
            }, timer)
        })
    },
    initializeProducts (storageProducts) {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(500, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {

                let products = [
                    {
                        "id": 1,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 11 XS Max',
                        'thumbnail': 'https://hotline.ua/img/tx/207/2070816675.jpg',
                        "parentProducts": [
                            {
                                'sku': 'i-11-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-gl-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 6',
                        'thumbnail': 'https://i8.rozetka.ua/goods/15584185/156963094_images_15584185961.png',
                        "parentProducts": [
                            {
                                'sku': 'i-6-64-bl',
                                'price': 500,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black'
                                }
                            },
                            {
                                'sku': 'i-6-64-wh',
                                'price': 520,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White'
                                }
                            },
                            {
                                'sku': 'i-6-128-bl',
                                'price': 540,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black'
                                }
                            },
                            {
                                'sku': 'i-6-128-wh',
                                'price': 480,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White'
                                }
                            },
                            {
                                'sku': 'i-6-128-wh',
                                'price': 515,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold'
                                }
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 5S',
                        'thumbnail': 'https://swipe.ua/content/images/31/iphone_5s_16gb_space_gray-53085618631329_small11.jpg',
                        "parentProducts": [
                            {
                                'sku': 'i-5s-64-bl',
                                'price': 200,
                                'avaibility': true,
                                'options': {}
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 7 Plus',
                        'thumbnail': 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                        "parentProducts": [
                            {
                                'sku': 'i-7-plus-64',
                                'price': 550,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb'
                                }
                            },
                            {
                                'sku': 'i-7-plus-128',
                                'price': 580,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb'
                                }
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 8',
                        'thumbnail': 'https://stylus.ua/thumbs/568x568/06/2a/633433.jpeg',
                        "parentProducts": [
                            {
                                'sku': 'i-8-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-gl-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "brand": 'Apple',
                        "productTitle": 'iPhone X',
                        'thumbnail': 'https://i2.rozetka.ua/goods/13685454/115889473_images_13685454949.jpg',
                        "parentProducts": [
                            {
                                'sku': 'i-x-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "brand": 'Google',
                        "productTitle": 'Google Pixel 3',
                        'thumbnail': 'https://hotline.ua/img/tx/218/2187658605.jpg',
                        "parentProducts": [
                            {
                                'sku': 'ggl-px-3-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "brand": 'Samsung',
                        "productTitle": 'Galaxy S10 Plus',
                        'thumbnail': 'https://i2.rozetka.ua/goods/11052630/samsung_galaxy_s10_plus_6_128_gb_black_sm_g975fzkdsek_images_11052630657.jpg',
                        "parentProducts": [
                            {
                                'sku': 'g-s10p-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "brand": 'LG',
                        "productTitle": 'G8',
                        'thumbnail': 'https://sintetiki.net/images/product/19892/767/LG-G8.png',
                        "parentProducts": [
                            {
                                'sku': 'lg-g8-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "brand": 'Apple',
                        "productTitle": 'iPhone 7 Plus',
                        'thumbnail': 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                        "parentProducts": [
                            {
                                'sku': 'i-7-plus-64',
                                'price': 550,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb'
                                }
                            },
                            {
                                'sku': 'i-7-plus-128',
                                'price': 580,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb'
                                }
                            }
                        ]
                    }
                ];
                let result;

                if(storageProducts !== null) {
                    result = storageProducts.map(storageProduct => {
                        let product = products.find(item => {
                            return item.id == storageProduct.id;
                        });
                        let skuOption = product.parentProducts.find(item => {
                            return item.sku == storageProduct.sku;
                        });
                        return {
                            id: storageProduct.id,
                            brand: product.brand,
                            sku: skuOption.sku,
                            price: skuOption.price,
                            productTitle: product.productTitle,
                            thumbnail: product.thumbnail,
                            avaibility: skuOption.avaibility,
                            options: skuOption.options,
                            quantity: storageProduct.quantity
                        }
                    })
                } else {
                    result = [];
                }

                resolve({resultCode: 1,data: result})

            }, timer)
        })
    }
}

export const cartApi = {
    loadOptions() {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(500, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {
                let deliveries = [{name: 'in-home', placeholder: 'In Home', forType: 'deliveryMethod'}, {name: 'new-mail', placeholder: 'New Mail', forType: 'deliveryMethod'}, {name: 'pickup-from-the-store', placeholder: 'Pickup from the store', forType: 'deliveryMethod'}];
                let payments = [{name: 'cash-payment-upon-receipt', placeholder: 'Cash payment upon receipt', forType: 'paymentMethod'}, {name: 'bank-transfer', placeholder: 'Bank Transfer', forType: 'paymentMethod'}]

                resolve({resultCode: 1, data: [...deliveries,...payments]})
            }, timer)
        })
    },
    checkout(products, options) {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(500, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {
                let random = randomInteger(0,1);
                let message;
                if(random === 1) {
                    message = 'Success, check your e-mail';
                } else {
                    message = 'Error: Items not found';
                }

                resolve({resultCode: random, message: message})
            }, timer)
        })
    }
}

export const searchApi = {
    searchProductsApi(query) {
        return new Promise((resolve, reject) => {
            let timer = randomInteger(500, 1000);

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }

            setTimeout(() => {
                let products = [
                    {
                        "id": 1,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 11 XS Max',
                        "parentProducts": [
                            {
                                'sku': 'i-11-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-11-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-11-128-gl-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://hotline.ua/img/tx/207/2070816675.jpg',
                                thumbnail: 'https://hotline.ua/img/tx/207/2070816675.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188',
                                thumbnail: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://yellow.ua/media/wysiwyg/iphone11-select-2019-family.jpg',
                                thumbnail: 'https://yellow.ua/media/wysiwyg/iphone11-select-2019-family.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://www.iphones.ru/wp-content/uploads/2019/11/aaa22-1240x630.jpg',
                                thumbnail: 'https://www.iphones.ru/wp-content/uploads/2019/11/aaa22-1240x630.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom[:os:]Features: Quad-LED dual-tone flash, HDR (photo/panorama), panorama, HDR[:os:]Video: 2160p@24/30/60fps, 1080p@30/60/120/240fps[:os:]Selfie Camera: First - 7 MP, f/2.2, 32mm (standard)[:os:]Selfie Camera: Second - SL 3D camera[:os:]Features: HDR[:os:]Video: 1080p@30fps[:os:]Loudspeaker: Yes, with stereo speakers[:os:]3.5mm jack: No[:os:]WLAN: Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot[:os:]Bluetooth: 5.0, A2DP, LE[:os:]GPS: Yes, with A-GPS, GLONASS, GALILEO, QZSS[:os:]NFC: Yes[:os:]Radio: No[:os:]USB: 2.0, proprietary reversible connector[:os:]Sensors: Face ID, accelerometer, gyro, proximity, compass, barometer[:os:]Battery: Non-removable Li-Ion 2716 mAh battery (10.35 Wh)[:os:]Charging: Fast battery charging 15W, USB Power Delivery 2.0, Qi wireless charging[:os:]Talk time: Up to 21 h (3G)[:os:]Music play: Up to 60 h\n',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '2',
                                'brand': 'Apple',
                                'title': 'iPhone 6',
                                'price': '49.99',
                                'additional': 'Gold',
                                "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '9',
                                'brand': 'LG',
                                'title': 'LG G8',
                                'price': '49.99',
                                'additional': 'Gray',
                                "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 6',
                        "parentProducts": [
                            {
                                'sku': 'i-6-64-bl',
                                'price': 500,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black'
                                }
                            },
                            {
                                'sku': 'i-6-64-wh',
                                'price': 520,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White'
                                }
                            },
                            {
                                'sku': 'i-6-128-bl',
                                'price': 540,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black'
                                }
                            },
                            {
                                'sku': 'i-6-128-wh',
                                'price': 480,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White'
                                }
                            },
                            {
                                'sku': 'i-6-128-wh',
                                'price': 515,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://i8.rozetka.ua/goods/15584185/156963094_images_15584185961.png',
                                thumbnail: 'https://i8.rozetka.ua/goods/15584185/156963094_images_15584185961.png',
                                alt: 'Apple® - iPhone 6'
                            },
                            {
                                original: 'https://i.citrus.ua/uploads/shop/1/2/12976fd9b43aa2437c60b0faa8597495.jpg',
                                thumbnail: 'https://i.citrus.ua/uploads/shop/1/2/12976fd9b43aa2437c60b0faa8597495.jpg',
                                alt: 'Apple® - iPhone 6'
                            },
                            {
                                original: 'https://s.appleinsider.ru/2019/06/iphone6-750x500.jpg',
                                thumbnail: 'https://s.appleinsider.ru/2019/06/iphone6-750x500.jpg',
                                alt: 'Apple® - iPhone 6'
                            },
                            {
                                original: 'https://main-cdn.goods.ru/big2/hlr-system/1692524/100002060975b0.jpg',
                                thumbnail: 'https://main-cdn.goods.ru/big2/hlr-system/1692524/100002060975b0.jpg',
                                alt: 'Apple® - iPhone 6'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '1',
                                'brand': 'Apple',
                                'title': 'iPhone 11 Pro',
                                'price': '49.99',
                                'additional': 'Green',
                                "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '3',
                                'brand': 'Apple',
                                'title': 'iPhone 5s',
                                'price': '49.99',
                                'additional': 'Silver',
                                "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 5S',
                        "parentProducts": [
                            {
                                'sku': 'i-5s-64-bl',
                                'price': 200,
                                'avaibility': true,
                                'options': {}
                            }
                        ],
                        "images": [
                            {
                                original: 'https://swipe.ua/content/images/31/iphone_5s_16gb_space_gray-53085618631329_small11.jpg',
                                thumbnail: 'https://swipe.ua/content/images/31/iphone_5s_16gb_space_gray-53085618631329_small11.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://hotline.ua/img/tx/398/398390695.jpg',
                                thumbnail: 'https://hotline.ua/img/tx/398/398390695.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://ipodrom.ua/content/images/4/apple-iphone-5s-16gb-space-gray-new-90882531346546_small11.jpg',
                                thumbnail: 'https://ipodrom.ua/content/images/4/apple-iphone-5s-16gb-space-gray-new-90882531346546_small11.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            },
                            {
                                original: 'https://www.iphones.ru/wp-content/uploads/2019/01/0-15-1240x720.jpg',
                                thumbnail: 'https://www.iphones.ru/wp-content/uploads/2019/01/0-15-1240x720.jpg',
                                alt: 'Apple® - iPhone 11 XS Max'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom[:os:]Features: Quad-LED dual-tone flash, HDR (photo/panorama), panorama, HDR[:os:]Video: 2160p@24/30/60fps, 1080p@30/60/120/240fps[:os:]Selfie Camera: First - 7 MP, f/2.2, 32mm (standard)[:os:]Selfie Camera: Second - SL 3D camera[:os:]Features: HDR[:os:]Video: 1080p@30fps[:os:]Loudspeaker: Yes, with stereo speakers',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 7 Plus',
                        "parentProducts": [
                            {
                                'sku': 'i-7-plus-64',
                                'price': 550,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb'
                                }
                            },
                            {
                                'sku': 'i-7-plus-128',
                                'price': 580,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                                thumbnail: 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://i.eldorado.ua/goods_images/1038946/6466595-1575108560.jpg',
                                thumbnail: 'https://i.eldorado.ua/goods_images/1038946/6466595-1575108560.jpg',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://cdn.svyaznoy.ru/upload/iblock/6f7/iphone7_2up_matblk_us-en-print-tsgep.jpg',
                                thumbnail: 'https://cdn.svyaznoy.ru/upload/iblock/6f7/iphone7_2up_matblk_us-en-print-tsgep.jpg',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://www.ixbt.com/td/iphone-7-test/iphone-7.png',
                                thumbnail: 'https://www.ixbt.com/td/iphone-7-test/iphone-7.png',
                                alt: 'Apple® - iPhone 7 Plus'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": '',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '8',
                                'brand': 'Samsung',
                                'title': 'Samsung Galaxy S10 Plus',
                                'price': '49.99',
                                'additional': 'Blue',
                                "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '9',
                                'brand': 'LG',
                                'title': 'LG G8',
                                'price': '49.99',
                                'additional': 'Gray',
                                "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '10',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 8',
                        "parentProducts": [
                            {
                                'sku': 'i-8-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-8-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-8-128-gl-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone8-plus-gold-select-2018?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1550795417455',
                                thumbnail: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone8-plus-gold-select-2018?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1550795417455',
                                alt: 'Apple® - iPhone 8'
                            },
                            {
                                original: 'https://stylus.ua/thumbs/568x568/06/2a/633433.jpeg',
                                thumbnail: 'https://stylus.ua/thumbs/568x568/06/2a/633433.jpeg',
                                alt: 'Apple® - iPhone 8'
                            },
                            {
                                original: 'https://i1.wp.com/itc.ua/wp-content/uploads/2017/11/9-7.jpg?fit=1200%2C800&quality=100&strip=all&ssl=1',
                                thumbnail: 'https://i1.wp.com/itc.ua/wp-content/uploads/2017/11/9-7.jpg?fit=1200%2C800&quality=100&strip=all&ssl=1',
                                alt: 'Apple® - iPhone 8'
                            },
                            {
                                original: 'https://y.ua/thumbs/640x358/45/7b/1048799.png',
                                thumbnail: 'https://y.ua/thumbs/640x358/45/7b/1048799.png',
                                alt: 'Apple® - iPhone 8'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom[:os:]Features: Quad-LED dual-tone flash, HDR (photo/panorama), panorama, HDR[:os:]Video: 2160p@24/30/60fps, 1080p@30/60/120/240fps[:os:]Selfie Camera: First - 7 MP, f/2.2, 32mm (standard)[:os:]Selfie Camera: Second - SL 3D camera[:os:]Features: HDR[:os:]Video: 1080p@30fps[:os:]Loudspeaker: Yes, with stereo speakers[:os:]3.5mm jack: No[:os:]WLAN: Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot[:os:]Bluetooth: 5.0, A2DP, LE[:os:]GPS: Yes, with A-GPS, GLONASS, GALILEO, QZSS[:os:]NFC: Yes[:os:]Radio: No[:os:]USB: 2.0, proprietary reversible connector[:os:]Sensors: Face ID, accelerometer, gyro, proximity, compass, barometer[:os:]Battery: Non-removable Li-Ion 2716 mAh battery (10.35 Wh)[:os:]Charging: Fast battery charging 15W, USB Power Delivery 2.0, Qi wireless charging[:os:]Talk time: Up to 21 h (3G)[:os:]Music play: Up to 60 h\n',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '2',
                                'brand': 'Apple',
                                'title': 'iPhone 6',
                                'price': '49.99',
                                'additional': 'Gold',
                                "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '8',
                                'brand': 'Samsung',
                                'title': 'Samsung Galaxy S10 Plus',
                                'price': '49.99',
                                'additional': 'Blue',
                                "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '9',
                                'brand': 'LG',
                                'title': 'LG G8',
                                'price': '49.99',
                                'additional': 'Gray',
                                "imageUrl": 'https://i2.rozetka.ua/goods/14436599/130819169_images_14436599805.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone X',
                        "parentProducts": [
                            {
                                'sku': 'i-x-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'i-x-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'i-x-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://i2.rozetka.ua/goods/13685454/115889473_images_13685454949.jpg',
                                thumbnail: 'https://i2.rozetka.ua/goods/13685454/115889473_images_13685454949.jpg',
                                alt: 'Apple® - iPhone X'
                            },
                            {
                                original: 'https://i2.rozetka.ua/goods/15089230/132348458_images_15089230809.jpg',
                                thumbnail: 'https://i2.rozetka.ua/goods/15089230/132348458_images_15089230809.jpg',
                                alt: 'Apple® - iPhone X'
                            },
                            {
                                original: 'https://static.turbosquid.com/Preview/001224/169/G2/3D-apple-iphone-x-color-model_Z.jpg',
                                thumbnail: 'https://static.turbosquid.com/Preview/001224/169/G2/3D-apple-iphone-x-color-model_Z.jpg',
                                alt: 'Apple® - iPhone X'
                            },
                            {
                                original: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                thumbnail: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                alt: 'Apple® - iPhone X'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '2',
                                'brand': 'Apple',
                                'title': 'iPhone 6',
                                'price': '49.99',
                                'additional': 'Gold',
                                "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '8',
                                'brand': 'Samsung',
                                'title': 'Samsung Galaxy S10 Plus',
                                'price': '49.99',
                                'additional': 'Blue',
                                "imageUrl": 'https://www.mrphonedeals.com/20812-large_default/samsung-galaxy-s10-plus-8gb-128gb-sinij.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '10',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "brand": 'Google',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'Google Pixel 3',
                        "parentProducts": [
                            {
                                'sku': 'ggl-px-3-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'ggl-px-3-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://hotline.ua/img/tx/218/2187658605.jpg',
                                thumbnail: 'https://hotline.ua/img/tx/218/2187658605.jpg',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://hotline.ua/img/tx/181/1812898905.jpg',
                                thumbnail: 'https://hotline.ua/img/tx/181/1812898905.jpg',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/145993-phones-review-review-pixel-2-xl-review-image2-mrh3lwdcvk-jpg.webp',
                                thumbnail: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/145993-phones-review-review-pixel-2-xl-review-image2-mrh3lwdcvk-jpg.webp',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://akket.com/wp-content/uploads/2019/01/Google-Pixel-3-Lite.jpg',
                                thumbnail: 'https://akket.com/wp-content/uploads/2019/01/Google-Pixel-3-Lite.jpg',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://akket.com/wp-content/uploads/2018/10/Google-Pixel-3-i-Pixel-3-XL-52.jpeg',
                                thumbnail: 'https://akket.com/wp-content/uploads/2018/10/Google-Pixel-3-i-Pixel-3-XL-52.jpeg',
                                alt: 'Google® - Pixel 3'
                            },
                            {
                                original: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                thumbnail: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                alt: 'Google® - Pixel 3'
                            }
                        ],
                        "productBrandImage": 'http://fullhdwall.com/wp-content/uploads/2016/02/Abstract-Google-Wallpaper.jpeg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '1',
                                'brand': 'Apple',
                                'title': 'iPhone 11 Pro',
                                'price': '49.99',
                                'additional': 'Green',
                                "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "brand": 'Samsung',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'Galaxy S10 Plus',
                        "parentProducts": [
                            {
                                'sku': 'g-s10p-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'g-s10p-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://i2.rozetka.ua/goods/11052630/samsung_galaxy_s10_plus_6_128_gb_black_sm_g975fzkdsek_images_11052630657.jpg',
                                thumbnail: 'https://i2.rozetka.ua/goods/11052630/samsung_galaxy_s10_plus_6_128_gb_black_sm_g975fzkdsek_images_11052630657.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            },
                            {
                                original: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/i/m/image_product_key_visual_beyond_s10__product_image_white_181211_sm_g975_galaxys10__white.jpg',
                                thumbnail: 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/i/m/image_product_key_visual_beyond_s10__product_image_white_181211_sm_g975_galaxys10__white.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            },
                            {
                                original: 'https://i.allo.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm_g975_galax_ys10__back_cardinalred.jpg',
                                thumbnail: 'https://i.allo.ua/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm_g975_galax_ys10__back_cardinalred.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            },
                            {
                                original: 'https://ilounge.ua/files/products/anomaly-fusion-case-black-samsung-s10-plus-1.1000x.jpg',
                                thumbnail: 'https://ilounge.ua/files/products/anomaly-fusion-case-black-samsung-s10-plus-1.1000x.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            },
                            {
                                original: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                thumbnail: 'https://itc.ua/wp-content/uploads/2017/11/DSC01374.jpg',
                                alt: 'Samsung® - Galaxy S10 Plus'
                            }
                        ],
                        "productBrandImage": 'https://cdn.cybercalm.org/wp-content/uploads/2019/03/18110824/Samsung-Galaxy-S10-user.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS[:os:]Camera: Second - 12 MP, f/2.4, 52mm (telephoto), 1/3.4", 1.0µm, PDAF, OIS, 2x optical zoom[:os:]Features: Quad-LED dual-tone flash, HDR (photo/panorama), panorama, HDR[:os:]Video: 2160p@24/30/60fps, 1080p@30/60/120/240fps[:os:]Selfie Camera: First - 7 MP, f/2.2, 32mm (standard)[:os:]Selfie Camera: Second - SL 3D camera[:os:]Features: HDR[:os:]Video: 1080p@30fps[:os:]Loudspeaker: Yes, with stereo speakers[:os:]3.5mm jack: No[:os:]WLAN: Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot[:os:]Bluetooth: 5.0, A2DP, LE[:os:]GPS: Yes, with A-GPS, GLONASS, GALILEO, QZSS',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '10',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "brand": 'LG',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'G8',
                        "parentProducts": [
                            {
                                'sku': 'lg-g8-64-bl-gl',
                                'price': 600,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-wh-gl',
                                'price': 620,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-bl-mt',
                                'price': 630,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-64-wh-mt',
                                'price': 650,
                                'avaibility': false,
                                'options': {
                                    'Memory': '64 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-bl-gl',
                                'price': 680,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-gl',
                                'price': 700,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Gloss'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-bl-mt',
                                'price': 780,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Black',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'White',
                                    'Style': 'Matte'
                                }
                            },
                            {
                                'sku': 'lg-g8-128-wh-mt',
                                'price': 645,
                                'avaibility': true,
                                'options': {
                                    'Memory': '128 Gb',
                                    'Color': 'Gold',
                                    'Style': 'Matte'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://sintetiki.net/images/product/19892/767/LG-G8.png',
                                thumbnail: 'https://sintetiki.net/images/product/19892/767/LG-G8.png',
                                alt: 'LG® - G8'
                            },
                            {
                                original: 'https://images.ua.prom.st/2081739816_smartfon-lg-g8.jpg',
                                thumbnail: 'https://images.ua.prom.st/2081739816_smartfon-lg-g8.jpg',
                                alt: 'LG® - G8'
                            },
                            {
                                original: 'https://mobile-review.com/news/wp-content/uploads/LG-G8-ThinQ-Range-01.jpg',
                                thumbnail: 'https://mobile-review.com/news/wp-content/uploads/LG-G8-ThinQ-Range-01.jpg',
                                alt: 'LG® - G8'
                            },
                            {
                                original: 'https://andro-news.com/images/content/843sarena_002.jpg',
                                thumbnail: 'https://andro-news.com/images/content/843sarena_002.jpg',
                                alt: 'LG® - G8'
                            }
                        ],
                        "productBrandImage": 'https://img.wallpapersafari.com/desktop/1920/1080/98/34/qoaiRK.png',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": 'Dimensions: 143.6 x 70.9 x 7.7 mm / 5.65" x 2.79" x 0.30"[:os:]Weight: 174 g / 6.14 oz.[:os:]Build: Glass front, glass back, stainless steel frame[:os:]SIM: Nano-SIM[:os:]Display Type: Super Retina OLED capacitive touchscreen (16M colors)[:os:]Resolution: 1125 x 2436 px, 19.5:9 ratio (~458 ppi density)[:os:]Size: 5.8", 84.4 cm2 (~82.9% screen-to-body ratio)[:os:]Protection: Scratch-resistant glass, Oleophobic coating, IP67 dust/water resistant (up to 1m for 30 mins)[:os:]OS: iOS 11.1.1, upgradable to iOS 13.3[:os:]Chipset: Apple A11 Bionic (10 nm)[:os:]CPU: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)[:os:]GPU: Apple GPU (three-core graphics)[:os:]Card slot: No[:os:]Camera: First - 12 MP, f/1.8, 28mm (wide), 1/3", 1.22µm, dual pixel PDAF, OIS',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '1',
                                'brand': 'Apple',
                                'title': 'iPhone 11 Pro',
                                'price': '49.99',
                                'additional': 'Green',
                                "imageUrl": 'https://news-cdn.softpedia.com/images/news2/leak-reveals-iphone-11-colors-confirms-apple-actually-teased-all-of-them-527297-2.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '2',
                                'brand': 'Apple',
                                'title': 'iPhone 6',
                                'price': '49.99',
                                'additional': 'Gold',
                                "imageUrl": 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-gold_1.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '3',
                                'brand': 'Apple',
                                'title': 'iPhone 5s',
                                'price': '49.99',
                                'additional': 'Silver',
                                "imageUrl": 'https://swipe.ua/content/images/48/iphone_5s_16gb_silver-63874725647452.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "brand": 'Apple',
                        "mainCategory": 'hi-tech',
                        "productTitle": 'iPhone 7 Plus',
                        "parentProducts": [
                            {
                                'sku': 'i-7-plus-64',
                                'price': 550,
                                'avaibility': true,
                                'options': {
                                    'Memory': '64 Gb'
                                }
                            },
                            {
                                'sku': 'i-7-plus-128',
                                'price': 580,
                                'avaibility': false,
                                'options': {
                                    'Memory': '128 Gb'
                                }
                            }
                        ],
                        "images": [
                            {
                                original: 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                                thumbnail: 'https://gstore.ua/content/images/29/apple-iphone-7-plus-32gb-black-92535924296621_small11.png',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://i.eldorado.ua/goods_images/1038946/6466595-1575108560.jpg',
                                thumbnail: 'https://i.eldorado.ua/goods_images/1038946/6466595-1575108560.jpg',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://cdn.svyaznoy.ru/upload/iblock/6f7/iphone7_2up_matblk_us-en-print-tsgep.jpg',
                                thumbnail: 'https://cdn.svyaznoy.ru/upload/iblock/6f7/iphone7_2up_matblk_us-en-print-tsgep.jpg',
                                alt: 'Apple® - iPhone 7 Plus'
                            },
                            {
                                original: 'https://www.ixbt.com/td/iphone-7-test/iphone-7.png',
                                thumbnail: 'https://www.ixbt.com/td/iphone-7-test/iphone-7.png',
                                alt: 'Apple® - iPhone 7 Plus'
                            }
                        ],
                        "productBrandImage": 'https://bitnovosti.com/wp-content/uploads/2019/06/Apple-2-11.jpg',
                        "shortDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                        "specifications": '',
                        "features": 'High quality at an affordable price[:os:]Expertly made from premium materials[:os:]Built to match your exact requirements',
                        "recommendedProducts": [
                            {
                                "id": '4',
                                'brand': 'Apple',
                                'title': 'iPhone 7 Plus',
                                'price': '49.99',
                                'additional': 'Pink Gold',
                                "imageUrl": 'https://www.mrphonedeals.com/20062-large_default/apple-iphone-7-plus-128gb-rozovoe-zoloto-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '5',
                                'brand': 'Apple',
                                'title': 'iPhone 8',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://i.allo.ua/media/catalog/product/cache/1/image/425x295/799896e5c6c37e11608b9f8e1d047d15/a/p/apple_iphone_8_64gb_mq6g2_space_grey_6_5.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '6',
                                'brand': 'Apple',
                                'title': 'iPhone X',
                                'price': '49.99',
                                'additional': 'Space Gray',
                                "imageUrl": 'https://www.mrphonedeals.com/20496-large_default/apple-iphone-x-256-gb-kosmicheskij-seryj-vosstanovlennyj-diamond.jpg',
                                'style': 'categoryList'
                            },
                            {
                                "id": '7',
                                'brand': 'Google',
                                'title': 'Google Pixel 3',
                                'price': '49.99',
                                'additional': 'Black',
                                "imageUrl": 'https://stylus.ua/thumbs/390x390/a2/0b/874353.jpeg',
                                'style': 'categoryList'
                            }
                        ]
                    }
                ]

                let allSearchProducts = products.filter(product => {
                    let brandName = product.brand.toLowerCase();
                    let productTitle = product.productTitle.toLowerCase();
                    let parentProducts = product.parentProducts;
                    let queryString = query.toLowerCase();
                    let parentResult = parentProducts.find(item => {
                        let sku = item.sku.toLowerCase();
                        if(sku.indexOf(queryString) !== -1) {
                            return true;
                        }
                    })
                    return brandName.indexOf(queryString) !== -1 || productTitle.indexOf(queryString) !== -1 || parentResult !== undefined;
                })

                let result = allSearchProducts.filter((item, index) => {
                    return index < 5;
                })

                result = result.map(item => {
                    return {
                        id: item.id,
                        brand: item.brand,
                        productTitle: item.productTitle,
                        image: item.images[0].thumbnail
                    }
                })


                resolve({resultCode: 1, data: result})
            }, timer)
        })
    }
}

const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const setCookie = (name, value, options = {}) => {

    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

const deleteCookie = (name) => {
    setCookie(name, "", {
        'max-age': -1
    })
}

document.deleteCookie = deleteCookie;
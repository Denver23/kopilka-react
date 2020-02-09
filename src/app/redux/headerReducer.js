const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

let initialState = {
    "topMenu": [
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
    "searchQuery": ''
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT:
            return state;
        default:
            return state;
    }
}

export const searchProduct = () => ({type: SEARCH_PRODUCT});

export default headerReducer;
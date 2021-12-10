
interface Product {
    id: string,
    productGroupId: string,
    title: string,
    brand: string,
    imageUrl: string,
    attributes: {string: string[]}
}

export const search = (searchTerm: String, results: number = 5): Product[] => {
    return [
        {
            "id": "2243844",
            "productGroupId": "2243844",
            "title": "Warsteiner Weihnachtsbier 6x0,33l",
            "attributes": {
                "tags": ["Neu"]
            },
            "brand": "Warsteiner",
            "imageUrl": "https://img.rewe-static.de/2243844/25918960_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/warsteiner-weihnachtsbier-6x0-33l/2243844"
                }
            }
        },
        {
            "id": "8335506",
            "productGroupId": "8335506",
            "title": "Bitburger Winterbock 20x0,33l",
            "attributes": {
                "tags": ["Sale"]
            },
            "brand": "Bitburger",
            "imageUrl": "https://img.rewe-static.de/8335506/29825022_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/bitburger-winterbock-20x0-33l/8335506"
                },
                "group": {
                    "href": "/p/bitburger-winterbock-20x0-33l/8335506"
                }
            }
        },
        {
            "id": "3155899",
            "productGroupId": "3155899",
            "title": "Heineken alkoholfrei 6x0,33l",
            "attributes": {},
            "brand": "Heineken",
            "imageUrl": "https://img.rewe-static.de/3155899/26366593_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/heineken-alkoholfrei-6x0-33l/3155899"
                }
            }
        },
        {
            "id": "1344881",
            "productGroupId": "1344881",
            "title": "Bergedorfer Bier 6x0,5l",
            "attributes": {},
            "brand": "Bergedorfer Bier",
            "imageUrl": "https://img.rewe-static.de/1344881/21572313_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/bergedorfer-bier-6x0-5l/1344881"
                }
            }
        },
        {
            "id": "7764138",
            "productGroupId": "7764138",
            "title": "Ketterer Edel Pils 0,5l",
            "attributes": {},
            "brand": "Ketterer Bier",
            "imageUrl": "https://img.rewe-static.de/7764138/28269036_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/ketterer-edel-pils-0-5l/7764138"
                }
            }
        },
        {
            "id": "6642063",
            "productGroupId": "6642063",
            "title": "Krombacher Pils 6x0,33l",
            "attributes": {},
            "brand": "Krombacher",
            "imageUrl": "https://img.rewe-static.de/6642063/626320_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/krombacher-pils-6x0-33l/6642063"
                }
            }
        },
        {
            "id": "6642225",
            "productGroupId": "6642225",
            "title": "Bitburger Pils 6x0,33l",
            "attributes": {},
            "brand": "Bitburger",
            "imageUrl": "https://img.rewe-static.de/6642225/2474240_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/bitburger-pils-6x0-33l/6642225"
                }
            }
        },
        {
            "id": "16970",
            "productGroupId": "16970",
            "title": "Krombacher Pils 0,5l",
            "attributes": {},
            "brand": "Krombacher",
            "imageUrl": "https://img.rewe-static.de/0016970/3905330_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/krombacher-pils-0-5l/16970"
                }
            }
        },
        {
            "id": "721093",
            "productGroupId": "721093",
            "title": "Bitburger Pils 20x0,5l",
            "attributes": {},
            "brand": "Bitburger",
            "imageUrl": "https://img.rewe-static.de/0721093/2065210_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/bitburger-pils-20x0-5l/721093"
                }
            }
        },
        {
            "id": "17012",
            "productGroupId": "17012",
            "title": "5,0 Original Pils 0,5l",
            "attributes": {},
            "brand": "5,0 Original",
            "imageUrl": "https://img.rewe-static.de/0017012/2143310_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/5-0-original-pils-0-5l/17012"
                }
            }
        },
        {
            "id": "17745",
            "productGroupId": "17745",
            "title": "Bitburger Pils 0,5l",
            "attributes": {},
            "brand": "Bitburger",
            "imageUrl": "https://img.rewe-static.de/0017745/3113070_digital-image.png",
            "_links": {
                "detail": {
                    "href": "/p/bitburger-pils-0-5l/17745"
                }
            }
        }
    ].slice(0, results) as Product[]
}

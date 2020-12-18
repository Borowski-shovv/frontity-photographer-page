const settings = {
  "name": "my-frontity-project",
  "state": {
    "frontity": {
      "url": "http://api-tech.pl/",
      "title": "Fotografia - Szczepan Skibicki",
      "description": "Fotografia - Film - Szczepan Skibicki"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "O mnie",
              "/",
              []
            ],
            [
              "Film",
              "/timelapse/",
              [
                {
                  name: 'Timelapse',
                  href: '/timelapse/'
                },
                {
                  name: 'Komercyjne/zlecenia',
                  href: '/komercyjne/'
                },
                {
                  name: 'Go-Podlasie',
                  href: '/go-podlasie/'
                }
              ]
            ],
            [
              "Fotografia",
              "/astrofoto/",
              [
                {
                  name: 'Astrofoto',
                  href: '/astrofoto/'
                },
                {
                  name: 'Podlasie',
                  href: '/podlasie/'
                },
                {
                  name: 'Góry',
                  href: '/gory/'
                },
                {
                  name: 'Wadirum',
                  href: '/wadirum/'
                }
              ]
            ],
            [
              "Współpraca",
              "/wspolpraca",
              []
            ],
            [
              "Kontakt",
              "/kontakt/",
              []
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://moja-pompa.pl/skibicki/wp-json/",
        },
        
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7"
  ]
};

export default settings;


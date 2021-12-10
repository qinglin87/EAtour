var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.5870467251524811,
          "pitch": -0.2288019260776757,
          "rotation": 0.7853981633974483,
          "target": "1-block-ea"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7027007708440447,
          "pitch": 0.0034762557213916523,
          "title": "Faculty of Engineering",
          "text": "Welcome! This is where you will enter our \"Engineering zone\"!"
        }
      ]
    },
    {
      "id": "1-block-ea",
      "name": "Block EA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.31303227128316635,
        "pitch": -0.32398645225516276,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.7684020956206279,
          "pitch": 0.09372085946259645,
          "rotation": 11.780972450961727,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.12136952630619646,
          "pitch": 0.03856275389137842,
          "rotation": 0,
          "target": "2-ea-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4248625290331365,
          "pitch": -0.13398961908352192,
          "title": "Engineering Auditorium (Block EA)",
          "text": "Our main Engineering building housing Engineering Auditorium and LT7A, and where Dean's Office is at!"
        }
      ]
    },
    {
      "id": "2-ea-atrium",
      "name": "EA Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.0504422243470604,
        "pitch": 0.07547511016337083,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -3.111562357021665,
          "pitch": 0.0803421904815611,
          "rotation": 6.283185307179586,
          "target": "1-block-ea"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.196256955039388,
          "pitch": 0.3669989631893067,
          "title": "EA Atrium",
          "text": "A central study and meeting space for staff &amp; students!"
        },
        {
          "yaw": -1.4892824027742506,
          "pitch": 0.03999285815883624,
          "title": "Spinelli Coffee Company",
          "text": "Where staff and students get our daily coffee fix &amp; snacks!"
        }
      ]
    }
  ],
  "name": "NUS EA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

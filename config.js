// Config for Freifunk Rhein-sieg e.V. common map
module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://map.freifunk-rhein-sieg.net/netz/statistik/node/{NODE_ID}/',
        'image': 'https://grafana.freifunk-rhein-sieg.net/render/d-solo/000000026/node?panelId=1&var-node={NODE_ID}&from
=now-1d&width=650&height=350&theme=light&_t={TIME}',
        'title': 'Clientstatistik für {NODE_ID} - weiteren Statistiken'
      },
      {
        'name': 'Trafficstatistik',
        'href': 'https://map.freifunk-rhein-sieg.net/netz/statistik/node/{NODE_ID}/',
        'image': 'https://grafana.freifunk-rhein-sieg.net/render/d-solo/000000026/node?panelId=2&from=now-1d&var-node={N
ODE_ID}&width=650&height=350&theme=light&_t={TIME}',
        'title': 'Trafficstatistik für {NODE_ID} - weiteren Statistiken'
      },
      {
        'name': 'Systemlast',
        'href': 'https://map.freifunk-rhein-sieg.net/netz/statistik/node/{NODE_ID}/',
        'image': 'https://grafana.freifunk-rhein-sieg.net/render/d-solo/000000026/node?panelId=4&from=now-1d&var-node={N
ODE_ID}&width=650&height=350&theme=light&_t={TIME}',
        'title': 'Systemlast für {NODE_ID} - weiteren Statistiken'
      }
    ],
    'linkInfos': [
      {
        'name': 'Statistik für alle Links zwischen diese Knoten',
        'image': 'https://grafana.freifunk-rhein-sieg.net/render/d-solo/nvSNqoHmz/link?panelId=7&var-node={SOURCE_ID}
&var-nodetolink={TARGET_ID}&from=now-1d&&width=650&height=350&theme=light&_t={TIME}',
        'title': 'Linkstatistik des letzten Tages, min und max aller Links zwischen diesen Knoten'
      }
    ],
    'globalInfos': [
      {
        'name': 'Globale Statistik',
        'href': 'https://map.freifunk-rhein-sieg.net/netz/statistik',
        'image': 'https://grafana.freifunk-rhein-sieg.net/render/d-solo/000000028/globals?panelId=2&from=now-7d&&widt
h=650&height=350&theme=light&_t={TIME}',
        'title': 'Globale Statistik - weiteren Statistiken'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      'https://ffrs-map.freifunk-siegburg.de/data/tdf4',
      'https://ffrs-map.freifunk-siegburg.de/data/tdf5',
      'https://ffrs-map.freifunk-siegburg.de/data/tdf6',
      'https://ffrs-map.freifunk-siegburg.de/data/fgw01',
      'https://ffrs-map.freifunk-siegburg.de/data/fgw02',
      'https://ffrs-map.freifunk-siegburg.de/data/fgw03',
      'https://ffrs-map.freifunk-siegburg.de/data/fgw04'
    ],
    'siteName': 'Freifunk Rhein-Sieg',
    'mapLayers': [
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenS
treetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerog
rid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      },
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        50.8428,
        7.0367
      ],
      // Southeast
      [
         50.776,
         7.1919
      ]
    ],
    'domainNames': [
      {
        'domain': 'su-su',
        'name': 'Siegburg'
      },
      {
        'domain': 'su-lo',
        'name': 'Lohmar'
      },
      {
        'domain': 'su-sa',
        'name': 'Sankt Augustin'

      },
      {
        'domain': 'su-snw',
        'name': 'Soziale Netzwerke'

      },
      {
        'domain': 'su-ak',
        'name': 'Altenkirchen'

      },
      {
        'domain': 'su-nk',
        'name': 'Niederkassel'

      },
      {
        'domain': 'su-rhb',
        'name': 'Rheinbach'

      },
      {
        'domain': 'inn',
        'name': 'Troisdorf Innenstadt'

      },
      {
        'domain': 'tdf',
        'name': 'Troisdorf Umland'

      },
      {
        'domain': 'flu',
        'name': 'Troisdorf Soziale Netze'

      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://www.freifunk-rhein-sieg.net/impressum/'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://www.freifunk-rhein-sieg.net/datenschutz/'
      }
    ]
  };
};

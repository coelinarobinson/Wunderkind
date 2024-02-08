'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "39e33bc6aef3eece3df3ce241b28275b",
"index.html": "fb19e0e297faa9d89eed9f7cb4e8cbf3",
"/": "fb19e0e297faa9d89eed9f7cb4e8cbf3",
"main.dart.js": "b65c0cd576a868c657f5d8f2e6605476",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ed5cafa58be4cb13dc088952f109eb9c",
"assets/AssetManifest.json": "06da850c5db397f05be01e0a2fd8577d",
"assets/NOTICES": "5ff24214abff070e7873a3d624b819d9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d92d80e4e554fcf377393c994daa55cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cbf85fa8208b7634a2ba82afb284cd75",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "673247224ecd91e3cc41e58d4f321807",
"assets/fonts/MaterialIcons-Regular.otf": "3b5611aae264a17e28015db00f491420",
"assets/assets/images/welcome_screen_logo.svg": "26ccaf0b738984808aa3bd71c2f8e436",
"assets/assets/images/lol.png": "6dba7ea50691d267c69de11a723b0b9c",
"assets/assets/images/welcome_screen_logo2.svg": "b3ccfbcaf78fcf984b6ab94c202fc047",
"assets/assets/images/welcome_screen_logo_3.svg": "108207b948a516c1fdb8d613d8549ecd",
"assets/assets/images/logo2.png": "29ddd70b148c31310376caba44dea43e",
"assets/assets/images/sun.png": "d63514906e0c69419a8f296d695e9be8",
"assets/assets/backgrounds/hill-landscape.svg": "32d350b49afe9515ca467382011d030b",
"assets/assets/backgrounds/radiant-gradient.svg": "bb358b1f1b40587894205215253ec65f",
"assets/assets/backgrounds/subtle-prism.svg": "a79cd2ecdd1b001a6a93d8196d3ae89d",
"assets/assets/backgrounds/gradient1.svg": "082150120c4990ce1d693e7244b9f3ca",
"assets/assets/backgrounds/gradient3.svg": "b636e8f1c585af74d7521392d2649cb4",
"assets/assets/backgrounds/liquid-cheese.svg": "3a85ea1b64e3ea9fedbc8486e5583b7c",
"assets/assets/backgrounds/gradient2.svg": "63bd1c48a946b45398e3d0a89470519d",
"assets/assets/medals/1.svg": "5d93ea4cf0c8f166b1d940848df9430e",
"assets/assets/medals/3.svg": "c2089ef935abac832fc478a670305f88",
"assets/assets/medals/2.svg": "1c41de6ff415a1da68269a5c52566837",
"assets/assets/medals/6.svg": "e5247d7a179898625fd9e281662c5038",
"assets/assets/medals/7.svg": "e223f03d073a91e2e6307814501382cc",
"assets/assets/medals/5.svg": "ce67d60edf7a3251f46f7a6a8a9ca61c",
"assets/assets/medals/4.svg": "3c7cb4c048773042b5a2dc73b8632257",
"assets/assets/avatars/10.svg": "80a7ab36a73df9a7570154073aa72a4e",
"assets/assets/avatars/11.svg": "94588b1e6d439ceb84eb853b292cb4fe",
"assets/assets/avatars/13.svg": "21ba55aeba73546cb8d4c42edcb33863",
"assets/assets/avatars/12.svg": "25f0e618b7b9ef4be90df7bc21c77304",
"assets/assets/avatars/16.svg": "55c8d58ca457d65c8b8dd83f87569c24",
"assets/assets/avatars/17.svg": "b2654b21e907d4b3fee68806693d597b",
"assets/assets/avatars/15.svg": "a090de86997f20cefcc6357d38adb63c",
"assets/assets/avatars/14.svg": "a967379097f92c951d6726ead3e4e2dd",
"assets/assets/avatars/9.svg": "6fc8ff301a64966c5eb897909505a2eb",
"assets/assets/avatars/8.svg": "50f81cb87001cdf423fb2a216343f312",
"assets/assets/avatars/1.svg": "221170ed88dbf7287e7a0a092e7de1e3",
"assets/assets/avatars/3.svg": "31f7121c6841b941291f5b5311b4172f",
"assets/assets/avatars/2.svg": "45a9dc4c1d23e0644ab223d66dc83ef5",
"assets/assets/avatars/6.svg": "433c0c5d2126ab140dcfc06d073306bc",
"assets/assets/avatars/7.svg": "412460e4c3a99139f16db540ad10eb69",
"assets/assets/avatars/5.svg": "8a4c1e543da885a16c1de7ae7528bd9b",
"assets/assets/avatars/4.svg": "c7d35c7aa9f8012ee4d72b35d46cf295",
"assets/assets/avatars/19.svg": "379c3f7a70fe327da1263a0863036554",
"assets/assets/avatars/25.svg": "5fd63bae74f00dbbc3e0f476517909e0",
"assets/assets/avatars/24.svg": "a74398e3ed69f4b82cc2a610bd767e98",
"assets/assets/avatars/18.svg": "f82d8452d09a987689e0a411606c6d7d",
"assets/assets/avatars/23.svg": "a938e6554c00e2ec41ae055b53a8fa57",
"assets/assets/avatars/22.svg": "d4da58d6d6dd7129232c79ea85e34e1e",
"assets/assets/avatars/20.svg": "5a95bd2a7eb04c08126bbee72bf80201",
"assets/assets/avatars/test.svg": "bf0330c71db246e1e0c42450f3b603d4",
"assets/assets/avatars/21.svg": "7e684666d6170cab999b7e1147322e0a",
"assets/assets/animations/sky_animation.json": "0ddaea867ac0f49a0c849137ba322247",
"assets/assets/animations/cloud_animation.json": "e6fcaf5997c82c998d66ae12a7bb6d1e",
"assets/assets/animations/cloud2_animation.json": "e6fcaf5997c82c998d66ae12a7bb6d1e",
"assets/assets/animations/rainbow_animation.json": "a993166a62c7a08e2adbfc3ae7e8388c",
"assets/assets/animations/bee_animation.json": "7e6b0b7bb72e54e6287f569b4d857893",
"assets/assets/animations/task_animation.json": "11bca123b655934b232647c2e218ad51",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5aa7dfbd223a5760bade45d42afb9312",
"assets/AssetManifest.bin.json": "2624bb8449934568d3c11cccccd1acef",
"assets/AssetManifest.json": "06e6f160de7d137fe1faf1af2107fe4e",
"assets/assets/animations/bee_animation.json": "7e6b0b7bb72e54e6287f569b4d857893",
"assets/assets/animations/cloud2_animation.json": "e6fcaf5997c82c998d66ae12a7bb6d1e",
"assets/assets/animations/cloud_animation.json": "e6fcaf5997c82c998d66ae12a7bb6d1e",
"assets/assets/animations/rainbow_animation.json": "a993166a62c7a08e2adbfc3ae7e8388c",
"assets/assets/animations/sky_animation.json": "0ddaea867ac0f49a0c849137ba322247",
"assets/assets/animations/task_animation.json": "11bca123b655934b232647c2e218ad51",
"assets/assets/avatars/1.svg": "221170ed88dbf7287e7a0a092e7de1e3",
"assets/assets/avatars/10.svg": "80a7ab36a73df9a7570154073aa72a4e",
"assets/assets/avatars/11.svg": "94588b1e6d439ceb84eb853b292cb4fe",
"assets/assets/avatars/12.svg": "25f0e618b7b9ef4be90df7bc21c77304",
"assets/assets/avatars/13.svg": "21ba55aeba73546cb8d4c42edcb33863",
"assets/assets/avatars/14.svg": "a967379097f92c951d6726ead3e4e2dd",
"assets/assets/avatars/15.svg": "a090de86997f20cefcc6357d38adb63c",
"assets/assets/avatars/16.svg": "55c8d58ca457d65c8b8dd83f87569c24",
"assets/assets/avatars/17.svg": "b2654b21e907d4b3fee68806693d597b",
"assets/assets/avatars/18.svg": "f82d8452d09a987689e0a411606c6d7d",
"assets/assets/avatars/19.svg": "379c3f7a70fe327da1263a0863036554",
"assets/assets/avatars/2.svg": "45a9dc4c1d23e0644ab223d66dc83ef5",
"assets/assets/avatars/20.svg": "5a95bd2a7eb04c08126bbee72bf80201",
"assets/assets/avatars/21.svg": "7e684666d6170cab999b7e1147322e0a",
"assets/assets/avatars/22.svg": "d4da58d6d6dd7129232c79ea85e34e1e",
"assets/assets/avatars/23.svg": "a938e6554c00e2ec41ae055b53a8fa57",
"assets/assets/avatars/24.svg": "a74398e3ed69f4b82cc2a610bd767e98",
"assets/assets/avatars/25.svg": "5fd63bae74f00dbbc3e0f476517909e0",
"assets/assets/avatars/3.svg": "31f7121c6841b941291f5b5311b4172f",
"assets/assets/avatars/4.svg": "c7d35c7aa9f8012ee4d72b35d46cf295",
"assets/assets/avatars/5.svg": "8a4c1e543da885a16c1de7ae7528bd9b",
"assets/assets/avatars/6.svg": "433c0c5d2126ab140dcfc06d073306bc",
"assets/assets/avatars/7.svg": "412460e4c3a99139f16db540ad10eb69",
"assets/assets/avatars/8.svg": "50f81cb87001cdf423fb2a216343f312",
"assets/assets/avatars/9.svg": "6fc8ff301a64966c5eb897909505a2eb",
"assets/assets/avatars/test.svg": "bf0330c71db246e1e0c42450f3b603d4",
"assets/assets/backgrounds/hill-landscape.svg": "d3ac7f5d69c167bfab1e507d6a1a4dd7",
"assets/assets/backgrounds/liquid-cheese.svg": "3a85ea1b64e3ea9fedbc8486e5583b7c",
"assets/assets/images/logo2.png": "29ddd70b148c31310376caba44dea43e",
"assets/assets/images/lol.png": "6dba7ea50691d267c69de11a723b0b9c",
"assets/assets/medals/1.svg": "00280ca60bf694c798a5806ef4eaa55d",
"assets/assets/medals/2.svg": "da60e0678dc4ff7d1908b0ef19546ea2",
"assets/assets/medals/3.svg": "a40db5f5c46059a79e72a40afde1209d",
"assets/assets/medals/4.svg": "7dcb59ac41e805968e24a6d48f47c5d9",
"assets/assets/medals/5.svg": "53546bc0efc88a4d4f03bd84d498a587",
"assets/assets/medals/6.svg": "9bb23afa05f8f218a46bd3d7ddc8efd6",
"assets/assets/medals/7.svg": "a784d69955a205cb45a0845dcbed1672",
"assets/assets/tutorial/1.jpeg": "4c1e6bb459ed60528aa1888fa768d70c",
"assets/assets/tutorial/10-child.JPG": "f97590ebb93d2bcf3692392ad7b8ab7f",
"assets/assets/tutorial/10-parent.jpeg": "1d604d60d775ea5580ba4e7920b9e9d8",
"assets/assets/tutorial/11-child.png": "7d30f6b83413e467aed28976295095dc",
"assets/assets/tutorial/11-parent.png": "489a4013ff166c14fb01c732d1e462ce",
"assets/assets/tutorial/12-child.png": "3ba8c4940bf305ccf4de5a0e28cb5a38",
"assets/assets/tutorial/12-parent.png": "4c9b6b50cdd42c76706d37a2125b15a5",
"assets/assets/tutorial/13-parent.JPG": "3f9f3ccd93ddf44ea7ceb52e4b52ac4a",
"assets/assets/tutorial/14-child.JPG": "d8529427c9c0d368405cc1b85331baf6",
"assets/assets/tutorial/14-parent.png": "f5beb37390cfa2abbb5be5bfbae9061c",
"assets/assets/tutorial/15-child.JPG": "f2aa4ef70aafec3e5a9cc3b112e5569c",
"assets/assets/tutorial/15-parent.png": "b48538fe5b1d3eb6104190343c8c5988",
"assets/assets/tutorial/16-child.JPG": "84c10a6d75dbbe32c06d72b76745053c",
"assets/assets/tutorial/16-parent.JPEG": "b63958785dbeaa7c3e4752fab00ef958",
"assets/assets/tutorial/17-child.JPG": "c271b038f16a21c5d83047e146266268",
"assets/assets/tutorial/17-parent.JPG": "54dda96957ba1d2131f2d4af01cb113d",
"assets/assets/tutorial/17.2-child.JPEG": "c780017cbec3c12bec31c5b789c16a47",
"assets/assets/tutorial/17.2-parent.JPG": "4b8e2a263851820560627364e1c6c50a",
"assets/assets/tutorial/18-parent.JPG": "ada1b9b61fb96c9a14c88f5ca3459023",
"assets/assets/tutorial/18.2-parent.JPG": "b780fd90d153fff0b2547796ee18cadd",
"assets/assets/tutorial/19-child.JPG": "f955fb125f875e7873c5967f4f20bf9b",
"assets/assets/tutorial/19-parent.png": "5ca33ff27fbca95c69dfe029949afd74",
"assets/assets/tutorial/2.jpeg": "5b6e5e4286b13b47aa551e6b17d82e1a",
"assets/assets/tutorial/20-child.JPG": "319727512ded391911ed1c676936d4dd",
"assets/assets/tutorial/20.png": "f1983dd5633057d330218f734759ade7",
"assets/assets/tutorial/21.png": "441351ef1e53677520089842df451123",
"assets/assets/tutorial/3-child.png": "b145ac7985e071c5e2f3bcca9f28df0f",
"assets/assets/tutorial/3-parent.png": "7b27781a8abddad8066c0c1f148211ed",
"assets/assets/tutorial/4-child.jpg": "b3e148bc898902ffe4cf96ceb09c4357",
"assets/assets/tutorial/4-parent.jpeg": "2a2ac0357f558e362ef19fd453dd8bdb",
"assets/assets/tutorial/5-child.png": "d14e558a7df42a0c2f03ff697afc2d47",
"assets/assets/tutorial/5-parent.jpeg": "8d753197007752d46a343a1e7685094e",
"assets/assets/tutorial/6-parent.jpg": "484f2eea60f9f51f92fbc74c9806be55",
"assets/assets/tutorial/7-child.jpg": "09d7beaf31957436321c75f6e752f39b",
"assets/assets/tutorial/7-parent.jpeg": "3886e224cc634eb5ad70e2cbbe8b24cf",
"assets/assets/tutorial/8.jpeg": "653e4370ca2697d9161de80b073ab3f0",
"assets/assets/tutorial/9.jpeg": "3b69d2da057d329537538596f4ea3b1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3b5611aae264a17e28015db00f491420",
"assets/NOTICES": "c1f21b3c815062655c3e2b1f8ebb931f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cbf85fa8208b7634a2ba82afb284cd75",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b86e7331cec7ad620c37ecbe54454602",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "89312a4b951f0b0a82b3ad30f26e873f",
"/": "89312a4b951f0b0a82b3ad30f26e873f",
"main.dart.js": "94f119e9a6567b42cb4d6bc95f715e57",
"manifest.json": "ed5cafa58be4cb13dc088952f109eb9c",
"version.json": "39e33bc6aef3eece3df3ce241b28275b"};
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

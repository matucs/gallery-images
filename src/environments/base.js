

export default function baseEnv(baseApi) {
  return {
    route: {
      baseRoute: '/gallery-images', // 
    },
    api: {
      // gallery: 'https://api.imgur.com/:showId/gallery/:section/:sort/:window/:page', 
      // itemShow: 'https://api.imgur.com/3/album/:albumId/image/:imageId',
      gallery: 'allImages/', 
     // itemShow: 'itemImage/',
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}

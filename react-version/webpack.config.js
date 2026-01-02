// Performance optimizations for production build
// This extends the default CRA webpack config

module.exports = function override(config, env) {
  // Production optimizations
  if (env === 'production') {
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          // GSAP chunk (large library)
          gsap: {
            name: 'gsap',
            test: /[\\/]node_modules[\\/](gsap|framer-motion)[\\/]/,
            chunks: 'all',
            priority: 30
          },
          // Common chunk
          common: {
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true
          }
        }
      }
    };
  }
  
  return config;
};


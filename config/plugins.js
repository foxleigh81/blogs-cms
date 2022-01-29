module.exports = ({env}) => ({
  'import-content': {
    enabled: true,
    resolve: './src/plugins/import-content'
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'foxleigh',
        api_key: '162582351145869',
        api_secret: 'CduF40wxKriO4mtiyzTi2_YHH2U',
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});

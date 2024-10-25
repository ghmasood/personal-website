export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env('ARVAN_ACCESS_KEY_ID'),
            secretAccessKey: env('ARVAN_ACCESS_SECRET'),
          },
          region: env('ARVAN_REGION'),
          endpoint: env('ARVAN_ENDPOINT'), // Add endpoint variable here
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('ARVAN_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeDataKey: true,
      },
    },
  },
});

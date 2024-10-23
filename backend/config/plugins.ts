export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('LIARA_ACCESS_KEY_ID'),
        secretAccessKey: env('LIARA_ACCESS_SECRET'),
        region: env('LIARA_REGION'),
        endpoint: env('LIARA_ENDPOINT'), // Add endpoint variable here
        params: {
          ACL: env('AWS_ACL', 'public-read'),
          signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
          Bucket: env('LIARA_BUCKET'),
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
  'protected-populate': {
    enabled: true,
    config: {
      ['auto-populate']: true,
    },
  },
});

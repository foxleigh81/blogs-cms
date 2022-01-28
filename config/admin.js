module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '54554add97370c5d2606bf606aff1a05'),
  },
});

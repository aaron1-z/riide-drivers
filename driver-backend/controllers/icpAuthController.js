
const { AuthClient } = require('@dfinity/auth-client');
const express = require('express');
const router = express.Router();

router.get('/icp-login', async (req, res) => {
  const authClient = await AuthClient.create();
  authClient.login({
    identityProvider: 'https://identity.ic0.app',
    onSuccess: () => {
      const identity = authClient.getIdentity();
      // Handle the identity and create a JWT token or session
      res.send('ICP login successful');
    },
    onError: (err) => {
      res.status(500).send('ICP login failed');
    }
  });
});

module.exports = router;

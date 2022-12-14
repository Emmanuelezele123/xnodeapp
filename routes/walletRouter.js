const express = require("express");
const router = express.Router();
const WalletController = require("../controllers/wallet");
const {authenticateUser} = require("../middlewares/authentication")

router.post('/transferByUsername',authenticateUser, WalletController.transferByUsername)
router.post('/create',authenticateUser, WalletController.createWallet)
router.get('/balance',authenticateUser, WalletController.getBalance)
router.post('/transferByQrcode',authenticateUser, WalletController.transferByQrcode)
router.post('/withdraw',authenticateUser, WalletController.withdraw)
router.post('/topup',authenticateUser, WalletController.topup)
module.exports = router
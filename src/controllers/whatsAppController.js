import WhatsAppService from '../Services/WhatsAppService.js';
const whatsAppService = new WhatsAppService();

const verifyWebhook = async (req, res) => {
    try {
        if (
            req.query['hub.mode'] == 'subscribe' &&
            req.query['hub.verify_token'] == 'token'
        ) {
            res.send(req.query['hub.challenge']);
        } else {
            res.sendStatus(403);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, errorMessage: error.message });
    }
}

const receiveMessage = async (req, res) => {
    try {
        console.log(req.body);
        console.log('Incoming webhook: ' + JSON.stringify(req.body));
        res.sendStatus(200);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: false, errorMessage: error.message });
    }
}

const sendMessage = async (req, res) => {
    try {
        const response = await whatsAppService.sendMessage();
        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, errorMessage: error.message });
    }
};

export default {
    sendMessage,
    receiveMessage,
    verifyWebhook
};

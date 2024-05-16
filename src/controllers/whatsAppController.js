import WhatsAppService from '../Services/WhatsAppService.js';
const whatsAppService = new WhatsAppService();

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
};

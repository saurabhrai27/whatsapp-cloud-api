import axios from 'axios';

class WhatsAppService {
    async sendMessage( messageType='template' ) {
        try {
            const url = `https://graph.facebook.com/${process.env.CLOUD_API_VERSION}/${process.env.WA_PHONE_NUMBER_ID}/messages`;
            const requestData    = {
                messaging_product: 'whatsapp',
                to: process.env.RECIPIENT_WA_ID,
            };

            if(messageType === 'template') {
                requestData.type = 'template'
                requestData.template =  {
                    name: 'hello_world',
                    language: {
                        code: 'en_US'
                    }
                }
            } else {
                requestData.type = 'text'
                requestData.recipient_type = 'individual'
                requestData.text = {
                    "preview_url": false,
                    "body": "Hello there!"
                }
            }

            const response = await axios.post(url, requestData, {
                headers: {
                    Authorization: `Bearer ${process.env.CLOUD_API_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });

            return { status: true, responseData: response.data };
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export default WhatsAppService;
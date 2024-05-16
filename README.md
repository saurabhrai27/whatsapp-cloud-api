# whatsapp-cloud-api

## Overview

This project implements WhatsApp Cloud APIs to send messages to recipients and receive messages from them. It provides functionality for integrating WhatsApp messaging capabilities into your application using WhatsApp cloud api's. Additionally, it can be used for building chatbots using WhatsApp.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/saurabhrai27/whatsapp-cloud-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd whatsapp-cloud-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    - Create a `.env` file in the root directory(take reference from sample.env).
    - Add the following environment variables to the `.env` file:

        ```plaintext
        LISTENER_PORT=your_application_port_number
        CLOUD_API_VERSION=whatsapp_current_api_version
        WA_PHONE_NUMBER_ID=your_whatsapp_phone_number_id
        RECIPIENT_WA_ID=your_recipient_whatsapp_id
        CLOUD_API_ACCESS_TOKEN=your_cloud_api_access_token
        WEBHOOK_VERIFICATION_TOKEN=your_webhook_verification_tocken
        ```

    Replace the above variables with your actual values.

## Usage

To run the application, execute:

```bash
npm start

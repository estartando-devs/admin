import axios from "axios"

export const runBuild = async () => {
  const amplifyWebhookId = process.env.REACT_APP_AMPLIFY_WEBHOOK_ID
  const amplifyWebhookToken = process.env.REACT_APP_AMPLIFY_WEBHOOK_TOKEN
  const url = `https://webhooks.amplify.us-east-1.amazonaws.com/prod/webhooks?id=${amplifyWebhookId}&token=${amplifyWebhookToken}`
 
  await axios.post(url, undefined, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

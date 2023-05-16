from venmo_api import Client
from dotenv import load_dotenv
from notifiers import get_notifier
from datetime import datetime

from utils import get_env, env_vars, get_month, Venmo, Telegram

def main(now):
  """
  The main function which initiates the script.
  """

  load_dotenv()  # take environment variables from .env.
  actualVars = []
  for var in env_vars:
    actualVars.append(get_env(var))

  access_token, chat_id, bot_token, k_friend_id, c_friend_id, w_friend_id, j_friend_id = actualVars

  venmo = Venmo(access_token)

  successfulRequests = []
  expectedRequests = len(friends)


  name = 'testName'
  id = 'testID'
  description = "Spotify for the month of " + month + "— Sent by Joe's Assistant Efron 🤵🏻‍♂️"
  amount = 3.00
  message = f"""Thank you for purachsing your pass to Zoukapolis - Kuna and Paloma {name}.
  — Efron 🤵🏻‍♂️
      """

  success = venmo.request_money(id, amount, description, telegram.send_message(message))
   if success:
     successfulRequests.append(success)

now = datetime.now()
main(now)

# slack_emoji_get

This script will access your slack account and grab all emojis (custom and slack's standard emojis) and store in a single json file.

You must have a SLACK_XOXB_API_TOKEN token and have the emoji:read scope on your bot. 

You'll need to:
Go to your Slack App settings
Select your app
Click on "OAuth & Permissions" in the sidebar
Under "Bot Token Scopes", click "Add an OAuth Scope"
Add the emoji:read scope
Reinstall your app to the workspace to apply the new permissions
Get the new bot token (it will be updated after reinstalling)



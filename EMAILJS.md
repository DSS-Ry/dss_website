# Water softener request email setup

1. Connect an email service in EmailJS.
2. Create one template for residential and commercial requests. Set **To Email** to `quotes@dsshowley.com`, **Subject** to `{{subject}}`, **From Name** to `{{from_name}}`, and **Reply-To** to `{{reply_to}}`. Use the connected service's verified sender address as **From Email**.
3. Use this template body (plain text or an HTML template with escaped, double-brace variables):

   ```text
   {{request_type}} water softener sizing request

   Contact: {{from_name}}
   Email: {{reply_to}}
   Phone: {{phone}}

   {{message}}
   ```

   `message` contains every contact and system field, including labels and units. For an HTML template, wrap `{{message}}` in `<pre style="white-space: pre-wrap; font-family: inherit;">` to preserve line breaks.

4. Copy `.env.example` to `.env` and fill in the service ID, template ID, and account public key. These are browser configuration values; never use a private API key here.
5. Add the website's production origin and your development origin to the EmailJS allowed origins, then rebuild with `npm run build` (or restart the development server). Webpack reads `.env` at build time.

Verify both request types with your configured account: check delivery to the quotes inbox, all entered measurements, and the reply address. Failed submissions retain answers for retry; successful submissions clear and disable the form until it is reopened.

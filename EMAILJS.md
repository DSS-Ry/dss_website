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
5. Rebuild with `npm run build` (or restart the development server). Webpack reads the settings at build time. The EmailJS Domains allowlist is optional and requires a paid plan; skip it when using the free plan.

## Deployment builds

The local `.env` file is ignored by Git and is not included in a deployment from the repository. Configure these variables in your hosting provider's **build environment** or CI settings using the same values as your local `.env`:

```text
EMAILJS_SERVICE_ID
EMAILJS_WATER_SOFTENER_TEMPLATE_ID
EMAILJS_PUBLIC_KEY
```

Webpack accepts environment variables from the build process as well as a local `.env` file. Build environment variables take precedence. Rebuild and redeploy after adding or changing them; setting variables only on the running Express server cannot change an already built browser bundle.

If you build locally and upload `client/dist`, your local `.env` is used during that build. Upload the rebuilt `bundle.js` and `bundle.js.gz` together, since the Express server serves the compressed JavaScript file.

Keep `.env` out of Git. Only use the EmailJS public key here; these configuration values are embedded in the browser bundle.

Verify both request types with your configured account: check delivery to the quotes inbox, all entered measurements, and the reply address. Failed submissions retain answers for retry; successful submissions clear and disable the form until it is reopened.

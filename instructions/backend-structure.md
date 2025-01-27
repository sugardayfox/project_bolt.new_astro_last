# Backend Tech structure

Make it really lite to start with as the key is to validate things and move quickly vs robust system, comprehensive Saas-like feature sets. 
  
## Database Architecture  
Use Strapi locally (dev device) hosted for now with multi-lingual capabilities. We'll use SQLite as long as it's compatibel with Strapi.

## Hosting Solutions  
We will use Netlify as long as we can scale there and then may introduce further measures.

## Security measures  
Static hosted so no need for the foreseeable future. We will certainly use Let's Encrypt for SSL to serve our content via https only. 
We'll also look into hardening the production deployment for/with CORS.

## Storage buckets  
## User Authentication  
Out of scope. See the Project Requirements Document for further details.

Via Netlify. May look at other CDNs later to keep the costs down. For example using Cloudflare's solutions for media

## API Endpoints  
Out of scope. Eventually if there's a validated product space/idea or if building on premise/self-hosted communities. Unlikely for now. 
# emailrep

Node.js library for the EmailRep API

## Installation

```bash
npm i emailrep
```

## Usage

Example:

```javascript
const emailrep = require('emailrep')

getEmailRep('bill@microsoft.com')
    .then(result => {
        if (result.success) {
            console.log(result.details)
        } else {
            console.log(result.error))
        }
    })
    .catch(error => console.error('Error:', error))
```

Output:

```bash
{
  blacklisted: false,
  malicious_activity: false,
  malicious_activity_recent: false,
  credentials_leaked: true,
  credentials_leaked_recent: false,
  data_breach: true,
  first_seen: '07/01/2008',
  last_seen: '01/16/2024',
  domain_exists: true,
  domain_reputation: 'high',
  new_domain: false,
  days_since_domain_creation: 12006,
  suspicious_tld: false,
  spam: false,
  free_provider: false,
  disposable: false,
  deliverable: true,
  accept_all: false,
  valid_mx: true,
  primary_mx: 'microsoft-com.mail.protection.outlook.com',
  spoofable: false,
  spf_strict: true,
  dmarc_enforced: true,
  profiles: [ 'linkedin', 'twitter' ]
}
```

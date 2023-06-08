# Public API Research

I have selected the public APIs given below for my research.

1. [GitHub](https://docs.github.com/en/rest?apiVersion=2022-11-28)
2. [Stripe](https://stripe.com/docs/api?lang=node)
3. [Twilio](https://www.twilio.com/docs/usage/api)

## RESTful best practices implemented in the public APIs I have chosen.

## URL structure

All of the public APIs are descriptive and they reflect the resources they present. They use noun to identify their resources and do not provide implementation details in their URLs. 

**GitHub**

```jsx
/repositories
/user/repos
/users/{username}/repos
```

**Stripe**

```jsx
/v1/customers
/v1/customers/:id
/v1/customers/search
```

**Twilio**

```jsx
https://api.twilio.com/2010-04-01/Accounts.json
https://api.twilio.com/2010-04-01/Accounts/$TWILIO_ACCOUNT_SID/Messages.json
```

## Resource naming convention

Based on the URL examples given earlier we have found that all of the public APIs are following the resource naming conventions. 

- They use plural noun to represent collections.

```jsx
GitHub - /repositories
Stripe - /v1/customers
Twilio - https://api.twilio.com/2010-04-01/Accounts.json
```

- They use singular noun to represent individual resource

```jsx
GitHub - /users/{username}
Stripe - /v1/customers/:id
Twilio - /v1/Events/AEXXXXXXXXXXXXX
```

- They use nested resources to represent hierarchical relationships

```jsx
GitHub - /users/{username}/repos
Stripe - /v1/customers/:customer/payment_methods
Twilio - /2010-04-01/Accounts/$TWILIO_ACCOUNT_SID/Messages.json
```

- They use sub resources (noun + verb combination) for any specific action

```jsx
GitHub - /repos/{owner}/{repo}/import
Stripe - /v1/customers/search
Twilio - /v2/Services/VAXXXX/VerificationCheck
```

## Authentication mechanisms

**GitHub**

GitHub requires Bearer token to authorize public app requests to access it’s resources. For personal use it provides a personal access token mechanism.

```jsx
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer YOUR-TOKEN" \
--header "X-GitHub-Api-Version: 2022-11-28"
```

**Stripe**

Stripe uses API key to authenticate it’s requests.

```jsx
const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
```

```jsx
var customer = await stripe.customers.retrieve(
  'cu_19YMK02eZvKYlo2Cvcb2J41W',
  {
    apiKey: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
  }
);
```

**Twilio**

Twilio uses HTTP basic authentication to secure it’s REST API.

```jsx
https://username:password@www.myserver.com/my_secure_document
```

## HTTP methods usage

All public API of my list uses HTTP methods appropriately. They all use HTTP verb

GET for retrieving resources.

POST for creating new resources.

PUT or PATCH for updating resources.

DELETE for deleting resources.

### Proper HTTP status code usage

All of them also uses appropriate HTTP status codes to indicate the outcome of API requests.

**200 - OK**

**400 - Bad Request**

**401 - Unauthorized**

**402 - Request Failed**

**403 - Forbidden**

**404 - Not Found**

**409 - Conflict**

**429 - Too Many Requests**

**500, 502, 503, 504 - Server Errors**

# To Do


## Resource Relationships Provision

## Pagination implementation

## Support for filtering sorting and searching

## Caching implementation

## Error Handling

## API versioning and deprecation

## Documentation and example
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

# To Do

## HTTP methods usage

## Proper HTTP status code usage

## Resource Relationships Provision

## Pagination implementation

## Support for filtering sorting and searching

## Caching implementation

## Error Handling

## API versioning and deprecation

## Documentation and example
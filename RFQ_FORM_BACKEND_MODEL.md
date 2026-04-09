# RFQ Form Backend Model

This document describes the backend data model for the RFQ form in `src/app/rfq-form/rfq-form.html`.
Use these field names for the backend payload and database schema.

## Recommended Backend Model Names

### General Details
- `date`: string | date
- `formNo`: string
- `source`: string
  - `Friends/Relatives`
  - `Print AD`
  - `Visual Media`
  - `Website`
  - `Digital AD`
  - `Others`
- `acceptTerms`: boolean

### Personal Details
- `name`: string
- `profession`: string
- `company`: string
- `designation`: string
- `address`: string
- `state`: string
- `city`: string
- `pincode`: string
- `email`: string
- `mobile`: string
- `age`: string

### Property Details
- `property`: string
- `propertyType`: string
  - `Plot`
  - `Apartment`
  - `Villa`
  - `Individual`
- `plotType`: string (only when `propertyType` is `Plot`)
- `bedrooms`: string (Apartment/Villa/Individual)
- `bathrooms`: string (Apartment/Villa/Individual)
- `propertySize`: string (Apartment/Villa/Individual)
- `purpose`: string
  - `Own Use`
  - `Investment`
  - `Rental Income`
- `parking`: string
  - `Two-wheeler`
  - `Four-wheeler`
- `parkingType`: string (only when `parking` is `Four-wheeler`)
- `budget`: string
- `haveSoon`: string
- `requiresLoan`: boolean
- `income`: string (only when `requiresLoan` is true)
- `loanRequirement`: string (only when `requiresLoan` is true)
- `preferredLocation`: string
  - `State`
  - `City`
- `locations`: string
- `amenities`: string

### Additional Requirements
- `additionalRequirements`: string

## Suggested JSON Payload

```json
{
  "date": "2026-04-09",
  "formNo": "RFQ-2026-001",
  "source": "Friends/Relatives",
  "acceptTerms": true,

  "name": "John Doe",
  "profession": "Architect",
  "company": "Acme Designs",
  "designation": "Senior Architect",
  "address": "123 Main Street",
  "state": "Karnataka",
  "city": "Bangalore",
  "pincode": "560001",
  "email": "john@example.com",
  "mobile": "9876543210",
  "age": "35",

  "property": "Luxury villa near lake",
  "propertyType": "Villa",
  "bedrooms": "3",
  "bathrooms": "4",
  "propertySize": "2500 sq ft",
  "purpose": "Own Use",
  "parking": "Four-wheeler",
  "parkingType": "Open",
  "budget": "5,00,00,000",
  "haveSoon": "Within 3 months",
  "requiresLoan": false,
  "income": "",
  "loanRequirement": "",
  "preferredLocation": "City",
  "locations": "Koramangala, Jayanagar",
  "amenities": "Pool, Gym, Clubhouse",

  "additionalRequirements": "Need a price break on early booking."
}
```

## Suggested Database Schema

### MongoDB / Mongoose Example

```ts
import { Schema, model } from 'mongoose';

const RfqFormSchema = new Schema({
  date: { type: Date, required: false },
  formNo: { type: String, required: false },
  source: { type: String, required: false },
  acceptTerms: { type: Boolean, default: false },

  name: { type: String, required: false },
  profession: { type: String, required: false },
  company: { type: String, required: false },
  designation: { type: String, required: false },
  address: { type: String, required: false },
  state: { type: String, required: false },
  city: { type: String, required: false },
  pincode: { type: String, required: false },
  email: { type: String, required: false },
  mobile: { type: String, required: false },
  age: { type: String, required: false },

  property: { type: String, required: false },
  propertyType: { type: String, required: false },
  plotType: { type: String, required: false },
  bedrooms: { type: String, required: false },
  bathrooms: { type: String, required: false },
  propertySize: { type: String, required: false },
  purpose: { type: String, required: false },
  parking: { type: String, required: false },
  parkingType: { type: String, required: false },
  budget: { type: String, required: false },
  haveSoon: { type: String, required: false },
  requiresLoan: { type: Boolean, default: false },
  income: { type: String, required: false },
  loanRequirement: { type: String, required: false },
  preferredLocation: { type: String, required: false },
  locations: { type: String, required: false },
  amenities: { type: String, required: false },

  additionalRequirements: { type: String, required: false }
});

export const RfqForm = model('RfqForm', RfqFormSchema);
```

### TypeScript Interface

```ts
export interface RfqFormModel {
  date?: string;
  formNo?: string;
  source?: string;
  acceptTerms?: boolean;

  name?: string;
  profession?: string;
  company?: string;
  designation?: string;
  address?: string;
  state?: string;
  city?: string;
  pincode?: string;
  email?: string;
  mobile?: string;
  age?: string;

  property?: string;
  propertyType?: string;
  plotType?: string;
  bedrooms?: string;
  bathrooms?: string;
  propertySize?: string;
  purpose?: string;
  parking?: string;
  parkingType?: string;
  budget?: string;
  haveSoon?: string;
  requiresLoan?: boolean;
  income?: string;
  loanRequirement?: string;
  preferredLocation?: string;
  locations?: string;
  amenities?: string;

  additionalRequirements?: string;
}
```

## Notes
- Use `acceptTerms` as a boolean value in the backend.
- Map frontend radio values directly to the `source`, `purpose`, `parking`, and `preferredLocation` strings.
- If you want stronger structure, transform `propertyDetail1/2/3` into a nested `propertyDetails` object, but the flat model is easiest to start with.
- Keep keys exactly as shown if you want the backend to match payload names used by the frontend.

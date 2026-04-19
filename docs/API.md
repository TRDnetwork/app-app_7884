# API Documentation

This project is a **fully static website** with **no backend API**.

All functionality is client-side only. There are no serverless functions, database interactions, or external API endpoints.

## Contact Form Behavior

The contact form does **not** send data to any server. Instead, it logs the submission to the browser console for demonstration purposes.

### Console Output Example

When the form is submitted, the following object is logged to the console:

```js
{
  name: "John Doe",
  email: "john@example.com",
  message: "Love your coffee! Keep it up."
}
```

### How It Works

- **Method**: `POST` (simulated)
- **Endpoint**: None
- **Implementation**: Prevents default form submission and logs to `console.log()`
- **Code Location**: `src/components/Contact.tsx`

```ts
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  });
  setFormData({ name: '', email: '', message: '' });
};
```

## Summary

| Feature         | Implemented? | Notes |
|-----------------|--------------|-------|
| API Endpoints   | ❌ No        | Static site only |
| Database        | ❌ No        | All content is hard-coded |
| Authentication  | ❌ No        | Not required |
| Payment Gateway | ❌ No        | Not applicable |
| Email Delivery  | ❌ No        | Form logs to console only |

This site is ready for deployment as a zero-cost, high-performance static site.
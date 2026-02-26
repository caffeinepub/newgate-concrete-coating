# Specification

## Summary
**Goal:** Add a customer review system that allows visitors to submit reviews and view all submitted reviews on the homepage.

**Planned changes:**
- Add a new ReviewsSection component after the AboutSection on the homepage
- Create a review submission form with star rating (1-5), customer name, service type dropdown, and feedback textarea
- Implement backend functions to store, retrieve, and list reviews with persistence
- Display all submitted reviews publicly with star ratings, customer names, service types, feedback, and submission dates
- Add React Query hooks for submitting and fetching reviews

**User-visible outcome:** Visitors can submit reviews with star ratings and feedback about their experience, and all submitted reviews are displayed publicly on the homepage for prospective customers to read.

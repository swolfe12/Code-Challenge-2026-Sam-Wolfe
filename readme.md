# DynamiX Code Challenge

This repository contains my solution to the DynamiX frontend code challenge. The goal was to resolve functional issues, improve performance and accessibility, and align the page styling with the provided Figma mockup.

## Overview

The original page contained several functional, accessibility, and performance issues. I reviewed the provided code, reproduced the reported problems, and implemented fixes while improving the overall structure and maintainability of the code.

## Issues Addressed

### Functional Fixes

- Fixed mobile menu toggle so it opens and closes correctly
- Corrected the back-to-top button so it only appears after scrolling
- Added smooth scrolling behavior for the back-to-top interaction
- Prevented form submission when required fields are empty or invalid

### Accessibility Improvements

- Added proper form labels for screen readers (using visually hidden labels)
- Improved button semantics and ARIA attributes for the navigation menu
- Ensured interactive elements are accessible via keyboard
- Added appropriate alt text to images

### Performance Improvements

- Implemented responsive images using `<picture>` and `srcset`
- Served optimized mobile images for smaller screens
- Added lazy loading for non-critical images
- Reduced layout shift by including image dimensions

### CSS Improvements

- Refactored styles for readability and consistency
- Simplified selector specificity by relying more on classes
- Organized the stylesheet into logical sections (tokens, layout, components, utilities)
- Converted layout to a mobile-first approach

### Visual Alignment

- Adjusted spacing, typography, and layout to more closely match the provided Figma mockup
- Improved responsiveness across mobile and desktop breakpoints

## Notes

Some spacing and sizing values were inferred visually where exact measurements were not explicitly provided in the Figma file. The implementation aims to match the design intent as closely as possible while keeping the CSS maintainable.

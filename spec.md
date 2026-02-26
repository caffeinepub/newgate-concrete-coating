# Specification

## Summary
**Goal:** Replace all externally-hosted flake color images in the FlakeColorsSection with the 17 user-uploaded local images, each mapped to its confirmed color name.

**Planned changes:**
- Copy the 17 uploaded JPEG images into `frontend/public/assets/generated` as static assets
- Update the FlakeColorsSection component to reference local asset paths for all 17 color cards in this exact order: Tidal Wave (IMG_2262.jpeg), Gravel Blend (IMG_2260.jpeg), Coyote Blend (IMG_2261.jpeg), Wombat Blend (IMG_2259.jpeg), Stargazer Blend (IMG_2263.jpeg), Outback Blend (IMG_2266.jpeg), Orbit Blend (IMG_2267.jpeg), Safari Blend (IMG_2265.jpeg), Creekbed Blend (IMG_2270.jpeg), Nightfall (IMG_2268.jpeg), Glacier Blend (IMG_2272.jpeg), Stonewash Blend (IMG_2273.jpeg), Shoreline Blend (IMG_2264.jpeg), Domino Blend (IMG_2269.jpeg), Cabin Fever (IMG_2275.jpeg), Feather Gray Blend (IMG_2274.jpeg), Autumn Brown Blend (IMG_2271.jpeg)
- Remove all Simiron CDN and Unsplash fallback URLs from the FlakeColorsSection

**User-visible outcome:** All 17 flake color swatches in the Flake Colors section display the actual product photos uploaded by the user, with no dependency on external image URLs.

# Lazy Loading - Quick Reference

## 🚀 Quick Start

### Import Lazy Components
```jsx
import { LazySection, LazyImage, LazyVideo, SectionSkeleton } from '@/components/lazy';
import { lazy, Suspense } from 'react';
```

## 📦 Component Reference

### LazySection
Lazy loads entire sections when they enter the viewport.

```jsx
<LazySection 
  minHeight={400}                    // Prevents layout shift
  rootMargin="200px"                 // Load 200px before viewport
  fallback={<SectionSkeleton />}     // Loading placeholder
>
  <YourContent />
</LazySection>
```

**Props:**
- `children` - Content to lazy load
- `className` - CSS classes
- `rootMargin` - Distance before viewport to trigger (default: "200px")
- `fallback` - Loading placeholder component
- `minHeight` - Minimum height in pixels to prevent layout shift

### LazyImage
Optimized image component with lazy loading and blur-up effect.

```jsx
<LazyImage
  src="/path/to/image.jpg"
  alt="Image description"
  width={800}
  height={600}
  priority={false}                   // true for above-fold images
  objectFit="cover"                  // or "contain"
  className="custom-class"
/>
```

**Props:**
- `src` - Image URL (required)
- `alt` - Alt text (required)
- `width` - Image width for aspect ratio
- `height` - Image height for aspect ratio
- `priority` - Load immediately if true (for above-fold)
- `objectFit` - CSS object-fit value
- `className` - CSS classes

### LazyVideo
Deferred video loading with poster support.

```jsx
<LazyVideo
  src="/path/to/video.mp4"
  poster="/path/to/poster.jpg"       // Optional poster image
  autoPlay={true}
  muted={true}
  loop={true}
  playsInline={true}
  preload="none"                     // "none", "metadata", or "auto"
  className="custom-class"
/>
```

**Props:**
- `src` - Video URL (required)
- `poster` - Poster image URL
- `autoPlay` - Auto play when visible
- `muted` - Muted audio
- `loop` - Loop video
- `playsInline` - Plays inline on mobile
- `preload` - Preload strategy
- `className` - CSS classes

### SectionSkeleton
Loading placeholder for sections.

```jsx
<SectionSkeleton 
  height="400px"                     // Custom height
  className="custom-class"
/>
```

**Props:**
- `height` - Skeleton height (default: "400px")
- `className` - CSS classes

## 🎯 Common Patterns

### Pattern 1: Lazy Section with Code Splitting
```jsx
const HeavySection = lazy(() => import('./HeavySection'));

<LazySection minHeight={500} fallback={<SectionSkeleton height="500px" />}>
  <Suspense fallback={<SectionSkeleton height="500px" />}>
    <HeavySection />
  </Suspense>
</LazySection>
```

### Pattern 2: Image Gallery
```jsx
{images.map((img, index) => (
  <LazyImage
    key={index}
    src={img.src}
    alt={img.alt}
    width={400}
    height={300}
    objectFit="cover"
  />
))}
```

### Pattern 3: Video Grid
```jsx
{videos.map((video, index) => (
  <LazyVideo
    key={index}
    src={video.src}
    poster={video.poster}
    autoPlay
    muted
    loop
    playsInline
  />
))}
```

### Pattern 4: Hero Image (Above-Fold)
```jsx
<LazyImage
  src="/hero-image.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority={true}                    // Load immediately
  objectFit="cover"
/>
```

### Pattern 5: Conditional Video/Image
```jsx
{isVideo ? (
  <LazyVideo
    src={media.src}
    autoPlay
    muted
    loop
    playsInline
  />
) : (
  <LazyImage
    src={media.src}
    alt={media.alt}
    width={800}
    height={600}
  />
)}
```

## ⚡ Performance Tips

### DO ✅
- Use `priority={true}` for above-fold images
- Set width/height to prevent layout shift
- Use minHeight on LazySection
- Load videos only when needed
- Use appropriate rootMargin (200px default)

### DON'T ❌
- Don't lazy load hero/above-fold content
- Don't omit width/height on images
- Don't use priority on all images
- Don't load videos eagerly
- Don't skip loading placeholders

## 🎨 Layout Shift Prevention

### Images
```jsx
<LazyImage
  src={src}
  alt={alt}
  width={800}        // ✅ Prevents shift
  height={600}       // ✅ Prevents shift
/>
```

### Videos
```jsx
<div className="aspect-video">  {/* ✅ Prevents shift */}
  <LazyVideo src={src} />
</div>
```

### Sections
```jsx
<LazySection minHeight={400}>  {/* ✅ Prevents shift */}
  <Content />
</LazySection>
```

## 🔍 Debugging

### Check if Lazy Loading Works
1. Open DevTools Network tab
2. Scroll down the page
3. Watch for new image/video requests
4. Verify sections load progressively

### Common Issues

**Issue:** Images load immediately
**Fix:** Check if `priority={true}` is set

**Issue:** Layout shifts when loading
**Fix:** Add width/height or minHeight

**Issue:** Videos don't autoplay
**Fix:** Ensure `muted={true}` is set

**Issue:** Section loads too early
**Fix:** Adjust `rootMargin` prop

## 📊 Performance Monitoring

### Bundle Analysis
```bash
npm run build
# Check chunk sizes in output
```

### Network Monitoring
1. Open DevTools → Network
2. Reload page
3. Check initial requests
4. Scroll and watch lazy loads

### Lighthouse Audit
1. Open DevTools → Lighthouse
2. Run audit
3. Check:
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)

## 🛠️ Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules/.vite
npm run build
```

### Import Errors
```jsx
// ✅ Correct
import { LazyImage } from '@/components/lazy';

// ❌ Wrong
import LazyImage from '@/components/lazy/LazyImage';
```

### Dynamic Import Warnings
If you see "dynamically imported but also statically imported":
1. Remove static export from index.js
2. Use only dynamic import with lazy()

## 📚 Resources

- **Full Documentation:** `LAZY_LOADING_IMPLEMENTATION.md`
- **Implementation Summary:** `IMPLEMENTATION_SUMMARY.md`
- **Component Source:** `src/components/lazy/`

## 🎯 Checklist for New Features

When adding new content:
- [ ] Use LazySection for below-fold sections
- [ ] Use LazyImage for all images
- [ ] Use LazyVideo for all videos
- [ ] Set width/height on images
- [ ] Add minHeight to sections
- [ ] Use priority for above-fold images
- [ ] Add loading placeholders
- [ ] Test scrolling behavior
- [ ] Check for layout shifts
- [ ] Verify bundle size

---

**Quick Tip:** When in doubt, lazy load it! The components handle all the complexity for you.

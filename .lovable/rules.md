# ✅ Frontend IDE Rule Book (React + Tailwind) — Concise

> **Goal:** Build + maintain a production-ready **frontend-only** React + Tailwind landing page based on the provided KSP Hydro UI.

---

## 1) Mandatory Workflow (Always Follow)

For **every new feature/change**:
1. **Code first**
2. **Run locally**
3. **Fix errors/warnings**
4. **Optimize (production)**
5. **Check responsive + accessibility**
6. **Security + performance check**
7. **Refactor → reusable clean components**

✅ Feature is DONE only if all steps pass.

---

## 2) Folder Structure (Must Follow)

```
src/
  assets/
    fonts/
    icons/
    images/

  components/
    common/
    layout/
      Footer.jsx
      Header.jsx
      MainLayout.jsx
    ui/

  constants/
    socialLinks.js

  context/
    AppContext.jsx
    index.js

  data/
    clients.js
    products.js
    sectors.js
    services.js

  hooks/
    useDebounce.js
    useScrollToTop.js

  lib/
    cn.js
    emailjs.js

  pages/
    Contact/
      Contact.jsx
    Home/
      Home.jsx
    NotFound/
      NotFound.jsx

  routes/
    AppRoutes.jsx
    routeConstants.js

  styles/
    globals.css

  utils/
    helpers.js
    validators.js

  App.jsx
  main.jsx
```

Rules:
- **One section = one component**
- Reusable UI belongs in `components/ui`
- Only `Home.jsx` composes sections

---

## 3) Design Rules (Extracted from UI)

### Layout
- Use centered container: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-16 md:py-24`
- Common structure: **2-column** (text + media), stack on mobile
- Curved/wave section separators allowed

### Visual Style
- Cards: `rounded-2xl shadow-sm bg-white`
- Soft corporate look: clean spacing, no heavy borders
- Key theme: **blue + teal + green**
- Gradient sections: `from-blue-600 via-teal-500 to-emerald-500`

### Typography
- H1: `text-4xl md:text-5xl font-bold`
- H2: `text-2xl md:text-3xl font-bold`
- Body: `text-slate-600 leading-relaxed`
- Maintain proper heading hierarchy (only 1 H1)

---

## 4) UX Rules (Strict)

- Mobile-first, no overflow-x
- Hover: `transition hover:-translate-y-1 hover:shadow-md`
- Buttons consistent sizes + states
- Accessibility:
  - semantic tags
  - image `alt`
  - visible focus styles

---

## 5) Coding Rules (React + Tailwind)

- Keep JSX clean (no huge components)
- Avoid repeated Tailwind blocks → create UI components
- No unused imports
- No `console.log` in production
- Prefer `data/` files for repeated content (products/services/logos)

---

## 6) Security + Production Rules (Frontend)

- ❌ Never use `dangerouslySetInnerHTML`
- External links: `rel="noopener noreferrer"`
- Validate all form fields
- No secrets in frontend `.env`
- Optimize images (prefer webp), lazy-load heavy images

---

## ✅ Completion Checklist

A feature is complete only if:
- UI matches design system
- Responsive (mobile/tablet/desktop)
- No errors/warnings
- Accessible + clean code
- Optimized + secure

---


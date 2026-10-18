# FINDA for Android — get.findahq.com

Independent one-page, mobile-first Android APK download landing page. It is not the app itself and does not modify `app.findahq.com`, `findahq.com`, existing Android code, or production database.

## Deployment

This website is a static HTML/CSS/JS site. Build command: **leave blank**. Base directory: **leave blank**. Publish directory: **`.`**. Recommended eventual custom hostname: `get.findahq.com`.

**DO NOT deploy to Netlify while your Netlify production credits are exhausted.** Uploading these source files to a **new, independent GitHub repository** does not create a Netlify deploy, provided you do not connect it to an existing Netlify site, create a deploy workflow, or enable GitHub Pages automation. Only link later when ready.

## APK link: evidence and caution

The existing FINDA main GitHub repository, `adebimpe476/Finda`, `apps/web/app/android/route.ts` currently implements `/android` as a 302 redirect to an Expo-hosted `.apk`:

`https://expo.dev/artifacts/eas/2vxI4o-SHgZjw-EjX2wHk-wxp2HKKLWmOWQAIi5PoOg.apk`

The button and embedded QR code both point to `https://findahq.com/android`. This is the **currently configured route in source code**, not an independently verified public APK installation or latest app build. Before publicity, open the redirect on an Android phone and confirm that the intended app installs and opens. If the route changes, update both anchors (`index.html` and `script.js`), generate a replacement QR code, and test all three together. Avoid pasting unverified APK URLs into the page.

## Assets

- `assets/finda-logo.png` & `assets/finda-icon.svg` — FINDA branding from approved FINDA Experience source.
- `assets/homes.webp`, `assets/rent-track.webp`, `assets/ai-search.webp` — FINDA product promotional visuals, not asserted to be literal APK screenshots.
- `assets/finda-android-qr.png` — QR code encoded as `https://findahq.com/android` (generated locally, not by an external QR site).

## Links and interactions

Working anchor navigation, CTA, QR, copy link, native share where available, QR image save, direct link to FINDA Experience and support. No data collection and no hidden form. Motion respects reduced-motion settings.

## Optional QR regeneration after changing the APK route

On a computer with `qrcode` installed:

```python
import qrcode
qrcode.make('https://findahq.com/android').save('assets/finda-android-qr.png')
```

## Do not overwrite existing sites

Use the separate repository `adebimpe476/finda-android-download`. Keep the existing `app.findahq.com` app untouched. Do not point `get.findahq.com` at a production app or its DNS records until this independent site is deployed and tested.

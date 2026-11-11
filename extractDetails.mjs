async function extractOriginalSiteDetails() {
  const res = await fetch('https://www.thehealthybodycompany.com.au/');
  const html = await res.text();
  
  // Extract all images with context
  const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi)];
  console.log('Total img tags:', imgMatches.length);
  const images = imgMatches.map(m => ({ src: m[1], alt: m[2] }));
  
  // Print unique images
  const uniqueSrcs = [...new Set(images.map(i => i.src))];
  console.log('Unique image URLs:');
  uniqueSrcs.forEach(s => console.log(s));
  
  // Also fetch About page and Team page to get exact data
  for (const page of ['about', 'our-team', 'services', 'faqs']) {
    try {
      const pRes = await fetch(`https://www.thehealthybodycompany.com.au/${page}/`);
      const pHtml = await pRes.text();
      const pImgs = [...pHtml.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi)].map(m => m[1]);
      console.log(`\n=== Images on /${page}/: ===`);
      [...new Set(pImgs)].forEach(s => console.log(s));
    } catch(e) {
      console.log('Error fetching', page, e.message);
    }
  }
}
extractOriginalSiteDetails();

async function run() {
  try {
    const res = await fetch('https://www.thehealthybodycompany.com.au/');
    const html = await res.text();
    
    // Find all links
    const linkRegex = /<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    const links = [];
    while ((match = linkRegex.exec(html)) !== null) {
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      if (text && !links.find(l => l.href === match[1])) {
        links.push({ href: match[1], text });
      }
    }
    console.log('=== NAVIGATION & LINKS ===');
    console.log(JSON.stringify(links.filter(l => l.href.includes('thehealthybodycompany')), null, 2));

    // Find all images
    const imgRegex = /<img[^>]*src=["']([^"']+)["'][^>]*alt=["']?([^"'>]*)["']?/gi;
    const images = [];
    while ((match = imgRegex.exec(html)) !== null) {
      images.push({ src: match[1], alt: match[2] });
    }
    console.log('=== IMAGES FOUND ===');
    console.log(JSON.stringify(images.slice(0, 40), null, 2));

    // Check headings
    const hRegex = /<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi;
    const headings = [];
    while ((match = hRegex.exec(html)) !== null) {
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      if (text) headings.push({ tag: match[1], text });
    }
    console.log('=== HEADINGS ===');
    console.log(JSON.stringify(headings, null, 2));

  } catch (err) {
    console.error(err);
  }
}
run();

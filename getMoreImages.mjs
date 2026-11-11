async function getMoreImages() {
  const pages = [
    'location/penrith',
    'location/caringbah',
    'location/jordan-springs',
    'location/mount-annan',
    'service/physiotherapy-treatment',
    'service/sports-physiotherapy',
    'service/shockwave-therapy'
  ];
  for (const p of pages) {
    try {
      const r = await fetch(`https://www.thehealthybodycompany.com.au/${p}/`);
      const h = await r.text();
      const imgs = [...h.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']?([^"'>]*)["']?/gi)].map(m => ({ src: m[1], alt: m[2] }));
      console.log(`\n=== /${p}/ ===`);
      imgs.slice(0, 10).forEach(i => console.log(i.src, '|', i.alt));
    } catch(e) {}
  }
}
getMoreImages();

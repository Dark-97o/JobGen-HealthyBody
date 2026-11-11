async function inspectInspirations() {
  for (const url of ['https://www.physioasten.at/', 'https://www.worksmedical.com/']) {
    try {
      console.log('=== INSPECTING:', url);
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      const html = await res.text();
      console.log('Title/Desc:');
      const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      console.log('TITLE:', title ? title[1] : 'none');
      const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      console.log('H1s:', h1s);
      const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      console.log('H2s:', h2s.slice(0, 10));
    } catch (e) {
      console.log('Error inspecting', url, e.message);
    }
  }
}
inspectInspirations();

async function extractTeamQuotes() {
  const r = await fetch('https://www.thehealthybodycompany.com.au/');
  const h = await r.text();
  
  const items = [...h.matchAll(/href=["'](?:http[s]?:\/\/thehealthybodycompany\.com\.au)?\/team-member\/([^"']+)["'][\s\S]*?<img[^>]+src=["']([^"']+)["'][\s\S]*?<\/svg>([\s\S]*?)<\/div>/gi)];
  console.log('Found team items:', items.length);
  const data = items.map(m => {
    const slug = m[1].replace(/\/$/, '');
    const img = m[2];
    const rawText = m[3].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return { slug, img, text: rawText };
  });
  console.log(JSON.stringify(data, null, 2));
}
extractTeamQuotes();

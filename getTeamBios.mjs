async function getTeamBios() {
  const r = await fetch('https://www.thehealthybodycompany.com.au/our-team/');
  const h = await r.text();
  
  // Extract team cards
  const cards = [...h.matchAll(/<div[^>]*class=["'][^"']*team-item[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi)];
  console.log('Team cards found:', cards.length);
  
  // Also regex for names and titles
  const memberRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*class=["'][^"']*position[^"']*["'][^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  const list = [];
  while ((m = memberRegex.exec(h)) !== null) {
    list.push({ name: m[1].replace(/<[^>]+>/g, '').trim(), title: m[2].replace(/<[^>]+>/g, '').trim() });
  }
  console.log('Members list:', JSON.stringify(list, null, 2));
}
getTeamBios();

async function getAllTeamMembers() {
  const r = await fetch('https://www.thehealthybodycompany.com.au/');
  const h = await r.text();
  const teamMatches = [...h.matchAll(/href=["'](?:http[s]?:\/\/thehealthybodycompany\.com\.au)?\/team-member\/([^"']+)["']/gi)];
  const slugs = [...new Set(teamMatches.map(m => m[1].replace(/\/$/, '')))];
  console.log('Total Team Member Slugs:', slugs.length);
  console.log(slugs);

  // For each slug, let's see its title/quote
  for (const s of slugs.slice(0, 15)) {
    const idx = h.indexOf(`/team-member/${s}`);
    if (idx !== -1) {
      const snippet = h.substring(idx, idx + 1000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      console.log(`\n=== ${s} ===`);
      console.log(snippet.substring(0, 200));
    }
  }
}
getAllTeamMembers();

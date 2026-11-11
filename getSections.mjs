async function getHomepageSections() {
  const r = await fetch('https://www.thehealthybodycompany.com.au/');
  const h = await r.text();
  
  // Extract all sections and their headings and paragraphs
  const sectionMatches = [...h.matchAll(/<section[^>]*>([\s\S]*?)<\/section>/gi)];
  console.log('Total sections on homepage:', sectionMatches.length);
  sectionMatches.forEach((s, idx) => {
    const text = s[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`\n--- SECTION ${idx+1} (Length: ${text.length}) ---`);
    console.log(text.substring(0, 300) + '...');
  });
}
getHomepageSections();

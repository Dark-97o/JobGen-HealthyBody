async function run() {
  const r = await fetch('https://www.thehealthybodycompany.com.au/');
  const h = await r.text();
  const matches = [...h.matchAll(/<p class="mb-4">([\s\S]*?)<\/p>\s*<small>([\s\S]*?)<\/small>/gi)];
  console.log('Total matches:', matches.length);
  matches.forEach((m, idx) => {
    console.log(`${idx+1}. ${m[2].trim()} : "${m[1].trim()}"`);
  });
}
run();

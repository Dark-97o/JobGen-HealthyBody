async function findTeamContext() {
  const r = await fetch('https://www.thehealthybodycompany.com.au/our-team/');
  const h = await r.text();
  const idx = h.indexOf('jude-holroyd.jpg');
  if (idx !== -1) {
    console.log(h.substring(idx - 300, idx + 800));
  } else {
    console.log('Not found on our-team, checking homepage:');
    const r2 = await fetch('https://www.thehealthybodycompany.com.au/');
    const h2 = await r2.text();
    const idx2 = h2.indexOf('jude-holroyd.jpg');
    if (idx2 !== -1) {
      console.log(h2.substring(idx2 - 300, idx2 + 800));
    }
  }
}
findTeamContext();

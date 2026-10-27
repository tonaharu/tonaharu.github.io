const engsel = document.getElementById('engine');
const qbox = document.getElementById('search');
const sbbt = document.getElementById('sb');
const word;
const engine;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function search() {
  engine = engsel.value;
  word = encodeURIComponent(qbox.value);
  if (engine == 'google') {
    window.open(`https://google.com/search?q=${word}&ie=UTF-8`, '_blank');
  } else if (engine == 'bing') {
    window.open(`https://bing.com/search?q=${word}`, '_blank');
  } else if (engine == 'duckduckgo') {
    window.open(`https://duckduckgo.com/search?q=${word}`, '_blank');
  } else if (engine == 'baidu') {
    window.open(`https://baidu.com/?word=${word}`, '_blank');
  } else if (engine == 'ecosia') {
    window.open(`https://ecosia.org/search?q=${word}`, '_blank');
  } else if (engine == 'alleng') {
    window.open(`https://google.com/search?q=${word}&ie=UTF-8`, '_blank');
    await sleep(200);
    window.open(`https://bing.com/search?q=${word}`, '_blank');
    await sleep(200);
    window.open(`https://duckduckgo.com/search?q=${word}`, '_blank');
    await sleep(200);
    window.open(`https://baidu.com/search?word=${word}`, '_blank');
  } else {
    window.open(`https://google.com/search?q=${word}&ie=UTF-8`, '_blank');
  }
}

sbbt.addEventListener('keydown', (e) => {
  word = qbox.value;
  if (e.key === 'Enter' && word != '') {
    search();
  } else {
    window.open(`https://google.com/search?q=${word}&ie=UTF-8`, '_blank');
  }
});

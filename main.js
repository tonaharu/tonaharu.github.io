const engsel = document.getElementById('engine');
const qbox = document.getElementById('search');

const sleep = (ms) => new Promise(resolve => SetTimeout(resolve, ms));

async function search() {
  const engine = engsel.value;
  const word = encodeURIComponent(qbox.value);
  if (engine == 'google') {
    window.open(`https://google.com/search?q=${word}&ei=UTF-8`, '_blank');
  } else if (engine == 'bing') {
    window.open(`https://bing.com/search?q=${word}`, '_blank');
  } else if (engine == 'duckduckgo') {
    window.open(`https://duckduckgo.com/search?q=${word}`, '_blank');
  } else if (engine == 'baidu') {
    window.open(`https://baidu.com/search?word=${word}`, '_blank');
  } else if (engine == 'ecosia') {
    window.open(`https://ecosia.org/search?q=${word}`, '_blank')
  } else {
    window.open(`https://google.com/search?q=${word}&ei=UTF-8`, '_blank');
    await sleep(200);
    window.open(`https://bing.com/search?q=${word}`, '_blank');
    await sleep(200);
    window.open(`https://duckduckgo.com/search?q=${word}`, '_blank');
    await sleep(200);
    window.open(`https://baidu.com/search?word=${word}`, '_blank');
  }
}

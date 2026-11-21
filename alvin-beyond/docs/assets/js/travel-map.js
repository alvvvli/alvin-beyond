(function () {
  const host = document.getElementById('travel-map');
  if (!host || host.dataset.ready) return;
  host.dataset.ready = '1';
  const region = document.getElementById('continent-select');
  const evidence = document.getElementById('status-select');
  const search = document.getElementById('place-search');
  const list = document.getElementById('map-list');
  const count = document.getElementById('map-count');
  const statusNames = { documented: 'JYZ-documented', other: 'Additional record', transit: 'Connection / unconfirmed' };
  const colors = { documented: '#38b982', other: '#f2bb5b', transit: '#9ca3af' };
  const path = new URL('../data/travel-places.json', document.currentScript.src);
  function start() {
    if (!window.L) { host.textContent = 'Map library unavailable. Please check your connection.'; return; }
    const map = L.map(host, {scrollWheelZoom:false}).setView([28, 12], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution:'&copy; OpenStreetMap contributors', maxZoom:18 }).addTo(map);
    const layer = L.layerGroup().addTo(map);
    fetch(path).then(r => {if(!r.ok) throw Error('Data unavailable');return r.json()}).then(data => {
      [...new Set(data.map(d=>d.region))].sort().forEach(r=>{const o=document.createElement('option');o.value=r;o.textContent=r;region.append(o)});
      function render() {
        const q=search.value.toLocaleLowerCase().trim();
        const selected=data.filter(d=>(region.value==='all'||d.region===region.value)&&(evidence.value==='all'||d.status===evidence.value)&&(!q||(d.country+' '+d.places).toLocaleLowerCase().includes(q)));
        layer.clearLayers();list.replaceChildren();
        selected.forEach(d=>{
          const marker=L.circleMarker([d.lat,d.lng],{radius:7,color:'#152a23',weight:1.5,fillColor:colors[d.status],fillOpacity:.95}).addTo(layer);
          const pop=document.createElement('div');const title=document.createElement('strong');title.textContent=d.country;pop.append(title,document.createElement('br'),document.createTextNode(d.places+' — '+statusNames[d.status]));marker.bindPopup(pop);
          const item=document.createElement('button');item.type='button';item.className='map-place';
          const name=document.createElement('strong');name.textContent=d.country;const sub=document.createElement('small');sub.textContent=d.places+' · '+statusNames[d.status];item.append(name,sub);
          item.addEventListener('click',()=>{map.setView([d.lat,d.lng],Math.max(map.getZoom(),5));marker.openPopup();host.scrollIntoView({behavior:'smooth',block:'center'})});list.append(item);
        });
        count.textContent=selected.length+' location records shown (not a verified country count).';
      }
      [region,evidence].forEach(el=>el.addEventListener('change',render));search.addEventListener('input',render);render();setTimeout(()=>map.invalidateSize(),200);
    }).catch(()=>{count.textContent='Could not load travel data. Please check the site deployment.'});
  }
  if(window.L) start();else window.addEventListener('load',start,{once:true});
})();

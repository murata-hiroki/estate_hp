// Mobile nav toggle
(function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if(!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.padding = '12px 0';
  });
})();

// Simple form handler with validation and fetch to a mock endpoint
(function(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const required = ['name','email','message'];
    for(const k of required){
      if(!data[k] || String(data[k]).trim() === ''){
        alert('必須項目を入力してください: ' + k);
        return;
      }
    }
    try{
      const res = await fetch('https://httpbin.org/post',{
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)
      });
      if(!res.ok) throw new Error('Network error');
      alert('送信ありがとうございました。折り返しご連絡いたします。');
      form.reset();
    }catch(err){
      console.error(err);
      alert('送信に失敗しました。時間をおいて再度お試しください。');
    }
  });
})();

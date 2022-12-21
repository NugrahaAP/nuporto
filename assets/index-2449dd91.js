(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const u of s.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && n(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = a(r);
    fetch(r.href, s);
  }
})();
function f() {}
function Ae(e) {
  return e();
}
function ye() {
  return Object.create(null);
}
function T(e) {
  e.forEach(Ae);
}
function xe(e) {
  return typeof e == "function";
}
function z(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
function Me(e) {
  return Object.keys(e).length === 0;
}
function i(e, t) {
  e.appendChild(t);
}
function k(e, t, a) {
  e.insertBefore(t, a || null);
}
function y(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function c(e) {
  return document.createElement(e);
}
function Ee(e) {
  return document.createTextNode(e);
}
function m() {
  return Ee(" ");
}
function _(e, t, a, n) {
  return e.addEventListener(t, a, n), () => e.removeEventListener(t, a, n);
}
function p(e, t, a) {
  a == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== a && e.setAttribute(t, a);
}
function Pe(e) {
  return Array.from(e.childNodes);
}
function q(e, t, a, n) {
  a === null
    ? e.style.removeProperty(t)
    : e.style.setProperty(t, a, n ? "important" : "");
}
function ve(e, t, a) {
  e.classList[a ? "add" : "remove"](t);
}
let re;
function H(e) {
  re = e;
}
const P = [],
  ke = [],
  F = [],
  we = [],
  je = Promise.resolve();
let ae = !1;
function Le() {
  ae || ((ae = !0), je.then(Te));
}
function ne(e) {
  F.push(e);
}
const te = new Set();
let Y = 0;
function Te() {
  const e = re;
  do {
    for (; Y < P.length; ) {
      const t = P[Y];
      Y++, H(t), Ce(t.$$);
    }
    for (H(null), P.length = 0, Y = 0; ke.length; ) ke.pop()();
    for (let t = 0; t < F.length; t += 1) {
      const a = F[t];
      te.has(a) || (te.add(a), a());
    }
    F.length = 0;
  } while (P.length);
  for (; we.length; ) we.pop()();
  (ae = !1), te.clear(), H(e);
}
function Ce(e) {
  if (e.fragment !== null) {
    e.update(), T(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(ne);
  }
}
const G = new Set();
let He;
function j(e, t) {
  e && e.i && (G.delete(e), e.i(t));
}
function V(e, t, a, n) {
  if (e && e.o) {
    if (G.has(e)) return;
    G.add(e),
      He.c.push(() => {
        G.delete(e), n && (a && e.d(1), n());
      }),
      e.o(t);
  } else n && n();
}
function W(e) {
  e && e.c();
}
function L(e, t, a, n) {
  const { fragment: r, after_update: s } = e.$$;
  r && r.m(t, a),
    n ||
      ne(() => {
        const u = e.$$.on_mount.map(Ae).filter(xe);
        e.$$.on_destroy ? e.$$.on_destroy.push(...u) : T(u),
          (e.$$.on_mount = []);
      }),
    s.forEach(ne);
}
function C(e, t) {
  const a = e.$$;
  a.fragment !== null &&
    (T(a.on_destroy),
    a.fragment && a.fragment.d(t),
    (a.on_destroy = a.fragment = null),
    (a.ctx = []));
}
function ze(e, t) {
  e.$$.dirty[0] === -1 && (P.push(e), Le(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function S(e, t, a, n, r, s, u, R = [-1]) {
  const h = re;
  H(e);
  const d = (e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: f,
    not_equal: r,
    bound: ye(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (h ? h.$$.context : [])),
    callbacks: ye(),
    dirty: R,
    skip_bound: !1,
    root: t.target || h.$$.root,
  });
  u && u(d.root);
  let v = !1;
  if (
    ((d.ctx = a
      ? a(e, t.props || {}, (b, g, ...l) => {
          const w = l.length ? l[0] : g;
          return (
            d.ctx &&
              r(d.ctx[b], (d.ctx[b] = w)) &&
              (!d.skip_bound && d.bound[b] && d.bound[b](w), v && ze(e, b)),
            g
          );
        })
      : []),
    d.update(),
    (v = !0),
    T(d.before_update),
    (d.fragment = n ? n(d.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const b = Pe(t.target);
      d.fragment && d.fragment.l(b), b.forEach(y);
    } else d.fragment && d.fragment.c();
    t.intro && j(e.$$.fragment),
      L(e, t.target, t.anchor, t.customElement),
      Te();
  }
  H(h);
}
class I {
  $destroy() {
    C(this, 1), (this.$destroy = f);
  }
  $on(t, a) {
    if (!xe(a)) return f;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      n.push(a),
      () => {
        const r = n.indexOf(a);
        r !== -1 && n.splice(r, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !Me(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
function Se(e) {
  let t;
  return {
    c() {
      (t = c("div")),
        (t.innerHTML = `<h1 class="svelte-5zrnl7">About Me</h1> 
   <p class="svelte-5zrnl7"><strong>Nugraha Agung Pratama</strong></p> 
   <p class="svelte-5zrnl7"><strong>Freelance motion designer and video editor</strong></p> 
   <p class="svelte-5zrnl7">Mahasiswa semester 7 (semoga tahun depan bisa lulus amin 😭🙏), awalnya tertarik sama dunia visual effect karena film transformers 🤖 tapi karena untuk belajar vfx pada saat itu perlu spek komputer yang luar biasa jadi saya pindah jalur ke animasi. Style animasi yang saya buat banyak terinspirasi dari konten-konten <a href="http://www.youtube.com/user/Kurzgesagt">Kurzgesagt, </a>Kokbisa-, dan Ben Marriott</p> 
   <p class="svelte-5zrnl7">Selama beberapa tahun terakhir saya banyak melakukan eksplorasi tentang berbagai workflow yang bagi saya sangat penting jika ingin project yang dikerjakan dapat selesai tepat waktu. Mulai dari Kokbisa- yang menggunakan notion sebagai database pekerjaan yang bersifat kolaboratif. Workflow saya dalam membuat animasi biasanya bergantung pada 3 software ini: Photoshop, After Effect, Premiere Pro. Karena ketiganya buatan Adobe maka proses perpindahan dari story boarding ke pembuatan asset maupun animasi bisa hampir <i>&quot;seamless&quot;</i> (kalo gak crash terus belum sempat save 😭)</p> 

   <p class="svelte-5zrnl7">Daftar plugin yang saya gunakan:</p> 
   <ul class="svelte-5zrnl7"><li class="svelte-5zrnl7">Explode Shape Layer &gt;&gt; Berguna kalo ketemu asset Ai yang tidak dilayering 😡</li> 
    <li class="svelte-5zrnl7">Flow &gt;&gt; untuk easing biar dak ribet otak atik graph editor</li> 
    <li class="svelte-5zrnl7">Ease Copy &gt;&gt; untuk menyalin value easing ke keframe lain</li> 
    <li class="svelte-5zrnl7">Animation Composer &gt;&gt; daftar preset animasi yang sangat membantu</li> 
    <li class="svelte-5zrnl7">Rubberhose &gt;&gt; rigging karakter 2d simple, biasanya dipake untuk bagian tangan dan kaki (limb)</li></ul>`),
        p(t, "class", "containerRecent svelte-5zrnl7"),
        p(t, "id", "aboutRoot");
    },
    m(a, n) {
      k(a, t, n);
    },
    p: f,
    i: f,
    o: f,
    d(a) {
      a && y(t);
    },
  };
}
class Ie extends I {
  constructor(t) {
    super(), S(this, t, null, Se, z, {});
  }
}
function Re(e) {
  let t;
  return {
    c() {
      (t = c("div")),
        (t.innerHTML = `<h1 class="svelte-y9n4lg">My Recent Work</h1>  

   <div class="gallery svelte-y9n4lg"><div class="hidrogen svelte-y9n4lg"><h2>Experiment with gradient</h2> 
        <iframe width="854" height="480" src="https://www.youtube.com/embed/JV7b0hBIAvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="align-self: center;"></iframe> 
        <img style="align-self: center;margin-top:5em;margin-bottom:5em;" width="854" height="480" src=".hidrogen/hydrogen_atom.png" alt=""/> 
        

        <p class="svelte-y9n4lg">Animasi hidrogen ini adalah iseng-iseng saya karena ingin melakuan eksplorasi desain dengan menggunakan gradient sekaligus membuat loop berdurasi pendek.</p> 

        <p class="svelte-y9n4lg"><strong>Software</strong>: Adobe Illustrator, Adobe After Effect</p></div> 
    <div><br/></div> 
    <div><hr style="color: #333;"/></div> 
    
    <div><br/></div> 
    <div class="hidrogen svelte-y9n4lg"><h2>Animasi TV Commercial KPU Provinsi Jambi</h2> 
        <iframe width="854" height="480" src="https://drive.google.com/file/d/1UwarPSYqhsv8p48ca_cfOgaHB-8awRsE/preview" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="align-self: center;"></iframe> 

        <img style="align-self: center;margin-top:5em;margin-bottom:5em;" width="854" height="480" src=".kpu/kpu_ae.png" alt=""/> 
        

        <p class="svelte-y9n4lg">Untuk project ini saya diajak oleh kating di kampus untuk membuat animasi mengenai tata cara pemilihan umum saat pandemi covid-19 di Provinsi Jambi.</p> 
        <p class="svelte-y9n4lg"><strong>Software</strong>: Adobe Photoshop, Adobe After Effect</p> 
        <p class="svelte-y9n4lg"><strong>Client</strong>: KPU Provinsi Jambi.</p></div> 

    <div><br/></div> 
    <div><hr style="color: #333;"/></div> 
    
    <div><br/></div> 
    <div class="hidrogen svelte-y9n4lg"><h2>Animasi belajar mengenal angka</h2> 
        <iframe width="854" height="480" src="https://www.youtube.com/embed/oo2MwlozHNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="align-self: center;"></iframe> 

        <img style="align-self: center;margin-top:5em;margin-bottom:5em;" width="854" height="480" src=".pensilkertaskids/mengenal_angka.png" alt=""/> 
        

        <p class="svelte-y9n4lg">Selama 3 bulan saya magang di CV.PIN Studio Indonesia, animasi ini merupakan salah satu project yang saya kerjakan.</p> 
        <p class="svelte-y9n4lg">Latar belakang dibuatnya animasi ini adalah untuk mengajak anak-anak belajar mengenal angka.</p> 
        <p class="svelte-y9n4lg">Kontribusi yang saya lakukan pada animasi ini adalah pada tahap persiapan asset agar bisa <i>&quot;animation ready&quot;</i>, pembuatan motion di software Adobe After Effect hingga rendering di Media Encoder.</p> 
        <p class="svelte-y9n4lg">Tantangan terberat pada series animasi mengenal angka ini adalah durasi yang berkisar 8-14 menit, karena durasi yang panjang ini juga proses pembuatan animasi dipisah kedalam beberapa file agar tidak berat saat dikerjakan</p> 
        <p class="svelte-y9n4lg">Total ada 3 series animasi mengenal angka yang berhasil diselesaikan selama periode magang saya.</p> 
        
        <p class="svelte-y9n4lg"><strong>Software</strong>: Adobe Illustrator, Adobe After Effect, Adobe Media Encoder</p> 
        <p class="svelte-y9n4lg"><strong>Client</strong>: CV.PIN Studio Indonesia (Channel YT: Pensil Kertas Kids).</p></div> 

    <div><br/></div> 
    <div><hr style="color: #333;"/></div> 
    
    <div><br/></div> 
    <div class="hidrogen svelte-y9n4lg"><h2>Konten youtube Gado Gado Media</h2> 
        <iframe width="854" height="480" src="https://www.youtube.com/embed/X9-fyD5nRWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="align-self: center;"></iframe> 

        <div><br/></div> 

        <iframe width="854" height="480" src="https://www.youtube.com/embed/DvpJZdFzLpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="align-self: center;"></iframe> 

        <div><br/></div> 

        <iframe width="854" height="480" src="https://www.youtube.com/embed/mW0kiEzw6i0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="align-self: center;"></iframe> 

        <div><br/></div> 

        <img style="align-self: center;margin-top:5em;margin-bottom:5em;" width="854" height="480" src=".ggm/valoran.png" alt=""/> 
        

        <p class="svelte-y9n4lg">Pada awal 2018 saya diajak untuk gabung ke channel youtube teman (gado gado media) untuk menjadi editor, selama kurang lebih 3 tahun ada beberapa konten yang kita buat, baik konten livestream maupun vod.</p> 

        <p class="svelte-y9n4lg"><strong>Software</strong>: Adobe Photoshop, Adobe After Effect,Adobe Premiere Pro, Adobe Media Encoder</p> 
        <p class="svelte-y9n4lg"><strong>Client</strong>: Gado Gado Media</p></div></div>`),
        p(t, "class", "containerRecent svelte-y9n4lg"),
        p(t, "id", "recentRoot");
    },
    m(a, n) {
      k(a, t, n);
    },
    p: f,
    i: f,
    o: f,
    d(a) {
      a && y(t);
    },
  };
}
class Be extends I {
  constructor(t) {
    super(), S(this, t, null, Re, z, {});
  }
}
function Oe(e) {
  let t, a, n;
  return {
    c() {
      (t = c("div")),
        (t.innerHTML =
          '<button style="background-color: var(--button-color);">Back To Top</button>'),
        p(t, "class", "back-to-top svelte-57njmb"),
        ve(t, "hidden", e[0]);
    },
    m(r, s) {
      k(r, t, s),
        a || ((n = [_(window, "scroll", e[1]), _(t, "click", Ke)]), (a = !0));
    },
    p(r, [s]) {
      s & 1 && ve(t, "hidden", r[0]);
    },
    i: f,
    o: f,
    d(r) {
      r && y(t), (a = !1), T(n);
    },
  };
}
function Ke() {
  document.body.scrollIntoView({ behavior: "smooth" });
}
function _e() {
  return document.documentElement || document.body;
}
function Ne(e, t, a) {
  let { showOnPx: n = 150 } = t,
    r = !0;
  function s() {
    _e() && (_e().scrollTop > n ? a(0, (r = !1)) : a(0, (r = !0)));
  }
  return (
    (e.$$set = (u) => {
      "showOnPx" in u && a(2, (n = u.showOnPx));
    }),
    [r, s, n]
  );
}
class qe extends I {
  constructor(t) {
    super(), S(this, t, Ne, Oe, z, { showOnPx: 2 });
  }
}
function Ye(e) {
  let t;
  return {
    c() {
      (t = c("div")),
        (t.innerHTML = `<h1 class="svelte-1f3sorw">Get in touch</h1> 

    <p style="align-self: center;" class="svelte-1f3sorw">For any questions, inquiries, or anything about your animation needs.</p> 


    <a href="mailto:nugrahaagungpratama5@gmail.com" style="align-self: center;margin-bottom:2em;"><button><p class="svelte-1f3sorw">nugrahaagungpratama5@gmail.com</p></button></a>`),
        p(t, "class", "containerRecent svelte-1f3sorw"),
        p(t, "id", "contactRoot");
    },
    m(a, n) {
      k(a, t, n);
    },
    p: f,
    i: f,
    o: f,
    d(a) {
      a && y(t);
    },
  };
}
class Ve extends I {
  constructor(t) {
    super(), S(this, t, null, Ye, z, {});
  }
}
function We(e) {
  let t,
    a,
    n,
    r,
    s,
    u,
    R,
    h,
    d,
    v,
    b,
    g,
    l,
    w,
    ie,
    U,
    se,
    B,
    le,
    M,
    oe,
    O,
    ce,
    D,
    de,
    X,
    ue,
    K,
    ge,
    Z,
    me,
    Q,
    pe,
    $,
    fe,
    A,
    be,
    x,
    N,
    ee,
    he;
  return (
    (t = new qe({})),
    ($ = new Be({})),
    (A = new Ie({})),
    (x = new Ve({})),
    {
      c() {
        W(t.$$.fragment),
          (a = m()),
          (n = c("div")),
          (r = c("a")),
          (r.innerHTML = "<p>Home</p>"),
          (s = m()),
          (u = c("a")),
          (u.innerHTML = "<p>Recent Projects</p>"),
          (R = m()),
          (h = c("a")),
          (h.innerHTML = "<p>About Me</p>"),
          (d = m()),
          (v = c("a")),
          (v.innerHTML = "<p>Contact</p>"),
          (b = m()),
          (g = c("main")),
          (l = c("div")),
          (w = c("p")),
          (w.innerHTML = "<small>Hello</small>"),
          (ie = m()),
          (U = c("h1")),
          (U.textContent = "I'm Nugraha"),
          (se = m()),
          (B = c("p")),
          (B.textContent = "Welcome to my portofolio website"),
          (le = m()),
          (M = c("button")),
          (M.textContent = "My recent work"),
          (oe = m()),
          (O = c("div")),
          (O.innerHTML =
            '<a href="https://www.instagram.com/n_agungp/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>'),
          (ce = m()),
          (D = c("div")),
          (D.innerHTML = "<br/>"),
          (de = m()),
          (X = c("div")),
          (X.innerHTML = "<br/>"),
          (ue = m()),
          (K = c("p")),
          (K.innerHTML =
            "<small>PS: Web portofolio ini masih dalam tahap development, mohon maaf jika terdapat bug 🙏</small>"),
          (ge = m()),
          (Z = c("div")),
          (Z.innerHTML = "<br/><br/>"),
          (me = m()),
          (Q = c("div")),
          (Q.innerHTML = "<br/><br/>"),
          (pe = m()),
          W($.$$.fragment),
          (fe = m()),
          W(A.$$.fragment),
          (be = m()),
          W(x.$$.fragment),
          q(r, "cursor", "pointer"),
          q(u, "cursor", "pointer"),
          q(h, "cursor", "pointer"),
          q(v, "cursor", "pointer"),
          p(n, "class", "navbar svelte-12dbvgd"),
          p(n, "id", "navbar"),
          p(w, "class", "svelte-12dbvgd"),
          p(B, "class", "svelte-12dbvgd"),
          p(M, "class", "mainButton svelte-12dbvgd"),
          p(O, "class", "socmed svelte-12dbvgd"),
          p(K, "class", "warning svelte-12dbvgd"),
          p(l, "class", "mainDiv svelte-12dbvgd"),
          p(g, "class", "mainContainer svelte-12dbvgd");
      },
      m(o, E) {
        L(t, o, E),
          k(o, a, E),
          k(o, n, E),
          i(n, r),
          i(n, s),
          i(n, u),
          i(n, R),
          i(n, h),
          i(n, d),
          i(n, v),
          k(o, b, E),
          k(o, g, E),
          i(g, l),
          i(l, w),
          i(l, ie),
          i(l, U),
          i(l, se),
          i(l, B),
          i(l, le),
          i(l, M),
          i(l, oe),
          i(l, O),
          i(l, ce),
          i(l, D),
          i(l, de),
          i(l, X),
          i(l, ue),
          i(l, K),
          i(g, ge),
          i(g, Z),
          i(g, me),
          i(g, Q),
          i(g, pe),
          L($, g, null),
          i(g, fe),
          L(A, g, null),
          i(g, be),
          L(x, g, null),
          (N = !0),
          ee ||
            ((he = [
              _(r, "click", Ge),
              _(u, "click", $e),
              _(h, "click", Fe),
              _(v, "click", Je),
              _(M, "click", $e),
            ]),
            (ee = !0));
      },
      p: f,
      i(o) {
        N ||
          (j(t.$$.fragment, o),
          j($.$$.fragment, o),
          j(A.$$.fragment, o),
          j(x.$$.fragment, o),
          (N = !0));
      },
      o(o) {
        V(t.$$.fragment, o),
          V($.$$.fragment, o),
          V(A.$$.fragment, o),
          V(x.$$.fragment, o),
          (N = !1);
      },
      d(o) {
        C(t, o),
          o && y(a),
          o && y(n),
          o && y(b),
          o && y(g),
          C($),
          C(A),
          C(x),
          (ee = !1),
          T(he);
      },
    }
  );
}
function J(e) {
  e.scrollIntoView({ behavior: "smooth" });
}
function $e() {
  let e = document.getElementById("recentRoot");
  J(e);
}
function Fe() {
  let e = document.getElementById("aboutRoot");
  J(e);
}
function Ge() {
  let e = document.getElementById("navbar");
  J(e);
}
function Je() {
  let e = document.getElementById("contactRoot");
  J(e);
}
class Ue extends I {
  constructor(t) {
    super(), S(this, t, null, We, z, {});
  }
}
new Ue({ target: document.getElementById("app") });

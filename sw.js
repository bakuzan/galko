if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let l={};const o=e=>s(e,i),c={module:{uri:i},exports:l,require:o};a[i]=Promise.all(d.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/galko/404.html",revision:"e32a5957b7374e4df0ff0bb6025e1055"},{url:"/galko/bundle.js",revision:"345ed62749ad8f800d75283bc7f17550"},{url:"/galko/bundle.js.LICENSE.txt",revision:"5a73259064fe15d3f24e8a1f8345efaf"},{url:"/galko/decks-builder.d.ts",revision:"70c69b7fbd180b7e1970350a10f2ac50"},{url:"/galko/decks.d.ts",revision:"0dff11a626c92ca3258cc99a79c6e325"},{url:"/galko/elements/button.d.ts",revision:"5c7f99e3d4eaae821996a487acc6a5e2"},{url:"/galko/elements/card-back.d.ts",revision:"5c7f99e3d4eaae821996a487acc6a5e2"},{url:"/galko/elements/card-grid.d.ts",revision:"3ff3940bc86456ab96ec897fba8042ed"},{url:"/galko/elements/card.d.ts",revision:"b710c746ec2946805342c60ac59c508b"},{url:"/galko/elements/image-cycler.d.ts",revision:"5c7f99e3d4eaae821996a487acc6a5e2"},{url:"/galko/elements/router-link.d.ts",revision:"5c7f99e3d4eaae821996a487acc6a5e2"},{url:"/galko/elements/router-view.d.ts",revision:"a758dd27574a9e7a44a696dea628ddf4"},{url:"/galko/elements/sort-icon.d.ts",revision:"5c7f99e3d4eaae821996a487acc6a5e2"},{url:"/galko/elements/streak.d.ts",revision:"5c7f99e3d4eaae821996a487acc6a5e2"},{url:"/galko/elements/tooltip.d.ts",revision:"5c7f99e3d4eaae821996a487acc6a5e2"},{url:"/galko/enums/CardBackType.d.ts",revision:"3ab8ddc6804d0ca202484bbefed27bd4"},{url:"/galko/enums/ImageSize.d.ts",revision:"05bad2594d161ff92ae8db600f0c1199"},{url:"/galko/enums/MediaSize.d.ts",revision:"1f3541d9d2618898c583d7ac1e2a59d0"},{url:"/galko/favicon.ico",revision:"af6a4396ded8953ac088f974d914961b"},{url:"/galko/home.d.ts",revision:"370d97f114b45fc8d00307ed230e31f7"},{url:"/galko/index.d.ts",revision:"674e8b3316bd9662471929a35dae7252"},{url:"/galko/index.html",revision:"ea9dc012a387080346ef8e7290ae8a7c"},{url:"/galko/interfaces/Card.d.ts",revision:"ee18c4065f9308c5ced83ccb1efe64bb"},{url:"/galko/interfaces/CardFlip.d.ts",revision:"0d755058352b7331ce3a4b59c103b29a"},{url:"/galko/interfaces/Character.d.ts",revision:"83d2350dbb91d41ca3fbcf083066184e"},{url:"/galko/interfaces/CharacterImage.d.ts",revision:"286b6456968b3f8bec3e13c05da62431"},{url:"/galko/interfaces/Deck.d.ts",revision:"6a6e85b9d88a54b2285fe8978bc39cec"},{url:"/galko/interfaces/GameResult.d.ts",revision:"b96a0f45fe51628063a2e2fcce5b1815"},{url:"/galko/interfaces/GlkData.d.ts",revision:"809d89a7b2e70f31be769151e4e6bcad"},{url:"/galko/interfaces/GlkOptions.d.ts",revision:"49104fb4296f3d1be6acb8e1cc3fb665"},{url:"/galko/interfaces/Turn.d.ts",revision:"9e50b9f9359123737e1ca8d1f1df7334"},{url:"/galko/options.d.ts",revision:"53700dbefc91b7b4b0205cf207400e15"},{url:"/galko/routes.d.ts",revision:"042f2de5286f1c950a5107cbacd6be03"},{url:"/galko/scores.d.ts",revision:"73d49eec96ae43ab10e141452692e442"},{url:"/galko/style/card.d.ts",revision:"cbdd6971e8653762b9977861bd8af190"},{url:"/galko/style/cardGrid.d.ts",revision:"cbdd6971e8653762b9977861bd8af190"},{url:"/galko/style/control.d.ts",revision:"cbdd6971e8653762b9977861bd8af190"},{url:"/galko/style/floatLabel.d.ts",revision:"cbdd6971e8653762b9977861bd8af190"},{url:"/galko/style/grid.d.ts",revision:"eab2b44cf4e8aea062e90c4c537ae49f"},{url:"/galko/utils/GameTimer.d.ts",revision:"927b4e235afa0332b5bbb334497f8d04"},{url:"/galko/utils/characters.d.ts",revision:"d066ac3ee9089fc868f9e4eefabb38f5"},{url:"/galko/utils/classes.d.ts",revision:"d400f2eec624681e9798d06dd1f54fb9"},{url:"/galko/utils/getCardBackground.d.ts",revision:"fb1d6a9719b1ffccd3206ec3369ef168"},{url:"/galko/utils/mediaOn.d.ts",revision:"5ca344788b6434deb88e2461eee54c8b"},{url:"/galko/utils/objToString.d.ts",revision:"440eb3e80b7c9f6c05bf7b437b9d0df6"},{url:"/galko/utils/orderGameHistory.d.ts",revision:"9bf50f7201aec2f19e9fdeadee4fd40e"},{url:"/galko/utils/storage.d.ts",revision:"ba253b033e78912b26ab4b3c857afd94"},{url:"/galko/utils/svgToBase64Image.d.ts",revision:"5c0ea188fdd0a916544fb91b88b03776"}],{})}));

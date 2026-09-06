const girarElem = document.querySelector("#girar");
const alvoElem = document.querySelector("#img"); // Substitua pelo ID do seu item

// 2. Pegue as coordenadas e tamanhos de ambos no navegador
const rectGirar = girarElem.getBoundingClientRect();
const rectAlvo = alvoElem.getBoundingClientRect();

// 3. Calcule o centro do elemento alvo
const centroAlvoX = rectAlvo.left + (rectAlvo.width / 2);
const centroAlvoY = rectAlvo.top + (rectAlvo.height / 2);

// 4. Descubra onde esse centro fica em relação ao canto superior esquerdo do #girar
const originX = centroAlvoX - rectGirar.left;
const originY = centroAlvoY - rectGirar.top;

// 5. Aplique a animação usando os pixels calculados no transformOrigin
TweenMax.to("#girar", 10, { 
  transformOrigin: `${originX}px ${originY}px`, 
  rotation: 360, 
  ease: Linear.easeNone, 
  repeat: -1 
});
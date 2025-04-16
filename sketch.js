let x = 50;
let v = 0;
let a = 0;

function setup() {
  createCanvas(800, 200);
}

function draw() {
  background(255);

  let fuerza = parseFloat(document.getElementById('fuerzaSlider').value);
  let masa = parseFloat(document.getElementById('masaSlider').value);
  document.getElementById('fuerzaValue').textContent = fuerza;
  document.getElementById('masaValue').textContent = masa;

  // LEY 1 Y 2: Si no hay fuerza → velocidad constante (1ª Ley)
  if (fuerza === 0) {
    a = 0;
  } else {
    a = fuerza / masa; // (2ª Ley)
  }

  v += a * 0.1;
  x += v;

  // LEY 3: Acción-reacción al chocar con la pared derecha
  if (x > width - 50) {
    x = width - 50;
    v = -v * 0.8; // Rebote con pérdida de velocidad
  }

  // Dibujar el bloque
  fill(100, 150, 255);
  rect(x, height / 2 - 25, 50, 50);

  // Mostrar info
  fill(0);
  textSize(14);
  text(`Aceleración: ${a.toFixed(2)} m/s²`, 10, 20);
  text(`Velocidad: ${v.toFixed(2)} m/s`, 10, 40);
}
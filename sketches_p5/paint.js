console.log('Hello P5 Smudge HTML');
const c = createCanvas(512, 512);

async function draw() {
  albedo(0.3);
  smoothness(1.0);

  background();

  albedo(0.8, 0.8, 0.8);
  height(0.1);
  metallic(0.1);
  smoothness(0.5);

  const circle = await loadBundledTexture('circle_margin.png');
  useTexture(circle);
  const noseBrush = await loadBundledTexture('nose_brush_16.png');
  useTexture(noseBrush, Height);
  blendMode(Additive, Height);

  let pos = { x: 256, y: 64 };
  let speed = 10;
  let delta_a = 0.05;
  let a = 0;

  const points = [];
  for (let i = 0; i < 1000; i++) {
    pos.x += Math.cos(a) * speed;
    pos.y += Math.sin(a) * speed;

    points.push([pos.x, pos.y]);

    a += delta_a + Math.sin(i * 0.1) * 0.01;
    delta_a += 0.0001;
  }

  lineWidth(6);
  line(points);

  height(1.0);
  rect(10, 10, 100, 100);
}

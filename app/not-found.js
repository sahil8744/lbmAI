"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NotFound() {
  const canvasRef = useRef(null);
  let score = 0;

  useEffect(() => {
    document.getElementById("hideFormNotFound").style.display = "none";
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const S = 2;
    const assets = [
      "https://assets.codepen.io/416221/nowhere.png",
      "https://assets.codepen.io/416221/tumbleweed.png",
    ];
    const sprites = [];
    const world = {
      friction: 0.1,
      gravity: 0.1,
    };
    const tumbleweed = {
      inPlay: false,
      x: -160,
      y: 200,
      r: 32,
      rotation: 0,
      xVel: 10,
      yVel: 0,
      mass: 2.5,
      restitution: 0.3,
    };

    const loadSprite = (url) => {
      return new Promise((resolve, reject) => {
        const sprite = new Image();
        sprite.src = url;
        sprite.onload = () => resolve(sprite);
        sprite.onerror = () => reject(url);
      });
    };

    const spritePromises = assets.map(loadSprite);

    const applyForce = (e) => {
      const ex = ((e.clientX - canvas.offsetLeft) / canvas.offsetWidth) * W;
      const ey =
        ((e.clientY - (canvas.offsetTop - window.pageYOffset)) /
          canvas.offsetHeight) *
        H;

      const insideX = Math.abs(ex - tumbleweed.x) <= tumbleweed.r;
      const insideY = Math.abs(ey - tumbleweed.y) <= tumbleweed.r;

      if (insideX && insideY) {
        const xForce = tumbleweed.x - ex;
        const yForce = tumbleweed.y - ey;
        const xAccel = xForce / tumbleweed.mass;
        const yAccel = yForce / tumbleweed.mass;

        tumbleweed.xVel += xAccel;
        tumbleweed.yVel += yAccel;

        ++score;

        if (!tumbleweed.inPlay) tumbleweed.inPlay = true;
      }
    };

    const update = () => {
      c.clearRect(0, 0, W, H);
      c.drawImage(sprites[0], 0, 0, W, H);

      tumbleweed.x += tumbleweed.xVel;
      if (tumbleweed.xVel > 0) {
        tumbleweed.xVel -= world.friction;
        if (tumbleweed.xVel < 0) tumbleweed.xVel = 0;
      } else if (tumbleweed.xVel < 0) {
        tumbleweed.xVel += world.friction;
        if (tumbleweed.xVel > 0) tumbleweed.xVel = 0;
      }

      const hitLeftBound = tumbleweed.x <= tumbleweed.r && tumbleweed.inPlay;
      const hitRightBound = tumbleweed.x >= W - tumbleweed.r;

      if (hitLeftBound) tumbleweed.x = tumbleweed.r;
      else if (hitRightBound) tumbleweed.x = W - tumbleweed.r;

      if (hitLeftBound || hitRightBound)
        tumbleweed.xVel *= -tumbleweed.restitution;

      tumbleweed.y += tumbleweed.yVel;
      tumbleweed.yVel += world.gravity;

      const hitTopBound = tumbleweed.y <= tumbleweed.r;
      const hitBottomBound = tumbleweed.y >= H - tumbleweed.r;

      if (hitTopBound) tumbleweed.y = tumbleweed.r;
      else if (hitBottomBound) {
        tumbleweed.y = H - tumbleweed.r;
        score = 0;
      }

      if (hitTopBound || hitBottomBound)
        tumbleweed.yVel *= -tumbleweed.restitution;

      tumbleweed.rotation += tumbleweed.xVel;
      if (tumbleweed.rotation >= 360) tumbleweed.rotation -= 360;
      else if (tumbleweed.rotation < 0) tumbleweed.rotation += 360;

      c.save();
      c.translate(tumbleweed.x, tumbleweed.y);
      c.rotate((tumbleweed.rotation * Math.PI) / 180);
      c.drawImage(
        sprites[1],
        -tumbleweed.r,
        -tumbleweed.r,
        tumbleweed.r * 2,
        tumbleweed.r * 2
      );
      c.restore();

      if (score > 0) {
        c.fillStyle = "#7f7f7f";
        c.font = "48px Hind, sans-serif";
        c.textAlign = "center";
        c.fillText(score, W / 2, 48);
      }
    };

    const render = () => {
      update();
      requestAnimationFrame(render);
    };

    canvas.width = W * S;
    canvas.height = H * S;
    c.scale(S, S);

    Promise.all(spritePromises)
      .then((loaded) => {
        sprites.push(...loaded);
        render();
        canvas.addEventListener("click", applyForce);
      })
      .catch((urls) => {
        console.log(`${urls} couldn’t be loaded`);
      });

    return () => {
      canvas.removeEventListener("click", applyForce);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 250px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="wrap not_found_page text-center">
        <div className="container">
          <h1 className="text-center my-5">Page Not Found</h1>
          <div className="convans">
            <canvas ref={canvasRef} width="560" height="312"></canvas>
          </div>
          <p className="mt-5 fs-5">
            You’re in the middle of nowhere. The page you requested either was
            moved or doesn’t exist.
          </p>
          <ul className="d-sm-flex align-items-center justify-content-center fw-semibold gap-5">
            <li className="fs-5">
              <span className="">Go Back</span> <Link href="/">Home</Link>
            </li>
            <li className="fs-5 mt-3 mt-sm-0">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

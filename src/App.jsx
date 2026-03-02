import { useEffect, useRef, useState, useCallback } from "react";
import { config } from "./config";
import "./App.css";

// ─── Floating Petals ─────────────────────────────────────────
function FloatingPetals() {
  const symbols = ["🌸", "🌹", "💗", "🌺", "💖", "✨"];
  const petals = Array.from({ length: 20 }, (_, i) => ({
    left: `${(i * 5.3) % 100}%`,
    animationDuration: `${7 + (i % 5) * 1.8}s`,
    animationDelay: `${(i % 9) * 0.7}s`,
    fontSize: `${12 + (i % 4) * 4}px`,
    symbol: symbols[i % symbols.length],
  }));
  return (
    <div className="petals-container">
      {petals.map((p, i) => (
        <span key={i} className="floating-petal" style={p}>
          {p.symbol}
        </span>
      ))}
    </div>
  );
}

// ─── Sparkles ────────────────────────────────────────────────
function Sparkles() {
  const glyphs = ["✦", "✶", "✵", "☆"];
  const stars = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 7.3 + 5) % 95}%`,
    top: `${(i * 11.7 + 8) % 88}%`,
    animationDelay: `${(i * 0.37) % 3}s`,
    animationDuration: `${2.4 + (i % 5) * 0.5}s`,
    fontSize: `${10 + (i % 3) * 6}px`,
    opacity: 0.5 + (i % 4) * 0.12,
  }));
  return (
    <div className="sparkles-container">
      {stars.map((s, i) => (
        <span key={i} className="sparkle" style={s}>
          {glyphs[i % glyphs.length]}
        </span>
      ))}
    </div>
  );
}

// ─── Rising Hearts (footer) ──────────────────────────────────
function RisingHearts() {
  const items = ["♥", "💗", "💖", "💕"];
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    left: `${(i * 8.5 + 3) % 94}%`,
    animationDelay: `${(i * 0.45) % 4.5}s`,
    animationDuration: `${3.5 + (i % 4) * 0.8}s`,
    fontSize: `${14 + (i % 4) * 8}px`,
    opacity: 0.18 + (i % 3) * 0.08,
  }));
  return (
    <div className="rising-hearts-container">
      {hearts.map((h, i) => (
        <span key={i} className="rising-heart" style={h}>
          {items[i % items.length]}
        </span>
      ))}
    </div>
  );
}

// ─── Heart Cursor Trail ──────────────────────────────────────
function useHeartTrail() {
  useEffect(() => {
    const handle = (e) => {
      const el = document.createElement("span");
      el.className = "cursor-heart";
      el.textContent = "❤️";
      el.style.cssText = `left:${e.clientX}px;top:${e.clientY}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 900);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);
}

// ─── Track current slide index ────────────────────────────
function useCurrentSlide(containerRef, total) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollTop / el.clientHeight);
      setCurrent(Math.min(idx, total - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [containerRef, total]);
  return current;
}

// ─── Progress Dots ─────────────────────────────────────────
function ProgressDots({ current, total, containerRef }) {
  const scrollTo = useCallback(
    (i) => {
      const el = containerRef.current;
      if (el) el.scrollTo({ top: i * el.clientHeight, behavior: "smooth" });
    },
    [containerRef],
  );

  return (
    <nav className="progress-dots" aria-label="Slide navigation">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          className={`progress-dot ${i === current ? "active" : ""}`}
          onClick={() => scrollTo(i)}
          aria-label={`Slide ${i + 1}`}
        />
      ))}
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────
function Hero({ scrollRef }) {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const fn = () => setHide(el.scrollTop > 60);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, [scrollRef]);

  return (
    <section className="hero snap-slide">
      <FloatingPetals />
      <Sparkles />
      {/* Decorative blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="hero-glass">
        <div className="hero-content">
          <div className="hero-eyebrow">{config.hero.eyebrow}</div>
          <p className="hero-to">{config.hero.title}</p>
          <h1 className="hero-name">{config.recipientName}</h1>
          <div className="hero-divider">
            <span />
            <span className="hero-divider-heart">♥</span>
            <span />
          </div>
          <p className="hero-subtitle">{config.hero.subtitle}</p>
          <p className="hero-poem">{config.hero.poem}</p>
          <div className="hero-hearts">
            <span>❤️</span>
            <span style={{ animationDelay: "0.4s" }}>🌸</span>
            <span style={{ animationDelay: "0.8s" }}>❤️</span>
          </div>
        </div>
      </div>

      {!hide && (
        <div className="scroll-hint">
          <span>Cuộn xuống để xem</span>
          <div className="arrow-bounce">↓</div>
        </div>
      )}
    </section>
  );
}

// ─── Timeline Divider ────────────────────────────────────────
function TimelineDivider({ index, total }) {
  // Dot slides from top (index 0) to bottom (index total-1)
  const ratio = total > 1 ? index / (total - 1) : 0.5;
  return (
    <div className="timeline-divider">
      <div
        className="tl-line tl-line-top"
        style={{ flex: ratio, minHeight: ratio < 0.05 ? 4 : 20 }}
      />
      <div className="tl-dot">
        <span className="tl-heart">♥</span>
        <span className="tl-index">
          {index + 1}/{total}
        </span>
      </div>
      <div
        className="tl-line tl-line-bottom"
        style={{ flex: 1 - ratio, minHeight: ratio > 0.95 ? 4 : 20 }}
      />
    </div>
  );
}

// ─── Story Section ───────────────────────────────────────────
// Per-slide animation & style variants
const STORY_VARIANTS = [
  // slide 1: classic horizontal pinch, message zooms in
  {
    imgReveal: "from-left",
    msgReveal: "zoom-out",
    imgDelay: "0.05s",
    msgDelay: "0.28s",
    mark: "♥",
    bg: "bg-v0",
  },
  // slide 2: image 3D-flips in, message rises from below
  {
    imgReveal: "flip-y",
    msgReveal: "from-bottom",
    imgDelay: "0.08s",
    msgDelay: "0.36s",
    mark: "✿",
    bg: "bg-v1",
  },
  // slide 3: image swings in, message drops from top
  {
    imgReveal: "swing-in",
    msgReveal: "from-top",
    imgDelay: "0.04s",
    msgDelay: "0.30s",
    mark: "♡",
    bg: "bg-v2",
  },
  // slide 4: image drops from top, message spins up
  {
    imgReveal: "from-top",
    msgReveal: "rise-spin",
    imgDelay: "0.06s",
    msgDelay: "0.26s",
    mark: "✦",
    bg: "bg-v3",
  },
  // slide 5: reverse 3D flip + message swings from right
  {
    imgReveal: "flip-y-r",
    msgReveal: "swing-in-r",
    imgDelay: "0.07s",
    msgDelay: "0.34s",
    mark: "❧",
    bg: "bg-v4",
  },
];

function StorySection({ item, index, total }) {
  const isEven = index % 2 === 0;
  const v = STORY_VARIANTS[index % STORY_VARIANTS.length];
  return (
    <section
      className={`story-section snap-slide ${isEven ? "even" : "odd"} ${v.bg}`}
    >
      {/* Watermark symbol — unique per slide */}
      <div className="section-watermark">{v.mark}</div>

      <div className="story-inner">
        {/* Image side */}
        <div
          className={`story-image-wrap reveal ${v.imgReveal}`}
          style={{ transitionDelay: v.imgDelay }}
        >
          <div className="story-image-frame">
            <img
              src={item.image}
              alt="kỷ niệm"
              className="story-img"
              loading="lazy"
            />
            <div className="story-img-shine" />
          </div>
          {item.date && <div className="story-date">📅 {item.date}</div>}
        </div>

        {/* Timeline middle */}
        <TimelineDivider index={index} total={total} />

        {/* Message side */}
        <div
          className={`story-message-wrap reveal ${v.msgReveal}`}
          style={{ transitionDelay: v.msgDelay }}
        >
          <div className="story-message-card">
            <div className="card-corner card-corner-tl" />
            <div className="card-corner card-corner-br" />
            <div className="quote-mark">"</div>
            <p className="story-message">{item.message}</p>
            <div className="message-hearts">
              <span>💗</span>
              <span>💗</span>
              <span>💗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final Photo Slide ──────────────────────────────────────
function FinalPhotoSlide() {
  const { image, caption } = config.finalPhoto;
  return (
    <section className="final-photo-slide snap-slide">
      <img src={image} alt="ảnh kỷ niệm cuối" className="final-photo-img" />
      <div className="final-photo-overlay" />
      {caption && (
        <div className="final-photo-caption reveal fade-in">
          <span>{caption}</span>
        </div>
      )}
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="love-footer snap-slide">
      <RisingHearts />
      <div className="footer-blob footer-blob-1" />
      <div className="footer-blob footer-blob-2" />
      <div className="reveal fade-in footer-inner">
        <div className="footer-to">🌸 Gửi em — {config.recipientName} 🌸</div>
        <div className="footer-decoration">
          {["❤️", "🌸", "💕", "🌹", "💖", "🌸", "❤️"].map((s, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.18}s` }}>
              {s}
            </span>
          ))}
        </div>
        {config.footer.lines.map((line, i) => (
          <p
            key={i}
            className="footer-message"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {line}
          </p>
        ))}
        <div className="footer-divider">
          <span />
          <span className="footer-divider-heart">♥</span>
          <span />
        </div>
        <p className="footer-signature">
          {config.footer.signature}, {config.senderName}
        </p>
        <div className="footer-big-heart">❤️</div>
        <div className="footer-name-big">{config.recipientName}</div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────
export default function App() {
  const appRef = useRef(null);
  useHeartTrail();

  // total slides = 1 hero + sections + 1 final photo + 1 footer
  const totalSlides = 1 + config.sections.length + 2;
  const current = useCurrentSlide(appRef, totalSlides);

  useEffect(() => {
    const container = appRef.current;
    if (!container) return;

    // Observe each snap-slide — add/remove slide-active so animations
    // replay every time the user scrolls back to a slide.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("slide-active");
          } else {
            // Remove so it re-animates next visit
            e.target.classList.remove("slide-active");
          }
        });
      },
      { root: container, threshold: 0.45 },
    );

    container.querySelectorAll(".snap-slide").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="app" ref={appRef}>
      <Hero scrollRef={appRef} />
      <main>
        {config.sections.map((item, i) => (
          <StorySection
            key={i}
            item={item}
            index={i}
            total={config.sections.length}
          />
        ))}
      </main>
      <FinalPhotoSlide />
      <Footer />
      <ProgressDots
        current={current}
        total={totalSlides}
        containerRef={appRef}
      />
    </div>
  );
}

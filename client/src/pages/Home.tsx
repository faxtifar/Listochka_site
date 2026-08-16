// STYLE NOTE: Listochka's page is a licorice-and-white botanical diary.
// Keep white paper, near-black licorice ink, grey-paper details, hand-drawn notes,
// organic asymmetry, and the three TikTok destinations grouped by role.
import { useState, type CSSProperties } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bookmark,
  FileText,
  Heart,
  Radio,
  Sparkles,
  SunMedium,
} from "lucide-react";

const assets = {
  avatar: `${import.meta.env.BASE_URL}assets/listochka-avatar.webp`,
  note1: `${import.meta.env.BASE_URL}assets/listochka-note-1.webp`,
  note2: `${import.meta.env.BASE_URL}assets/listochka-note-2.webp`,
  note3: `${import.meta.env.BASE_URL}assets/listochka-note-3.webp`,
};

const entries = [
  {
    id: "leaf-1",
    number: "01",
    eyebrow: "бумажная заметка",
    title: "куда настоящая легенда хотя",
    copy: "Маленькие моменты, которые остаются в памяти дольше, чем любые громкие слова. Просто эфир и честное настроение.",
    image: assets.note1,
    className: "listo-entry--wide",
    rotate: "-0.9deg",
  },
  {
    id: "leaf-2",
    number: "02",
    eyebrow: "из записной книжки",
    title: "весенний воздух и тишина",
    copy: "Иногда лучший способ отвлечься — включить трансляцию и посидеть вместе с теми, кто понимает без лишних объяснений.",
    image: assets.note2,
    className: "listo-entry--tall",
    rotate: "1.2deg",
  },
  {
    id: "leaf-3",
    number: "03",
    eyebrow: "в эфире",
    title: "я мечтаю на бустер",
    copy: "Каждый день складывается из случайных кадров, смешных диалогов и уютных вечеров. Заглядывай на огонёк.",
    image: assets.note3,
    className: "listo-entry--offset",
    rotate: "-0.5deg",
  },
];

export default function Home() {
  const [liked, setLiked] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLiked((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return (
    <div className="listo-shell" id="top">
      <div className="botanic-grain" aria-hidden="true" />

      <header className="listo-header">
        <a className="listo-brand" href="#top" aria-label="Ласточка — главная">
          <span className="listo-brand-mark">
            <img src={assets.avatar} alt="" />
          </span>
          <span className="listo-brand-name">
            ласточка <em>📄</em>
          </span>
        </a>
        <nav className="listo-nav" aria-label="Навигация по сайту">
          <a href="#about">о себе</a>
          <a href="#notes">дневник</a>
          <a href="#live">эфир</a>
        </nav>
        <a
          className="listo-header-link"
          href="https://www.tiktok.com/@leaf_life"
          target="_blank"
          rel="noreferrer"
        >
          TikTok <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <section className="listo-hero" aria-labelledby="hero-title">
          <div className="listo-hero-copy">
            <p className="listo-kicker">
              <span className="rose-bloom" /> личный дневник / @leaf_life
            </p>
            <h1 id="hero-title">
              привет,
              <br />
              я <span>Ласточка</span>
            </h1>
            <p className="listo-hero-lede">
              Мягкий свет, весенние ветки сакуры и немного уютного хаоса.
              Здесь живут мои заметки, эфиры и истории по каплям.
            </p>
            <div className="listo-hero-actions">
              <a
                className="listo-button listo-button--rose"
                href="https://www.tiktok.com/@leaf_life"
                target="_blank"
                rel="noreferrer"
              >
                перейти в TikTok <ArrowUpRight size={17} />
              </a>
              <a className="listo-button listo-button--quiet" href="#about">
                <span className="listo-leaf-icon"><Bookmark size={13} /></span>
                что внутри?
              </a>
            </div>
            <div className="listo-hero-caption">
              <span className="caption-number">815</span>
              <span className="caption-stroke" />
              <span>подписчиков · 80.7K лайков</span>
              <Sparkles size={16} />
            </div>
          </div>

          <div className="listo-hero-art" aria-label="Аватар и ботанический дневник Ласточки">
            <div className="hero-diary-card">
              <div className="diary-ring-top" />
              <div className="diary-ring-bottom" />
              <div className="diary-photo">
                <img src={assets.avatar} alt="Ласточка аватар" />
              </div>
              <div className="diary-badge">
                <Radio size={12} /> ЭФИР АКТИВЕН
              </div>
              <p className="diary-quote">«листья падают тихо, а мы идём дальше»</p>
            </div>
            <span className="diary-note diary-note--top">✦ весенний дневник</span>
            <span className="diary-note diary-note--bottom">📄 @leaf_life</span>
          </div>
        </section>

        <section className="listo-about" id="about" aria-labelledby="about-title">
          <div className="listo-section-number">02 / страницы дневника</div>
          <div className="listo-about-title">
            <h2 id="about-title">
              простые вещи.
              <br />
              <span>теплый свет.</span>
            </h2>
          </div>
          <div className="listo-about-copy">
            <p className="hand-note">записано на полях</p>
            <p>
              Я Ласточка — веду этот уголок, делюсь кадрами из жизни, моментами
              с трансляций и простыми мыслями, которые не хочется терять.
            </p>
            <p>
              Здесь нет строгих правил. Только белый лист, розово-серые оттенки
              и искренние разговоры с теми, кто заглянул на огонёк.
            </p>
            <div className="listo-stats-row" aria-label="Статистика профиля">
              <div className="stat-pill">
                <strong>815</strong>
                <span>подписчиков</span>
              </div>
              <div className="stat-pill">
                <strong>80.7K</strong>
                <span>лайков</span>
              </div>
              <div className="stat-pill">
                <strong>5</strong>
                <span>подписок</span>
              </div>
            </div>
            <div className="listo-accounts" aria-label="Аккаунты Ласточки">
              <p className="listo-accounts-label">все мои страницы</p>
              <div className="listo-account-list">
                <a className="listo-account listo-account--live" href="https://www.tiktok.com/@leaf_life" target="_blank" rel="noreferrer">
                  <span className="account-symbol">✦</span>
                  <span><strong>@leaf_life</strong><small>для стримов</small></span>
                  <ArrowUpRight size={15} />
                </a>
                <a className="listo-account" href="https://www.tiktok.com/@motya_rbx" target="_blank" rel="noreferrer">
                  <span className="account-symbol">↗</span>
                  <span><strong>@motya_rbx</strong><small>основной аккаунт</small></span>
                  <ArrowUpRight size={15} />
                </a>
                <a className="listo-account" href="https://www.tiktok.com/@lakritsa_rbx" target="_blank" rel="noreferrer">
                  <span className="account-symbol">↗</span>
                  <span><strong>@lakritsa_rbx</strong><small>основной аккаунт</small></span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
          <div className="listo-fact-note">
            <span className="fact-label">статус</span>
            <strong>LIVE</strong>
            <small>в моменте</small>
            <span className="fact-flower">❀</span>
          </div>
        </section>

        <section className="listo-notes" id="notes" aria-labelledby="notes-title">
          <div className="listo-notes-heading">
            <div>
              <div className="listo-section-number">03 / засушенные лепестки</div>
              <h2 id="notes-title">
                избранные
                <br />
                <span>заметки</span>
              </h2>
            </div>
            <p>
              Карточки с настроением дней, эфиров и коротких историй, которые
              остались в памяти.
            </p>
            <ArrowDownRight className="listo-heading-arrow" size={41} strokeWidth={1.3} />
          </div>
          <div className="listo-entry-grid">
            {entries.map((entry) => {
              const isLiked = liked.includes(entry.id);
              return (
                <article
                  key={entry.id}
                  className={`listo-entry-card ${entry.className}`}
                  style={{ "--entry-rotate": entry.rotate } as CSSProperties}
                >
                  <div className="entry-image">
                    <img src={entry.image} alt="" />
                    <span className="entry-stamp" />
                    <span className="entry-number">{entry.number}</span>
                    <span className="entry-mark">✿</span>
                  </div>
                  <div className="entry-body">
                    <div className="entry-meta">
                      <span>{entry.eyebrow}</span>
                      <button
                        type="button"
                        className={`entry-like ${isLiked ? "is-liked" : ""}`}
                        aria-label={isLiked ? "Убрать сердечко" : "Поставить сердечко"}
                        aria-pressed={isLiked}
                        onClick={() => toggleLike(entry.id)}
                      >
                        <Heart size={17} fill={isLiked ? "currentColor" : "none"} />
                      </button>
                    </div>
                    <h3>{entry.title}</h3>
                    <p>{entry.copy}</p>
                    <a className="entry-link" href="#live">
                      читать далее <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="listo-live" id="live" aria-labelledby="live-title">
          <div className="listo-live-sticker">
            <SunMedium size={21} />
            <strong>TIKTOK</strong>
            <small>@leaf_life<br />ласточка</small>
          </div>
          <div className="listo-live-copy">
            <div className="listo-section-number">04 / открытая дверь</div>
            <h2 id="live-title">
              встретимся
              <br />
              <span>в эфире</span>
            </h2>
            <p>
              Стримы проходят в <strong>@leaf_life</strong>, а основные страницы Ласточки —
              <strong>@motya_rbx</strong> и <strong>@lakritsa_rbx</strong>. Заходи туда,
              где сейчас идёт история.
            </p>
            <a
              className="listo-button listo-button--rose"
              href="https://www.tiktok.com/@leaf_life"
              target="_blank"
              rel="noreferrer"
            >
              открыть TikTok Ласточки <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="listo-live-aside">
            <FileText size={22} />
            <p>страница дневника<br />обновляется</p>
            <span>✿ leaf life</span>
          </div>
          <span className="listo-live-blossom">🌸</span>
        </section>
      </main>

      <footer className="listo-footer">
        <div className="listo-footer-top">
          <a className="listo-footer-brand" href="#top">
            <img src={assets.avatar} alt="" />
            <span>ласточка / дневник</span>
          </a>
            <p>стримы — @leaf_life · основные аккаунты — @motya_rbx и @lakritsa_rbx</p>
          <a
            className="listo-footer-tiktok"
            href="https://www.tiktok.com/@leaf_life"
            target="_blank"
            rel="noreferrer"
          >
            @leaf_life <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="listo-footer-bottom">
          <span>made with botanical paper &amp; soft light</span>
          <span>© 2026 Ласточка (@leaf_life)</span>
          <a href="#top">наверх ↑</a>
        </div>
      </footer>
    </div>
  );
}

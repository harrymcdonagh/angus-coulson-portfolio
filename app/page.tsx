import Image from "next/image";
import { Mail, Linkedin, ExternalLink, ArrowRight, Mic } from "lucide-react";
import Navigation from "./components/Navigation";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const publishedWork = [
  {
    outlet: "Daily Mail Sport",
    color: "#004db3",
    date: "January 2026",
    title:
      "The World Cup-winning captain in Uzbekistan, the Premier League cult hero managing Pakistan, and the Man United treble winner in charge of Trinidad and Tobago",
    url: "https://www.dailymail.co.uk/sport/football/article-15302859/The-World-Cup-winning-captain-Uzbekistan-Premier-League-cult-hero-managing-Pakistan-Man-United-treble-winner-charge-Trinidad-Tobago-legends-managing-unexpected-roles.html",
    description:
      "A deep-dive feature tracing the unlikely post-playing careers of football legends who found themselves managing in the world\u2019s most unexpected corners.",
  },
  {
    outlet: "Daily Mail Sport",
    color: "#004db3",
    date: "January 2026",
    title:
      "Morgan Rogers earns a spot in attack alongside two England team-mates, Aston Villa dominate midfield \u2014 and which key Arsenal star is SNUBBED?",
    url: "https://www.dailymail.co.uk/sport/football/article-15422363/Morgan-Rogers-earns-spot-attack-alongside-two-England-team-mates-Aston-Villa-dominate-midfield-key-Arsenal-star-SNUBBED-Stats-boffins-reveal-combined-Gunners-vs-Villa-XI.html",
    description:
      "A data-driven breakdown of the combined Arsenal vs Aston Villa XI ahead of their Premier League clash, revealing which stars made the cut \u2014 and who missed out.",
  },
  {
    outlet: "The Spurs Web",
    color: "#132257",
    date: null,
    title:
      "10 players Tottenham should move on to raise \u00a3120m summer war chest",
    url: "https://www.spurs-web.com/spurs-news/10-players-tottenham-should-look-to-move-on-to-raise-120m-this-summer/",
    description:
      "An analytical look at the Spurs players who could be moved on to fund a major summer rebuild.",
  },
  {
    outlet: "The Spurs Web",
    color: "#132257",
    date: null,
    title:
      "Cristian Romero out, Luka Vuskovic in? Why Tottenham need a defensive change",
    url: "https://www.spurs-web.com/tottenham-hotspur-fan-articles/cristian-romero-out-luka-vuskovic-in-why-tottenham-need-a-defensive-change/",
    description:
      "Making the case for a generational defensive shift at Spurs, weighing up the evidence for and against.",
  },
  {
    outlet: "The Spurs Web",
    color: "#132257",
    date: null,
    title:
      "Mauricio Pochettino\u2019s iconic 2016/17 Tottenham team: Where are they now?",
    url: "https://www.spurs-web.com/spurs-news/mauricio-pochettinos-iconic-2016-17-tottenham-team-where-are-they-now/",
    description:
      "A nostalgic yet forensic look at what became of Pochettino\u2019s much-loved Spurs squad, tracking each player\u2019s journey since.",
  },
];

const additionalWork = [
  {
    outlet: "Concrete UEA",
    color: "#6b8e23",
    title: "Foreign students exploited by housing agencies",
    url: "https://concreteuea.co.uk/2025/11/19/foreign-students-exploited-by-housing-agencies/",
    description:
      "An investigative piece uncovering how international students at UEA were being targeted and exploited by unscrupulous letting agents.",
    badge: null,
  },
  {
    outlet: "Broadcast",
    color: "#d4a017",
    title: "Norwich vs West Brom \u2014 Post-match report",
    url: "https://drive.google.com/file/d/13r5UlO0TyXW40mWOs1CiBmZvmfobsWsg/view?usp=drive_link",
    description:
      "A broadcast-style post-match report from Norwich City vs West Brom, demonstrating on-the-ground reporting and delivery skills.",
    badge: "Broadcast",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ============================================================ */}
      {/*  HERO — Pure typographic composition                         */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background gradient atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0e0c] to-[#0a0a0a]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/[0.03] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pt-24">
          {/* Dateline */}
          <div className="anim-fade delay-200 dateline mb-16">
            Portfolio &middot; 2026
          </div>

          {/* Name composition */}
          <div className="mb-10">
            <h1
              className="anim-reveal-name text-[clamp(3.5rem,12vw,11rem)] font-black leading-[0.85] tracking-[-0.04em] text-cream"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Angus
              <br />
              Coulson
            </h1>
          </div>

          {/* Accent line */}
          <div className="anim-expand-line delay-800 h-[2px] bg-accent w-32 mb-10" />

          {/* Subtitle block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
            <div className="md:col-span-5">
              <p
                className="anim-slide-up delay-600 text-[1.35rem] sm:text-[1.6rem] leading-[1.35] text-cream/80 italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Telling stories that matter &mdash; from the pitch to the page.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-7">
              <p className="anim-slide-up delay-700 text-sm text-muted-light leading-relaxed">
                MA Broadcast &amp; Digital Journalism
                <br />
                University of East Anglia
              </p>
              <div className="anim-fade delay-1000 flex gap-4 mt-6">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-accent hover:text-accent-hover transition-colors"
                >
                  View work
                  <ArrowRight size={14} />
                </a>
                <span className="text-border-light select-none">/</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-light hover:text-cream transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative rule */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="h-px bg-border" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ABOUT                                                       */}
      {/* ============================================================ */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section masthead */}
          <div className="flex items-center gap-4 mb-14">
            <span className="section-num">01</span>
            <div className="h-px flex-1 bg-border" />
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">
              About
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Image column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* REPLACE: /public/images/profile.jpg — Recommended: 600x600 square headshot */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent z-10" />
                <Image
                  src="/images/profile.jpg"
                  alt="Angus Coulson — profile photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* Placeholder overlay — remove once real photo is added */}
                <div className="absolute inset-0 bg-[#181614] flex items-center justify-center text-center p-6">
                  <span className="text-xs text-muted tracking-wide">
                    [Profile Photo — replace with profile.jpg]
                  </span>
                </div>
              </div>

              {/* REPLACE: /public/images/at-work.jpg — Recommended: 800x600 landscape, action shot */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/at-work.jpg"
                  alt="Angus Coulson at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* Placeholder overlay — remove once real photo is added */}
                <div className="absolute inset-0 bg-[#1a1816] flex items-center justify-center text-center p-6">
                  <span className="text-xs text-muted tracking-wide">
                    [At Work Photo — replace with at-work.jpg]
                  </span>
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="lg:col-span-7 lg:col-start-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.02em] mb-10 text-cream"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Journalist. Storyteller.
                <br />
                <span className="text-accent">Sports &amp; digital media.</span>
              </h2>

              <div className="red-rule space-y-5 text-[1.05rem] text-cream/70 leading-[1.75]">
                <p>
                  Angus Coulson is a postgraduate journalism student at the
                  University of East Anglia, where he is completing an MA in
                  Broadcast &amp; Digital Journalism. With published bylines for{" "}
                  <strong className="text-cream font-semibold">
                    Daily Mail Sport
                  </strong>{" "}
                  and{" "}
                  <strong className="text-cream font-semibold">
                    The Spurs Web
                  </strong>
                  , he has already established a track record of producing
                  compelling digital content for national and specialist outlets.
                </p>
                <p>
                  His work spans long-form features, data-driven analysis, and
                  investigative reporting &mdash; with a particular focus on
                  football and the business of sport. Equally at home behind a
                  microphone or a keyboard, Angus brings broadcast confidence and
                  editorial rigour to every story he tells.
                </p>
                <p>
                  He is actively seeking opportunities in broadcast and digital
                  sports journalism, and is available for freelance commissions,
                  newsroom placements, and full-time roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PUBLISHED WORK                                              */}
      {/* ============================================================ */}
      <section id="work" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section masthead */}
          <div className="flex items-center gap-4 mb-6">
            <span className="section-num">02</span>
            <div className="h-px flex-1 bg-border" />
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">
              Published Work
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4 text-cream"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Selected articles
          </h2>
          <p className="text-sm text-muted-light mb-14 max-w-md">
            Published features and analysis for national outlets and specialist
            sports media.
          </p>

          {/* Thick top rule like a broadsheet section */}
          <div className="border-t-[3px] border-cream mb-0">
            {publishedWork.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-entry block border-b border-border group"
              >
                <div className="grid grid-cols-12 gap-4 py-6 sm:py-8">
                  {/* Number */}
                  <div className="col-span-2 sm:col-span-1">
                    <span
                      className="text-3xl sm:text-4xl font-light text-border-light group-hover:text-accent transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="col-span-10 sm:col-span-11">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="text-[0.6rem] font-bold uppercase tracking-[0.2em] px-2.5 py-1"
                        style={{ backgroundColor: article.color, color: "#fff" }}
                      >
                        {article.outlet}
                      </span>
                      {article.date && (
                        <span className="text-[0.65rem] text-muted tracking-wide">
                          {article.date}
                        </span>
                      )}
                    </div>

                    <h3
                      className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug mb-3 text-cream group-hover:text-accent transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-light leading-relaxed max-w-2xl mb-3">
                      {article.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.15em] text-muted group-hover:text-accent transition-colors duration-300">
                      Read article
                      <ExternalLink size={11} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ADDITIONAL WORK                                             */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section masthead */}
          <div className="flex items-center gap-4 mb-6">
            <span className="section-num">03</span>
            <div className="h-px flex-1 bg-border" />
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">
              Additional Work
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4 text-cream"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Student journalism &amp; broadcast
          </h2>
          <p className="text-sm text-muted-light mb-14 max-w-md">
            Investigative reporting and broadcast work produced during
            postgraduate study.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-[3px] border-cream">
            {additionalWork.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`article-entry block border-b border-border p-6 sm:p-8 group ${
                  i === 1 ? "md:border-l md:border-l-border" : ""
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-[0.6rem] font-bold uppercase tracking-[0.2em] px-2.5 py-1"
                    style={{ backgroundColor: article.color, color: article.badge ? "#000" : "#fff" }}
                  >
                    {article.outlet}
                  </span>
                  {article.badge && (
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#d4a017] text-[#0a0a0a] flex items-center gap-1">
                      <Mic size={10} />
                      {article.badge}
                    </span>
                  )}
                </div>

                <h3
                  className="text-lg sm:text-xl font-semibold leading-snug mb-3 text-cream group-hover:text-accent transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {article.title}
                </h3>

                <p className="text-sm text-muted-light leading-relaxed mb-4">
                  {article.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.15em] text-muted group-hover:text-accent transition-colors duration-300">
                  {article.badge ? "Listen / Watch" : "Read article"}
                  <ExternalLink size={11} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONTACT                                                     */}
      {/* ============================================================ */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section masthead */}
          <div className="flex items-center gap-4 mb-14">
            <span className="section-num">04</span>
            <div className="h-px flex-1 bg-border" />
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted">
              Contact
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-6">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-cream mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Let&apos;s work
                <br />
                together.
              </h2>
              <p className="text-[1.05rem] text-cream/60 leading-relaxed max-w-md">
                Whether you&apos;re an editor with a commission, a newsroom with
                an opening, or a collaborator with a story to tell &mdash;
                I&apos;d love to hear from you.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-4">
              <a
                href="mailto:anguscoulson1@gmail.com"
                className="group flex items-center gap-5 py-6 border-t border-b border-border hover:border-accent transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-border-light group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center transition-all duration-300">
                  <Mail size={18} className="text-muted-light group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted mb-1">
                    Email
                  </p>
                  <p className="text-base text-cream group-hover:text-accent transition-colors duration-300">
                    anguscoulson1@gmail.com
                  </p>
                </div>
                <ArrowRight size={16} className="ml-auto text-border-light group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/angus-coulson-34701435b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 py-6 border-b border-border hover:border-accent transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-border-light group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center transition-all duration-300">
                  <Linkedin size={18} className="text-muted-light group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted mb-1">
                    LinkedIn
                  </p>
                  <p className="text-base text-cream group-hover:text-accent transition-colors duration-300">
                    Angus Coulson
                  </p>
                </div>
                <ArrowRight size={16} className="ml-auto text-border-light group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                      */}
      {/* ============================================================ */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <span
                className="text-base font-bold tracking-[-0.01em] text-cream/40"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Angus Coulson
              </span>
              <span className="hidden sm:block text-border-light text-xs select-none">
                /
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.15em] text-muted">
                MA Broadcast &amp; Digital Journalism, UEA
              </span>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="mailto:anguscoulson1@gmail.com"
                className="text-muted hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/angus-coulson-34701435b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-[0.6rem] text-muted/60 tracking-wider text-center sm:text-left">
              &copy; 2026 Angus Coulson. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

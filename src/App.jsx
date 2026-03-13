import { useEffect, useState } from "react";

const navigationItems = [
  { label: "서비스", href: "#service" },
  { label: "솔루션", href: "#solution" },
  { label: "가격", href: "#pricing" },
  { label: "파트너", href: "#partners" },
  { label: "문의", href: "#contact" },
];

const heroSignals = ["사진 한 장이면 진단 시작", "검증 기사 역경매 입찰", "관리 SaaS 오픈 준비중"];
const heroTickerItems = [
  "관리 SaaS 사전 신청 접수 중",
  "운영 대시보드 베타 준비중",
  "파트너 기사 검증 진행 중",
  "오픈 알림 신청 가능",
];
const launchSteps = [
  { title: "사전 신청 접수", meta: "관리 SaaS 관심 고객을 먼저 받고 있어요." },
  { title: "파트너 기사 검증", meta: "서비스 품질 기준을 점검하고 있어요." },
  { title: "베타 오픈", meta: "사전 신청 고객부터 순차 오픈할 예정이에요." },
  { title: "정식 출시", meta: "운영 대시보드를 전체 공개할 예정이에요." },
];

const coreFeatureCards = [
  {
    title: "AI 손상 진단",
    description: "사진을 올리면 원인과 우선순위를 바로 안내합니다.",
    icon: DiagnosisIcon,
  },
  {
    title: "역경매 입찰",
    description: "검증된 기사들이 경쟁 입찰해 합리적인 가격을 만듭니다.",
    icon: BidIcon,
  },
  {
    title: "임대관리 SaaS (오픈 예정)",
    description: "운영 대시보드는 현재 오픈 준비중이며 사전 신청을 받고 있습니다.",
    icon: DashboardIcon,
  },
];

const problemPoints = [
  {
    title: "가격 불투명",
    description: "기사마다 천차만별인 견적, 기준이 없습니다.",
  },
  {
    title: "정보 비대칭",
    description: "전문성 검증이 어려워 선택이 불안합니다.",
  },
  {
    title: "관리 비효율",
    description: "관리업체는 수백 호실을 수동으로 운영합니다.",
  },
  {
    title: "신뢰 부족",
    description: "소비자의 82%가 비용 불합리를 경험했습니다.",
  },
];

const solutionCards = [
  {
    title: "AI 진단 시스템",
    description: "사진 기반 파손 분석으로 빠르게 문제를 정의합니다.",
    icon: DiagnosisIcon,
  },
  {
    title: "역경매 입찰 시스템",
    description: "숙련 기사 경쟁 입찰로 수리비를 더 투명하게 만듭니다.",
    icon: BidIcon,
  },
  {
    title: "임대관리 SaaS (오픈 예정)",
    description: "건물, 호실, 민원 통합 관리는 베타 오픈 이후 순차 제공됩니다.",
    icon: DashboardIcon,
  },
  {
    title: "주거 안심 구독",
    description: "정기 점검과 수리 보장으로 리스크를 낮춥니다.",
    icon: ShieldIcon,
  },
  {
    title: "수리 데이터 자산화",
    description: "모든 수리 이력을 데이터로 축적해 자산 가치를 관리합니다.",
    icon: DatabaseIcon,
  },
];

const steps = [
  { title: "사진 업로드", description: "문제 사진과 증상을 등록해요.", icon: CameraIcon },
  { title: "AI 파손 진단", description: "원인과 예상 작업 범위를 분석해요.", icon: SparkIcon },
  { title: "기사 입찰", description: "가격·일정·평판을 비교해 선택해요.", icon: BidIcon },
  { title: "수리 진행", description: "파트너 기사와 작업을 진행해요.", icon: WrenchIcon },
  { title: "데이터 기록", description: "완료 내역이 자산 기록으로 남아요.", icon: DatabaseIcon },
];

const ecosystemCards = [
  {
    title: "User App",
    subtitle: "AI repair diagnosis",
    description: "일반 사용자는 사진 촬영부터 견적 비교까지 빠르게 처리합니다.",
    icon: PhoneIcon,
    points: ["사진 등록", "AI 결과", "입찰 비교"],
  },
  {
    title: "Property Manager SaaS",
    subtitle: "coming soon",
    description: "임대관리용 대시보드는 현재 오픈 전이며, 사전 신청 고객부터 순차 안내됩니다.",
    icon: DashboardIcon,
    points: ["사전 신청", "베타 우선 안내", "오픈 후 자동화 제공"],
  },
  {
    title: "Technician App",
    subtitle: "repair bidding system",
    description: "수리기사는 검증된 요청에 입찰하고 평판을 누적합니다.",
    icon: PartnerIcon,
    points: ["요청 확인", "입찰 참여", "완료 보고"],
  },
];

const audienceCards = [
  {
    title: "부동산 임대관리 업체",
    description: "관리 SaaS 오픈 시 대량 호실 운영 자동화와 비용 통제를 지원합니다.",
  },
  {
    title: "건물주 및 임대인",
    description: "수리 이력과 예방 정비로 자산 가치를 지킵니다.",
  },
  {
    title: "수리기사",
    description: "검증된 일감을 안정적으로 확보하고 평판을 관리합니다.",
  },
  {
    title: "일반 사용자",
    description: "복잡한 수리 과정을 사진 한 장으로 시작합니다.",
  },
];

const trustHighlights = [
  { value: "58조", label: "대한민국 주거 수리 시장 규모" },
  { value: "82%", label: "비용 불합리 경험 응답" },
  { value: "3클릭", label: "진단 시작까지 최소 동선" },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "월 19,000원",
    target: "1인 가구 대상",
    features: ["AI 진단 20건", "기본 수리비 보장", "월간 점검 리포트"],
  },
  {
    name: "Standard",
    price: "월 29,000원",
    target: "자가 주택",
    featured: true,
    features: ["AI 진단 무제한", "기사 입찰 비교", "수리 이력 자동 관리"],
  },
  {
    name: "Premium",
    price: "월 49,000원",
    target: "다가구 / 건물주",
    features: ["복수 호실 통합 관리(오픈 예정)", "운영 자동화 워크플로(예정)", "우선 대응 지원"],
  },
];

const marketVisionPoints = [
  {
    title: "표준화",
    description: "수리 견적 기준을 데이터로 맞춥니다.",
    icon: GridIcon,
  },
  {
    title: "자동화",
    description: "수리와 임대 운영을 하나의 흐름으로 연결합니다.",
    icon: NetworkIcon,
  },
  {
    title: "신뢰",
    description: "임대인, 기사, 사용자 모두 같은 기록을 봅니다.",
    icon: ShieldIcon,
  },
];

function getRevealClass(index, variant = "reveal--up") {
  return `reveal ${variant} delay-${(index % 4) + 1}`;
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="site">
      <header className="topbar">
        <div className="container topbar__inner reveal reveal--scale is-visible">
          <a className="brand" href="#home" onClick={closeMobileMenu}>
            <span className="brand__symbol brand__symbol--image" aria-hidden="true">
              <img src="/logo.png" alt="" />
            </span>
            <span className="brand__copy">
              <strong>수리모아</strong>
              <span>AI 주거 관리 플랫폼</span>
            </span>
          </a>

          <nav className={`navigation ${isMobileMenuOpen ? "is-open" : ""}`}>
            {navigationItems.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbar__actions">
            <a className="button button--secondary topbar__cta" href="#cta">
              사전 신청
            </a>
            <button
              type="button"
              className={`menu-toggle ${isMobileMenuOpen ? "is-open" : ""}`}
              aria-expanded={isMobileMenuOpen}
              aria-label="메뉴 열기"
              onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="section hero" id="home">
          <div className="container hero__grid">
            <div className="hero__copy reveal reveal--left is-visible">
              <span className="eyebrow">Proptech + AI SaaS</span>
              <h1>AI가 만드는 새로운 주거 관리 표준</h1>
              <p>
                수리 견적의 불신을 없애고
                <br />
                AI와 데이터로 투명한 주거 관리 생태계를 만듭니다.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#service">
                  서비스 소개
                </a>
                <a className="button button--secondary" href="#cta">
                  오픈 알림 받기
                </a>
              </div>

              <div className="hero__signals">
                {heroSignals.map((signal) => (
                  <span key={signal} className="signal-chip">
                    {signal}
                  </span>
                ))}
              </div>

              <div className="hero-ticker reveal reveal--up delay-3 is-visible" aria-label="서비스 준비 현황">
                <div className="hero-ticker__track">
                  {[...heroTickerItems, ...heroTickerItems].map((item, index) => (
                    <span key={`${item}-${index}`}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <HeroDashboard />
          </div>
        </section>

        <section className="section section--soft" id="service">
          <div className="container">
            <SectionHeading
              className="section-heading--single-line"
              label="핵심 기능 소개"
              title="사진 한 장이면 수리 흐름이 시작됩니다"
              description="어디를 눌러야 할지 고민하지 않도록 핵심 동선을 단순하게 설계했습니다."
            />

            <div className="core-feature-grid">
              {coreFeatureCards.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className={`surface-card core-feature-card ${getRevealClass(index, "reveal--up")}`}
                  >
                    <span className="icon-token" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="problem">
          <div className="container">
            <SectionHeading
              className="section-heading--single-line"
              label="문제 정의"
              title="왜 주거 수리 시장은 비효율적일까?"
              description="수리모아는 시장의 구조적 문제를 먼저 해결하는 데 집중합니다."
            />

            <div className="problem-grid">
              {problemPoints.map((point, index) => (
                <article
                  key={point.title}
                  className={`surface-card problem-card ${getRevealClass(index, "reveal--up")}`}
                >
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="solution">
          <div className="container">
            <SectionHeading
              label="솔루션"
              title="수리모아의 해결 방식"
              description="SaaS로 관리하고, 입찰로 수리하며, 구독으로 안심합니다."
            />

            <div className="concept-banner reveal reveal--scale">
              <span>Core Concept</span>
              <strong>SaaS로 관리하고, 입찰로 수리하며, 구독으로 안심하다.</strong>
            </div>

            <div className="solution-grid">
              {solutionCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className={`surface-card solution-card ${getRevealClass(index, "reveal--up")}`}
                  >
                    <span className="icon-token" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="demo">
          <div className="container">
            <SectionHeading
              className="section-heading--single-line"
              label="사용 방법"
              title="복잡한 수리도 5단계면 충분합니다"
              description="한 화면에서 한 행동만 하도록 동선을 단순화했습니다."
            />

            <div className="step-grid">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article key={step.title} className={`surface-card step-card ${getRevealClass(index)}`}>
                    <span className="step-card__number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="icon-token" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="partners">
          <div className="container">
            <SectionHeading
              className="section-heading--single-line"
              label="고객 신뢰 요소"
              title="모든 참여자를 위한 하나의 플랫폼"
              description="부동산 임대관리 업체, 건물주, 수리기사, 일반 사용자가 같은 데이터로 연결됩니다."
            />

            <div className="ecosystem-grid">
              {ecosystemCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className={`surface-card ecosystem-card ${getRevealClass(index, "reveal--up")}`}
                  >
                    <span className="icon-token ecosystem-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="mini-label">{card.subtitle}</span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="tag-list">
                      {card.points.map((point) => (
                        <span key={point} className="tag">
                          {point}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="audience-grid">
              {audienceCards.map((audience, index) => (
                <article
                  key={audience.title}
                  className={`surface-card audience-card ${getRevealClass(index, "reveal--up")}`}
                >
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                </article>
              ))}
            </div>

            <div className="trust-grid">
              {trustHighlights.map((item, index) => (
                <article key={item.label} className={`surface-card trust-card ${getRevealClass(index, "reveal--scale")}`}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <SectionHeading
              label="가격"
              title="상황에 맞는 구독 플랜"
              description="모든 플랜은 카드 UI처럼 직관적으로 비교하고 바로 시작할 수 있습니다."
            />

            <div className="pricing-grid">
              {pricingPlans.map((plan, index) => (
                <article
                  key={plan.name}
                  className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""} ${getRevealClass(index, "reveal--scale")}`}
                >
                  <div className="pricing-card__header">
                    <span className="mini-label">{plan.featured ? "Recommended" : "Plan"}</span>
                    <h3>{plan.name}</h3>
                    <strong>{plan.price}</strong>
                    <p>{plan.target}</p>
                  </div>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a className={`button ${plan.featured ? "button--primary" : "button--secondary"}`} href="#cta">
                    선택하기
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="vision">
          <div className="container">
            <div className="market-panel reveal reveal--scale">
              <span className="eyebrow">Market Vision</span>
              <h2>대한민국 주거 수리 시장 58조, 수리모아의 목표는 AI 기반 주거 관리 인프라입니다.</h2>
              <p>수리모아는 단기 수리 중개를 넘어 장기 자산 운영 체계를 만드는 SaaS 회사입니다.</p>

              <div className="market-points">
                {marketVisionPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <article key={point.title} className={getRevealClass(index, "reveal--up")}>
                      <span className="icon-token" aria-hidden="true">
                        <Icon />
                      </span>
                      <strong>{point.title}</strong>
                      <span>{point.description}</span>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section" id="cta">
          <div className="container">
            <div className="cta-panel reveal reveal--scale">
              <span className="eyebrow eyebrow--light">Start Now</span>
              <h2>주거 관리의 미래를 경험하세요</h2>
              <p>1초 만에 이해되고, 3번 클릭 안에 시작되는 앱 같은 웹 경험을 제공합니다.</p>
              <div className="cta-panel__actions">
                <a
                  className="button button--light"
                  href="mailto:chiomin0128@gmail.com?subject=%EB%AC%B4%EB%A3%8C%20SaaS%20%EC%8B%A0%EC%B2%AD"
                >
                  SaaS 사전 신청
                </a>
                <a
                  className="button button--outline-light"
                  href="mailto:chiomin0128@gmail.com?subject=%ED%8C%8C%ED%8A%B8%EB%84%88%20%EA%B8%B0%EC%82%AC%20%EB%93%B1%EB%A1%9D"
                >
                  파트너 기사 등록
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container footer__inner reveal reveal--up">
          <div className="footer__brand">
            <a className="brand" href="#home">
              <span className="brand__symbol brand__symbol--image" aria-hidden="true">
                <img src="/logo.png" alt="" />
              </span>
              <span className="brand__copy">
                <strong>SuriMoa</strong>
                <span>Proptech + AI SaaS</span>
              </span>
            </a>
            <p>AI로 더 쉬워진 주택 수리 서비스, 수리모아.</p>
            <a className="footer__mail" href="mailto:chiomin0128@gmail.com">
              chiomin0128@gmail.com
            </a>
          </div>

          <div className="footer__grid">
            <div className="footer__column">
              <span className="footer__column-title">바로가기</span>
              <a href="#service">서비스</a>
              <a href="#solution">솔루션</a>
              <a href="#pricing">가격</a>
              <a href="#partners">파트너</a>
            </div>

            <div className="footer__column">
              <span className="footer__column-title">회사 정보</span>
              <a href="#home">회사 소개</a>
              <a href="#contact">개인정보처리방침</a>
              <a href="#contact">이용약관</a>
              <a href="mailto:chiomin0128@gmail.com">Contact</a>
            </div>

            <div className="footer__column footer__column--highlight">
              <span className="footer__column-title">사전 신청</span>
              <p>관리 SaaS 오픈 소식을 가장 먼저 받아보세요.</p>
              <a className="button button--secondary footer__cta" href="#cta">
                오픈 알림 신청
              </a>
            </div>
          </div>
        </div>

        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} SuriMoa. All rights reserved.</span>
          <span>Made for Better Housing Operations</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ label, title, description, className = "" }) {
  return (
    <div className={`section-heading reveal reveal--up ${className}`.trim()}>
      <span className="section-heading__label">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function HeroDashboard() {
  return (
    <aside className="hero-dashboard reveal reveal--right delay-2 is-visible">
      <div className="hero-dashboard__panel">
        <div className="hero-dashboard__header">
          <strong>수리모아 운영 대시보드 (오픈 예정)</strong>
          <span>준비 상태</span>
        </div>

        <div className="hero-dashboard__stats">
          <article>
            <span>현재 상태</span>
            <strong>오픈 준비중</strong>
          </article>
          <article>
            <span>신청 방식</span>
            <strong>사전 신청</strong>
          </article>
          <article>
            <span>우선 대상</span>
            <strong>임대관리 업체</strong>
          </article>
        </div>

        <div className="hero-dashboard__steps" aria-label="서비스 오픈 단계">
          {launchSteps.map((item, index) => (
            <article key={item.title} className="hero-dashboard__step">
              <span className="hero-dashboard__step-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="hero-dashboard__step-copy">
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="m12 3 1.9 4.4L18.3 9l-4.4 1.9L12 15.3l-1.9-4.4L5.7 9l4.4-1.6L12 3Z" />
      <path d="m18.6 14.2.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8.8-1.8Z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 8h4l1.4-2h5.2L16 8h4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="m14 6 4 4" />
      <path d="m6.6 17.4 7.2-7.2 3.6 3.6-7.2 7.2H6.6v-3.6Z" />
      <path d="m12.2 7.8 1.8-1.8a2.7 2.7 0 0 1 3.8 3.8L16 11.6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="7" y="2.8" width="10" height="18.4" rx="2.2" />
      <path d="M10 6.2h4" />
      <circle cx="12" cy="17.6" r="0.8" />
    </svg>
  );
}

function PartnerIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M16 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M4.5 19a4.5 4.5 0 0 1 7 0" />
      <path d="M13 19a3.8 3.8 0 0 1 6 0" />
    </svg>
  );
}

function DiagnosisIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 11a8 8 0 1 1 14.2 5L21 18.8 18.8 21l-2.8-2.8A8 8 0 0 1 4 11Z" />
      <path d="M9 11h6M12 8v6" />
    </svg>
  );
}

function BidIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 4 4 8l8 4 8-4-8-4Z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="4" width="8" height="7" rx="2" />
      <rect x="13" y="4" width="8" height="12" rx="2" />
      <rect x="3" y="13" width="8" height="7" rx="2" />
      <rect x="13" y="18" width="8" height="2" rx="1" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3 5 6.5v5.8c0 4.9 3.4 7.7 7 8.8 3.6-1.1 7-3.9 7-8.8V6.5L12 3Z" />
      <path d="m9.4 12.3 1.8 1.8 3.5-3.5" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="4" width="6" height="6" rx="1.4" />
      <rect x="14" y="4" width="6" height="6" rx="1.4" />
      <rect x="4" y="14" width="6" height="6" rx="1.4" />
      <rect x="14" y="14" width="6" height="6" rx="1.4" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M10.7 7 7.4 15.8" />
      <path d="M13.3 7 16.6 15.8" />
      <path d="M8.2 18h7.6" />
    </svg>
  );
}

export default App;

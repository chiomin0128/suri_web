import { useEffect, useState } from "react";

const navigationItems = [
  { label: "서비스 소개", href: "#overview" },
  { label: "AI 기술", href: "#ai-tech" },
  { label: "가격", href: "#pricing" },
  { label: "파트너", href: "#partners" },
  { label: "문의", href: "#contact" },
];

const heroSignals = [
  "사진 기반 AI 진단",
  "기사 입찰 비교",
  "운영 대시보드",
  "수리 이력 자동 저장",
];

const trustSignals = [
  "고객 서비스 홍보",
  "임대인과 관리업체 유입",
  "수리기사 파트너 모집",
  "데이터 기반 신뢰 확보",
];

const painPoints = [
  {
    title: "견적 기준 부재",
    description: "같은 문제도 기사마다 견적이 달라 고객은 적정 가격을 판단하기 어렵습니다.",
  },
  {
    title: "수동 운영의 한계",
    description: "관리업체는 수백 호실을 엑셀과 메신저로 관리하며 운영 효율이 떨어집니다.",
  },
  {
    title: "이력 관리 공백",
    description: "수리 이력이 체계적으로 남지 않아 재발 이슈와 자산 상태를 추적하기 어렵습니다.",
  },
  {
    title: "책임 소재 불명확",
    description: "수리 이후 문제가 다시 발생해도 누가 어떤 범위까지 책임지는지 불투명합니다.",
  },
  {
    title: "신뢰의 비표준화",
    description: "진단, 견적, 시공, 사후 기록이 연결되지 않아 전체 경험의 신뢰가 분산됩니다.",
  },
];

const painPointSignals = [
  {
    title: "견적",
    description: "가격 기준이 제각각입니다.",
    icon: BidIcon,
  },
  {
    title: "운영",
    description: "관리 도구가 분산되어 있습니다.",
    icon: DashboardIcon,
  },
  {
    title: "이력",
    description: "수리 기록이 체계적으로 남지 않습니다.",
    icon: DatabaseIcon,
  },
];

const painPointFlow = [
  {
    title: "진단",
    description: "원인 파악",
    icon: DiagnosisIcon,
  },
  {
    title: "견적",
    description: "가격 비교",
    icon: BidIcon,
  },
  {
    title: "입찰",
    description: "기사 매칭",
    icon: PartnerIcon,
  },
  {
    title: "기록",
    description: "이력 저장",
    icon: DatabaseIcon,
  },
];

const solutionCards = [
  {
    title: "AI 수리 진단",
    description: "사진 한 장으로 예상 원인과 작업 범위를 빠르게 안내합니다.",
    icon: DiagnosisIcon,
  },
  {
    title: "기사 입찰 시스템",
    description: "검증된 기사 견적을 비교해 더 합리적인 선택을 돕습니다.",
    icon: BidIcon,
  },
  {
    title: "임대관리 SaaS",
    description: "건물, 호실, 민원, 수리 현황을 하나의 화면에서 관리합니다.",
    icon: DashboardIcon,
  },
  {
    title: "주거 안심 구독",
    description: "정기 점검과 보장형 서비스로 거주 안정성을 높입니다.",
    icon: ShieldIcon,
  },
  {
    title: "수리 데이터 관리",
    description: "비용, 사진, 완료 보고를 자동 저장해 자산 이력을 남깁니다.",
    icon: DatabaseIcon,
  },
];

const solutionSummaryPoints = [
  { label: "빠른 AI 진단", icon: SparkIcon },
  { label: "투명 견적 비교", icon: BidIcon },
  { label: "운영 대시보드", icon: DashboardIcon },
  { label: "자동 이력 저장", icon: DatabaseIcon },
];

const aiTechnologyCards = [
  {
    label: "Computer Vision",
    title: "사진 기반 파손 분석",
    description: "이미지와 수리 이력으로 손상 유형을 빠르게 분류합니다.",
  },
  {
    label: "Pricing Intelligence",
    title: "견적 데이터 표준화",
    description: "누적 공정 데이터를 바탕으로 가격 기준을 더 명확하게 제안합니다.",
  },
  {
    label: "Workflow Automation",
    title: "운영 자동화 엔진",
    description: "접수부터 완료 보고까지 반복 업무를 자동화합니다.",
  },
];

const steps = [
  {
    title: "수리 사진 업로드",
    description: "사진과 증상 등록",
    icon: UploadIcon,
  },
  {
    title: "AI 자동 진단",
    description: "원인과 범위 분석",
    icon: SparkIcon,
  },
  {
    title: "기사 입찰 진행",
    description: "견적과 일정 비교",
    icon: BidIcon,
  },
  {
    title: "수리 진행",
    description: "기사와 수리 진행",
    icon: RepairIcon,
  },
  {
    title: "수리 이력 자동 기록",
    description: "비용과 결과 저장",
    icon: FileCheckIcon,
  },
];

const processSignals = [
  {
    title: "현재 단계 안내",
    description: "지금 진행 중인 단계를 바로 확인",
  },
  {
    title: "다음 작업 제안",
    description: "다음 액션을 순서대로 안내",
  },
  {
    title: "완료 기록 저장",
    description: "보고·비용·사진을 자동 보관",
  },
];

const audienceCards = [
  {
    title: "임대인",
    headline: "건물 관리",
    meta: "수리 · 비용 · 자산 관리",
    icon: HomeOwnerIcon,
    benefits: [
      "호실별 수리 이력 확인",
      "예상 비용과 진행 현황 확인",
      "공실 리스크 완화",
    ],
  },
  {
    title: "관리업체",
    headline: "자동화",
    meta: "대시보드 · 자동화 · 민원 관리",
    icon: BuildingIcon,
    benefits: [
      "수백 호실 현황 통합 관리",
      "요청·입찰·완료 보고 자동화",
      "민원과 점검 기록 보관",
    ],
  },
  {
    title: "수리기사",
    headline: "안정적인 일감",
    meta: "검증 요청 · 투명 입찰 · 평판 관리",
    icon: PartnerIcon,
    benefits: [
      "검증된 요청만 수주",
      "불필요한 가격 경쟁 완화",
      "시공 이력과 평판 누적",
    ],
  },
];

const plans = [
  {
    name: "Basic",
    price: "월 19,000원",
    target: "1인 가구 및 소형 주택",
    features: ["AI 수리 진단", "기본 수리비 보장", "월간 점검 리포트"],
  },
  {
    name: "Standard",
    price: "월 29,000원",
    target: "자가 거주 주택",
    featured: true,
    features: ["AI 진단 + 기사 입찰", "정기 점검", "수리 이력 자동 관리"],
  },
  {
    name: "Premium",
    price: "월 49,000원",
    target: "다가구 및 건물주",
    features: ["복수 호실 관리", "운영 대시보드", "우선 대응 및 리포팅"],
  },
];

const platformCards = [
  {
    title: "사용자 앱",
    subtitle: "AI 수리 진단",
    description: "사진 등록, 진단 결과, 견적 비교를 한 화면에서 확인합니다.",
    icon: DiagnosisIcon,
  },
  {
    title: "관리업체 SaaS",
    subtitle: "건물 관리 대시보드",
    description: "건물 현황, 민원, 수리 비용을 구조적으로 관리합니다.",
    icon: DashboardIcon,
  },
  {
    title: "기사 앱",
    subtitle: "수리 입찰 시스템",
    description: "요청 확인, 입찰, 일정과 완료 보고를 간편하게 처리합니다.",
    icon: PartnerIcon,
  },
];

const marketVisionPoints = [
  {
    title: "표준화",
    description: "수리 기준 데이터화",
    icon: GridIcon,
  },
  {
    title: "운영 인프라",
    description: "수리와 임대관리 연결",
    icon: NetworkIcon,
  },
  {
    title: "신뢰 생태계",
    description: "임대인 · 기사 · 관리업체 연동",
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
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar__inner reveal reveal--scale is-visible">
          <a className="brand" href="#home" onClick={closeMobileMenu}>
            <span className="brand__mark" aria-hidden="true">
              <img src="/favicon.svg" alt="" />
            </span>
            <span className="brand__text">
              수리모아
              <span className="brand__subtext">AI 기반 주택 수리 플랫폼</span>
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
            <a className="button button--ghost" href="#cta">
              도입 문의
            </a>
            <button
              type="button"
              className="menu-toggle"
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
        <section className="hero-section" id="home">
          <div className="hero">
            <div className="hero__content reveal reveal--left is-visible">
              <span className="eyebrow">AI Powered Housing Operations</span>
              <h1>AI 주거 관리의 표준</h1>
              <p>
                수리 견적의 불투명함을 해결하고
                <br />
                AI와 데이터로 투명한 주거 관리 시스템을 만듭니다.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#cta">
                  수리 신청하기
                </a>
                <a className="button button--secondary" href="#overview">
                  서비스 소개 보기
                </a>
              </div>

              <div className="hero__signals">
                {heroSignals.map((signal) => (
                  <span key={signal} className="signal-chip">
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <HeroVisual />
          </div>

          <div className="trust-band reveal reveal--up delay-1 is-visible">
            <span className="trust-band__label">웹사이트 목적</span>
            {trustSignals.map((signal) => (
              <span key={signal} className="trust-band__item">
                {signal}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="overview">
          <div className="section__inner">
            <SectionHeading
              label="문제 인식"
              title="왜 집 수리는 항상 불안할까요?"
              description="주거 수리의 문제는 단순히 가격이 아니라 기준과 기록, 책임이 분산되어 있다는 점입니다."
            />

            <div className="problem-layout">
              <div className="highlight-panel reveal reveal--left">
                <span className="highlight-panel__eyebrow">Pain Point</span>
                <h3>수리 운영을 데이터로 바꿉니다</h3>
                <p>진단, 견적, 입찰, 기록을 하나의 흐름으로 정리합니다.</p>
                <div className="highlight-panel__flow">
                  {painPointFlow.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <article key={item.title} className="highlight-panel__flow-item">
                        <span className="highlight-panel__flow-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="highlight-panel__flow-icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <strong className="highlight-panel__flow-title">{item.title}</strong>
                        <span className="highlight-panel__flow-copy">{item.description}</span>
                      </article>
                    );
                  })}
                </div>
                <div className="highlight-panel__facts">
                  {painPointSignals.map((signal) => {
                    const Icon = signal.icon;

                    return (
                      <article key={signal.title} className="highlight-panel__fact">
                        <span className="highlight-panel__fact-icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <strong className="highlight-panel__fact-title">{signal.title}</strong>
                        <span className="highlight-panel__fact-copy">{signal.description}</span>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="problem-grid">
                {painPoints.map((point, index) => (
                  <article
                    key={point.title}
                    className={`surface-card problem-card ${getRevealClass(index, "reveal--up")}`}
                  >
                    <span className="problem-card__number">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="solution">
          <div className="section__inner">
            <SectionHeading
              label="수리모아 솔루션"
              title="수리모아가 해결합니다"
              description="AI 진단, 기사 입찰, 임대관리 SaaS를 하나의 플랫폼으로 연결합니다."
            />

            <div className="solution-summary surface-card reveal reveal--up">
              <div className="solution-summary__copy">
                <div className="section-mark">
                  <span className="logo-dot">
                    <SuriMoaMarkIcon />
                  </span>
                  <span className="mini-label">One Platform</span>
                </div>
                <h3>진단부터 기록까지 하나로 연결합니다</h3>
                <p>사용자는 빠르게 요청하고, 운영 주체는 같은 데이터로 관리합니다.</p>
              </div>

              <div className="solution-summary__points">
                {solutionSummaryPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <article
                      key={point.label}
                      className={`solution-summary__point ${getRevealClass(index, "reveal--scale")}`}
                    >
                      <span className="solution-summary__icon">
                        <Icon />
                      </span>
                      <span>{point.label}</span>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="solution-grid">
              {solutionCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className={`surface-card solution-card ${getRevealClass(index, "reveal--up")}`}
                  >
                    <div className="icon-badge">
                      <Icon />
                    </div>
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="ai-tech">
          <div className="section__inner">
            <SectionHeading
              label="AI 기술"
              title="수리 데이터로 운영을 자동화합니다"
              description="사진 분석, 가격 기준화, 워크플로 자동화로 운영을 더 간결하게 만듭니다."
              className="section-heading--wide"
            />

            <div className="tech-grid">
              {aiTechnologyCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`surface-card tech-card ${getRevealClass(index, "reveal--up")}`}
                >
                  <span className="mini-label">{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--lined" id="process">
          <div className="section__inner">
            <SectionHeading
              label="서비스 이용 방법"
              title="복잡한 수리, 하나의 흐름으로"
              description="사용자는 사진만 올리면 되고, 이후 흐름은 플랫폼이 정리합니다."
              className="section-heading--wide"
            />

            <div className="process-layout">
              <div className="process-intro surface-card reveal reveal--left">
                <div className="section-mark">
                  <span className="logo-dot">
                    <SuriMoaMarkIcon />
                  </span>
                  <span className="mini-label">SuriMoa Flow</span>
                </div>
                <h3>접수부터 이력 저장까지, 누구나 쉽게</h3>
                <p>사용자는 현재 단계와 다음 단계를 직관적으로 확인할 수 있습니다.</p>
                <div className="process-intro__signals">
                  {processSignals.map((signal, index) => {
                    return (
                      <article
                        key={signal.title}
                        className={`process-intro__signal ${getRevealClass(index, "reveal--up")}`}
                      >
                        <span className="process-intro__signal-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="process-intro__signal-copy">
                          <strong>{signal.title}</strong>
                          <span>{signal.description}</span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="process-board surface-card reveal reveal--right">
                <div className="process-board__eyebrow">
                  <span className="mini-label">5 Steps</span>
                  <span className="process-board__caption">플랫폼이 순서를 정리합니다</span>
                </div>
                <div className="process-board__list">
                  {steps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <article
                        key={step.title}
                        className={`process-board__item ${getRevealClass(index, "reveal--up")}`}
                      >
                        <span className="process-board__icon">
                          <Icon />
                        </span>
                        <div className="process-board__content">
                          <div className="process-board__title-row">
                            <h3>{step.title}</h3>
                            <span className="process-board__number">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <p>{step.description}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="partners">
          <div className="section__inner">
            <SectionHeading
              label="서비스 대상"
              title="임대·관리·수리 파트너 플랫폼"
              description="같은 데이터를 기반으로 더 빠르고 신뢰도 높은 협업이 가능합니다."
              className="section-heading--wide"
            />

            <div className="audience-grid">
              {audienceCards.map((audience, index) => {
                const Icon = audience.icon;

                return (
                  <article
                    key={audience.title}
                    className={`surface-card audience-card ${getRevealClass(index, "reveal--up")}`}
                  >
                    <div className="audience-card__header">
                      <span className="icon-badge audience-card__icon">
                        <Icon />
                      </span>
                      <div>
                        <span className="mini-label">{audience.title}</span>
                        <h3>{audience.headline}</h3>
                        <p className="audience-card__meta">{audience.meta}</p>
                      </div>
                    </div>
                    <ul>
                      {audience.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="pricing">
          <div className="section__inner">
            <SectionHeading
              label="구독 서비스"
              title="상황에 맞는 주거 안심 구독"
              description="거주 형태와 관리 범위에 맞게 선택할 수 있도록 플랜을 심플하게 구성했습니다."
            />

            <div className="pricing-grid">
              {plans.map((plan, index) => (
                <article
                  key={plan.name}
                  className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""} ${getRevealClass(index, "reveal--scale")}`}
                >
                  <div className="pricing-card__top">
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="platform">
          <div className="section__inner">
            <SectionHeading
              label="플랫폼 구조"
              title="세 가지 제품을 하나로 연결합니다"
              description="사용자 앱, 관리업체 SaaS, 기사 앱이 분리되지 않고 하나의 운영 체계 안에서 움직입니다."
              className="section-heading--wide"
            />

            <div className="platform-grid">
              {platformCards.map((platform, index) => {
                const Icon = platform.icon;

                return (
                  <article
                    key={platform.title}
                    className={`surface-card platform-card ${getRevealClass(index, "reveal--up")}`}
                  >
                    <span className="icon-badge platform-card__icon">
                      <Icon />
                    </span>
                    <span className="mini-label">{platform.subtitle}</span>
                    <h3>{platform.title}</h3>
                    <p>{platform.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="vision">
          <div className="section__inner">
            <div className="dark-panel dark-panel--vision reveal reveal--scale">
              <div className="vision-hero__header">
                <span className="dark-panel__label">Market Vision</span>
                <span className="vision-hero__mark">
                  <SuriMoaMarkIcon />
                </span>
              </div>
              <h3>AI 기반 주거 관리 </h3>
              <h3>인프라를 구축합니다</h3>
              <p>대한민국 주거 수리 시장을 데이터와 운영 플랫폼으로 연결합니다.</p>

              <div className="vision-signals">
                {marketVisionPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <article
                      key={point.title}
                      className={`vision-signal ${getRevealClass(index, "reveal--up")}`}
                    >
                      <span className="vision-signal__icon">
                        <Icon />
                      </span>
                      <div>
                        <strong>{point.title}</strong>
                        <p>{point.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="cta">
          <div className="section__inner">
            <div className="cta-panel reveal reveal--scale">
              <div className="cta-panel__copy">
                <span className="eyebrow eyebrow--light">Start with SuriMoa</span>
                <h2>지금 수리모아를 시작하세요</h2>
                <p>
                  수리 요청부터 관리업체 등록, 기사 파트너 지원까지
                  <br />
                  수리모아와 함께 새로운 주거 관리 경험을 시작해보세요.
                </p>
              </div>

              <div className="cta-panel__actions">
                <a
                  className="button button--light"
                  href="mailto:chiomin0128@gmail.com?subject=%EC%88%98%EB%A6%AC%20%EC%9A%94%EC%B2%AD%20%EB%AC%B8%EC%9D%98"
                >
                  수리 요청하기
                </a>
                <a
                  className="button button--outline-light"
                  href="mailto:chiomin0128@gmail.com?subject=%EA%B4%80%EB%A6%AC%EC%97%85%EC%B2%B4%20%EB%93%B1%EB%A1%9D%20%EB%AC%B8%EC%9D%98"
                >
                  관리업체 등록
                </a>
                <a
                  className="button button--outline-light"
                  href="mailto:chiomin0128@gmail.com?subject=%EA%B8%B0%EC%82%AC%20%ED%8C%8C%ED%8A%B8%EB%84%88%20%EC%8B%A0%EC%B2%AD"
                >
                  기사 파트너 신청
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer__inner reveal reveal--up">
          <div>
            <div className="brand brand--footer">
              <span className="brand__mark" aria-hidden="true">
                <img src="/favicon.svg" alt="" />
              </span>
              <span className="brand__text">
                수리모아
                <span className="brand__subtext">새로운 주거 관리 표준</span>
              </span>
            </div>
            <p className="footer__description">
              AI 기반 수리 진단, 임대관리 SaaS, 기사 입찰 시스템으로 더 투명한 주거 수리 생태계를 만듭니다.
            </p>
          </div>

          <div className="footer__links">
            <a href="#home">회사 소개</a>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
            <a href="mailto:chiomin0128@gmail.com">chiomin0128@gmail.com</a>
          </div>
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

function HeroVisual() {
  return (
    <div className="hero-visual reveal reveal--right delay-2 is-visible" aria-hidden="true">
      <div className="hero-visual__panel">
        <div className="hero-visual__header">
          <div>
            <span className="hero-visual__eyebrow">SuriMoa OS</span>
            <strong>주거 수리 운영 대시보드</strong>
          </div>
          <span className="hero-visual__status">AI 분석 활성</span>
        </div>

        <div className="hero-visual__canvas">
          <svg viewBox="0 0 620 420" className="hero-visual__svg">
            <defs>
              <linearGradient id="heroPanel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fbff" />
                <stop offset="100%" stopColor="#e6efff" />
              </linearGradient>
              <linearGradient id="heroBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E55CA" />
                <stop offset="100%" stopColor="#89a5ff" />
              </linearGradient>
            </defs>

            <rect x="18" y="18" width="584" height="384" rx="28" fill="url(#heroPanel)" />
            <rect x="42" y="54" width="256" height="290" rx="26" fill="white" stroke="#d7e2ff" strokeWidth="4" />
            <rect x="322" y="54" width="256" height="110" rx="26" fill="white" stroke="#d7e2ff" strokeWidth="4" />
            <rect x="322" y="182" width="256" height="162" rx="26" fill="white" stroke="#d7e2ff" strokeWidth="4" />

            <path d="M92 190 170 120 248 190V288c0 10-8 18-18 18H110c-10 0-18-8-18-18v-98Z" fill="#eef4ff" stroke="#2E55CA" strokeWidth="8" />
            <path d="M74 192 170 108 266 192" fill="none" stroke="url(#heroBlue)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="136" y="206" width="28" height="40" rx="8" fill="#d7e2ff" />
            <rect x="176" y="206" width="28" height="40" rx="8" fill="#d7e2ff" />
            <rect x="154" y="256" width="32" height="48" rx="10" fill="white" stroke="#c4d3ff" strokeWidth="4" />
            <rect x="104" y="156" width="132" height="112" rx="22" fill="#2E55CA" opacity="0.08" />

            <circle cx="112" cy="228" r="12" fill="#2E55CA" opacity="0.16" />
            <circle cx="112" cy="228" r="6" fill="#2E55CA" />
            <circle cx="236" cy="178" r="12" fill="#2E55CA" opacity="0.16" />
            <circle cx="236" cy="178" r="6" fill="#2E55CA" />
            <circle cx="224" cy="294" r="12" fill="#2E55CA" opacity="0.16" />
            <circle cx="224" cy="294" r="6" fill="#2E55CA" />

            <path d="M338 92h108" stroke="#d4def8" strokeWidth="10" strokeLinecap="round" />
            <path d="M338 118h182" stroke="#edf2ff" strokeWidth="10" strokeLinecap="round" />
            <rect x="338" y="136" width="118" height="10" rx="5" fill="#2E55CA" opacity="0.16" />

            <path d="M346 272c24-24 44-36 64-36 26 0 34 30 58 30 22 0 28-22 50-22 18 0 28 10 40 28" fill="none" stroke="#2E55CA" strokeWidth="8" strokeLinecap="round" />
            <circle cx="346" cy="272" r="6" fill="#2E55CA" />
            <circle cx="410" cy="236" r="6" fill="#2E55CA" />
            <circle cx="468" cy="266" r="6" fill="#2E55CA" />
            <circle cx="530" cy="244" r="6" fill="#2E55CA" />

            <rect x="338" y="300" width="84" height="20" rx="10" fill="#edf2ff" />
            <rect x="430" y="300" width="66" height="20" rx="10" fill="#2E55CA" opacity="0.16" />
            <rect x="504" y="300" width="40" height="20" rx="10" fill="#edf2ff" />
          </svg>
        </div>

        <div className="hero-visual__summary">
          <article>
            <span>AI 분석 리포트</span>
            <strong>사진 업로드 후 자동 진단</strong>
          </article>
          <article>
            <span>입찰 비교</span>
            <strong>가격 · 일정 · 범위 확인</strong>
          </article>
          <article>
            <span>수리 이력</span>
            <strong>완료 보고 자동 저장</strong>
          </article>
        </div>
      </div>
    </div>
  );
}

function SuriMoaMarkIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 9.5 12 4l7 5.5V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9.5Z" />
      <path d="M9 12.5h6" />
      <path d="M9 16h4" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="m18.5 15 0.8 1.9 1.9 0.8-1.9 0.8-0.8 1.9-0.8-1.9-1.9-0.8 1.9-0.8 0.8-1.9Z" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 16V7" />
      <path d="m8.5 10.5 3.5-3.5 3.5 3.5" />
      <path d="M5 19h14" />
    </svg>
  );
}

function RepairIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="m14 6 4 4" />
      <path d="m6.5 17.5 7-7 4 4-7 7H6.5v-4Z" />
      <path d="m12.5 7.5 1.5-1.5a2.8 2.8 0 0 1 4 4L16.5 11.5" />
    </svg>
  );
}

function FileCheckIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 3h6l4 4v14H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v4h4" />
      <path d="m9.5 14 2 2 4-4" />
    </svg>
  );
}

function HomeOwnerIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="m4 10 8-6 8 6" />
      <path d="M6 9.5V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.5" />
      <path d="M10 21v-5a2 2 0 0 1 4 0v5" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 20V6a2 2 0 0 1 2-2h6v16" />
      <path d="M12 20V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10" />
      <path d="M7 8h2M7 12h2M15 12h2M15 16h2" />
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

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M10.5 7 7.5 15.5" />
      <path d="M13.5 7 16.5 15.5" />
      <path d="M8.5 18h7" />
    </svg>
  );
}

function DiagnosisIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 11a8 8 0 1 1 14.32 4.9L21 18.58 18.58 21l-2.7-2.68A8 8 0 0 1 4 11Z" />
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
      <path d="M12 3 5 6v6c0 5 3.4 7.9 7 9 3.6-1.1 7-4 7-9V6l-7-3Z" />
      <path d="m9.5 12 2 2 4-4" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

export default App;

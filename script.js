// script.js
(() => {
  // ✅ Вставь номер WhatsApp (только цифры, без +)
  // пример: 77001234567
  const WHATSAPP_NUMBER = "77000000000";

  const year = document.getElementById("year");
  const waBtn = document.getElementById("waButton");
  const waFooter = document.getElementById("whatsappFooter");
  const langToggle = document.getElementById("langToggle");
  const burger = document.querySelector(".burger");
  const mobile = document.querySelector(".mobile");

  year.textContent = new Date().getFullYear();

  const waLink = (text) => {
    const msg = encodeURIComponent(
      text ||
        "Здравствуйте! Нужна консультация по регистрации. Подскажите, пожалуйста, какие шаги и документы требуются?",
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  };

  function openWhatsApp(text) {
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  // WhatsApp triggers
  if (waBtn)
    waBtn.addEventListener("click", () => openWhatsApp(i18nState.msgWA));
  if (waFooter)
    waFooter.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp(i18nState.msgWA);
    });

  document.addEventListener("click", (e) => {
    const wa = e.target.closest("[data-wa]");
    if (wa) openWhatsApp(i18nState.msgWA);
  });

  // Smooth scroll
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-scrollto]");
    if (!btn) return;
    const sel = btn.getAttribute("data-scrollto");
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Mobile menu
  if (burger && mobile) {
    burger.addEventListener("click", () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!isOpen));
      mobile.hidden = isOpen;
    });

    mobile.addEventListener("click", (e) => {
      const link = e.target.closest("a[href^='#']");
      if (!link) return;
      burger.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    });
  }

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add("is-visible");
        else en.target.classList.remove("is-visible");
      });
    },
    { threshold: 0.12 },
  );
  revealEls.forEach((el) => io.observe(el));

  // -------- i18n (RU/EN) --------
  const dict = {
    ru: {
      navContacts: "Контакты",

contactsTitle: "Контакты",
contactsDesc: "Свяжитесь с нами удобным способом — ответим в рабочее время.",
contactsEmailLabel: "Email",
contactsPhoneLabel: "Телефон",
contactsAddressLabel: "Адрес",
contactsAddressValue: "Астана, шоссе Коргалжын 2, Офис №8",
contactsBtn: "Написать в WhatsApp",

hoursTitle: "График работы",
hoursSub: "Мы отвечаем в рабочее время.",
hoursWeekdays: "Пн–Пт",
hoursWeekend: "Сб–Вс",
hoursClosed: "Выходной",
hoursNote: "Если напишете вне графика — мы ответим в ближайшее рабочее время.",

      taglineShort: "Регистрация • Экспертиза • Сопровождение",
      navAbout: "О компании",
      navServices: "Услуги",
      navProcess: "Процесс регистрации",
      navAdvantages: "Преимущества",
      ctaConsult: "Получить консультацию",

      heroKicker:
        "Регистрация • Регуляторная экспертиза • Стратегическое сопровождение бизнеса",
      heroTitle:
        "Вывод продукции на рынок Казахстана и ЕАЭС — системно, законно, в срок",
      heroSubtitle:
        "MAG-Qoldau01 — экспертная компания в сфере государственной регистрации и вывода на рынок агропромышленной и промышленной продукции в РК и странах ЕАЭС. " +
        "Мы сопровождаем проекты от идеи до получения официального разрешения и коммерческого запуска.",
      heroBtnWa: "Написать в WhatsApp",
      heroBtnServices: "Смотреть услуги",
      stat1Title: "Законный выход",
      stat1Desc: "на рынок и в реестры",
      stat2Title: "Снижение рисков",
      stat2Desc: "регуляторных ошибок",
      stat3Title: "Под ключ",
      stat3Desc: "от идеи до запуска",
      heroAsideTitle: "География работы",
      heroAsideText:
        "Республика Казахстан • Страны ЕАЭС • Международные партнёры (Китай, ЕС, Турция)",
      chipKZ: "Казахстан",
      chipEAEU: "ЕАЭС",
      chipIntl: "Международно",
      heroAsideBtn: "Получить консультацию",

      aboutKicker: "О компании",
      aboutTitle: "Системный оператор регуляторных процессов",
      aboutDesc:
        "MAG-Qoldau01 — это не посредник, а системный оператор регуляторных процессов. " +
        "Мы работаем с требованиями Министерства сельского хозяйства РК, техническими регламентами ЕАЭС и национальными стандартами.",
      aboutB1Title: "Законный выход на рынок",
      aboutB1Desc:
        "Обеспечиваем соответствие требованиям и корректность пакета документов.",
      aboutB2Title: "Минимизация регуляторных рисков",
      aboutB2Desc:
        "Предупреждаем ошибки, которые ведут к отказам и потерям времени.",
      aboutB3Title: "Сокращение сроков регистрации",
      aboutB3Desc:
        "Выстраиваем маршрут и контроль этапов, чтобы двигаться быстрее.",
      aboutB4Title: "Полное сопровождение “под ключ”",
      aboutB4Desc:
        "От идеи до официального разрешения и коммерческого запуска.",
      aboutBtn: "Написать в WhatsApp",
      aboutNote:
        "Работаем с Казахстаном и иностранными компаниями (Китай, ЕС, Турция, Россия).",
      aboutCardTitle: "Регуляторная опора для бизнеса",
      aboutCardDesc:
        "Сопровождаем проекты в агросекторе и промышленности, включая импортные продукты и международных производителей.",
      aboutCardSmall:
        "Фокус: соответствие нормам, прозрачные этапы, ответственность и конфиденциальность.",

      servicesKicker: "Услуги",
      servicesTitle: "Ключевые направления MAG-QOLDAU01",
      servicesDesc:
        "Выберите направление — и мы подскажем маршрут, требования и сроки.",

      svc1Title: "Регистрация средств защиты растений",
      svc1List: [
        "Подготовка регистрационного досье",
        "Организация лабораторных и полевых испытаний",
        "Экспертное сопровождение",
        "Включение в государственный реестр",
        "Перерегистрация и продление",
      ],
      svc1Note: "Гербициды, фунгициды, инсектициды, адъюванты и др.",

      svc2Title: "Регистрация удобрений и агрохимической продукции",
      svc2List: [
        "Минеральные и органические удобрения",
        "Микроэлементы и биостимуляторы",
        "Импортная продукция",
        "Техническая документация",
        "Декларации соответствия",
      ],

      svc3Title: "Кормовые добавки и продукция для животноводства",
      svc3List: [
        "Кормовые концентраты и премиксы",
        "Rumen Yeast",
        "Ферментированная соевая мука",
        "Биодобавки для КРС",
        "Сопровождение импорта и регистрации",
      ],

      svc4Title: "Аттестация и регистрация семян",
      svc4List: [
        "Аттестация на реализацию",
        "Сертификация качества",
        "Документы для импорта",
        "Сопровождение проверок",
      ],
      svc6Title: "Регистрация иностранной компании в РК",
svc6List: [
  "Консультация по выбору формы регистрации (ТОО, филиал, представительство)",
  "Подготовка учредительных документов",
  "Юридический адрес",
  "Регистрация в органах юстиции",
  "Получение БИН",
  "Постановка на налоговый учет",
  "Открытие банковского счета",
  "Постановка на НДС (при необходимости)",
  "Получения ЭЦП ключа"
],


      svc5Badge: "Консалтинг",
      svc5Title: "Стратегическое сопровождение бизнеса",
      svc5List: [
        "Бизнес-планы (банк, ФРП, инвестор)",
        "Финансовые модели (NPV, IRR, PI)",
        "ТЭО (технико-экономические обоснования)",
        "Субсидии и госпрограммы",
        "Представительство в госорганах",
      ],
      svc5Btn: "Получить консультацию",
      svc5Btn2: "Смотреть процесс",

      processKicker: "Процесс регистрации",
      processTitle: "Понятные этапы — прогнозируемый результат",
      processDesc:
        "Мы ведём проект от диагностики до внесения в реестр и коммерческого запуска.",
      step1Title: "Диагностика и стратегия",
      step1Desc:
        "Определяем категорию продукта, требования, риски и оптимальный маршрут.",
      step2Title: "Досье и документация",
      step2Desc:
        "Готовим и структурируем пакет документов, техдокументацию и доказательную базу.",
      step3Title: "Испытания и экспертиза",
      step3Desc:
        "Организуем испытания (при необходимости), сопровождаем экспертизу и согласования.",
      step4Title: "Реестр и запуск",
      step4Desc:
        "Получаем официальное разрешение/внесение в реестр и готовим к коммерческому выводу.",
      processBtn: "Обсудить ваш проект в WhatsApp",

      advKicker: "Преимущества",
      advTitle: "Почему выбирают нас",
      advDesc:
        "Экспертиза, ответственность и работа с международными производителями.",
      adv1Title: "Глубокая экспертиза в агросекторе",
      adv1Desc: "Понимаем продукт, отраслевые нормы и типовые “узкие места”.",
      adv2Title: "Практический опыт сопровождения",
      adv2Desc: "Фокус на результате и контроле качества на каждом этапе.",
      adv3Title: "Регуляторная среда Казахстана",
      adv3Desc:
        "Работаем с требованиями МСХ РК, техрегламентами ЕАЭС и стандартами.",
      adv4Title: "Иностранные производители",
      adv4Desc: "Опыт проектов с Китаем, ЕС, Турцией, Россией и др.",
      adv5Title: "Конфиденциальность и ответственность",
      adv5Desc: "Чёткие договорённости и бережная работа с данными клиента.",

      finalTitle: "Связаться с нами",
      finalDesc:
        "Напишите в WhatsApp — расскажем, какие шаги нужны именно для вашего продукта.",
      finalBtn: "Открыть WhatsApp",

      footerText:
        "Государственная регистрация и вывод на рынок в Казахстане и странах ЕАЭС.",
      footerNav: "Навигация",
      footerContact: "Связь",
      toTop: "Наверх ↑",
      footerRight: "Все права защищены.",

      msgWA:
        "Здравствуйте! Интересует консультация MAG-QOLDAU01.\n\n" +
        "1) Что за продукт? (СЗР / удобрение / кормовая добавка / семена / другое)\n" +
        "2) Страна производителя:\n" +
        "3) Казахстан / ЕАЭС:\n" +
        "4) На какой стадии проект:\n",
    },

    en: {
      taglineShort: "Registration • Expertise • Business Support",
      navAbout: "About",
      navServices: "Services",
      navProcess: "Registration Process",
      navAdvantages: "Advantages",
      ctaConsult: "Get a consultation", // если хочешь чисто EN — скажи, поменяю на “Get консультация” -> “Get a consultation”
      heroKicker:
        "Registration • Regulatory Expertise • Strategic Business Support",
      heroTitle:
        "Market entry in Kazakhstan and the EAEU — systematic, compliant, on time",
      heroSubtitle:
        "MAG-Qoldau01 is an expert company in state registration and market entry for agro-industrial and industrial products in Kazakhstan and EAEU countries. " +
        "We support projects from idea to official approval and commercial launch.",
      heroBtnWa: "Message on WhatsApp",
      heroBtnServices: "View services",
      stat1Title: "Legal market entry",
      stat1Desc: "to the market and registries",
      stat2Title: "Risk reduction",
      stat2Desc: "in regulatory mistakes",
      stat3Title: "Turnkey",
      stat3Desc: "from idea to launch",
      heroAsideTitle: "Coverage",
      heroAsideText:
        "Kazakhstan • EAEU countries • International partners (China, EU, Turkey)",
      chipKZ: "Kazakhstan",
      chipEAEU: "EAEU",
      chipIntl: "International",
      heroAsideBtn: "Get a consultation",

      aboutKicker: "About",
      aboutTitle: "A system operator of regulatory processes",
      aboutDesc:
        "MAG-Qoldau01 is not an intermediary — we operate regulatory processes end-to-end. " +
        "We work with Kazakhstan Ministry of Agriculture requirements, EAEU technical regulations and national standards.",
      aboutB1Title: "Compliant market entry",
      aboutB1Desc: "We ensure correct documentation and full compliance.",
      aboutB2Title: "Minimized regulatory risks",
      aboutB2Desc: "We prevent issues that cause rejections and delays.",
      aboutB3Title: "Shorter timelines",
      aboutB3Desc: "We build a clear route and control each stage.",
      aboutB4Title: "Turnkey сопровождение",
      aboutB4Desc: "From idea to official approval and commercial launch.",
      aboutBtn: "Message on WhatsApp",
      aboutNote:
        "We work with Kazakhstan and foreign companies (China, EU, Turkey, Russia).",
      aboutCardTitle: "Regulatory backbone for your business",
      aboutCardDesc:
        "We support agro and industrial projects, including imports and international manufacturers.",
      aboutCardSmall:
        "Focus: compliance, transparent stages, responsibility and confidentiality.",

      servicesKicker: "Services",
      servicesTitle: "Core направления of MAG-QOLDAU01",
      servicesDesc:
        "Choose a направления — we will outline requirements and timelines.",

      svc1Title: "Plant protection products registration",
      svc1List: [
        "Registration dossier preparation",
        "Laboratory and field tests coordination",
        "Expert support",
        "Inclusion in the state registry",
        "Re-registration and renewal",
      ],
      svc1Note: "Herbicides, fungicides, insecticides, adjuvants and more.",

      svc2Title: "Fertilizers and agrochemical products registration",
      svc2List: [
        "Mineral and organic fertilizers",
        "Micronutrients and biostimulants",
        "Imported products",
        "Technical documentation",
        "Conformity declarations",
      ],

      svc3Title: "Feed additives and livestock products",
      svc3List: [
        "Feed concentrates and premixes",
        "Rumen Yeast",
        "Fermented soybean meal",
        "Cattle supplements",
        "Import and registration support",
      ],

      svc4Title: "Seeds certification and registration",
      svc4List: [
        "Approval for sale",
        "Quality certification",
        "Import documentation",
        "Inspection support",
      ],
      svc6Title: "Registration of a foreign company in Kazakhstan",
svc6List: [
  "Consultation on choosing the registration form (LLP, branch, representative office)",
  "Preparation of incorporation documents",
  "Legal address",
  "Registration with justice authorities",
  "Obtaining a BIN (Business Identification Number)",
  "Tax registration",
  "Opening a bank account",
  "VAT registration (if required)",
  "Obtaining an EDS (digital signature) key"
],


      svc5Badge: "Consulting",
      svc5Title: "Strategic business support",
      svc5List: [
        "Business plans (banks, FRP, investors)",
        "Financial models (NPV, IRR, PI)",
        "Feasibility studies",
        "Subsidies and state programs",
        "Representation in government bodies",
      ],
      svc5Btn: "Get a consultation",
      svc5Btn2: "View process",
      

      processKicker: "Process",
      processTitle: "Clear steps — predictable outcome",
      processDesc:
        "We lead the project from assessment to registry entry and market launch.",
      step1Title: "Assessment & strategy",
      step1Desc:
        "We define product category, requirements, risks and the best route.",
      step2Title: "Dossier & documentation",
      step2Desc:
        "We prepare and structure documentation and evidence materials.",
      step3Title: "Testing & expert review",
      step3Desc:
        "We coordinate tests (if needed) and support approvals and reviews.",
      step4Title: "Registry & launch",
      step4Desc:
        "We obtain official approval / registry entry and prepare for commercialization.",
      processBtn: "Discuss on WhatsApp",

      advKicker: "Advantages",
      advTitle: "Why clients choose us",
      advDesc:
        "Expertise, accountability and experience with international manufacturers.",
      adv1Title: "Deep agro-sector expertise",
      adv1Desc: "We understand the product, standards and common bottlenecks.",
      adv2Title: "Practical project experience",
      adv2Desc: "Outcome-focused approach and quality control at every stage.",
      adv3Title: "Kazakhstan regulatory landscape",
      adv3Desc:
        "We work with MoA requirements, EAEU regulations and standards.",
      adv4Title: "International manufacturers",
      adv4Desc: "Projects with China, the EU, Turkey, Russia and others.",
      adv5Title: "Confidentiality & responsibility",
      adv5Desc: "Clear commitments and careful handling of client data.",

      finalTitle: "Contact us",
      finalDesc:
        "Message us on WhatsApp — we’ll outline the steps for your product.",
      finalBtn: "Open WhatsApp",

      footerText:
        "State registration and market entry in Kazakhstan and EAEU countries.",
      footerNav: "Navigation",
      footerContact: "Contact",
      toTop: "Back to top ↑",
      footerRight: "All rights reserved.",

      msgWA:
        "Hello! I’d like a consultation with MAG-QOLDAU01.\n\n" +
        "1) Product type (PPP / fertilizer / feed additive / seeds / other):\n" +
        "2) Country of manufacturer:\n" +
        "3) Kazakhstan / EAEU:\n" +
        "4) Current stage of the project:\n",
        navContacts: "Contacts",

contactsTitle: "Contacts",
contactsDesc: "Reach out using a convenient channel — we respond during business hours.",
contactsEmailLabel: "Email",
contactsPhoneLabel: "Phone",
contactsAddressLabel: "Address",
contactsAddressValue: "Astana, Korgalzhyn Highway 2, Office 8",
contactsBtn: "Message on WhatsApp",

hoursTitle: "Business hours",
hoursSub: "We respond during business hours.",
hoursWeekdays: "Mon–Fri",
hoursWeekend: "Sat–Sun",
hoursClosed: "Closed",
hoursNote: "If you message outside business hours, we will reply on the next working day.",

    },
  };

  const i18nState = {
    lang: localStorage.getItem("lang") || "ru",
    msgWA: "",
  };

  function applyLang(lang) {
    i18nState.lang = lang;
    localStorage.setItem("lang", lang);

    document.documentElement.lang = lang === "ru" ? "ru" : "en";

    // update pills
    const pills = langToggle?.querySelectorAll(".lang__pill") || [];
    pills.forEach((p) =>
      p.classList.toggle("is-active", p.dataset.lang === lang),
    );

    // update text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[lang][key] != null) el.textContent = dict[lang][key];
    });

    // update lists
    document.querySelectorAll("[data-i18n-list]").forEach((ul) => {
      const key = ul.getAttribute("data-i18n-list");
      const items = dict[lang][key];
      if (!Array.isArray(items)) return;
      ul.innerHTML = items.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
    });

    i18nState.msgWA = dict[lang].msgWA;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // toggle language
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const next = i18nState.lang === "ru" ? "en" : "ru";
      applyLang(next);
    });
  }

  applyLang(i18nState.lang);
})();

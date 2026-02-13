const siteConfig = {
  version: "1.1.0",
  versions: [
    {
      ver: "1.1.0",
      date: "2026-02-13",
      desc: "Updated brand identity, optimized workflow features, and enhanced personal assistant capabilities.",
      file: "https://github.com/Pankitgg/open-ai-tool/releases/download/v1.1.0/ai-tool-setup.exe"
    },
    {
      ver: "1.0.0",
      date: "2026-01-08",
      desc: "Initial release with digital employees, meeting room, and plugin system.",
      file: "ai-tool-1.0.0.exe"
    },
    
  ],
  download: {
    windowsInstaller: "https://github.com/Pankitgg/open-ai-tool/releases/download/v1.1.0/ai-tool-setup.exe",
    windowsPortable: "https://github.com/Pankitgg/open-ai-tool/releases/download/v1.1.0/ai-tool-portable.zip"
  },
  links: {
    release: "https://github.com/Pankitgg/open-ai-tool/releases",
    docs: "https://github.com/Pankitgg/open-ai-tool#readme",
    changelog: "https://github.com/Pankitgg/open-ai-tool/commits/main",
    privacy: "#",
    terms: "#",
    github: "https://github.com/Pankitgg/open-ai-tool",
    support: "mailto:pankitgg0@gmail.com"
  }
}

const messages = {
  zh: {
    nav: {
      badge: "智心一梦个人助手",
      features: "功能",
      scenarios: "场景",
      ecosystem: "生态",
      testimonials: "用户评价",
      download: "下载",
      faq: "FAQ",
      lang: "中文 / EN",
      cta: "立即下载",
      aiNous: "AI Nous"
    },
    hero: {
      kicker: "你的私人 AI 团队，随时待命",
      title: "智心一梦个人助手",
      subtitle: "集成数字员工、智能会议、效率工具，打造专属你的智能工作流。不再是冰冷的工具，而是懂你的工作伙伴。",
      primary: "下载 Windows 版",
      secondary: "观看演示",
      previewTitle: "助手概览",
      preview: {
        a: { h: "一键唤起", p: "会议、助手、工具，触手可及" },
        b: { h: "智能协作", p: "多角色 AI 协同处理复杂任务" },
        c: { h: "个性化扩展", p: "根据你的习惯不断进化的能力" },
        chart: "效率提升曲线"
      },
      pill: { a: "沉浸式体验", b: "隐私安全", c: "无限扩展" },
      meta: {
        a: { k: "运行平台", v: "Windows 10/11" },
        b: { k: "核心", v: "本地 + 云端大模型" },
        c: { k: "定位", v: "个人/团队效率专家" }
      }
    },
    logos: {
      label: "核心能力"
    },
    features: {
      title: "全方位的智能辅助",
      subtitle: "从日常琐事到专业决策，智心一梦都能为你提供有力支持。",
      f1: { t: "专属数字员工", d: "定制你的 AI 助手团队，无论是文案撰写、代码开发还是数据分析，都有专人负责。" },
      f2: { t: "智能会议室", d: "模拟多人会议场景，多个 AI 角色共同探讨方案，激发灵感，自动生成会议纪要。" },
      f3: { t: "灵活插件生态", d: "丰富的插件市场，即装即用。支持 AI 辅助生成个性化插件，满足独特需求。" },
      f4: { t: "工具聚合中心", d: "将常用网页工具、小程序统一管理，告别杂乱的浏览器标签页。" },
      f5: { t: "桌面陪伴模式", d: "轻量级悬浮窗，随时响应你的呼唤，工作时不打扰，需要时在身边。" },
      f6: { t: "个性化设置", d: "随心定制主题、语言和交互方式，打造最舒适的使用体验。" }
    },
    scenarios: {
      title: "典型使用场景",
      subtitle: "智心一梦如何融入你的日常工作流？",
      s1: {
        tag: "个人成长",
        t: "打造你的第二大脑",
        p1: "聚合主流 AI 模型，知识随手查",
        p2: "定制学习助手，辅助阅读与总结",
        p3: "常用工具一键直达，专注力不流失"
      },
      s2: {
        tag: "高效办公",
        t: "把繁琐交给 AI，把时间留给思考",
        p1: "智能会议室模拟头脑风暴，快速产出方案",
        p2: "自动整理工作记录，决策有据可依",
        p3: "团队专属工具库，经验沉淀与复用"
      }
    },
    ecosystem: {
      title: "无限可能的扩展性",
      subtitle: "不仅仅是一个软件，更是一个不断进化的智能平台。",
      e1: { t: "插件即能力", d: "通过插件扩展助手能力，支持热加载，即装即用。", c1: "极速响应", c2: "智能生成", c3: "持续优化" },
      e2: { t: "工具自由定制", d: "按需配置你的工具箱，无论是网页还是小程序，统统收纳。" },
      e3: { t: "数据安全掌控", d: "重要数据本地存储，安全可控，你的数据完全属于你。" }
    },
    testimonials: {
      title: "用户心声",
      subtitle: "听听大家是如何评价智心一梦个人助手的。",
      t1: { q: "以前工作时要在十几个网页间来回切换，现在一个助手全搞定，效率提升太明显了。", n: "产品经理", r: "流程整合" },
      t2: { q: "智能会议室功能太惊艳了，仿佛真的有一群专家在帮我出谋划策。", n: "创业者", r: "决策辅助" },
      t3: { q: "能自己用 AI 写插件，解决了我很多个性化的小痛点，这才是真正的个人助手。", n: "程序员", r: "无限扩展" }
    },
    video: {
      title: "功能演示",
      subtitle: "一分钟了解智心一梦如何改变你的工作方式。",
      badge: "视频演示",
      hint: "点击播放演示视频",
      note: "推荐全屏观看"
    },
    download: {
      title: "立即体验",
      subtitle: "开始构建你的智能工作流。",
      win: {
        title: "Windows 版本",
        badge: "推荐",
        ver: { k: "当前版本" },
        req: { k: "系统要求", v: "Windows 10/11" },
        btn1: "下载安装包 (.exe)",
        btn2: "下载绿色版 (.zip)",
        fine: "提示：建议定期检查更新以获取最新功能。"
      },
      next: {
        title: "开源共建",
        badge: "GitHub",
        s1: "开源共建，让智心一梦更加强大",
        s2: "欢迎提交 Issue 和 PR",
        s3: "加入社区，共同打造更好的助手",
        btn: "访问 GitHub",
        fine: "Star 我们，关注项目动态。"
      }
    },
    faq: {
      title: "常见问题",
      subtitle: "解答你的疑惑。",
      q1: { q: "智心一梦是免费的吗？", a: "基础功能完全免费，部分高级模型服务可能需要自行配置 API Key。" },
      q2: { q: "如何添加新的数字员工？", a: "在设置中可以轻松配置新的数字员工，支持自定义角色设定和模型选择。" },
      q3: { q: "我的数据安全吗？", a: "我们非常重视隐私，核心配置和对话记录优先本地存储，确保数据安全。" },
      q4: { q: "遇到问题如何反馈？", a: "可以通过邮件或加入 QQ 群联系我们，我们将尽快为您解决。" }
    },
    versions: {
      title: "版本历史",
      subtitle: "查看过往版本与更新记录。",
      colVer: "版本",
      colDate: "日期",
      colDesc: "说明",
      colAction: "操作",
      download: "下载"
    },
    cta: {
      title: "开启你的智能工作新时代",
      subtitle: "让智心一梦成为你最得力的助手。",
      primary: "立即下载",
      secondary: "联系支持"
    },
    footer: {
      desc: "智心一梦个人助手 —— 你的全能 Windows AI 工作伴侣。集成数字员工、智能协作与效率工具。",
      product: { t: "产品", l1: "功能概览", l2: "下载", l3: "FAQ" },
      resources: { t: "资源", l1: "文档", l2: "更新日志", l3: "Releases" },
      contact: { t: "联系我们", l1: "邮箱: pankitgg0@gmail.com", l2: "QQ群: 1081954601", l3: "GitHub" }
    }
  },
  en: {
    nav: {
      badge: "ZhiXinYiMeng Assistant",
      features: "Features",
      scenarios: "Cases",
      ecosystem: "Ecosystem",
      testimonials: "Stories",
      download: "Download",
      faq: "FAQ",
      lang: "EN / 中文",
      aiNous: "AI Nous",
      cta: "Download"
    },
    hero: {
      kicker: "Your Private AI Team, Always Ready",
      title: "ZhiXinYiMeng Personal Assistant",
      subtitle: "Integrate digital employees, intelligent meetings, and productivity tools into your personal workflow. More than a tool—a partner that understands you.",
      primary: "Download for Windows",
      secondary: "Watch Demo",
      previewTitle: "Assistant Preview",
      preview: {
        a: { h: "Instant Access", p: "Meetings, assistants, tools at your fingertips" },
        b: { h: "Smart Collaboration", p: "Multi-role AI collaboration for complex tasks" },
        c: { h: "Personalized Growth", p: "Capabilities that evolve with your habits" },
        chart: "Efficiency Curve"
      },
      pill: { a: "Immersive Experience", b: "Privacy First", c: "Limitless Extension" },
      meta: {
        a: { k: "Platform", v: "Windows 10/11" },
        b: { k: "Core", v: "Local + Cloud Models" },
        c: { k: "Built for", v: "Personal/Team Efficiency" }
      }
    },
    logos: {
      label: "Core Capabilities"
    },
    features: {
      title: "Comprehensive Intelligent Assistance",
      subtitle: "From daily chores to professional decisions, ZhiXinYiMeng provides powerful support.",
      f1: { t: "Digital Employees", d: "Customize your AI assistant team for copywriting, coding, or data analysis." },
      f2: { t: "Intelligent Meeting Room", d: "Simulate multi-person meetings where AI roles discuss and generate minutes." },
      f3: { t: "Flexible Plugin Ecosystem", d: "Rich plugin market. Generate personalized plugins with AI assistance." },
      f4: { t: "Tool Hub", d: "Manage web tools and mini-programs in one place, goodbye messy tabs." },
      f5: { t: "Desktop Companion", d: "Lightweight floating window, always ready without disturbing your work." },
      f6: { t: "Personalization", d: "Customize themes, languages, and interactions for your comfort." }
    },
    scenarios: {
      title: "How It Helps",
      subtitle: "Seamlessly integrate into your daily workflow.",
      s1: {
        tag: "Personal Growth",
        t: "Build Your Second Brain",
        p1: "Access mainstream AI models instantly",
        p2: "Customized learning assistants for reading and summary",
        p3: "One-click access to tools, keeping focus"
      },
      s2: {
        tag: "Efficient Work",
        t: "Delegate to AI, Focus on Thinking",
        p1: "Brainstorm with AI in smart meetings",
        p2: "Auto-organize work records for better decisions",
        p3: "Team tool library for experience sharing"
      }
    },
    ecosystem: {
      title: "Limitless Extensibility",
      subtitle: "Not just software, but an evolving intelligent platform.",
      e1: { t: "Plugins as Capabilities", d: "Extend capabilities via hot-loaded plugins.", c1: "Fast Response", c2: "Smart Generation", c3: "Continuous Optimization" },
      e2: { t: "Custom Tools", d: "Configure your toolbox with web apps and mini-programs." },
      e3: { t: "Data Control", d: "Local storage for important data. Your data belongs to you." }
    },
    testimonials: {
      title: "What Users Say",
      subtitle: "Hear from our community.",
      t1: { q: "I used to switch between dozens of tabs. Now one assistant handles it all.", n: "Product Manager", r: "Workflow Integration" },
      t2: { q: "The smart meeting room is amazing, like having a group of experts on call.", n: "Entrepreneur", r: "Decision Support" },
      t3: { q: "Writing my own plugins with AI solved so many niche problems. True personal assistant.", n: "Developer", r: "Infinite Extension" }
    },
    video: {
      title: "Feature Demo",
      subtitle: "See how ZhiXinYiMeng changes the way you work.",
      badge: "Video Demo",
      hint: "Click to play",
      note: "Recommended: Fullscreen"
    },
    download: {
      title: "Get Started",
      subtitle: "Start building your intelligent workflow.",
      win: {
        title: "Windows Version",
        badge: "Recommended",
        ver: { k: "Current Version" },
        req: { k: "Requirements", v: "Windows 10/11" },
        btn1: "Download Installer (.exe)",
        btn2: "Download Portable (.zip)",
        fine: "Tip: Check for updates regularly."
      },
      next: {
        title: "Open Source",
        badge: "GitHub",
        s1: "Open source, safe and transparent",
        s2: "Issues and PRs welcome",
        s3: "Join the community",
        btn: "Visit GitHub",
        fine: "Star us and stay tuned."
      }
    },
    faq: {
      title: "FAQ",
      subtitle: "Common questions.",
      q1: { q: "Is it free?", a: "Basic features are free. Advanced models may require your own API Key." },
      q2: { q: "How to add digital employees?", a: "Easily configure new employees in Settings with custom roles and models." },
      q3: { q: "Is my data safe?", a: "We prioritize privacy. Core configs and chats are stored locally." },
      q4: { q: "How to get support?", a: "Contact us via email or join our QQ group." }
    },
    versions: {
      title: "Version History",
      subtitle: "Check previous versions and changelogs.",
      colVer: "Version",
      colDate: "Date",
      colDesc: "Description",
      colAction: "Action",
      download: "Download"
    },
    cta: {
      title: "Upgrade Your Workflow",
      subtitle: "Let ZhiXinYiMeng be your most capable assistant.",
      primary: "Download Now",
      secondary: "Contact Support"
    },
    footer: {
      desc: "ZhiXinYiMeng Personal Assistant — Your all-in-one Windows AI companion. Digital employees, smart collaboration, and efficiency tools.",
      product: { t: "Product", l1: "Features", l2: "Download", l3: "FAQ" },
      resources: { t: "Resources", l1: "Docs", l2: "Changelog", l3: "Releases" },
      contact: { t: "Contact", l1: "Email: pankitgg0@gmail.com", l2: "QQ Group: 1081954601", l3: "GitHub" }
    }
  }
}

function get(obj, path) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj)
}

function applyI18n(lang) {
  const dict = messages[lang] || messages.zh
  const nodes = document.querySelectorAll("[data-i18n]")
  nodes.forEach((el) => {
    const key = el.getAttribute("data-i18n")
    const value = get(dict, key)
    if (typeof value === "string") el.textContent = value
  })

  const metaTitle = lang === "en" ? "ZhiXinYiMeng Personal Assistant" : "智心一梦个人助手"
  const metaDesc =
    lang === "en"
      ? "Your personal AI assistant for Windows. Digital employees, smart meetings, and productivity tools in one workflow."
      : "智心一梦个人助手 - 你的 Windows AI 工作伴侣。集成数字员工、会议室协作与效率工具。"

  document.title = metaTitle
  document.documentElement.lang = lang

  const metaDescription = document.getElementById("metaDescription")
  const ogTitle = document.getElementById("ogTitle")
  const ogDescription = document.getElementById("ogDescription")
  if (metaDescription) metaDescription.setAttribute("content", metaDesc)
  if (ogTitle) ogTitle.setAttribute("content", metaTitle)
  if (ogDescription) ogDescription.setAttribute("content", metaDesc)
}

function setLinks() {
  const downloadNodes = document.querySelectorAll("[data-download]")
  downloadNodes.forEach((a) => {
    const key = a.getAttribute("data-download")
    const url = siteConfig.download[key] || "#"
    a.setAttribute("href", url)
  })

  const linkNodes = document.querySelectorAll("[data-link]")
  linkNodes.forEach((a) => {
    const key = a.getAttribute("data-link")
    const url = siteConfig.links[key] || "#"
    a.setAttribute("href", url)
  })

  const versionText = document.getElementById("versionText")
  if (versionText) versionText.textContent = `v${siteConfig.version}`
}

function setupFaq() {
  const items = Array.from(document.querySelectorAll(".faqItem"))
  items.forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = btn.getAttribute("aria-expanded") === "true"
      items.forEach((x) => x.setAttribute("aria-expanded", "false"))
      btn.setAttribute("aria-expanded", current ? "false" : "true")
    })
  })
}

function setupSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]')
  anchors.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href")
      if (!href || href === "#") return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      history.replaceState(null, "", href)
    })
  })
}

function setupLangToggle() {
  const toggle = document.getElementById("langToggle")
  const stored = localStorage.getItem("promoLang")
  const initial = stored ?? ((navigator.language || "").toLowerCase().includes("zh") ? "zh" : "en")
  let current = initial === "en" ? "en" : "zh"

  applyI18n(current)

  if (toggle) {
    toggle.addEventListener("click", () => {
      current = current === "zh" ? "en" : "zh"
      localStorage.setItem("promoLang", current)
      applyI18n(current)
    })
  }
}

function setupScrollButtons() {
  const scrollTopBtn = document.getElementById("scrollTopBtn")
  const scrollBottomBtn = document.getElementById("scrollBottomBtn")
  
  if (!scrollTopBtn || !scrollBottomBtn) return

  // Initial check
  checkScroll()

  window.addEventListener("scroll", checkScroll)

  function checkScroll() {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const bodyHeight = document.body.scrollHeight

    // Show top button when scrolled down
    if (scrollY > 300) {
      scrollTopBtn.classList.add("visible")
    } else {
      scrollTopBtn.classList.remove("visible")
    }

    // Show bottom button when at the top (and page is scrollable)
    // Only show if we are near the top and there is content to scroll to
    if (scrollY < 100 && bodyHeight > windowHeight * 1.5) {
      scrollBottomBtn.classList.add("visible")
    } else {
      scrollBottomBtn.classList.remove("visible")
    }
  }

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })

  scrollBottomBtn.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    })
  })
}

function boot() {
  setLinks()
  setupFaq()
  setupSmoothScroll()
  setupLangToggle()
  setupScrollButtons()
  const year = document.getElementById("year")
  if (year) year.textContent = String(new Date().getFullYear())
}

boot()

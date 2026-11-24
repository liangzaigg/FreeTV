// 内置主题定义
export const builtInThemes = {
  default: {
    name: '默认主题',
    description: '使用系统默认样式',
    color: '#3b82f6',
    css: '',
  },
  dark_blue: {
    name: '深蓝夜空',
    description: '深邃的蓝色科技风格',
    color: '#3b82f6',
    css: `
/* 浅色模式 */
:root:not(.dark) {
  --theme-primary: #2563eb;
  --theme-primary-hover: #1d4ed8;
  --theme-bg: #dbeafe;
  --theme-bg-secondary: #eff6ff;
  --theme-text: #1e3a8a;
  --theme-text-secondary: #3b82f6;
  --theme-border: #93c5fd;
}

:root:not(.dark) body {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%) !important;
  color: var(--theme-text) !important;
}

/* 深色模式 */
.dark {
  --theme-primary: #3b82f6;
  --theme-primary-hover: #2563eb;
  --theme-bg: #0f172a;
  --theme-bg-secondary: #1e293b;
  --theme-text: #e2e8f0;
  --theme-text-secondary: #94a3b8;
  --theme-border: #334155;
}

.dark body {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
  color: var(--theme-text) !important;
}

/* 通用样式 */
[class*="bg-white"]:not(.dark *), [class*="bg-gray-50"]:not(.dark *) {
  background: var(--theme-bg-secondary) !important;
  color: var(--theme-text) !important;
}

.dark [class*="bg-gray-800"], .dark [class*="bg-gray-900"] {
  background: var(--theme-bg-secondary) !important;
  color: var(--theme-text) !important;
}

[class*="border-gray"] {
  border-color: var(--theme-border) !important;
}

[class*="text-gray-600"], [class*="text-gray-700"], [class*="text-gray-800"] {
  color: var(--theme-text-secondary) !important;
}

.dark [class*="text-gray-"] {
  color: var(--theme-text-secondary) !important;
}
`,
  },
  purple_dream: {
    name: '紫色梦境',
    description: '神秘的紫色渐变风格',
    color: '#a78bfa',
    css: `
/* 浅色模式 */
:root:not(.dark) {
  --theme-primary: #7c3aed;
  --theme-primary-hover: #6d28d9;
  --theme-bg: #f3e8ff;
  --theme-bg-secondary: #faf5ff;
  --theme-text: #581c87;
  --theme-text-secondary: #7c3aed;
  --theme-border: #d8b4fe;
}

:root:not(.dark) body {
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%) !important;
  color: var(--theme-text) !important;
}

/* 深色模式 */
.dark {
  --theme-primary: #a78bfa;
  --theme-primary-hover: #8b5cf6;
  --theme-bg: #1a0b2e;
  --theme-bg-secondary: #2d1b4e;
  --theme-text: #f3e8ff;
  --theme-text-secondary: #c4b5fd;
  --theme-border: #4c1d95;
}

.dark body {
  background: linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #4c1d95 100%) !important;
  color: var(--theme-text) !important;
}

/* 通用样式 */
[class*="bg-white"]:not(.dark *), [class*="bg-gray-50"]:not(.dark *) {
  background: var(--theme-bg-secondary) !important;
  color: var(--theme-text) !important;
}

.dark [class*="bg-gray-800"], .dark [class*="bg-gray-900"] {
  background: rgba(45, 27, 78, 0.8) !important;
  color: var(--theme-text) !important;
  backdrop-filter: blur(10px);
}

[class*="border-gray"] {
  border-color: var(--theme-border) !important;
}

[class*="text-gray-600"], [class*="text-gray-700"], [class*="text-gray-800"] {
  color: var(--theme-text-secondary) !important;
}

.dark [class*="text-gray-"] {
  color: var(--theme-text-secondary) !important;
}
`,
  },
  green_forest: {
    name: '翠绿森林',
    description: '清新的绿色自然风格',
    color: '#10b981',
    css: `
/* 浅色模式 */
:root:not(.dark) {
  --theme-primary: #059669;
  --theme-primary-hover: #047857;
  --theme-bg: #d1fae5;
  --theme-bg-secondary: #ecfdf5;
  --theme-text: #064e3b;
  --theme-text-secondary: #059669;
  --theme-border: #6ee7b7;
}

:root:not(.dark) body {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%) !important;
  color: var(--theme-text) !important;
}

/* 深色模式 */
.dark {
  --theme-primary: #10b981;
  --theme-primary-hover: #059669;
  --theme-bg: #064e3b;
  --theme-bg-secondary: #065f46;
  --theme-text: #d1fae5;
  --theme-text-secondary: #6ee7b7;
  --theme-border: #047857;
}

.dark body {
  background: linear-gradient(135deg, #064e3b 0%, #065f46 100%) !important;
  color: var(--theme-text) !important;
}

/* 通用样式 */
[class*="bg-white"]:not(.dark *), [class*="bg-gray-50"]:not(.dark *) {
  background: var(--theme-bg-secondary) !important;
  color: var(--theme-text) !important;
}

.dark [class*="bg-gray-800"], .dark [class*="bg-gray-900"] {
  background: rgba(6, 95, 70, 0.9) !important;
  color: var(--theme-text) !important;
}

[class*="border-gray"] {
  border-color: var(--theme-border) !important;
}

[class*="text-gray-600"], [class*="text-gray-700"], [class*="text-gray-800"] {
  color: var(--theme-text-secondary) !important;
}

.dark [class*="text-gray-"] {
  color: var(--theme-text-secondary) !important;
}
`,
  },
  orange_sunset: {
    name: '橙色日落',
    description: '温暖的橙色日落风格',
    color: '#f97316',
    css: `
/* 浅色模式 */
:root:not(.dark) {
  --theme-primary: #ea580c;
  --theme-primary-hover: #c2410c;
  --theme-bg: #fed7aa;
  --theme-bg-secondary: #ffedd5;
  --theme-text: #7c2d12;
  --theme-text-secondary: #ea580c;
  --theme-border: #fdba74;
}

:root:not(.dark) body {
  background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%) !important;
  color: var(--theme-text) !important;
}

/* 深色模式 */
.dark {
  --theme-primary: #f97316;
  --theme-primary-hover: #ea580c;
  --theme-bg: #431407;
  --theme-bg-secondary: #7c2d12;
  --theme-text: #fed7aa;
  --theme-text-secondary: #fdba74;
  --theme-border: #9a3412;
}

.dark body {
  background: linear-gradient(135deg, #431407 0%, #7c2d12 50%, #9a3412 100%) !important;
  color: var(--theme-text) !important;
}

/* 通用样式 */
[class*="bg-white"]:not(.dark *), [class*="bg-gray-50"]:not(.dark *) {
  background: var(--theme-bg-secondary) !important;
  color: var(--theme-text) !important;
}

.dark [class*="bg-gray-800"], .dark [class*="bg-gray-900"] {
  background: rgba(124, 45, 18, 0.85) !important;
  color: var(--theme-text) !important;
}

[class*="border-gray"] {
  border-color: var(--theme-border) !important;
}

[class*="text-gray-600"], [class*="text-gray-700"], [class*="text-gray-800"] {
  color: var(--theme-text-secondary) !important;
}

.dark [class*="text-gray-"] {
  color: var(--theme-text-secondary) !important;
}
`,
  },
  pink_candy: {
    name: '粉色糖果',
    description: '甜美的粉色糖果风格',
    color: '#ec4899',
    css: `
/* 浅色模式 */
:root:not(.dark) {
  --theme-primary: #db2777;
  --theme-primary-hover: #be185d;
  --theme-bg: #fce7f3;
  --theme-bg-secondary: #fdf2f8;
  --theme-text: #831843;
  --theme-text-secondary: #db2777;
  --theme-border: #fbcfe8;
}

:root:not(.dark) body {
  background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%) !important;
  color: var(--theme-text) !important;
}

/* 深色模式 */
.dark {
  --theme-primary: #ec4899;
  --theme-primary-hover: #db2777;
  --theme-bg: #500724;
  --theme-bg-secondary: #831843;
  --theme-text: #fce7f3;
  --theme-text-secondary: #fbcfe8;
  --theme-border: #9f1239;
}

.dark body {
  background: linear-gradient(135deg, #500724 0%, #831843 50%, #9f1239 100%) !important;
  color: var(--theme-text) !important;
}

/* 通用样式 */
[class*="bg-white"]:not(.dark *), [class*="bg-gray-50"]:not(.dark *) {
  background: var(--theme-bg-secondary) !important;
  color: var(--theme-text) !important;
}

.dark [class*="bg-gray-800"], .dark [class*="bg-gray-900"] {
  background: rgba(131, 24, 67, 0.85) !important;
  color: var(--theme-text) !important;
}

[class*="border-gray"] {
  border-color: var(--theme-border) !important;
}

[class*="text-gray-600"], [class*="text-gray-700"], [class*="text-gray-800"] {
  color: var(--theme-text-secondary) !important;
}

.dark [class*="text-gray-"] {
  color: var(--theme-text-secondary) !important;
}
`,
  },
  cyan_ocean: {
    name: '青色海洋',
    description: '清爽的青色海洋风格',
    color: '#06b6d4',
    css: `
/* 浅色模式 */
:root:not(.dark) {
  --theme-primary: #0891b2;
  --theme-primary-hover: #0e7490;
  --theme-bg: #cffafe;
  --theme-bg-secondary: #ecfeff;
  --theme-text: #164e63;
  --theme-text-secondary: #0891b2;
  --theme-border: #67e8f9;
}

:root:not(.dark) body {
  background: linear-gradient(135deg, #ecfeff 0%, #cffafe 100%) !important;
  color: var(--theme-text) !important;
}

/* 深色模式 */
.dark {
  --theme-primary: #06b6d4;
  --theme-primary-hover: #0891b2;
  --theme-bg: #083344;
  --theme-bg-secondary: #164e63;
  --theme-text: #cffafe;
  --theme-text-secondary: #67e8f9;
  --theme-border: #155e75;
}

.dark body {
  background: linear-gradient(135deg, #083344 0%, #164e63 100%) !important;
  color: var(--theme-text) !important;
}

/* 通用样式 */
[class*="bg-white"]:not(.dark *), [class*="bg-gray-50"]:not(.dark *) {
  background: var(--theme-bg-secondary) !important;
  color: var(--theme-text) !important;
}

.dark [class*="bg-gray-800"], .dark [class*="bg-gray-900"] {
  background: rgba(22, 78, 99, 0.9) !important;
  color: var(--theme-text) !important;
}

[class*="border-gray"] {
  border-color: var(--theme-border) !important;
}

[class*="text-gray-600"], [class*="text-gray-700"], [class*="text-gray-800"] {
  color: var(--theme-text-secondary) !important;
}

.dark [class*="text-gray-"] {
  color: var(--theme-text-secondary) !important;
}
`,
  },
  cyberpunk: {
    name: '赛博朋克',
    description: '霓虹青紫与深色电影质感',
    color: '#ff2e88',
    css: `
:root:not(.dark) {
  --theme-primary: #ff2e88;
  --theme-primary-hover: #22d3ee;
  --theme-bg: #080b16;
  --theme-bg-secondary: #111629;
  --theme-text: #ecf7ff;
  --theme-text-secondary: #a7b5d1;
  --theme-border: rgba(34, 211, 238, 0.2);
}
.dark {
  --theme-primary: #ff2e88;
  --theme-primary-hover: #22d3ee;
  --theme-bg: #080b16;
  --theme-bg-secondary: #111629;
  --theme-text: #ecf7ff;
  --theme-text-secondary: #a7b5d1;
  --theme-border: rgba(34, 211, 238, 0.2);
}
html, body {
  background-color: #080b16 !important;
  color: #ecf7ff !important;
}
body {
  background-image:
    radial-gradient(ellipse at 78% 0%, rgba(255, 46, 136, 0.16), transparent 38%),
    radial-gradient(ellipse at 8% 18%, rgba(0, 205, 230, 0.11), transparent 32%),
    linear-gradient(180deg, #080b16 0%, #0b1020 52%, #080b16 100%) !important;
  background-attachment: fixed !important;
}
.freetv-hero {
  isolation: isolate;
  background: #070811;
  border-bottom: 1px solid rgba(34, 211, 238, .35);
}
.freetv-hero::after {
  content: '';
  position: absolute;
  inset: 18px;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, .16);
  border-left: 2px solid #ff2e88;
  pointer-events: none;
  clip-path: polygon(0 0, 100% 0, 100% 72%, 94% 100%, 0 100%);
}
.freetv-hero-kicker {
  color: #a7f3ff;
  font: 700 11px/1.2 Inter, 'Microsoft YaHei UI', 'Microsoft YaHei', sans-serif;
  letter-spacing: .24em;
  text-shadow: 0 0 18px rgba(34, 211, 238, .7);
}
.freetv-hero-kicker span { color: #ff2e88; }
.freetv-hero-title {
  max-width: 11ch;
  line-height: 1.08;
  letter-spacing: .035em;
  text-shadow: 0 3px 24px rgba(0, 0, 0, .75), 3px 0 0 rgba(255, 46, 136, .18);
}
.freetv-hero-play {
  background: #ff2e88;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 92% 100%, 0 100%);
  box-shadow: 0 0 28px rgba(255, 46, 136, .35);
}
.freetv-hero-play:hover { background: #22d3ee; color: #070811; }
.freetv-hero-index {
  position: absolute;
  z-index: 2;
  right: 38px;
  top: 42px;
  color: rgba(255,255,255,.7);
  font: 600 10px/1 Inter, Arial, sans-serif;
  letter-spacing: .2em;
  writing-mode: vertical-rl;
}
.freetv-hero-index span { color: #ff2e88; }
.freetv-hero-index i {
  display: inline-block;
  height: 42px;
  margin: 10px auto;
  border-left: 1px solid #22d3ee;
}
.freetv-video-card { transition: filter .25s ease, transform .25s ease; }
.freetv-video-card:hover { filter: drop-shadow(0 0 13px rgba(255, 46, 136, .24)); }
.text-green-600 { color: #ff2e88 !important; text-shadow: 0 0 18px rgba(255, 46, 136, .24); }
.freetv-poster-frame { isolation: isolate; }
.freetv-poster-frame::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 2;
  border: 1px solid rgba(34, 211, 238, .34);
  border-bottom: 2px solid rgba(255, 46, 136, .72);
  border-radius: inherit;
  pointer-events: none;
  transition: border-color .25s ease, box-shadow .25s ease;
}
.freetv-video-card:hover .freetv-poster-frame::after {
  border-color: rgba(255, 46, 136, .85);
  box-shadow: inset 0 0 18px rgba(255, 46, 136, .12);
}
.freetv-video-card:nth-child(3n) .freetv-poster-frame::after { border-bottom-color: #c7ff3f; }
.freetv-video-card [class*="group-hover:text-green"] { color: #22d3ee !important; }
@media (max-width: 639px) {
  .freetv-hero::after { inset: 9px; }
  .freetv-hero-index { right: 20px; top: 24px; font-size: 8px; }
}
[class*="bg-white"]:not(.dark *), [class*="bg-gray-50"]:not(.dark *) {
  background: rgba(17, 22, 41, 0.94) !important;
  color: #ecf7ff !important;
}
.dark [class*="bg-gray-800"], .dark [class*="bg-gray-900"] {
  background: rgba(15, 20, 38, 0.9) !important;
  color: #ecf7ff !important;
  backdrop-filter: blur(16px);
}
[class*="border-gray"] { border-color: rgba(34, 211, 238, 0.16) !important; }
[class*="text-gray-600"], [class*="text-gray-700"], [class*="text-gray-800"],
.dark [class*="text-gray-"] { color: #a7b5d1 !important; }
.video-card-hover { transition: transform .28s ease, filter .28s ease; }
.video-card-hover:hover {
  filter: drop-shadow(0 0 18px rgba(34, 211, 238, .22));
}
#nprogress .bar {
  background: linear-gradient(90deg, #ff2e88, #22d3ee) !important;
  box-shadow: 0 0 12px rgba(255, 46, 136, .75) !important;
}
::selection { background: rgba(34, 211, 238, .32); color: #fff; }
@media (prefers-reduced-motion: reduce) {
  .video-card-hover { transition: none; }
}
`,
  },
};

export type ThemeName = keyof typeof builtInThemes;

export function getThemeCSS(themeName: ThemeName): string {
  return builtInThemes[themeName]?.css || '';
}

export function getThemeNames(): { value: ThemeName; label: string }[] {
  return Object.entries(builtInThemes).map(([key, theme]) => ({
    value: key as ThemeName,
    label: theme.name,
  }));
}

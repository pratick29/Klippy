// Klippy Chrome Extension - Popup Engine (v2.0 | Clip it. Keep it. Copy it.)

// Brand SVGs
const LOGO_SVGS = {
  linkedin: `<svg viewBox="0 0 24 24" fill="#0a66c2"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>`,
  leetcode: `<svg viewBox="0 0 24 24" fill="#ffa116"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.374 1.374 0 0 0-.004 1.938l.68.68a1.374 1.374 0 0 0 1.937.004l4.578-4.578.435.435a.573.573 0 0 1 0 .81l-7.79 7.79a3.834 3.834 0 0 0 0 5.422l.534.534a3.834 3.834 0 0 0 5.422 0l7.79-7.79a.573.573 0 0 1 .81 0l.435.435-4.578 4.578a1.374 1.374 0 0 0 .004 1.938l.68.68a1.374 1.374 0 0 0 1.938-.004l5.406-5.406a1.374 1.374 0 0 0 .438-.961 1.374 1.374 0 0 0-.438-.961L14.444.438A1.374 1.374 0 0 0 13.483 0zm-7.61 14.887a1.834 1.834 0 0 1 0-2.593l5.882-5.882a1.834 1.834 0 0 1 2.593 0l.29.29-6.172 6.172a1.834 1.834 0 0 1-2.593 0z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  hackerrank: `<svg viewBox="0 0 24 24" fill="#00ea64"><path d="M11.987 0C5.372 0 0 5.373 0 11.988 0 18.605 5.372 24 11.987 24c6.614 0 12.013-5.395 12.013-12.012C24 5.373 18.601 0 11.987 0zm5.1 16.427c-.138.138-.313.207-.496.207-.183 0-.358-.069-.496-.207l-1.25-1.25c-.13-.13-.207-.305-.207-.493V9.316c0-.188.077-.363.207-.494l1.25-1.25c.138-.138.313-.207.496-.207.183 0 .358.069.496.207.274.274.274.718 0 .991l-.756.756v4.362l.756.756c.274.274.274.718 0 .99zm-8.003.207c-.183 0-.358-.069-.496-.207-.274-.274-.274-.718 0-.992l.756-.754V9.316l-.756-.756c-.274-.273-.274-.717 0-.99.274-.275.718-.275.992 0l1.25 1.249c.13.131.207.306.207.494v6.003c0 .188-.077.363-.207.494l-1.25 1.25c-.138.138-.313.207-.496.207zm4.523-.604H11.19a.702.702 0 0 1-.7-.7V12.7H8.886a.35.35 0 1 1 0-.7H10.49V8.67c0-.387.313-.7.7-.7h2.418c.387 0 .7.313.7.7v2.33h1.604a.35.35 0 1 1 0 .7h-1.604v2.33c0 .387-.313.7-.7.7z"/></svg>`,
  codeforces: `<svg viewBox="0 0 24 24" fill="#1877f2"><path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 9a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h3z"/></svg>`,
  codechef: `<svg viewBox="0 0 24 24" fill="#d97706"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg>`,
  portfolio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="#e1306c"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="#ff0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  devto: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H5.43v4.36h1.15c.38 0 .66-.08.84-.23.18-.16.27-.42.27-.79v-2.32c0-.37-.09-.63-.27-.79zm-4.3 6.9V7.05h3.63c.96 0 1.68.22 2.17.65.49.43.74 1.08.74 1.94v2.72c0 .87-.25 1.52-.74 1.95-.49.43-1.21.64-2.17.64H3.12zm10.74-6.9h-2.17v1.74h2.17v1.17h-2.17v1.74h2.47v1.17h-3.64V7.05h3.64v1.17zm4.72 6.9l-2.02-6.9h1.34l1.37 5.09 1.38-5.09h1.32l-2.02 6.9h-1.37z"/></svg>`,
  medium: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`,
  custom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
};

const PLATFORM_META = {
  linkedin: { name: 'LinkedIn', urlPrefix: 'https://linkedin.com/in/' },
  github: { name: 'GitHub', urlPrefix: 'https://github.com/' },
  leetcode: { name: 'LeetCode', urlPrefix: 'https://leetcode.com/u/' },
  x: { name: 'X / Twitter', urlPrefix: 'https://x.com/' },
  hackerrank: { name: 'HackerRank', urlPrefix: 'https://hackerrank.com/profile/' },
  codeforces: { name: 'Codeforces', urlPrefix: 'https://codeforces.com/profile/' },
  codechef: { name: 'CodeChef', urlPrefix: 'https://codechef.com/users/' },
  portfolio: { name: 'Portfolio', urlPrefix: 'https://' },
  email: { name: 'Email', urlPrefix: 'mailto:' },
  instagram: { name: 'Instagram', urlPrefix: 'https://instagram.com/' },
  youtube: { name: 'YouTube', urlPrefix: 'https://youtube.com/@' },
  devto: { name: 'Dev.to', urlPrefix: 'https://dev.to/' },
  medium: { name: 'Medium', urlPrefix: 'https://medium.com/@' },
  custom: { name: 'Custom', urlPrefix: 'https://' }
};

const DEFAULT_PRESETS = [
  { id: 'preset_linkedin', platform: 'linkedin', platformName: 'LinkedIn', username: 'your-linkedin-username', url: 'https://linkedin.com/in/your-linkedin-username', note: 'Work', pinned: true },
  { id: 'preset_github', platform: 'github', platformName: 'GitHub', username: 'your-github-handle', url: 'https://github.com/your-github-handle', note: 'Dev', pinned: true },
  { id: 'preset_leetcode', platform: 'leetcode', platformName: 'LeetCode', username: 'your-leetcode-id', url: 'https://leetcode.com/u/your-leetcode-id', note: 'DSA', pinned: false },
  { id: 'preset_x', platform: 'x', platformName: 'X / Twitter', username: '@your_x_handle', url: 'https://x.com/your_x_handle', note: 'Social', pinned: false }
];

// App State
let profilesData = [];
let passwordsData = [];
let keysData = [];
let notesData = [];
let activeTab = 'profiles'; // 'profiles' | 'passwords' | 'keys' | 'notes' | 'generator'
let detectedProfile = null;

// Theme State
let currentTheme = 'dark'; // 'dark' | 'light'

// Security State
let masterPassword = null; // Stored password string
let lockSettings = { lockPasswords: true, lockKeys: true, lockLinks: false, lockNotes: false };
let isUnlocked = false;
let unlockTimestamp = null;
const AUTO_LOCK_MS = 2 * 60 * 1000; // 2 minutes auto lock
let pendingActionCallback = null;

// Storage Wrapper
const Storage = {
  get: (key, callback) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get([key], (result) => callback(result[key]));
    } else {
      const raw = localStorage.getItem(key);
      callback(raw ? JSON.parse(raw) : null);
    }
  },
  set: (key, value, callback) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ [key]: value }, () => { if (callback) callback(); });
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      if (callback) callback();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  bindEvents();
  detectActiveTabProfile();

  // Pratick Labs footer → open portfolio
  const footer = document.getElementById('pratickFooter');
  if (footer) {
    footer.style.cursor = 'pointer';
    footer.addEventListener('click', () => {
      chrome.tabs.create({ url: 'https://pratikbothra.vercel.app/' });
    });
  }

  // Ko-fi header button
  const kofiBtn = document.getElementById('kofiBtn');
  if (kofiBtn) {
    kofiBtn.addEventListener('click', () => {
      chrome.tabs.create({ url: 'https://ko-fi.com/praticklabs' });
    });
  }

  // Ko-fi support strip above footer
  const kofiStrip = document.getElementById('kofiStrip');
  if (kofiStrip) {
    kofiStrip.addEventListener('click', () => {
      chrome.tabs.create({ url: 'https://ko-fi.com/praticklabs' });
    });
  }
});

/* ----------------------------------------------------
   THEME ENGINE
---------------------------------------------------- */
function applyTheme(theme) {
  currentTheme = theme;
  document.body.setAttribute('data-theme', theme);

  // Update header toggle icon
  const icon = document.getElementById('themeToggleIcon');
  if (icon) icon.innerText = theme === 'dark' ? '🌙' : '☀️';

  // Update settings panel buttons active state
  const darkBtn = document.getElementById('themeDarkBtn');
  const lightBtn = document.getElementById('themeLightBtn');
  if (darkBtn && lightBtn) {
    darkBtn.classList.toggle('active-theme', theme === 'dark');
    lightBtn.classList.toggle('active-theme', theme === 'light');
  }

  // Save preference
  Storage.set('clinky_theme', theme);
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function initApp() {
  // Load saved theme preference first
  Storage.get('clinky_theme', (savedTheme) => {
    applyTheme(savedTheme || 'dark');
  });

  // Load Lock Settings & Master Password
  Storage.get('clinky_master_password', (mp) => { masterPassword = mp || null; updateSecurityUI(); });
  Storage.get('clinky_lock_settings', (ls) => { if (ls) lockSettings = ls; updateSecurityUI(); });

  // Load Data
  Storage.get('clinky_profiles', (data) => {
    profilesData = (!data || data.length === 0) ? DEFAULT_PRESETS : data;
    if (!data || data.length === 0) saveProfiles();
    renderProfiles();
    updateBadges();
  });

  Storage.get('clinky_passwords', (data) => {
    passwordsData = data || [];
    renderPasswords();
    updateBadges();
  });

  Storage.get('clinky_keys', (data) => {
    keysData = data || [];
    renderKeys();
    updateBadges();
  });

  Storage.get('clinky_notes', (data) => {
    notesData = data || [];
    renderNotes();
    updateBadges();
  });

  generatePassword();
}

function saveProfiles(cb) { Storage.set('clinky_profiles', profilesData, () => { renderProfiles(); updateBadges(); if(cb) cb(); }); }
function savePasswords(cb) { Storage.set('clinky_passwords', passwordsData, () => { renderPasswords(); updateBadges(); if(cb) cb(); }); }
function saveKeys(cb) { Storage.set('clinky_keys', keysData, () => { renderKeys(); updateBadges(); if(cb) cb(); }); }
function saveNotes(cb) { Storage.set('clinky_notes', notesData, () => { renderNotes(); updateBadges(); if(cb) cb(); }); }

function updateBadges() {
  document.getElementById('profilesCountBadge').innerText = profilesData.length;
  document.getElementById('passwordsCountBadge').innerText = passwordsData.length;
  document.getElementById('keysCountBadge').innerText = keysData.length;
  document.getElementById('notesCountBadge').innerText = notesData.length;
}

/* ----------------------------------------------------
   MASTER PASSWORD & LOCK ENGINE
---------------------------------------------------- */
function isCategoryLocked(category) {
  if (category === 'passwords') return lockSettings.lockPasswords;
  if (category === 'keys') return lockSettings.lockKeys;
  if (category === 'profiles') return lockSettings.lockLinks;
  if (category === 'notes') return lockSettings.lockNotes;
  return false;
}

function checkLockTimer() {
  if (isUnlocked && unlockTimestamp && (Date.now() - unlockTimestamp > AUTO_LOCK_MS)) {
    isUnlocked = false;
    unlockTimestamp = null;
    updateSecurityUI();
    showToast('Vault auto-locked after 2 minutes', true);
  }
}

function updateSecurityUI() {
  checkLockTimer();
  const lockIcon = document.getElementById('vaultLockIcon');
  const mpStatus = document.getElementById('masterPassStatusText');

  lockIcon.innerText = isUnlocked ? '🔓' : '🔒';
  mpStatus.innerText = masterPassword ? 'Active' : 'Not Set';
  document.getElementById('setMasterPassBtn').innerText = masterPassword ? 'Change Password' : 'Set Password';

  // Checkbox states in Settings
  document.getElementById('lockPassCheck').checked = lockSettings.lockPasswords;
  document.getElementById('lockKeysCheck').checked = lockSettings.lockKeys;
  document.getElementById('lockLinksCheck').checked = lockSettings.lockLinks;
  document.getElementById('lockNotesCheck').checked = lockSettings.lockNotes;

  // Lock Indicators on Tabs
  document.getElementById('lockIndPass').classList.toggle('hidden', !lockSettings.lockPasswords);
  document.getElementById('lockIndKeys').classList.toggle('hidden', !lockSettings.lockKeys);
}

function ensureUnlocked(category, callback) {
  checkLockTimer();
  if (!isCategoryLocked(category) || isUnlocked) {
    if (isUnlocked) unlockTimestamp = Date.now(); // reset timer
    callback();
    return;
  }

  // Needs unlock
  pendingActionCallback = callback;
  openMasterPassModal();
}

function openMasterPassModal() {
  const backdrop = document.getElementById('masterPassModalBackdrop');
  const title = document.getElementById('masterPassModalTitle');
  const desc = document.getElementById('masterPassModalDesc');
  const confirmGroup = document.getElementById('masterPassConfirmGroup');

  document.getElementById('masterPassForm').reset();

  if (!masterPassword) {
    title.innerText = '🔒 Set Master Vault Password';
    desc.innerText = 'Create a Master Password to lock & secure your Passwords & Keys.';
    confirmGroup.classList.remove('hidden');
    document.getElementById('submitMasterPassBtn').innerText = 'Set Password & Unlock';
  } else {
    title.innerText = '🔒 Enter Master Password';
    desc.innerText = 'Enter your Master Password to access protected items (Auto-locks in 2m).';
    confirmGroup.classList.add('hidden');
    document.getElementById('submitMasterPassBtn').innerText = 'Unlock Vault';
  }

  backdrop.classList.remove('hidden');
  document.getElementById('masterPassInput').focus();
}

function closeMasterPassModal() {
  document.getElementById('masterPassModalBackdrop').classList.add('hidden');
  pendingActionCallback = null;
}

function handleMasterPassSubmit() {
  const pass = document.getElementById('masterPassInput').value;
  const confirmPass = document.getElementById('masterPassConfirmInput').value;

  if (!masterPassword) {
    if (!pass || pass.length < 4) {
      showToast('Master password must be at least 4 chars!', true);
      return;
    }
    if (pass !== confirmPass) {
      showToast('Passwords do not match!', true);
      return;
    }
    masterPassword = pass;
    Storage.set('clinky_master_password', masterPassword, () => {
      isUnlocked = true;
      unlockTimestamp = Date.now();
      closeMasterPassModal();
      updateSecurityUI();
      showToast('Master Password set & Vault Unlocked!');
      if (pendingActionCallback) pendingActionCallback();
    });
  } else {
    if (pass === masterPassword) {
      isUnlocked = true;
      unlockTimestamp = Date.now();
      closeMasterPassModal();
      updateSecurityUI();
      showToast('Vault Unlocked!');
      if (pendingActionCallback) pendingActionCallback();
    } else {
      showToast('Incorrect Master Password!', true);
    }
  }
}

/* ----------------------------------------------------
   AUTO PROFILE DETECTION
---------------------------------------------------- */
function detectActiveTabProfile() {
  if (typeof chrome === 'undefined' || !chrome.tabs || !chrome.tabs.query) return;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || !tabs[0] || !tabs[0].url) return;
    const url = tabs[0].url;
    let match = null;

    if (url.includes('linkedin.com/in/')) {
      const username = url.split('linkedin.com/in/')[1].split('/')[0].split('?')[0];
      if (username) match = { platform: 'linkedin', platformName: 'LinkedIn', username, url };
    } else if (url.includes('github.com/')) {
      const parts = url.split('github.com/')[1].split('/')[0].split('?')[0];
      if (parts && !['settings', 'notifications', 'explore', 'orgs', 'features', 'marketplace'].includes(parts)) {
        match = { platform: 'github', platformName: 'GitHub', username: parts, url };
      }
    } else if (url.includes('leetcode.com/')) {
      let username = '';
      if (url.includes('leetcode.com/u/')) username = url.split('leetcode.com/u/')[1].split('/')[0];
      else username = url.split('leetcode.com/')[1]?.split('/')[0] || '';
      if (username && !['problems', 'contest', 'discuss', 'explore', 'company', 'tag'].includes(username)) {
        match = { platform: 'leetcode', platformName: 'LeetCode', username, url };
      }
    } else if (url.includes('x.com/') || url.includes('twitter.com/')) {
      const domain = url.includes('x.com/') ? 'x.com/' : 'twitter.com/';
      const username = url.split(domain)[1]?.split('/')[0].split('?')[0] || '';
      if (username && !['home', 'explore', 'notifications', 'messages', 'i'].includes(username)) {
        match = { platform: 'x', platformName: 'X / Twitter', username: '@' + username.replace('@',''), url };
      }
    } else if (url.includes('hackerrank.com/')) {
      const username = url.split('hackerrank.com/')[1]?.split('/')[0].split('?')[0] || '';
      if (username && !['dashboard', 'challenges', 'skills', 'work', 'leaderboard'].includes(username)) {
        match = { platform: 'hackerrank', platformName: 'HackerRank', username, url };
      }
    } else if (url.includes('codeforces.com/profile/')) {
      const username = url.split('codeforces.com/profile/')[1]?.split('/')[0].split('?')[0] || '';
      if (username) match = { platform: 'codeforces', platformName: 'Codeforces', username, url };
    } else if (url.includes('codechef.com/users/')) {
      const username = url.split('codechef.com/users/')[1]?.split('/')[0].split('?')[0] || '';
      if (username) match = { platform: 'codechef', platformName: 'CodeChef', username, url };
    } else if (url.includes('instagram.com/')) {
      const username = url.split('instagram.com/')[1]?.split('/')[0].split('?')[0] || '';
      if (username && !['explore', 'accounts', 'direct', 'stories', 'reels', 'p'].includes(username)) {
        match = { platform: 'instagram', platformName: 'Instagram', username: '@' + username, url };
      }
    } else if (url.includes('youtube.com/@')) {
      const username = url.split('youtube.com/@')[1]?.split('/')[0].split('?')[0] || '';
      if (username) match = { platform: 'youtube', platformName: 'YouTube', username: '@' + username, url };
    } else if (url.includes('medium.com/@')) {
      const username = url.split('medium.com/@')[1]?.split('/')[0].split('?')[0] || '';
      if (username) match = { platform: 'medium', platformName: 'Medium', username: '@' + username, url };
    } else if (url.includes('dev.to/')) {
      const username = url.split('dev.to/')[1]?.split('/')[0].split('?')[0] || '';
      if (username && !['t', 'search', 'listings', 'videos', 'podcast'].includes(username)) {
        match = { platform: 'devto', platformName: 'Dev.to', username, url };
      }
    }

    if (match) {
      detectedProfile = match;
      document.getElementById('detectPlatform').innerText = match.platformName;
      document.getElementById('detectUser').innerText = match.username;
      document.getElementById('autoDetectBanner').classList.remove('hidden');
    }
  });
}

/* ----------------------------------------------------
   RENDERING
---------------------------------------------------- */
function renderProfiles(filterText = '') {
  const container = document.getElementById('profilesList');
  const emptyState = document.getElementById('emptyProfilesState');
  const query = filterText.toLowerCase().trim();

  const filtered = profilesData.filter(p => 
    (p.platformName || p.platform).toLowerCase().includes(query) ||
    (p.username || '').toLowerCase().includes(query) ||
    (p.url || '').toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  container.innerHTML = filtered.map(p => `
    <div class="profile-card" data-id="${p.id}">
      <div class="tooltip-popover"><strong>${escapeHtml(p.platformName)}</strong>: ${escapeHtml(p.username || p.url)}</div>
      <div class="logo-box">${LOGO_SVGS[p.platform] || LOGO_SVGS.custom}</div>
      <div class="card-info">
        <div class="card-title-row">
          <span class="card-title">${escapeHtml(p.platformName)}</span>
          ${p.note ? `<span class="tag-badge">${escapeHtml(p.note)}</span>` : ''}
        </div>
        <span class="card-subtext">${escapeHtml(p.username || p.url)}</span>
      </div>
      <div class="card-actions">
        ${p.url ? `<button class="btn-copy copy-profile-link" data-copy="${escapeHtml(p.url)}" title="Copy Link">Link</button>` : ''}
        ${p.username ? `<button class="btn-copy copy-profile-user" data-copy="${escapeHtml(p.username)}" title="Copy Handle">User</button>` : ''}
        <button class="btn-action-icon edit-profile-btn" data-id="${p.id}" title="Edit Profile">✏️</button>
        <button class="btn-action-icon delete-profile-btn danger" data-id="${p.id}" title="Delete Profile">🗑️</button>
      </div>
    </div>
  `).join('');
}

function renderPasswords(filterText = '') {
  const container = document.getElementById('passwordsList');
  const emptyState = document.getElementById('emptyPasswordsState');
  const query = filterText.toLowerCase().trim();

  const filtered = passwordsData.filter(p =>
    p.site.toLowerCase().includes(query) || p.username.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  container.innerHTML = filtered.map(item => `
    <div class="password-card" data-id="${item.id}">
      <div class="tooltip-popover"><strong>${escapeHtml(item.site)}</strong>: ${escapeHtml(item.username)}</div>
      <div class="logo-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </div>
      <div class="card-info">
        <div class="card-title-row">
          <span class="card-title">${escapeHtml(item.site)}</span>
          ${item.note ? `<span class="tag-badge">${escapeHtml(item.note)}</span>` : ''}
        </div>
        <span class="card-subtext">${escapeHtml(item.username)} • <span id="passMask_${item.id}">••••••••</span></span>
      </div>
      <div class="card-actions">
        <button class="btn-toggle-eye toggle-pass-eye" data-id="${item.id}" title="Show/Hide Password">👁️</button>
        <button class="btn-copy copy-pass-val" data-id="${item.id}" title="Copy Password">Pass</button>
        <button class="btn-copy copy-pass-user" data-copy="${escapeHtml(item.username)}" title="Copy Username">User</button>
        <button class="btn-action-icon edit-password-btn" data-id="${item.id}" title="Edit Password">✏️</button>
        <button class="btn-action-icon delete-password-btn danger" data-id="${item.id}" title="Delete Password">🗑️</button>
      </div>
    </div>
  `).join('');
}

function renderKeys(filterText = '') {
  const container = document.getElementById('keysList');
  const emptyState = document.getElementById('emptyKeysState');
  const query = filterText.toLowerCase().trim();

  const filtered = keysData.filter(k =>
    k.service.toLowerCase().includes(query) || k.name.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  container.innerHTML = filtered.map(k => `
    <div class="key-card" data-id="${k.id}">
      <div class="tooltip-popover"><strong>${escapeHtml(k.service)}</strong>: ${escapeHtml(k.name)}</div>
      <div class="logo-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
      </div>
      <div class="card-info">
        <div class="card-title-row">
          <span class="card-title">${escapeHtml(k.service)}</span>
          <span class="tag-badge">${escapeHtml(k.name)}</span>
        </div>
        <span class="card-subtext"><span id="keyMask_${k.id}">••••••••••••••••</span></span>
      </div>
      <div class="card-actions">
        <button class="btn-toggle-eye toggle-key-eye" data-id="${k.id}" title="Show/Hide Key">👁️</button>
        <button class="btn-copy copy-key-val" data-id="${k.id}" title="Copy Secret Key">Key</button>
        <button class="btn-action-icon edit-key-btn" data-id="${k.id}" title="Edit Key">✏️</button>
        <button class="btn-action-icon delete-key-btn danger" data-id="${k.id}" title="Delete Key">🗑️</button>
      </div>
    </div>
  `).join('');
}

function renderNotes(filterText = '') {
  const container = document.getElementById('notesList');
  const emptyState = document.getElementById('emptyNotesState');
  const query = filterText.toLowerCase().trim();

  const filtered = notesData.filter(n =>
    n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  container.innerHTML = filtered.map(n => `
    <div class="note-card" data-id="${n.id}">
      <div class="tooltip-popover"><strong>${escapeHtml(n.title)}</strong></div>
      <div class="logo-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
      </div>
      <div class="card-info">
        <div class="card-title-row">
          <span class="card-title">${escapeHtml(n.title)}</span>
          ${n.tag ? `<span class="tag-badge">${escapeHtml(n.tag)}</span>` : ''}
        </div>
        <span class="card-subtext">${escapeHtml(n.content)}</span>
      </div>
      <div class="card-actions">
        <button class="btn-copy copy-note-val" data-id="${n.id}" title="Copy Note Content">Copy</button>
        <button class="btn-action-icon edit-note-btn" data-id="${n.id}" title="Edit Note">✏️</button>
        <button class="btn-action-icon delete-note-btn danger" data-id="${n.id}" title="Delete Note">🗑️</button>
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------
   PASSWORD GENERATOR
---------------------------------------------------- */
function generatePassword() {
  const len = parseInt(document.getElementById('passLengthRange').value, 10);
  const upper = document.getElementById('genUpper').checked;
  const lower = document.getElementById('genLower').checked;
  const num = document.getElementById('genNum').checked;
  const sym = document.getElementById('genSym').checked;

  let chars = '';
  if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lower) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (num) chars += '0123456789';
  if (sym) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

  let pass = '';
  for (let i = 0; i < len; i++) pass += chars.charAt(Math.floor(Math.random() * chars.length));
  document.getElementById('genPassResult').value = pass;
}

/* ----------------------------------------------------
   EVENTS
---------------------------------------------------- */
function bindEvents() {
  // Navigation Tabs
  document.getElementById('tabProfiles').addEventListener('click', () => switchTab('profiles'));
  document.getElementById('tabPasswords').addEventListener('click', () => switchTab('passwords'));
  document.getElementById('tabKeys').addEventListener('click', () => switchTab('keys'));
  document.getElementById('tabNotes').addEventListener('click', () => switchTab('notes'));
  document.getElementById('tabGenPass').addEventListener('click', () => switchTab('generator'));

  // Theme Toggle (header icon button)
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

  // Theme buttons inside Settings panel
  document.getElementById('themeDarkBtn').addEventListener('click', () => applyTheme('dark'));
  document.getElementById('themeLightBtn').addEventListener('click', () => applyTheme('light'));

  // Header Lock status toggle
  document.getElementById('lockVaultStatusBtn').addEventListener('click', () => {
    if (isUnlocked) {
      isUnlocked = false;
      unlockTimestamp = null;
      updateSecurityUI();
      showToast('Vault Locked');
    } else {
      ensureUnlocked(activeTab, () => {});
    }
  });

  // Header Add Button
  document.getElementById('addBtn').addEventListener('click', () => {
    ensureUnlocked(activeTab, () => {
      if (activeTab === 'passwords') openPasswordModal();
      else if (activeTab === 'keys') openKeyModal();
      else if (activeTab === 'notes') openNoteModal();
      else openProfileModal();
    });
  });

  // Master Password Form Submit
  document.getElementById('masterPassForm').addEventListener('submit', (e) => {
    e.preventDefault();
    handleMasterPassSubmit();
  });
  document.getElementById('closeMasterPassModalBtn').addEventListener('click', closeMasterPassModal);
  document.getElementById('cancelMasterPassModalBtn').addEventListener('click', closeMasterPassModal);

  // Security Settings Checkboxes
  ['lockPassCheck', 'lockKeysCheck', 'lockLinksCheck', 'lockNotesCheck'].forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
      lockSettings.lockPasswords = document.getElementById('lockPassCheck').checked;
      lockSettings.lockKeys = document.getElementById('lockKeysCheck').checked;
      lockSettings.lockLinks = document.getElementById('lockLinksCheck').checked;
      lockSettings.lockNotes = document.getElementById('lockNotesCheck').checked;
      Storage.set('clinky_lock_settings', lockSettings, () => updateSecurityUI());
    });
  });

  document.getElementById('setMasterPassBtn').addEventListener('click', () => {
    masterPassword = null;
    openMasterPassModal();
  });

  // Quick Save Detected Profile
  document.getElementById('quickSaveDetectedBtn').addEventListener('click', () => {
    if (detectedProfile) {
      if (profilesData.some(p => p.url === detectedProfile.url)) {
        showToast('Profile already in vault!', true);
      } else {
        profilesData.unshift({
          id: 'profile_' + Date.now(),
          platform: detectedProfile.platform,
          platformName: detectedProfile.platformName,
          username: detectedProfile.username,
          url: detectedProfile.url,
          note: 'Auto'
        });
        saveProfiles(() => {
          showToast(`Saved ${detectedProfile.platformName} profile!`);
          document.getElementById('autoDetectBanner').classList.add('hidden');
        });
      }
    }
  });

  // Search Filter
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    clearSearchBtn.classList.toggle('hidden', !val);
    renderProfiles(val);
    renderPasswords(val);
    renderKeys(val);
    renderNotes(val);
  });
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    renderProfiles(); renderPasswords(); renderKeys(); renderNotes();
  });

  // Profiles Clicks
  document.getElementById('profilesList').addEventListener('click', (e) => {
    const btnLink = e.target.closest('.copy-profile-link');
    if (btnLink) { copyToClipboard(btnLink.getAttribute('data-copy'), btnLink); return; }
    const btnUser = e.target.closest('.copy-profile-user');
    if (btnUser) { copyToClipboard(btnUser.getAttribute('data-copy'), btnUser); return; }
    const menuBtn = e.target.closest('.card-menu-btn');
    if (menuBtn) { toggleMenu('menu_' + menuBtn.getAttribute('data-id')); return; }
    const editBtn = e.target.closest('.edit-profile-btn');
    if (editBtn) { openProfileModal(editBtn.getAttribute('data-id')); closeAllMenus(); return; }
    const delBtn = e.target.closest('.delete-profile-btn');
    if (delBtn) { deleteProfile(delBtn.getAttribute('data-id')); closeAllMenus(); return; }
    closeAllMenus();
  });

  // Passwords Clicks (Protected by Master Password if locked)
  document.getElementById('passwordsList').addEventListener('click', (e) => {
    const passValBtn = e.target.closest('.copy-pass-val');
    if (passValBtn) {
      const id = passValBtn.getAttribute('data-id');
      const item = passwordsData.find(p => p.id === id);
      if (item) {
        ensureUnlocked('passwords', () => copyToClipboard(item.password, passValBtn));
      }
      return;
    }
    const userValBtn = e.target.closest('.copy-pass-user');
    if (userValBtn) { copyToClipboard(userValBtn.getAttribute('data-copy'), userValBtn); return; }

    const eyeBtn = e.target.closest('.toggle-pass-eye');
    if (eyeBtn) {
      const id = eyeBtn.getAttribute('data-id');
      ensureUnlocked('passwords', () => {
        const maskEl = document.getElementById(`passMask_${id}`);
        const item = passwordsData.find(p => p.id === id);
        if (item && maskEl) {
          if (maskEl.innerText === '••••••••') { maskEl.innerText = item.password; eyeBtn.innerText = '🙈'; }
          else { maskEl.innerText = '••••••••'; eyeBtn.innerText = '👁️'; }
        }
      });
      return;
    }

    const menuBtn = e.target.closest('.card-menu-btn');
    if (menuBtn) { toggleMenu('passMenu_' + menuBtn.getAttribute('data-id')); return; }
    const editBtn = e.target.closest('.edit-password-btn');
    if (editBtn) { ensureUnlocked('passwords', () => openPasswordModal(editBtn.getAttribute('data-id'))); closeAllMenus(); return; }
    const delBtn = e.target.closest('.delete-password-btn');
    if (delBtn) { ensureUnlocked('passwords', () => deletePassword(delBtn.getAttribute('data-id'))); closeAllMenus(); return; }
    closeAllMenus();
  });

  // Keys Clicks (Protected by Master Password if locked)
  document.getElementById('keysList').addEventListener('click', (e) => {
    const keyValBtn = e.target.closest('.copy-key-val');
    if (keyValBtn) {
      const id = keyValBtn.getAttribute('data-id');
      const item = keysData.find(k => k.id === id);
      if (item) {
        ensureUnlocked('keys', () => copyToClipboard(item.value, keyValBtn));
      }
      return;
    }

    const eyeBtn = e.target.closest('.toggle-key-eye');
    if (eyeBtn) {
      const id = eyeBtn.getAttribute('data-id');
      ensureUnlocked('keys', () => {
        const maskEl = document.getElementById(`keyMask_${id}`);
        const item = keysData.find(k => k.id === id);
        if (item && maskEl) {
          if (maskEl.innerText === '••••••••••••••••') { maskEl.innerText = item.value; eyeBtn.innerText = '🙈'; }
          else { maskEl.innerText = '••••••••••••••••'; eyeBtn.innerText = '👁️'; }
        }
      });
      return;
    }

    const menuBtn = e.target.closest('.card-menu-btn');
    if (menuBtn) { toggleMenu('keyMenu_' + menuBtn.getAttribute('data-id')); return; }
    const editBtn = e.target.closest('.edit-key-btn');
    if (editBtn) { ensureUnlocked('keys', () => openKeyModal(editBtn.getAttribute('data-id'))); closeAllMenus(); return; }
    const delBtn = e.target.closest('.delete-key-btn');
    if (delBtn) { ensureUnlocked('keys', () => deleteKey(delBtn.getAttribute('data-id'))); closeAllMenus(); return; }
    closeAllMenus();
  });

  // Notes Clicks
  document.getElementById('notesList').addEventListener('click', (e) => {
    const noteValBtn = e.target.closest('.copy-note-val');
    if (noteValBtn) {
      const id = noteValBtn.getAttribute('data-id');
      const item = notesData.find(n => n.id === id);
      if (item) {
        ensureUnlocked('notes', () => copyToClipboard(item.content, noteValBtn));
      }
      return;
    }
    const menuBtn = e.target.closest('.card-menu-btn');
    if (menuBtn) { toggleMenu('noteMenu_' + menuBtn.getAttribute('data-id')); return; }
    const editBtn = e.target.closest('.edit-note-btn');
    if (editBtn) { openNoteModal(editBtn.getAttribute('data-id')); closeAllMenus(); return; }
    const delBtn = e.target.closest('.delete-note-btn');
    if (delBtn) { deleteNote(delBtn.getAttribute('data-id')); closeAllMenus(); return; }
    closeAllMenus();
  });

  // Generator
  document.getElementById('passLengthRange').addEventListener('input', (e) => {
    document.getElementById('passLengthVal').innerText = e.target.value;
    generatePassword();
  });
  ['genUpper', 'genLower', 'genNum', 'genSym'].forEach(id => {
    document.getElementById(id).addEventListener('change', generatePassword);
  });
  document.getElementById('refreshPassGenBtn').addEventListener('click', generatePassword);
  document.getElementById('copyGenPassBtn').addEventListener('click', (e) => {
    copyToClipboard(document.getElementById('genPassResult').value, e.target);
  });

  // Profile Modal
  document.getElementById('closeProfileModalBtn').addEventListener('click', closeProfileModal);
  document.getElementById('cancelProfileModalBtn').addEventListener('click', closeProfileModal);
  document.getElementById('profileForm').addEventListener('submit', (e) => { e.preventDefault(); saveProfileFromForm(); });

  // Platform select: show/hide custom name field + autofill URL prefix
  document.getElementById('platformSelect').addEventListener('change', (e) => {
    const platform = e.target.value;
    const customGroup = document.getElementById('customNameGroup');
    const customNameInput = document.getElementById('customPlatformName');
    const urlInput = document.getElementById('profileUrl');

    if (platform === 'custom') {
      customGroup.style.display = 'block';
      customNameInput.required = true;
      setTimeout(() => customNameInput.focus(), 50);
    } else {
      customGroup.style.display = 'none';
      customNameInput.required = false;
      customNameInput.value = '';
    }

    // Autofill URL prefix from PLATFORM_META
    const meta = PLATFORM_META[platform];
    if (meta && meta.urlPrefix && meta.urlPrefix !== 'https://' && meta.urlPrefix !== 'mailto:') {
      if (!urlInput.value || urlInput.value === urlInput.defaultValue) {
        urlInput.value = meta.urlPrefix;
      }
    } else if (platform === 'custom') {
      urlInput.value = 'https://';
    }
  });

  // Password Modal
  document.getElementById('closePasswordModalBtn').addEventListener('click', closePasswordModal);
  document.getElementById('cancelPasswordModalBtn').addEventListener('click', closePasswordModal);
  document.getElementById('passwordForm').addEventListener('submit', (e) => { e.preventDefault(); savePasswordFromForm(); });

  // Key Modal
  document.getElementById('closeKeyModalBtn').addEventListener('click', closeKeyModal);
  document.getElementById('cancelKeyModalBtn').addEventListener('click', closeKeyModal);
  document.getElementById('keyForm').addEventListener('submit', (e) => { e.preventDefault(); saveKeyFromForm(); });

  // Note Modal
  document.getElementById('closeNoteModalBtn').addEventListener('click', closeNoteModal);
  document.getElementById('cancelNoteModalBtn').addEventListener('click', closeNoteModal);
  document.getElementById('noteForm').addEventListener('submit', (e) => { e.preventDefault(); saveNoteFromForm(); });

  // Settings Panel
  document.getElementById('settingsToggleBtn').addEventListener('click', () => {
    document.getElementById('settingsPanel').classList.toggle('hidden');
  });
  document.getElementById('closeSettingsBtn').addEventListener('click', () => {
    document.getElementById('settingsPanel').classList.add('hidden');
  });
  document.getElementById('exportJsonBtn').addEventListener('click', exportJSON);
  document.getElementById('importJsonInput').addEventListener('change', importJSON);
  document.getElementById('resetPresetBtn').addEventListener('click', () => {
    if (confirm('Restore default starter profile links?')) { profilesData = DEFAULT_PRESETS; saveProfiles(); }
  });

  document.getElementById('loadPresetBtn').addEventListener('click', () => { profilesData = DEFAULT_PRESETS; saveProfiles(); });
  document.getElementById('addFirstPasswordBtn').addEventListener('click', () => ensureUnlocked('passwords', () => openPasswordModal()));
  document.getElementById('addFirstKeyBtn').addEventListener('click', () => ensureUnlocked('keys', () => openKeyModal()));
  document.getElementById('addFirstNoteBtn').addEventListener('click', () => openNoteModal());
}

function switchTab(tab) {
  activeTab = tab;
  document.getElementById('tabProfiles').classList.toggle('active', tab === 'profiles');
  document.getElementById('tabPasswords').classList.toggle('active', tab === 'passwords');
  document.getElementById('tabKeys').classList.toggle('active', tab === 'keys');
  document.getElementById('tabNotes').classList.toggle('active', tab === 'notes');
  document.getElementById('tabGenPass').classList.toggle('active', tab === 'generator');

  document.getElementById('profilesSection').classList.toggle('hidden', tab !== 'profiles');
  document.getElementById('passwordsSection').classList.toggle('hidden', tab !== 'passwords');
  document.getElementById('keysSection').classList.toggle('hidden', tab !== 'keys');
  document.getElementById('notesSection').classList.toggle('hidden', tab !== 'notes');
  document.getElementById('generatorSection').classList.toggle('hidden', tab !== 'generator');

  const labels = { profiles: 'Add Link', passwords: 'Add Pass', keys: 'Add Key', notes: 'Add Note', generator: 'Generator' };
  document.getElementById('addBtnLabel').innerText = labels[tab] || 'Add';
}

function copyToClipboard(text, buttonEl) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!'));
}

function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').innerText = msg;
  toast.style.background = isError ? '#ef4444' : '#10b981';
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2000);
}

// Modal Logics
function openProfileModal(id = null) {
  document.getElementById('profileForm').reset();
  // Reset custom name group visibility
  document.getElementById('customNameGroup').style.display = 'none';
  document.getElementById('customPlatformName').required = false;

  if (id) {
    const p = profilesData.find(x => x.id === id);
    if (p) {
      document.getElementById('profileModalTitle').innerText = 'Edit Profile Link';
      document.getElementById('profileId').value = p.id;
      document.getElementById('platformSelect').value = p.platform;
      document.getElementById('profileUsername').value = p.username || '';
      document.getElementById('profileUrl').value = p.url || '';
      document.getElementById('profileNotes').value = p.note || '';
      // If custom, show name field and restore the saved custom name
      if (p.platform === 'custom') {
        document.getElementById('customNameGroup').style.display = 'block';
        document.getElementById('customPlatformName').value = p.platformName !== 'Custom' ? p.platformName : '';
        document.getElementById('customPlatformName').required = true;
      }
    }
  } else {
    document.getElementById('profileModalTitle').innerText = 'Add Profile Link';
    document.getElementById('profileId').value = '';
    // Default to custom selected — show the name field immediately
    document.getElementById('platformSelect').value = 'custom';
    document.getElementById('customNameGroup').style.display = 'block';
    document.getElementById('customPlatformName').required = true;
  }
  document.getElementById('profileModalBackdrop').classList.remove('hidden');
  // Focus the custom name field if visible, otherwise focus username
  const nameInput = document.getElementById('customPlatformName');
  if (document.getElementById('customNameGroup').style.display !== 'none') {
    setTimeout(() => nameInput.focus(), 50);
  }
}
function closeProfileModal() { document.getElementById('profileModalBackdrop').classList.add('hidden'); }
function saveProfileFromForm() {
  const id = document.getElementById('profileId').value;
  const platform = document.getElementById('platformSelect').value;
  const customName = document.getElementById('customPlatformName').value.trim();
  const username = document.getElementById('profileUsername').value.trim();
  const url = document.getElementById('profileUrl').value.trim();
  const note = document.getElementById('profileNotes').value.trim();
  const platformName = platform === 'custom' ? (customName || 'Custom') : (PLATFORM_META[platform] ? PLATFORM_META[platform].name : 'Platform');

  if (id) {
    const idx = profilesData.findIndex(p => p.id === id);
    if (idx !== -1) profilesData[idx] = { ...profilesData[idx], platform, platformName, username, url, note };
  } else {
    profilesData.unshift({ id: 'profile_' + Date.now(), platform, platformName, username, url, note });
  }
  saveProfiles(() => { closeProfileModal(); showToast('Profile saved!'); });
}
function deleteProfile(id) { if (confirm('Delete profile link?')) { profilesData = profilesData.filter(p => p.id !== id); saveProfiles(); } }

// Password Modal
function openPasswordModal(id = null) {
  document.getElementById('passwordForm').reset();
  if (id) {
    const item = passwordsData.find(p => p.id === id);
    if (item) {
      document.getElementById('passwordModalTitle').innerText = 'Edit Password';
      document.getElementById('passwordId').value = item.id;
      document.getElementById('passWebsite').value = item.site;
      document.getElementById('passUsername').value = item.username;
      document.getElementById('passPassword').value = item.password;
      document.getElementById('passNote').value = item.note || '';
    }
  } else {
    document.getElementById('passwordModalTitle').innerText = 'Add Password';
    document.getElementById('passwordId').value = '';
  }
  document.getElementById('passwordModalBackdrop').classList.remove('hidden');
}
function closePasswordModal() { document.getElementById('passwordModalBackdrop').classList.add('hidden'); }
function savePasswordFromForm() {
  const id = document.getElementById('passwordId').value;
  const site = document.getElementById('passWebsite').value.trim();
  const username = document.getElementById('passUsername').value.trim();
  const password = document.getElementById('passPassword').value;
  const note = document.getElementById('passNote').value.trim();

  if (id) {
    const idx = passwordsData.findIndex(p => p.id === id);
    if (idx !== -1) passwordsData[idx] = { ...passwordsData[idx], site, username, password, note };
  } else {
    passwordsData.unshift({ id: 'pass_' + Date.now(), site, username, password, note });
  }
  savePasswords(() => { closePasswordModal(); showToast('Password saved!'); });
}
function deletePassword(id) { if (confirm('Delete password entry?')) { passwordsData = passwordsData.filter(p => p.id !== id); savePasswords(); } }

// Key Modal
function openKeyModal(id = null) {
  document.getElementById('keyForm').reset();
  if (id) {
    const item = keysData.find(k => k.id === id);
    if (item) {
      document.getElementById('keyModalTitle').innerText = 'Edit Secret Key';
      document.getElementById('keyId').value = item.id;
      document.getElementById('keyService').value = item.service;
      document.getElementById('keyName').value = item.name;
      document.getElementById('keyValue').value = item.value;
      document.getElementById('keyNote').value = item.note || '';
    }
  } else {
    document.getElementById('keyModalTitle').innerText = 'Add Secret Key';
    document.getElementById('keyId').value = '';
  }
  document.getElementById('keyModalBackdrop').classList.remove('hidden');
}
function closeKeyModal() { document.getElementById('keyModalBackdrop').classList.add('hidden'); }
function saveKeyFromForm() {
  const id = document.getElementById('keyId').value;
  const service = document.getElementById('keyService').value.trim();
  const name = document.getElementById('keyName').value.trim();
  const value = document.getElementById('keyValue').value.trim();
  const note = document.getElementById('keyNote').value.trim();

  if (id) {
    const idx = keysData.findIndex(k => k.id === id);
    if (idx !== -1) keysData[idx] = { ...keysData[idx], service, name, value, note };
  } else {
    keysData.unshift({ id: 'key_' + Date.now(), service, name, value, note });
  }
  saveKeys(() => { closeKeyModal(); showToast('Secret Key saved!'); });
}
function deleteKey(id) { if (confirm('Delete key entry?')) { keysData = keysData.filter(k => k.id !== id); saveKeys(); } }

// Note Modal
function openNoteModal(id = null) {
  document.getElementById('noteForm').reset();
  if (id) {
    const item = notesData.find(n => n.id === id);
    if (item) {
      document.getElementById('noteModalTitle').innerText = 'Edit Note';
      document.getElementById('noteId').value = item.id;
      document.getElementById('noteTitle').value = item.title;
      document.getElementById('noteContent').value = item.content;
      document.getElementById('noteTag').value = item.tag || '';
    }
  } else {
    document.getElementById('noteModalTitle').innerText = 'Add Note';
    document.getElementById('noteId').value = '';
  }
  document.getElementById('noteModalBackdrop').classList.remove('hidden');
}
function closeNoteModal() { document.getElementById('noteModalBackdrop').classList.add('hidden'); }
function saveNoteFromForm() {
  const id = document.getElementById('noteId').value;
  const title = document.getElementById('noteTitle').value.trim();
  const content = document.getElementById('noteContent').value.trim();
  const tag = document.getElementById('noteTag').value.trim();

  if (id) {
    const idx = notesData.findIndex(n => n.id === id);
    if (idx !== -1) notesData[idx] = { ...notesData[idx], title, content, tag };
  } else {
    notesData.unshift({ id: 'note_' + Date.now(), title, content, tag });
  }
  saveNotes(() => { closeNoteModal(); showToast('Note saved!'); });
}
function deleteNote(id) { if (confirm('Delete note?')) { notesData = notesData.filter(n => n.id !== id); saveNotes(); } }

function toggleMenu(menuId) {
  closeAllMenus();
  const el = document.getElementById(menuId);
  if (el) el.classList.remove('hidden');
}
function closeAllMenus() {
  document.querySelectorAll('.card-menu-dropdown').forEach(m => m.classList.add('hidden'));
}

// Backup Export/Import
function exportJSON() {
  const data = { profiles: profilesData, passwords: passwordsData, keys: keysData, notes: notesData, settings: lockSettings };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `clinky_vault_full_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Full Vault backup exported!');
}

function importJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported.profiles) profilesData = imported.profiles;
      if (imported.passwords) passwordsData = imported.passwords;
      if (imported.keys) keysData = imported.keys;
      if (imported.notes) notesData = imported.notes;
      saveProfiles(); savePasswords(); saveKeys(); saveNotes();
      showToast('Vault imported successfully!');
    } catch (err) {
      alert('Error parsing JSON backup.');
    }
  };
  reader.readAsText(file);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

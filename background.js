// Background Service Worker for Clinky Extension

// Update Context Menus based on saved profiles
function updateContextMenus(profiles) {
  if (!chrome.contextMenus) return;

  chrome.contextMenus.removeAll(() => {
    // Parent Menu
    chrome.contextMenus.create({
      id: "clinky_root",
      title: "Clinky: Copy Profile Link",
      contexts: ["all"]
    });

    if (!profiles || profiles.length === 0) {
      chrome.contextMenus.create({
        id: "clinky_empty",
        parentId: "clinky_root",
        title: "No profiles saved (Click extension icon to add)",
        enabled: false,
        contexts: ["all"]
      });
      return;
    }

    profiles.forEach((profile) => {
      if (profile.url || profile.username) {
        // Parent item for platform
        const platformId = `clinky_platform_${profile.id}`;
        const titleText = `${profile.platformName || profile.platform} (${profile.username || 'Link'})`;
        
        chrome.contextMenus.create({
          id: platformId,
          parentId: "clinky_root",
          title: titleText,
          contexts: ["all"]
        });

        // Copy URL Option
        if (profile.url) {
          chrome.contextMenus.create({
            id: `copy_url_${profile.id}`,
            parentId: platformId,
            title: `Copy Link: ${profile.url}`,
            contexts: ["all"]
          });
        }

        // Copy Username Option
        if (profile.username) {
          chrome.contextMenus.create({
            id: `copy_user_${profile.id}`,
            parentId: platformId,
            title: `Copy Username: ${profile.username}`,
            contexts: ["all"]
          });
        }
      }
    });
  });
}

// Helper to refresh menus from chrome storage
function refreshStorageMenus() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['clinky_profiles'], (result) => {
      const profiles = result.clinky_profiles || [];
      updateContextMenus(profiles);
    });
  }
}

// On install or startup
chrome.runtime.onInstalled.addListener(() => {
  refreshStorageMenus();
});

chrome.runtime.onStartup.addListener(() => {
  refreshStorageMenus();
});

// Listen for storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.clinky_profiles) {
    updateContextMenus(changes.clinky_profiles.newValue || []);
  }
});

// Handle Context Menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  const menuId = info.menuItemId;
  
  chrome.storage.local.get(['clinky_profiles'], (result) => {
    const profiles = result.clinky_profiles || [];
    let textToCopy = '';

    if (menuId.startsWith('copy_url_')) {
      const id = menuId.replace('copy_url_', '');
      const item = profiles.find(p => p.id === id);
      if (item) textToCopy = item.url;
    } else if (menuId.startsWith('copy_user_')) {
      const id = menuId.replace('copy_user_', '');
      const item = profiles.find(p => p.id === id);
      if (item) textToCopy = item.username;
    }

    if (textToCopy && tab && tab.id) {
      // Execute script in current active tab to copy text to clipboard securely
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => {
          navigator.clipboard.writeText(text).catch(err => {
            console.error('Failed to copy from context menu:', err);
          });
        },
        args: [textToCopy]
      }).catch(() => {
        // Fallback write if executeScript permission isn't available
      });
    }
  });
});

// Service Worker 最简化实现，确保PWA可安装性而不影响任何功能

// 1. 安装事件：当Service Worker被安装时触发
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install');
  // self.skipWaiting() 会让新的Service Worker立即激活，而不是等待旧的关闭
  event.waitUntil(self.skipWaiting());
});

// 2. 激活事件：当Service Worker被激活时触发
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate');
  // self.clients.claim() 确保新的Service Worker立即开始控制所有打开的页面
  event.waitUntil(self.clients.claim());
});

// 3. 抓取/网络请求事件：这是核心部分
// 为了绝对不影响您的任何功能，我们采用“网络优先”策略
// 即：直接返回网络请求的结果，就像没有Service Worker一样
self.addEventListener('fetch', (event) => {
  // console.log('Service Worker: Fetching', event.request.url);
  // 直接执行网络请求，不进行任何缓存或拦截
  event.respondWith(fetch(event.request));
});

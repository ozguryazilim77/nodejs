// HTTP modülünü yükle
const http = require('http');

// Sunucu ayarları
const PORT = 3000; // Sunucunun çalışacağı port
const HOST = '0.0.0.0'; // Tüm IP adreslerinden erişim

// Sunucu oluştur
const server = http.createServer((req, res) => {
  // Yanıt başlıklarını ayarla
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Yanıt mesajını yazdır
  res.write('Merhaba, dünya! Sunucunuz başarıyla çalışıyor.');
  
  // Yanıtı sonlandır
  res.end();
});

// Sunucuyu başlat
server.listen(PORT, HOST, () => {
  console.log(`Sunucu çalışıyor: http://13.48.149.165:${PORT}`);
});

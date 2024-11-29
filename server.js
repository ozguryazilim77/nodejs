const http = require('http');
const fs = require('fs');
const path = require('path');

// Sunucu ayarları
const PORT = 3000;
const HOST = '0.0.0.0'; // Tüm IP adreslerinden erişim

const server = http.createServer((req, res) => {
  // HTML dosyasını okuma
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Sunucu hatası!');
        res.end();
        return;
      }
      
      // HTML içeriğini yanıt olarak gönder
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else {
    // Diğer talepler için 404 yanıtı
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Sayfa bulunamadı');
    res.end();
  }
});

// Sunucuyu başlat
server.listen(PORT, HOST, () => {
  console.log(`Sunucu çalışıyor: http://13.48.149.165:${PORT}`);
});
 
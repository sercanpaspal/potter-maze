<div align="center">
<img src="https://raw.githubusercontent.com/sercanpaspal/potter-maze/main/public/logo192.png" style="width:72px;" align="center" />
<br />
<br />
</div>

# Potter Maze

[https://potter-maze.paspal.net/](https://potter-maze.paspal.net/)

Arkadaşlarından önce ateş kadehine ulaş. Labirentin içinde maceraya hazır ol!

<img src="https://raw.githubusercontent.com/sercanpaspal/potter-maze/main/game.gif" />

## Başlangıç

- Kullanıcı adını girip figürünü seçtikten sonra odanı oluştur.

- Odanı oluşturduktan sonra oluşturulan davet bağlantısı ile arkadaşlarını davet et ve herkes hazır olduğunda oyunu başlat!

- Oyun en fazla 4 kişi, en az da 2 kişi ile oynanır.

- Herkes aynı noktadan oyuna başlar.

- Oyuna başlayacak kişi, odadaki kişiler arasında rastgele seçilir.

## Rehber

- Ekranın üzerinde "senin sıran" yazdığında oynama sırası sana gelmiş demektir.

- Sıra sana geldiğinde, ekranın sol alt kısmından "zar at" butonuna tıklayarak rastgele bir adet zar atılır.

- Zar sayısı kadar harita üzerindeki yolda ilerlenir.

- Eğer boş bir yola gelirseniz, sıra diğer kullanıcıya geçer.

- Eğer kart üzerine gelirseniz, rastgele bir kart çekilir ve kartta yazan aksiyon alındıktan sonra destenin sonuna eklenir.

- Eğer hazine üzerine gelirseniz, size avantaj sağlayan rastgele bir eşya kazanırsınız.

## Kartlar

- **Ruh Emici**
  - Hava birden buz kesti ve gökyüzünde ruh emiciler belirdi. Saklanmak için 2 adım geri git.
- **Süpürge**
  - Sarmaşıklara saplanmış bir süpürge, saplandığı yerden çıkar ve 2 adım ileri git.
- **Troll**
  - O sırada yoldan geçen bir troll tarafından ezildin 1 tur bekle.
- **Murloc**
  - Çalıların arasında üzerine bir yaratık fırladı ve seni 1 adım geri götürdü.
- **Ejderha**
  - Gök yüzünde birden bire ejderha belirdi ve alevleriyle seni yaraladı. İyileşmek uzun sürecek 2 tur bekle.

## Hazineler

- Mürver Asa
  - Bir yaratıkla karşılaştığında yok etmeni sağlar.
- Şans İksiri
  - Bu iksiri içen kişi sonraki elde en az 4 atar.
- Görünmezlik Pelerini
  - Bir yaratıkla karşılaştığında görünmeden geçmeni sağlar.

## Kurulum

### Client

Bu proje `create react app` ile oluşturuldu.

`.env.development.local.example` dosyasının içersinde socket server portu yer alıyor. `.env.development.local` olarak kopyalayıp varsayılan portu bırakabilirsiniz.

#### `npm install`
Client tarafında paketleri kurar.

#### `npm start`

3000 portunda projeyi başlatır.

#### `npm run build`

Projeyi derleyip `build` klasörüne bir çıktı oluşturur.

### Server
Server projesi, `server` klasörü içersinde bulunur.

#### `npm install`
Paketleri kurar.

#### `npm start`
`.env` dosyasında port belirtilmediyse `3001` portunda uygulamayı başlatır.

#### `npm run dev`
`.env` dosyasında port belirtilmediyse `3001` portunda `nodemon` paketi ile uygulamayı başlatır.


## License
MIT
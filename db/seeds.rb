img_prefix = "/products/"

product1 = Product.create(source: "#{img_prefix}schab_wieprzowy_bez_kosci.jpeg", product_type: "meats", description: 'Schab wieprzowy bez kości', price: 9.99, quantity_available: 50)
product2 = Product.create(source: "#{img_prefix}zeberka_wieprzowe_ekstra_mięsne.jpeg", product_type: "meats", description: 'Żeberka wieprzowe ekstra mięsne', price: 15.99, quantity_available: 50)
product3 = Product.create(source: "#{img_prefix}karkowka_wieprzowa_bez_kości.jpeg", product_type: "meats", description: 'Karkówka wieprzowa bez kości', price: 17.99, quantity_available: 50)
product4 = Product.create(source: "#{img_prefix}lopatka_wieprzowa_bez_kości.jpeg", product_type: "meats", description: 'Łopatka wieprzowa bez kości', price: 15.99, quantity_available: 50)
product5 = Product.create(source: "#{img_prefix}szynka_wieprzowa_bez_kosci.jpeg", product_type: "meats", description: 'Szynka wieprzowa bez kości', price: 17.99, quantity_available: 50)
Product.create(source: "#{img_prefix}golonka_wieprzowa_przednia.jpeg", product_type: "meats", description: 'Golonka wieprzowa przednia', price: 9.99, quantity_available: 50)
Product.create(source: "#{img_prefix}Lopatka_wolowa_bez_kosci.jpeg", product_type: "meats", description: 'Łopatka wołowa bez kości', price: 26.99, quantity_available: 50)
Product.create(source: "#{img_prefix}Ligawa_wolowa_bez_kosci.jpeg", product_type: "meats", description: 'Łigawa wołowa bez kości', price: 25.99, quantity_available: 50)
Product.create(source: "#{img_prefix}Mieso_wolowe_na_bitki.jpeg", product_type: "meats", description: 'Mięso wołowe na bitki', price: 25.99, quantity_available: 50)
Product.create(source: "#{img_prefix}Szponder_wolowy_z_koscia.jpeg", product_type: "meats", description: 'Szponder wołowy z kością', price: 19.99, quantity_available: 50)
Product.create(source: "#{img_prefix}Filet_z_kurczaka.jpeg", product_type: "meats", description: 'Filet z kurczaka"', price: 16.99, quantity_available: 50)
Product.create(source: "#{img_prefix}Cwiartka_z_kurczaka.jpeg", product_type: "meats", description: 'Ćwiartka z kurczaka', price: 5.99, quantity_available: 50)
Product.create(source: "#{img_prefix}Filet_z_indyka.jpeg", product_type: "meats", description: 'Filet z indyka', price: 14.99, quantity_available: 50)
Product.create(source: "#{img_prefix}Podudzie_z_kurczaka.jpeg", product_type: "meats", description: 'Podudzie z kurczaka', price: 7.99, quantity_available: 50)

Product.create(source: "#{img_prefix}Makrela_wedzona.jpeg", product_type: "fishes", description: 'Makrela wędzona', price: 15.90, quantity_available: 25)
Product.create(source: "#{img_prefix}Brzuszki_z_wlososia_wedzone.jpeg", product_type: "fishes", description: 'Brzuszki z łososia wędzone', price: 19.90, quantity_available: 25)
Product.create(source: "#{img_prefix}Szprot_wedzony.jpeg", product_type: "fishes", description: 'Szprot wędzony', price: 11.90, quantity_available: 25)
Product.create(source: "#{img_prefix}Pikling_wedzony.jpeg", product_type: "fishes", description: 'Pikling wędzony', price: 10.90, quantity_available: 25)
Product.create(source: "#{img_prefix}Sledz_solony.jpeg", product_type: "fishes", description: 'Śledź solony', price: 12.90, quantity_available: 25)
Product.create(source: "#{img_prefix}Dorsz_atlantycki.jpeg", product_type: "fishes", description: 'Dorsz atlantycki', price: 16.90, quantity_available: 25)

product6 = Product.create(source: "#{img_prefix}Banan.jpeg", product_type: "fruits_and_vegetables", description: 'Banan', price: 4.90, quantity_available: 55)
product7 = Product.create(source: "#{img_prefix}Limonka.jpeg", product_type: "fruits_and_vegetables", description: 'Limonka', price: 3.49, quantity_available: 55)
product8 = Product.create(source: "#{img_prefix}Ananas.jpeg", product_type: "fruits_and_vegetables", description: 'Ananas', price: 4.95, quantity_available: 55)
product9 = Product.create(source: "#{img_prefix}Awokado_hass.jpeg", product_type: "fruits_and_vegetables", description: 'Awokado Hass', price: 5.79, quantity_available: 55)
Product.create(source: "#{img_prefix}kiwi.jpeg", product_type: "fruits_and_vegetables", description: 'Kiwi', price: 13.58, quantity_available: 55)
Product.create(source: "#{img_prefix}Pomidory_luz.jpeg", product_type: "fruits_and_vegetables", description: 'Pomidory luz', price: 4.99, quantity_available: 55)
Product.create(source: "#{img_prefix}Ogorek_dlugi.jpeg", product_type: "fruits_and_vegetables", description: 'Ogórek długi', price: 1.99, quantity_available: 55)
Product.create(source: "#{img_prefix}Papryka_czerwona.jpeg", product_type: "fruits_and_vegetables", description: 'Papryka czerwona', price: 7.99, quantity_available: 55)
Product.create(source: "#{img_prefix}Marchew.jpeg", product_type: "fruits_and_vegetables", description: 'Marchew', price: 3.99, quantity_available: 55)
Product.create(source: "#{img_prefix}Pietruszka_korzen.jpeg", product_type: "fruits_and_vegetables", description: 'Pietruszka korzeń', price: 4.99, quantity_available: 55)
Product.create(source: "#{img_prefix}Buraki.jpeg", product_type: "fruits_and_vegetables", description: 'Buraki', price: 2.49, quantity_available: 55)
Product.create(source: "#{img_prefix}Bataty.jpeg", product_type: "fruits_and_vegetables", description: 'Bataty', price: 9.99, quantity_available: 55)
Product.create(source: "#{img_prefix}Ziemniaki_luz.jpeg", product_type: "fruits_and_vegetables", description: 'Ziemniaki luz', price: 2.99, quantity_available: 55)

Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/335/5900512320335/ShotType1_225x225.jpg', product_type: "dairy", description: 'Mlekovita wypasione mleko UHT 2,0% 1L', price: 2.79, quantity_available: 30)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/042/5900820000042/ShotType1_225x225.jpg', product_type: "dairy", description: 'Łaciate mleko UHT 2% 1L', price: 2.79, quantity_available: 30)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/359/5900512320359/ShotType1_225x225.jpg', product_type: "dairy", description: 'Mlekovita wypasione mleko UHT 3,2% 1L', price: 2.89, quantity_available: 30)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/028/5900820000028/ShotType1_225x225.jpg', product_type: "dairy", description: 'Łaciate mleko UHT 0,5% 1L', price: 2.79, quantity_available: 30)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/515/5906040063515/ShotType1_225x225.jpg', product_type: "dairy", description: 'Primo jogurt naturalny 200g', price: 7.72, quantity_available: 30)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/034/5900197000034/ShotType1_225x225.jpg', product_type: "dairy", description: 'Bakoma jogurt naturalny gęsty', price: 8.60, quantity_available: 30)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/480/5900643032480/ShotType1_225x225.jpg', product_type: "dairy", description: 'Activia jogurt naturalny 180g', price: 8.44, quantity_available: 30)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/368/5900643019368/ShotType1_225x225.jpg', product_type: "dairy", description: 'Danone jogurt naturalny łagodny 165g', price: 8.73, quantity_available: 30)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/161/5905058000161/ShotType1_225x225.jpg', product_type: "dairy", description: 'Jogurt naturalny kremowy 200g', price: 4.60, quantity_available: 30)

Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/928/5051007111928/ShotType1_225x225.jpg', product_type: "frozens", description: 'Brokuły 450g', price: 7.67, quantity_available: 20)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/730/5900477000730/ShotType1_225x225.jpg', product_type: "frozens", description: 'Szpinak rozdrobniony 450g', price: 9.76, quantity_available: 20)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/207/5051007122207/ShotType1_225x225.jpg', product_type: "frozens", description: 'Kalafior 450g', price: 7.67, quantity_available: 20)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/000/5051007112000/ShotType1_225x225.jpg', product_type: "frozens", description: 'Mieszanka warzywna z ziemniakami', price: 7.67, quantity_available: 20)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/108/5051007122108/ShotType1_225x225.jpg', product_type: "frozens", description: 'Fasolka szparagowa 450g', price: 5.67, quantity_available: 20)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/761/5900477000761/ShotType1_225x225.jpg', product_type: "frozens", description: 'Marchewka z groszkiem 450g', price: 5.67, quantity_available: 20)

product10 = Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/767/8711000513767/ShotType1_90x90.jpg', product_type: "coffes", description: 'Jacobs Cronat Gold kawa rozpuszczalna 200g', price: 39.99, quantity_available: 35)
product11 = Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/220/7613032734220/ShotType1_90x90.jpg', product_type: "coffes", description: 'Nescafe Creme kawa rozpuszczalna 200g', price: 34.99, quantity_available: 35)
product12 = Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/045/8711000521045/ShotType1_90x90.jpg', product_type: "coffes", description: 'Jacobs Kronung kawa rozpuszczalna 200g', price: 38.50, quantity_available: 35)
product13 = Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/722/8711000525722/ShotType1_90x90.jpg', product_type: "coffes", description: 'Jacobs Kronung kawa mielona 200g', price: 27.99, quantity_available: 35)
product14 = Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/881/7613031918881/ShotType1_90x90.jpg', product_type: "coffes", description: 'Nescafe classic kawa rozpuszczalna 200g', price: 29.99, quantity_available: 35)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/826/8711000517826/ShotType1_90x90.jpg', product_type: "coffes", description: 'Jacobs Velvet kawa rozpuszczalna 200g', price: 22.50, quantity_available: 35)

Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/030/5901588016030/ShotType1_225x225.jpg', product_type: "sweets", description: 'Wedel czekolada gorzka klasyczna 64%', price: 4.99, quantity_available: 35)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/610/5900102312610/ShotType1_225x225.jpg', product_type: "sweets", description: 'Wawel czekolada gorzka klasyczna 70%', price: 4.50, quantity_available: 35)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/701/0000040084701/ShotType1_225x225.jpg', product_type: "sweets", description: 'Kinder chocolate batoniki z mlecznej czkolady', price: 3.49, quantity_available: 35)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/502/3045140105502/ShotType1_225x225.jpg', product_type: "sweets", description: 'Milka czekolada mleczna', price: 5.20, quantity_available: 15)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/419/8584004041419/ShotType1_225x225.jpg', product_type: "sweets", description: 'Góralki', price: 2.30, quantity_available: 15)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/396/0000059042396/ShotType1_225x225.jpg', product_type: "sweets", description: 'Wedel WW', price: 2.30, quantity_available: 15)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/100/7622210416100/ShotType1_225x225.jpg', product_type: "sweets", description: '3Bit', price: 2.00, quantity_available: 15)
Product.create(source: 'https://secure.ce-tescoassets.com/assets/PL/761/0000080761761/ShotType1_225x225.jpg', product_type: "sweets", description: 'Kinder Bueno', price: 5.50, quantity_available: 15)

slaskie = Province.create(name: 'Śląskie')
dolnośląskie = Province.create(name: 'Dolnośląskie')
kujawsko_pomorskie = Province.create(name: 'Kujawsko-pomorskie')
lubelskie = Province.create(name: 'Lubelskie')
lubuskie = Province.create(name: 'Lubuskie')
lodzkie = Province.create(name: 'Łódzkie')
malopolskie = Province.create(name: 'Małopolskie')
mazowieckie = Province.create(name: 'Mazowieckie')
opolskie = Province.create(name: 'Opolskie')
podkarpackie = Province.create(name: 'Podkarpackie')
podlaskie = Province.create(name: 'Podlaskie')
pomorskie = Province.create(name: 'Pomorskie')
swietokrzyskie = Province.create(name: 'Świętokrzyskie')
warminsko_mazurskie = Province.create(name: 'Warmińsko-mazurskie')
wielkopolskie = Province.create(name: 'Wielkopolskie')
zachodniopomorskie = Province.create(name: 'Zachodniopomorskie')

City.create(name: 'Wrocław', province_id: dolnośląskie.id, postal_code: '45 - 573')
City.create(name: 'Wałbrzych', province_id: dolnośląskie.id, postal_code: '58 - 300')
City.create(name: 'Legnica', province_id: dolnośląskie.id, postal_code: '59 - 200')
City.create(name: 'Jelenia Góra', province_id: dolnośląskie.id, postal_code: '58 - 500')
City.create(name: 'Lubin', province_id: dolnośląskie.id, postal_code: '59-300')
City.create(name: 'Głogów', province_id: dolnośląskie.id, postal_code: '67 - 200')
City.create(name: 'Bolesławiec', province_id: dolnośląskie.id, postal_code: '59 - 700')
City.create(name: 'Oława', province_id: dolnośląskie.id, postal_code: '55 - 200')

City.create(name: 'Bydgoszcz', province_id: kujawsko_pomorskie.id, postal_code: '85 - 006')
City.create(name: 'Toruń', province_id: kujawsko_pomorskie.id, postal_code: '87 - 106')
City.create(name: 'Włocławek', province_id: kujawsko_pomorskie.id, postal_code: '87 - 801')
City.create(name: 'Grudziądz', province_id: kujawsko_pomorskie.id, postal_code: '86 - 300')
City.create(name: 'Inowrocław', province_id: kujawsko_pomorskie.id, postal_code: '88 - 101')
City.create(name: 'Brodnica', province_id: kujawsko_pomorskie.id, postal_code: '87 - 300')
City.create(name: 'Tuchola', province_id: kujawsko_pomorskie.id, postal_code: '89 - 500')
City.create(name: 'Świecie', province_id: kujawsko_pomorskie.id, postal_code: '86 - 100')

City.create(name: 'Biała Podlaska', province_id: lubelskie.id, postal_code: '21 - 500')
City.create(name: 'Chełm', province_id: lubelskie.id, postal_code: '22 - 100')
City.create(name: 'Lublin', province_id: lubelskie.id, postal_code: '20 - 003')
City.create(name: 'Zamość', province_id: lubelskie.id, postal_code: '22 - 400')
City.create(name: 'Puławy', province_id: lubelskie.id, postal_code: '24 - 111')
City.create(name: 'Świdwik', province_id: lubelskie.id, postal_code: '78 - 300')
City.create(name: 'Lubartów', province_id: lubelskie.id, postal_code: '21 - 100')
City.create(name: 'Dęblin', province_id: lubelskie.id, postal_code: '08 - 500')

City.create(name: 'Babimost', province_id: lubuskie.id, postal_code: '66 - 110')
City.create(name: 'Cybinka', province_id: lubuskie.id, postal_code: '69 - 108')
City.create(name: 'Gorzów Wlkp.', province_id: lubuskie.id, postal_code: '66 - 400')
City.create(name: 'Gubin', province_id: lubuskie.id, postal_code: '66 - 620')
City.create(name: 'Iłowa', province_id: lubuskie.id, postal_code: '68 - 120')
City.create(name: 'Jasień', province_id: lubuskie.id, postal_code: '68 - 320')
City.create(name: 'Kargowa', province_id: lubuskie.id, postal_code: '66 - 120')
City.create(name: 'Nowa sól', province_id: lubuskie.id, postal_code: '67 - 106')
City.create(name: 'Słubice', province_id: lubuskie.id, postal_code: '69 - 100')

City.create(name: 'Łódź', province_id: lodzkie.id, postal_code: '90 - 004')
City.create(name: 'Piotrków Trybunalski', province_id: lodzkie.id, postal_code: '97 - 300')
City.create(name: 'Pabianice', province_id: lodzkie.id, postal_code: '95 - 054')
City.create(name: 'Zgierz', province_id: lodzkie.id, postal_code: '95 - 100')
City.create(name: 'Konstantynów Łódźki', province_id: lodzkie.id, postal_code: '94 - 313')
City.create(name: 'Brzeziny', province_id: lodzkie.id, postal_code: '95 - 060')
City.create(name: 'Skierniewice', province_id: lodzkie.id, postal_code: '96 - 101')
City.create(name: 'Bełchatów', province_id: lodzkie.id, postal_code: '97 - 400')
City.create(name: 'Sieradz', province_id: lodzkie.id, postal_code: '98 - 200')
City.create(name: 'Łowicz', province_id: lodzkie.id, postal_code: '99 - 400')

City.create(name: 'Kraków', province_id: malopolskie.id, postal_code: '30 - 002')
City.create(name: 'Bochnia', province_id: malopolskie.id, postal_code: '32 - 700')
City.create(name: 'Brzesko', province_id: malopolskie.id, postal_code: '32 - 800')
City.create(name: 'Chrzanów', province_id: malopolskie.id, postal_code: '32 - 500')
City.create(name: 'Dąbrowa Tarnowska', province_id: malopolskie.id, postal_code: '33 - 200')
City.create(name: 'Gorlice', province_id: malopolskie.id, postal_code: '38 - 300')
City.create(name: 'Limanowa', province_id: malopolskie.id, postal_code: '34 - 600')
City.create(name: 'Wadowice', province_id: malopolskie.id, postal_code: '34 - 123')

City.create(name: 'Warszawa', province_id: mazowieckie.id, postal_code: '00 - 101')
City.create(name: 'Radom', province_id: mazowieckie.id, postal_code: '26 - 602')
City.create(name: 'Płock', province_id: mazowieckie.id, postal_code: '09 - 408')
City.create(name: 'Siedlce', province_id: mazowieckie.id, postal_code: '08 - 101')
City.create(name: 'Pruszków', province_id: mazowieckie.id, postal_code: '05 - 804')
City.create(name: 'Legionowo', province_id: mazowieckie.id, postal_code: '05 - 110')
City.create(name: 'Ostrołęka', province_id: mazowieckie.id, postal_code: '07 - 401')
City.create(name: 'Piaseczno', province_id: mazowieckie.id, postal_code: '05 - 500')

City.create(name: 'Opole', province_id: opolskie.id, postal_code: '45 - 003')
City.create(name: 'Gogolin', province_id: opolskie.id, postal_code: '47 - 320')
City.create(name: 'Krapkowice', province_id: opolskie.id, postal_code: '47 - 316')
City.create(name: 'Pruszków', province_id: opolskie.id, postal_code: '05 - 804')
City.create(name: 'Strzelce Opolskie', province_id: opolskie.id, postal_code: '47 - 100')
City.create(name: 'Kędzierzyn Koźle', province_id: opolskie.id, postal_code: '47 - 220')
City.create(name: 'Głogówek', province_id: opolskie.id, postal_code: '48 - 250')
City.create(name: 'Nysa', province_id: opolskie.id, postal_code: '48 - 300')

City.create(name: 'Rzeszów', province_id: podkarpackie.id, postal_code: '35 - 051')
City.create(name: 'Przemyśl', province_id: podkarpackie.id, postal_code: '37 - 701')
City.create(name: 'Krosno', province_id: podkarpackie.id, postal_code: '38 - 400')
City.create(name: 'Jarosław', province_id: podkarpackie.id, postal_code: '37 - 500')
City.create(name: 'Jaslo', province_id: podkarpackie.id, postal_code: '38 - 211')
City.create(name: 'Tarnobrzeg', province_id: podkarpackie.id, postal_code: '39 - 400')
City.create(name: 'Dębica', province_id: podkarpackie.id, postal_code: '39 - 200')
City.create(name: 'Mielec', province_id: podkarpackie.id, postal_code: '39 - 322')
City.create(name: 'Stalowa Wola', province_id: podkarpackie.id, postal_code: '37 - 462')
City.create(name: 'Sanok', province_id: podkarpackie.id, postal_code: '38 - 500')

City.create(name: 'Białystok', province_id: podlaskie.id, postal_code: '15 - 003')
City.create(name: 'Suwałki', province_id: podlaskie.id, postal_code: '16 - 402')
City.create(name: 'Łomza', province_id: podlaskie.id, postal_code: '18 - 400')
City.create(name: 'Augustów', province_id: podlaskie.id, postal_code: '16 - 300')
City.create(name: 'Ciechanowiec', province_id: podlaskie.id, postal_code: '18 - 230')
City.create(name: 'Brańsk', province_id: podlaskie.id, postal_code: '17 - 120')
City.create(name: 'Czyzew', province_id: podlaskie.id, postal_code: '18 - 220')
City.create(name: 'Lipsk', province_id: podlaskie.id, postal_code: '16 - 315')

City.create(name: 'Bytów', province_id: pomorskie.id, postal_code: '77 - 100')
City.create(name: 'Czarna Woda', province_id: pomorskie.id, postal_code: '83 - 262')
City.create(name: 'Człuchów', province_id: pomorskie.id, postal_code: '77 - 300')
City.create(name: 'Gdańsk', province_id: pomorskie.id, postal_code: '80 - 117')
City.create(name: 'Gdynia', province_id: pomorskie.id, postal_code: '81 - 009')
City.create(name: 'Krynica Morska', province_id: pomorskie.id, postal_code: '82 - 120')
City.create(name: 'Kwidzyń', province_id: pomorskie.id, postal_code: '82 - 500')
City.create(name: 'Lębork', province_id: pomorskie.id, postal_code: '84 - 351')

City.create(name: 'Gliwice', province_id: slaskie.id, postal_code: '44 - 119')
City.create(name: 'Katowice', province_id: slaskie.id, postal_code: '40 - 013')
City.create(name: 'Bytom', province_id: slaskie.id, postal_code: '41 - 907')
City.create(name: 'Bielsko-Biała', province_id: slaskie.id, postal_code: '43 - 309')
City.create(name: 'Ruda Śląska', province_id: slaskie.id, postal_code: '41 - 705')
City.create(name: 'Zabrze', province_id: slaskie.id, postal_code: '41 - 800')
City.create(name: 'Sosnowiec', province_id: slaskie.id, postal_code: '41 - 208')
City.create(name: 'Żywiec', province_id: slaskie.id, postal_code: '34 - 300')
City.create(name: 'Mysłowice', province_id: slaskie.id, postal_code: '41 - 208')
City.create(name: 'Tarnowskie Góry', province_id: slaskie.id, postal_code: '42 - 605')

City.create(name: 'Kielce', province_id: swietokrzyskie.id, postal_code: '25 - 004')
City.create(name: 'Ostrowiec Świętokrzyski', province_id: swietokrzyskie.id, postal_code: '27 - 420')
City.create(name: 'Starachowice', province_id: swietokrzyskie.id, postal_code: '27 - 200')
City.create(name: 'Sandomierz', province_id: swietokrzyskie.id, postal_code: '39 - 400')
City.create(name: 'Jędrzejów', province_id: swietokrzyskie.id, postal_code: '28 - 300')
City.create(name: 'Końskie', province_id: swietokrzyskie.id, postal_code: '26 - 200')

City.create(name: 'Olsztyn', province_id: warminsko_mazurskie.id, postal_code: '10 - 008')
City.create(name: 'Elbląg', province_id: warminsko_mazurskie.id, postal_code: '82 - 310')
City.create(name: 'Ełk', province_id: warminsko_mazurskie.id, postal_code: '19 - 300')
City.create(name: 'Iława', province_id: warminsko_mazurskie.id, postal_code: '14 - 202')
City.create(name: 'Ostróda', province_id: warminsko_mazurskie.id, postal_code: '14 - 100')
City.create(name: 'Gizycko', province_id: warminsko_mazurskie.id, postal_code: '11 - 500')
City.create(name: 'Mrągowo', province_id: warminsko_mazurskie.id, postal_code: '11 - 709')
City.create(name: 'Działdowo', province_id: warminsko_mazurskie.id, postal_code: '13 - 200')

City.create(name: 'Poznań', province_id: wielkopolskie.id, postal_code: '60 - 014')
City.create(name: 'Kalisz', province_id: wielkopolskie.id, postal_code: '62 - 872')
City.create(name: 'Konin', province_id: wielkopolskie.id, postal_code: '62 - 504')
City.create(name: 'Piła', province_id: wielkopolskie.id, postal_code: '64 - 930')
City.create(name: 'Ostrów Wielkopolski', province_id: wielkopolskie.id, postal_code: '63 - 401')
City.create(name: 'Gniezno', province_id: wielkopolskie.id, postal_code: '62 - 220')
City.create(name: 'Luboń', province_id: wielkopolskie.id, postal_code: '62 - 051')

City.create(name: 'Koszalin', province_id: zachodniopomorskie.id, postal_code: '75 - 007')
City.create(name: 'Białogard', province_id: zachodniopomorskie.id, postal_code: '78 - 200')
City.create(name: 'Choszczno', province_id: zachodniopomorskie.id, postal_code: '73 - 200')
City.create(name: 'Drawsko Pomorskie', province_id: zachodniopomorskie.id, postal_code: '78 - 500')
City.create(name: 'Goleniów', province_id: zachodniopomorskie.id, postal_code: '72 - 100')
City.create(name: 'Gryfice', province_id: zachodniopomorskie.id, postal_code: '72 - 300')
City.create(name: 'Gryfino', province_id: zachodniopomorskie.id, postal_code: '74 - 100')
City.create(name: 'Kamień Pomorski', province_id: zachodniopomorskie.id, postal_code: '72 - 400')


user1 = User.create()
user1.create_dataLogin(login: 'michsiw439', password: '1234')
user1.create_dataPerson(name: 'Michal', surname: 'Siwiec', email: 'siwiec.michal724@gmail.com', phone_number: '724131140')
user1.create_deliveryAddress(country: 'Polska', province: slaskie.name, city: slaskie.cities.first.name, postal_code: slaskie.cities.first.postal_code, street: 'Gruszczynskiego', house_number: 12)
user1.create_dataCreation(year: 2020, month: 3, day: 13, hour: 12, minute: 33, second: 55)

user2 = User.create()
user2.create_dataLogin(login: 'winiar123', password: 'qwertY12')
user2.create_dataPerson(name: 'Michal', surname: 'Winiarski', email: 'michal.winiarski@gmail.com', phone_number: '785348001')
user2.create_deliveryAddress(country: 'Polska', province: zachodniopomorskie.name, city: zachodniopomorskie.cities.fourth.name, postal_code: zachodniopomorskie.cities.fourth.postal_code, street: 'Lipowska', house_number: 12)
user2.create_dataCreation(year: 2020, month: 2, day: 17, hour: 7, minute: 22, second: 2)


# I should divide it on two models - something like opinion_content and dataCreation
opinion1 = Opinion.create!(description: "Super sklep - polecam", mark: 5, user_id: user1.id)
opinion1.create_dataCreation!(year: 2018, month: 8, day: 4, hour: 17, minute: 44, second: 12)

opinion2  = Opinion.create!(description: "Chujowa sprawa nie polecam", mark: 1, user_id: user1.id)
opinion2.create_dataCreation!(year: 2018, month: 8, day: 5, hour: 17, minute: 44, second: 12)

opinion3 = Opinion.create!(description: "Bardzo dobry sklep, serdzecznie polecam", mark: 5, user_id: user1.id)
opinion3.create_dataCreation!(year: 2021, month: 1, day: 24, hour: 9, minute: 12, second: 52)

opinion4 = Opinion.create!(description: "Niezly, sklep, miła obsługa", mark: 4, user_id: user2.id)
opinion4.create_dataCreation!(year: 2019, month: 4, day: 14, hour: 37, minute: 2, second: 36)

opinion5 = Opinion.create!(description: "Nigdy nie bylem w gorszy sklepie!", mark: 1, user_id: user2.id)
opinion5.create_dataCreation!(year: 2019, month: 12, day: 24, hour: 13, minute: 14, second: 32)

# Orders not log in user
order1 = Order.create!(user_id: nil)
order1.create_dataPerson!(name: "Jan", surname: "Nowak", email: "jan.nowak123@gmail.com", phone_number: "765134562")
order1.create_deliveryAddress!(country: "Polska", province: lodzkie.name, city: lodzkie.cities.third.name, postal_code: lodzkie.cities.third.postal_code, street: "Jagodowa", house_number: 12)
order1.create_dataCreation!(year: 2020, month: 1, day: 3, hour: 6, minute: 34, second: 12)

product_from_basket1 = [
    {
        id: product1.id,
        quantity: 4
    },
    {
        id: product2.id,
        quantity: 3
    },
    {
        id: product3.id,
        quantity: 6
    },
    {
        id: product4.id,
        quantity: 1
    },
    {
        id: product5.id,
        quantity: 1
    }
]

product_from_basket1.each do |product_from_basket|
    OrdersProduct.create(
        order_id: order1.id,
        product_id: product_from_basket[:id],
        quantity: product_from_basket[:quantity]
    )

    product = Product.find(product_from_basket[:id]) 
    product.update_columns(quantity_available: product.quantity_available - product_from_basket[:quantity])
end

# Orders log in users
order2 = Order.create!(user_id: user2.id)
order2.create_dataCreation!(year: 2019, month: 5, day: 23, hour: 6, minute: 34, second: 12)

product_from_basket2 = [
    {
        id: product6.id,
        quantity: 4
    },
    {
        id: product7.id,
        quantity: 3
    },
    {
        id: product8.id,
        quantity: 6
    },
    {
        id: product9.id,
        quantity: 1
    },
    {
        id: product5.id,
        quantity: 1
    }
]

product_from_basket2.each do |product_from_basket|
    OrdersProduct.create(
        order_id: order2.id,
        product_id: product_from_basket[:id],
        quantity: product_from_basket[:quantity]
    )

    product = Product.find(product_from_basket[:id]) 
    product.update_columns(quantity_available: product.quantity_available - product_from_basket[:quantity])
end

order3 = Order.create!(user_id: nil)
order3.create_dataPerson!(name: "Makary", surname: "Zurek", email: "makary.zurek@gmail.com", phone_number: "883226561")
order3.create_deliveryAddress!(country: "Polska", province: lodzkie.name, city: lodzkie.cities.fourth.name, postal_code: lodzkie.cities.fourth.postal_code, street: "Jagodowa", house_number: 12)
order3.create_dataCreation!(year: 2020, month: 1, day: 13, hour: 16, minute: 14, second: 56)

product_from_basket3 = [
    {
        id: product1.id,
        quantity: 1
    },
    {
        id: product12.id,
        quantity: 6
    },
    {
        id: product3.id,
        quantity: 8
    },
    {
        id: product14.id,
        quantity: 7
    },
    {
        id: product2.id,
        quantity: 3
    }
]

product_from_basket3.each do |product_from_basket|
    OrdersProduct.create(
        order_id: order3.id,
        product_id: product_from_basket[:id],
        quantity: product_from_basket[:quantity]
    )

    product = Product.find(product_from_basket[:id]) 
    product.update_columns(quantity_available: product.quantity_available - product_from_basket[:quantity])
end

order4 = Order.create!(user_id: nil)
order4.create_dataPerson!(name: "Karol", surname: "Luczyk", email: "luczyk.karol@gmail.com", phone_number: "990774132")
order4.create_deliveryAddress!(country: "Polska", province: lodzkie.name, city: lodzkie.cities.fifth.name, postal_code: lodzkie.cities.fifth.postal_code, street: "Lesna", house_number: 12)
order4.create_dataCreation!(year: 2020, month: 1, day: 22, hour: 23, minute: 4, second: 17)

product_from_basket4 = [
    {
        id: product10.id,
        quantity: 5
    },
    {
        id: product11.id,
        quantity: 9
    },
    {
        id: product12.id,
        quantity: 1
    },
    {
        id: product13.id,
        quantity: 1
    },
    {
        id: product14.id,
        quantity: 2
    }
]

product_from_basket4.each do |product_from_basket|
    OrdersProduct.create(
        order_id: order4.id,
        product_id: product_from_basket[:id],
        quantity: product_from_basket[:quantity]
    )

    product = Product.find(product_from_basket[:id]) 
    product.update_columns(quantity_available: product.quantity_available - product_from_basket[:quantity])
end


admin1 = Admin.create!()
admin1.create_dataLogin!(login: 'michsiw439', password: '1234')
admin1.create_dataPerson!(name: 'Michal', surname: 'Siwiec', email: 'siwiec.michal724@gmail.com', phone_number: '724131140')

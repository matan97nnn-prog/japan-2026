/* The train lines we actually ride, with the colour and letter you'll see
 * on every sign. Station codes are the ones printed on the platform signs
 * (G09 = Ginza line, station 9). Colours are the official line colours in
 * Tokyo; Kyoto colours are just for telling the lines apart here. */

export interface Line {
  id: string;
  /** Letter on the signs (G, H, JY…). */
  code: string;
  color: string;
  en: string;
  he: string;
  operator: string;
  /** Stations on our route, in line order. `hotel` marks the one next to
   *  one of our hotels. */
  stations: { code?: string; en: string; ja: string; hotel?: boolean; note?: { en: string; he: string } }[];
  city: "tokyo" | "kyoto";
}

export const LINES: Line[] = [
  {
    id: "ginza",
    code: "G",
    color: "#FF9500",
    en: "Ginza line",
    he: "קו גינזה",
    operator: "Tokyo Metro",
    city: "tokyo",
    stations: [
      { code: "G01", en: "Shibuya", ja: "渋谷" },
      { code: "G02", en: "Omote-sando", ja: "表参道" },
      { code: "G08", en: "Shimbashi", ja: "新橋", hotel: true, note: { en: "Dai-ichi Hotel, underground passage", he: "מלון Dai-ichi, מעבר תת-קרקעי" } },
      { code: "G09", en: "Ginza", ja: "銀座" },
      { code: "G11", en: "Nihombashi", ja: "日本橋" },
      { code: "G16", en: "Ueno", ja: "上野" },
      { code: "G19", en: "Asakusa", ja: "浅草", note: { en: "Exit 1 for Kaminarimon", he: "יציאה 1 לשער קמינרימון" } }
    ]
  },
  {
    id: "hibiya",
    code: "H",
    color: "#9CAEB7",
    en: "Hibiya line",
    he: "קו היביה",
    operator: "Tokyo Metro",
    city: "tokyo",
    stations: [
      { code: "H01", en: "Naka-meguro", ja: "中目黒" },
      { code: "H08", en: "Hibiya", ja: "日比谷" },
      { code: "H09", en: "Ginza", ja: "銀座" },
      { code: "H11", en: "Tsukiji", ja: "築地", hotel: true, note: { en: "Keihan Tsukiji hotel, exit 3a/3b, 2 min", he: "מלון Keihan Tsukiji, יציאה 3a/3b, 2 דק'" } },
      { code: "H18", en: "Ueno", ja: "上野" }
    ]
  },
  {
    id: "chiyoda",
    code: "C",
    color: "#00BB85",
    en: "Chiyoda line",
    he: "קו צ'יודה",
    operator: "Tokyo Metro",
    city: "tokyo",
    stations: [
      { code: "C03", en: "Meiji-jingumae (Harajuku)", ja: "明治神宮前〈原宿〉" },
      { code: "C09", en: "Hibiya", ja: "日比谷" },
      { code: "C14", en: "Nezu", ja: "根津" },
      { code: "C15", en: "Sendagi", ja: "千駄木" }
    ]
  },
  {
    id: "marunouchi",
    code: "M",
    color: "#F62E36",
    en: "Marunouchi line",
    he: "קו מרונוצ'י",
    operator: "Tokyo Metro",
    city: "tokyo",
    stations: [
      { code: "M09", en: "Shinjuku-sanchome", ja: "新宿三丁目" },
      { code: "M16", en: "Ginza", ja: "銀座" },
      { code: "M17", en: "Tokyo", ja: "東京" }
    ]
  },
  {
    id: "oedo",
    code: "E",
    color: "#B6007A",
    en: "Oedo line",
    he: "קו אואדו",
    operator: "Toei",
    city: "tokyo",
    stations: [
      { code: "E27", en: "Shinjuku", ja: "新宿" },
      { code: "E18", en: "Tsukijishijo", ja: "築地市場", note: { en: "8 min walk to the Keihan Tsukiji hotel", he: "8 דק' הליכה למלון Keihan Tsukiji" } }
    ]
  },
  {
    id: "mita",
    code: "I",
    color: "#0079C2",
    en: "Mita line",
    he: "קו מיטה",
    operator: "Toei",
    city: "tokyo",
    stations: [
      { code: "I07", en: "Uchisaiwaicho", ja: "内幸町", note: { en: "4 min walk from the Dai-ichi Hotel", he: "4 דק' הליכה ממלון Dai-ichi" } },
      { code: "I11", en: "Suidobashi", ja: "水道橋" }
    ]
  },
  {
    id: "tozai-tokyo",
    code: "T",
    color: "#009BBF",
    en: "Tozai line",
    he: "קו טוזאי",
    operator: "Tokyo Metro",
    city: "tokyo",
    stations: [
      { code: "T05", en: "Kagurazaka", ja: "神楽坂" },
      { code: "T10", en: "Nihombashi", ja: "日本橋" }
    ]
  },
  {
    id: "fukutoshin",
    code: "F",
    color: "#9C5E31",
    en: "Fukutoshin line",
    he: "קו פוקוטושין",
    operator: "Tokyo Metro",
    city: "tokyo",
    stations: [
      { code: "F15", en: "Meiji-jingumae (Harajuku)", ja: "明治神宮前〈原宿〉" },
      { code: "F16", en: "Shibuya", ja: "渋谷", note: { en: "Continues as the Tokyu Toyoko line", he: "ממשיך כקו Tokyu Toyoko" } }
    ]
  },
  {
    id: "toyoko",
    code: "TY",
    color: "#DA0442",
    en: "Tokyu Toyoko line",
    he: "קו טוקיו טויוקו",
    operator: "Tokyu",
    city: "tokyo",
    stations: [
      { code: "TY01", en: "Shibuya", ja: "渋谷" },
      { code: "TY02", en: "Daikanyama", ja: "代官山", note: { en: "Local trains only", he: "רק רכבות מקומיות עוצרות" } },
      { code: "TY03", en: "Naka-meguro", ja: "中目黒" }
    ]
  },
  {
    id: "yamanote",
    code: "JY",
    color: "#80C241",
    en: "JR Yamanote line (loop)",
    he: "קו JR יאמאנוטה (מעגלי)",
    operator: "JR East",
    city: "tokyo",
    stations: [
      { code: "JY01", en: "Tokyo", ja: "東京" },
      { code: "JY03", en: "Shimbashi", ja: "新橋", hotel: true },
      { code: "JY05", en: "Ueno", ja: "上野" },
      { code: "JY17", en: "Shinjuku", ja: "新宿" },
      { code: "JY19", en: "Harajuku", ja: "原宿" },
      { code: "JY20", en: "Shibuya", ja: "渋谷" }
    ]
  },
  {
    id: "keihan",
    code: "KH",
    color: "#1E3F8F",
    en: "Keihan line",
    he: "קו קייהאן",
    operator: "Keihan",
    city: "kyoto",
    stations: [
      { code: "KH34", en: "Fushimi-Inari", ja: "伏見稲荷", note: { en: "Local trains only", he: "רק רכבות מקומיות" } },
      { code: "KH36", en: "Tofukuji", ja: "東福寺" },
      { code: "KH37", en: "Shichijo", ja: "七条", hotel: true, note: { en: "7 min walk to Onyado Nono", he: "7 דק' הליכה ל-Onyado Nono" } },
      { code: "KH38", en: "Kiyomizu-Gojo", ja: "清水五条" },
      { code: "KH39", en: "Gion-Shijo", ja: "祇園四条" },
      { code: "KH42", en: "Demachiyanagi", ja: "出町柳", note: { en: "End of the line; Eizan train upstairs", he: "תחנה סופית; רכבת אייזן קומה למעלה" } }
    ]
  },
  {
    id: "jr-kyoto",
    code: "JR",
    color: "#0072BC",
    en: "JR Nara line / Sagano line",
    he: "JR קו נארה / קו סאגאנו",
    operator: "JR West",
    city: "kyoto",
    stations: [
      { en: "Kyoto", ja: "京都", hotel: true, note: { en: "7 min walk to Onyado Nono", he: "7 דק' הליכה ל-Onyado Nono" } },
      { en: "Inari (Nara line)", ja: "稲荷", note: { en: "Opposite the Fushimi Inari gate. Local trains only", he: "מול שער פושימי אינרי. רק רכבות מקומיות" } },
      { en: "Saga-Arashiyama (Sagano line)", ja: "嵯峨嵐山" }
    ]
  },
  {
    id: "karasuma",
    code: "K",
    color: "#2E9E4F",
    en: "Karasuma subway line",
    he: "קו הרכבת התחתית קאראסומה",
    operator: "Kyoto City Subway",
    city: "kyoto",
    stations: [
      { code: "K08", en: "Karasuma Oike", ja: "烏丸御池" },
      { code: "K11", en: "Kyoto", ja: "京都", hotel: true }
    ]
  },
  {
    id: "tozai-kyoto",
    code: "T",
    color: "#E8541E",
    en: "Tozai subway line (Kyoto)",
    he: "קו טוזאי (קיוטו)",
    operator: "Kyoto City Subway",
    city: "kyoto",
    stations: [
      { code: "T13", en: "Karasuma Oike", ja: "烏丸御池" },
      { code: "T14", en: "Nijojo-mae", ja: "二条城前", note: { en: "Nijo Castle", he: "טירת ניג'ו" } }
    ]
  },
  {
    id: "eizan",
    code: "E",
    color: "#C8102E",
    en: "Eizan railway (Kurama line)",
    he: "רכבת אייזן (קו קוראמה)",
    operator: "Eizan Railway",
    city: "kyoto",
    stations: [
      { en: "Demachiyanagi", ja: "出町柳" },
      { en: "Kibuneguchi", ja: "貴船口" },
      { en: "Kurama", ja: "鞍馬", note: { en: "End of the line", he: "תחנה סופית" } }
    ]
  }
];

export const lineById = (id: string) => LINES.find((l) => l.id === id);

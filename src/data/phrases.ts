/* Pocket phrasebook. `ja` is what the phone reads aloud (and what we show
 * people), `romaji` for reading it ourselves, `heSay` the same in Hebrew
 * letters. Kept short: these are the ones we'll actually use. */

export interface Phrase {
  ja: string;
  romaji: string;
  heSay: string;
  he: string;
  en: string;
}

export interface PhraseGroup {
  id: string;
  he: string;
  en: string;
  phrases: Phrase[];
}

export const phraseGroups: PhraseGroup[] = [
  {
    id: "basics",
    he: "בסיס",
    en: "Basics",
    phrases: [
      { ja: "こんにちは", romaji: "konnichiwa", heSay: "קוניצ'יווה", he: "שלום", en: "Hello" },
      { ja: "ありがとうございます", romaji: "arigatō gozaimasu", heSay: "אריגאטו גוזאימאס", he: "תודה רבה", en: "Thank you very much" },
      { ja: "すみません", romaji: "sumimasen", heSay: "סומימאסן", he: "סליחה (גם כדי לקרוא למלצר)", en: "Excuse me (also to call a waiter)" },
      { ja: "お願いします", romaji: "onegaishimasu", heSay: "אונגאישימאס", he: "בבקשה (כשמבקשים משהו)", en: "Please (when asking)" },
      { ja: "はい ／ いいえ", romaji: "hai / iie", heSay: "האי / איייה", he: "כן / לא", en: "Yes / No" },
      { ja: "大丈夫です", romaji: "daijōbu desu", heSay: "דאיג'ובו דס", he: "זה בסדר / לא צריך", en: "It's fine / No thanks" },
      { ja: "分かりません", romaji: "wakarimasen", heSay: "וואקארימאסן", he: "לא הבנתי", en: "I don't understand" },
      { ja: "英語を話せますか？", romaji: "eigo o hanasemasu ka?", heSay: "אייגו או האנאסמאס קה?", he: "אתה מדבר אנגלית?", en: "Do you speak English?" }
    ]
  },
  {
    id: "food",
    he: "במסעדה",
    en: "Eating out",
    phrases: [
      { ja: "四人です", romaji: "yonin desu", heSay: "יונין דס", he: "אנחנו ארבעה", en: "Four of us" },
      { ja: "英語のメニューはありますか？", romaji: "eigo no menyū wa arimasu ka?", heSay: "אייגו נו מניו וא ארימאס קה?", he: "יש תפריט באנגלית?", en: "Do you have an English menu?" },
      { ja: "これをください", romaji: "kore o kudasai", heSay: "קורה או קודאסאי", he: "את זה בבקשה (ומצביעים)", en: "This one, please (point)" },
      { ja: "おすすめは何ですか？", romaji: "osusume wa nan desu ka?", heSay: "אוסוסומה וא נאן דס קה?", he: "מה אתם ממליצים?", en: "What do you recommend?" },
      { ja: "お水をください", romaji: "omizu o kudasai", heSay: "אומיזו או קודאסאי", he: "מים בבקשה", en: "Water, please" },
      { ja: "乾杯！", romaji: "kanpai!", heSay: "קאנפאי!", he: "לחיים!", en: "Cheers!" },
      { ja: "いただきます", romaji: "itadakimasu", heSay: "איטאדאקימאס", he: "אומרים לפני שמתחילים לאכול", en: "Said before eating" },
      { ja: "ごちそうさまでした", romaji: "gochisōsama deshita", heSay: "גוצ'יסוסאמה דשיטה", he: "תודה על הארוחה (ביציאה)", en: "Thanks for the meal (on leaving)" },
      { ja: "お会計をお願いします", romaji: "okaikei o onegaishimasu", heSay: "אוקאייקיי או אונגאישימאס", he: "חשבון בבקשה", en: "The bill, please" },
      { ja: "カードで払えますか？", romaji: "kādo de haraemasu ka?", heSay: "קאדו דה האראאמאס קה?", he: "אפשר לשלם בכרטיס?", en: "Can I pay by card?" },
      { ja: "豚肉は食べられません", romaji: "butaniku wa taberaremasen", heSay: "בוטאניקו וא טאבראראמאסן", he: "אני לא אוכל חזיר", en: "I can't eat pork" }
    ]
  },
  {
    id: "transit",
    he: "בדרכים",
    en: "Getting around",
    phrases: [
      { ja: "トイレはどこですか？", romaji: "toire wa doko desu ka?", heSay: "טוירה וא דוקו דס קה?", he: "איפה השירותים?", en: "Where's the toilet?" },
      { ja: "駅はどこですか？", romaji: "eki wa doko desu ka?", heSay: "אקי וא דוקו דס קה?", he: "איפה התחנה?", en: "Where's the station?" },
      { ja: "この電車はここに行きますか？", romaji: "kono densha wa koko ni ikimasu ka?", heSay: "קונו דנשה וא קוקו ני איקימאס קה?", he: "הרכבת הזאת נוסעת לכאן? (ומראים בטלפון)", en: "Does this train go here? (show the phone)" },
      { ja: "何番線ですか？", romaji: "nanbansen desu ka?", heSay: "נאנבאנסן דס קה?", he: "מאיזה רציף?", en: "Which platform?" },
      { ja: "ここまでお願いします", romaji: "koko made onegaishimasu", heSay: "קוקו מאדה אונגאישימאס", he: "לכאן בבקשה (למונית)", en: "Here, please (taxi)" },
      { ja: "ここで止めてください", romaji: "koko de tomete kudasai", heSay: "קוקו דה טומטה קודאסאי", he: "עצור כאן בבקשה", en: "Stop here, please" }
    ]
  },
  {
    id: "shop",
    he: "קניות ומלון",
    en: "Shops & hotel",
    phrases: [
      { ja: "いくらですか？", romaji: "ikura desu ka?", heSay: "איקורה דס קה?", he: "כמה זה עולה?", en: "How much is it?" },
      { ja: "免税できますか？", romaji: "menzei dekimasu ka?", heSay: "מנזיי דקימאס קה?", he: "אפשר פטור ממס?", en: "Can I get tax-free?" },
      { ja: "袋はいりません", romaji: "fukuro wa irimasen", heSay: "פוקורו וא אירימאסן", he: "לא צריך שקית", en: "No bag, thanks" },
      { ja: "見ているだけです", romaji: "mite iru dake desu", heSay: "מיטה אירו דאקה דס", he: "רק מסתכלים", en: "Just looking" },
      { ja: "写真を撮ってもいいですか？", romaji: "shashin o tottemo ii desu ka?", heSay: "שאשין או טוטמו אי דס קה?", he: "אפשר לצלם?", en: "May I take a photo?" },
      { ja: "荷物を預かってもらえますか？", romaji: "nimotsu o azukatte moraemasu ka?", heSay: "נימוטסו או אזוקאטה מוראאמאס קה?", he: "אפשר להשאיר אצלכם מזוודות?", en: "Can you keep our bags?" }
    ]
  },
  {
    id: "special",
    he: "מיוחד",
    en: "Special",
    phrases: [
      { ja: "父の六十歳の誕生日です", romaji: "chichi no rokujussai no tanjōbi desu", heSay: "צ'יצ'י נו רוקוג'וסאי נו טאנג'ובי דס", he: "זה יום ההולדת ה-60 של אבא", en: "It's my father's 60th birthday" },
      { ja: "とても美味しいです", romaji: "totemo oishii desu", heSay: "טוטמו אוישי דס", he: "טעים מאוד", en: "It's delicious" },
      { ja: "助けてください", romaji: "tasukete kudasai", heSay: "טאסוקטה קודאסאי", he: "עזרה בבקשה", en: "Please help" }
    ]
  }
];

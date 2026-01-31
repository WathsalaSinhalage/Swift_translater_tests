// swift_trans_tests.spec.js
const { test, expect } = require('@playwright/test');


/* CONFIGURATION */

const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 3000,
    afterClear: 1000,
    translation: 4000,
    betweenTests: 1500
  },
  selectors: {
    inputPlaceholder: 'Input Your Singlish Text Here.',
    outputContainer:
      'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};


/* TEST DATA */


const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense',
      input: 'mama gedhara yanavaa',
      expected: 'මම ගෙදර යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S' 
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Simple food request',
      input: 'mama thee bonavaa',
      expected: 'මම තේ බොනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Having meal and dessert',
      input: 'api bath kaalaa, ice cream kamudha?',
      expected: 'අපි බත් කාලා, ice cream කමුද?',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_004',
      name: 'Going Kandy even it is raining',
      input: 'adha vaessa unath mata havasa kandy yanna oonee.',
      expected: 'අද වැස්ස උනත් මට හවස kandy යන්න ඕනේ.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'How are you?',
      input: 'Oyaata dhaen kohomadha?',
      expected: 'ඔයාට දැන් කොහොමද?',
      category: 'Daily language usage',
      grammar: 'Interrogative forms',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_006',
      name: 'Get out',
      input: 'vahaama eLiyata yanna',
      expected: 'වහාම එළියට යන්න',
      category: 'Daily language usage',
      grammar: 'Imperative forms',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_007',
      name: 'Not coming home',
      input: 'mama heta gedhara ennee naee',
      expected: 'මම හෙට ගෙදර එන්නේ නෑ',
      category: 'Daily language usage',
      grammar: 'Negative sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Good morning!',
      input: 'suBha udhaeesanak veevaa!',
      expected: 'සුභ උදෑසනක් වේවා!',
      category: 'Common greetings',
      grammar: 'Greetings',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Could you do the dishes',
      input: 'karuNaakaralaa magee kooppaya hoodhanavadha?',
      expected: 'කරුණාකරලා මගේ කෝප්පය හෝදනවද?',
      category: 'Daily language usage',
      grammar: 'Request sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'okay, will do it',
      input: 'hari, mama hoodhannam',
      expected: 'හරි, මම හෝදන්නම්',
      category: 'Daily language usage',
      grammar: 'Response sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Do what I say',
      input: 'mama kiyana dhee karapan',
      expected: 'මම කියන දේ කරපන්',
      category: 'Daily language usage',
      grammar: 'Informal phrasing',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Hungry',
      input: 'mata godak badagini',
      expected: 'මට ගොඩක් බඩගිනි',
      category: 'Daily language usage',
      grammar: 'Day to day expressions',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Okayy',
      input: 'hari hari',
      expected: 'හරි හරි',
      category: 'Daily language usage',
      grammar: 'Repeated word expressions',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Starving',
      input: 'mata godak badagini',
      expected: 'මට ගොඩක් බඩගිනි',
      category: 'Daily language usage',
      grammar: 'Day to day expressions',
      length: 'S'
    },{
      tcId: 'Pos_Fun_0015',
      name: 'Paragraph input',
      input: 'ekamath eka kaaleka, yaaLuvoo dhennek hitiyaa. eka yaaLuvek haedhunee nagaree, anith yaaLuvaa jiivath unee gamee. eka dhavasak nagaree yaaLuvaa gamee yaaLuvaa balanna giyaa. gamee jiivath una yaaluvaa nagare yaaluvaa dhaekalaa godak sathutu unaa. dhennaa ekathu velaa godaak sellam kalaa. sathutu unaa. haemadhaama ovun dhedhenaa gamee thibuNu lassanama lassana dhiya aellakin naanna giyaa. gamee yaaluvaage pavulee aya elavaLu vagaa karana nisaa aluth elavaLu palathutu kannath puLuvan unaa. eeth tika dhavasak yanakota nagaree yaluvaata gamee jiivithaya kammaeLi bava theeruNaa. eyaa aasama cheese, biscuits, cake naethi bava theeruNaa. eyaa aapasu nagarayata yanna thiiraNaya kaLaa. haemootama samudhiilaa eyaa aapasu yanna pitath unaa. gamee yaaLuvaa godak dhuk uNaa.',
      expected: 'එකමත් එක කාලෙක, යාළුවෝ දෙන්නෙක් හිටියා. එක යාළුවෙක් හැදුනේ නගරේ, අනිත් යාළුවා ජීවත් උනේ ගමේ. එක දවසක් නගරේ යාළුවා ගමේ යාළුවා බලන්න ගියා. ගමේ ජීවත් උන යාලුවා නගරෙ යාලුවා දැකලා ගොඩක් සතුටු උනා. දෙන්නා එකතු වෙලා ගොඩාක් සෙල්ලම් කලා. සතුටු උනා. හැමදාම ඔවුන් දෙදෙනා ගමේ තිබුණු ලස්සනම ලස්සන දිය ඇල්ලකින් නාන්න ගියා. ගමේ යාලුවාගෙ පවුලේ අය එලවළු වගා කරන නිසා අලුත් එලවළු පලතුටු කන්නත් පුළුවන් උනා. ඒත් ටික දවසක් යනකොට නගරේ යලුවාට ගමේ ජීවිතය කම්මැළි බව තේරුණා. එයා ආසම cheese, biscuits, cake නැති බව තේරුණා. එයා ආපසු නගරයට යන්න තීරණය කළා. හැමෝටම සමුදීලා එයා ආපසු යන්න පිටත් උනා. ගමේ යාළුවා ගොඩක් දුක් උණා.',
      category: 'Language usage',
      grammar: 'Simple, complex structures',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Ask for password',
      input: 'karuNaakaralaa mata Wifi password eka dhenna puLuvandha?',
      expected: 'කරුණාකරලා මට Wifi password එක දෙන්න පුළුවන්ද?',
      category: 'Daily language usage',
      grammar: 'Polite request',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Returning money',
      input: 'magen Nayata gath mudhal laebiimata salasvanna',
      expected: 'මගෙන් ණයට ගත් මුදල් ලැබීමට සලස්වන්න',
      category: 'Daily language usage',
      grammar: 'Polite request',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'New phone price',
      input: 'magee aluth phone eka Rs. 100,000 kata gaththee',
      expected: 'මගේ අලුත් phone එක Rs. 100,000 කට ගත්තේ',
      category: 'Daily language usage',
      grammar: 'Currency',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Date format',
      input: 'ammaagee upandhinaya dhesaembar 31',
      expected: 'අම්මාගේ උපන්දිනය දෙසැම්බර් 31',
      category: 'Daily language usage',
      grammar: 'Date format',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Long time no see',
      input: 'adoo, kaalekin dhaekkee..',
      expected: 'අඩෝ, කාලෙකින් දැක්කේ..',
      category: 'Daily language usage',
      grammar: 'Slang and colloquial phrasing',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Puppy waits for me',
      input: 'mama haemadhaama havasata gedhara enathuru apee balu paetiyaa balaagena innavaa',
      expected: 'මම හැමදාම හවසට ගෙදර එනතුරු අපේ බලු පැටියා බලාගෙන ඉන්නවා',
      category: 'Daily language usage',
      grammar: 'Polite request',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Visited temple',
      input: 'mama iiyee pansal giyaa',
      expected: 'මම ඊයේ පන්සල් ගියා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Train ride',
      input: 'train ekee yana nisaa ikmaNin yanna puLuvan',
      expected: 'train එකේ යන නිසා ඉක්මණින් යන්න පුළුවන්',
      category: 'Daily language usage',
      grammar: 'Sentences containing common english words',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Scared of raining',
      input: 'vaessa nisaa mata baya hithenavaa',
      expected: 'වැස්ස නිසා මට බය හිතෙනවා',
      category: 'Daily language usage',
      grammar: 'day to day expressions',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0025',
      name: 'Look at me',
      input: 'chuttak chuttak balanna maa dhihaa',
      expected: 'චුට්ටක් චුට්ටක් බලන්න මා දිහා',
      category: 'Daily language usage',
      grammar: 'Repeated words',
      length: 'M'
    },
  ],

  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'At the school',
      input: 'mamaiskooleeinnee',
      expected: 'මම ඉස්කෝලේ ඉන්නේ',
      category: 'Missing space between words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Not having dinner',
      input: 'mata   raeeta   kannee naee',
      expected: 'මට රෑට කන්නේ නෑ',
      category: 'Multiple spaces between words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Like you',
      input: 'mama ඔයාට kaemathi',
      expected: 'මම ඔයාට කැමතියි',
      category: 'Singlish and Sinhala inputs',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Attending classes',
      input: 'mama heta panthi yanavaa. \noyath enavadha?',
      expected: 'මම හෙට පන්ති යනවා. \nඔයත් එනවද?',
      category: 'Formatting - line breaks',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Out of school',
      input: 'dhaen mamaiskoolee yannee naeenee',
      expected: 'දැන් මම ඉස්කෝලේ යන්නේ නෑනේ',
      category: 'Formatting - Spaces',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Copy and send URL',
      input: 'Mata URL eka copy karalaa',
      expected: 'මට URL එක copy කරල එවනවද',
      category: 'Mixed languages English + Sinhala',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Are we going tomorrow?',
      input: 'hetaapi yanne naedhdha',
      expected: 'හෙට අපි යන්නෙ නැද්ද?',
      category: 'Formatting spaces',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Hospital',
      input: 'ASAP api   hospitalekata yamudha',
      expected: 'ASAP අපි hospital එකට යමුද?',
      category: 'Formatting - spacing + English and Sinhala',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Excellent dude',
      input: 'machang, supiri!',
      expected: 'මචං, සුපිරි!',
      category: 'Slangs',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Shoes value',
      input: 'mage sapaththu dheka Rs.8000k unaa',
      expected: 'මගේ සපත්තු දෙක Rs.8000ක් උනා',
      category: 'Not properly translating',
      grammar: 'Simple sentence',
      length: 'M'
    }
  ],

  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates',
    input: 'mama kaeema kannavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Daily language usage',
    grammar: 'Simple sentence',
    length: 'S'
  }
};


/* PAGE OBJECT */


class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  getInputField() {
    return this.page.getByPlaceholder(CONFIG.selectors.inputPlaceholder);
  }

  getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearInput() {
    const input = this.getInputField();
    await input.fill('');
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async translate(text) {
    await this.clearInput();
    await this.getInputField().fill(text);
    await this.waitForTranslation();
    return (await this.getOutputField().textContent()).trim();
  }

  async waitForTranslation() {
    await this.page.waitForFunction(() => {
      const el = document.querySelector(
        '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
      );
      return el && el.textContent.trim().length > 0;
    });
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }
}


/* TEST SUITE */


test.describe('SwiftTranslator – Singlish to Sinhala', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigate();
  });

  test.describe('Positive Tests', () => {
    for (const tc of TEST_DATA.positive) {
      test(`${tc.tcId} – ${tc.name}`, async () => {
        const result = await translator.translate(tc.input);
        expect(result).toBe(tc.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  test.describe('Negative Tests', () => {
    for (const tc of TEST_DATA.negative) {
      test(`${tc.tcId} – ${tc.name}`, async () => {
        const result = await translator.translate(tc.input);
        expect(result).toBe(tc.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  test.describe('UI Behaviour', () => {
    test(`${TEST_DATA.ui.tcId} – ${TEST_DATA.ui.name}`, async () => {
      const input = translator.getInputField();
      const output = translator.getOutputField();

      await translator.clearInput();

      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      await test.info().step('Verify partial translation', async () => {
        await translator.page.waitForTimeout(1200);
        expect((await output.textContent()).trim().length).toBeGreaterThan(0);
      });

      await input.pressSequentially(
        TEST_DATA.ui.input.slice(TEST_DATA.ui.partialInput.length),
        { delay: 150 }
      );

      await translator.waitForTranslation();
      const finalText = (await output.textContent()).trim();
      expect(finalText).toBe(TEST_DATA.ui.expectedFull);
    });
  });
});

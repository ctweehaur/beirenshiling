const quizQuestions = [
    {
        id: 1,
        text: "下列句子中，加点字“仕”的正确含义是？",
        py: "xià liè jù zǐ zhōng jiā diǎn zì shì de zhèng què hán yì shì",
        en: "What is the correct meaning of 'shì' in the sentence 'shì yú nán fāng'?",
        options: [
            {
                text: "旅行、游山玩水",
                py: "lǚ xíng yóu shān wán shuǐ",
                en: "To travel or go sightseeing.",
                correct: false,
                explanation: "错误。北方人去南方不是为了旅游，而是为了担任官职。",
                explanationPy: "cuò wù běi fāng rén qù nán fāng bú shì wèi le lǚ yóu ér shì wèi le dān rèn guān zhì",
                explanationEn: "Incorrect. The Northerner did not journey south for a holiday, but rather to assume a public post."
            },
            {
                text: "做官、出任官职",
                py: "zuò guān chū rèn guān zhì",
                en: "To serve as a government official.",
                correct: true,
                explanation: "正确！“仕于南方”指的是他在南方地区做官、担任公职。",
                explanationPy: "zhèng què shì yú nán fāng zhǐ de shì tā zài nán fāng dì qū zuò guān dān rèn gōng zhí",
                explanationEn: "Correct! 'Shi' functions as a traditional verb meaning to enter the civil service or take up a governmental assignment."
            },
            {
                text: "做生意、经商买卖",
                py: "zuò shēng yì jīng shāng mǎi mài",
                en: "To do business or engage in trade.",
                correct: false,
                explanation: "错误。“仕”是古代知识分子的出仕做官，做生意在古代通常用“商”或“贾”。",
                explanationPy: "cuò wù shì shì gǔ dài zhī shí fèn zǐ de chū shì zuò guān zuò shēng yì zài gǔ dài tōng cháng yòng shāng huò gǔ",
                explanationEn: "Incorrect. 'Shi' relates strictly to the official scholar-gentry hierarchy, never to commerce or trading."
            },
            {
                text: "逃难、流浪远方",
                py: "táo nàn liú làng yuǎn fāng",
                en: "To flee a disaster or wander aimlessly.",
                correct: false,
                explanation: "错误。语境中他能参加高规格酒席（席上食菱），身份显然是体面的官员。",
                explanationPy: "cuò wù yǔ jìng zhōng tā néng cān jiā gāo guī gé jiǔ xí xí shàng chī líng shēn fèn xiǎn rán shì tǐ miàn de guān yuán",
                explanationEn: "Incorrect. Attending high-status banquets indicates that his social position was highly respectable, not a refugee status."
            }
        ]
    },
    {
        id: 2,
        text: "对结尾句“此坐强不知以为知也”中“坐”字的用法，分析最准确的是？",
        py: "duì jié wěi jù cǐ zuò qiǎng bù zhī yǐ wéi zhī yě zhōng zuò zì de yòng fǎ fēn xī zuì zhǔn quě de shì",
        en: "Which analysis best explains the function of the character 'zuò' in the final sentence?",
        options: [
            {
                text: "动词，坐在椅子上",
                py: "dòng cí zuò zài yǐ zǐ shàng",
                en: "Verb, to sit down on a chair.",
                correct: false,
                explanation: "错误。这里不是行为动作，如果翻译成坐下，则整句话语法完全无法通顺。",
                explanationPy: "cuò wù zhè lǐ bú shì xíng wéi dòng zuò rú guǒ fān yì chéng zuò xià zé zhěng jù huà yǔ fǎ wán quán wú fǎ tōng shùn",
                explanationEn: "Incorrect. It does not signify the bodily posture of sitting; interpreting it as such breaks the grammatical flow entirely."
            },
            {
                text: "连词，因为、由于、因为……的原因",
                py: "lián cí yīn wèi yóu yú yīn wèi de yuán yīn",
                en: "Conjunction, because of or due to.",
                correct: true,
                explanation: "正确！这是大马文言文考试常考的特殊词义，“坐”在这里表示事情发生的“原因”。",
                explanationPy: "zhèng què zhè shì dà mǎ wén yán wén kǎo shì cháng kǎo de tè shū cí yì zuò zài zhè lǐ biǎo shì shì qíng fā shēng de yuán yīn",
                explanationEn: "Correct! This is a core archaic variant where 'zuo' acts as a causal connective meaning 'because of' or 'on account of'."
            },
            {
                text: "名词，犯罪的罪坐或惩罚",
                py: "míng cí fàn zuì de zuì zuò huò chéng fá",
                en: "Noun, criminal charge or punishment.",
                correct: false,
                explanation: "错误。虽然古汉语中“坐”有连带治罪的意思（如连坐），但在本句论证因果的语境中不合字意。",
                explanationPy: "cuò wù suī rán gǔ dài hàn yǔ zhōng zuò yǒu lián dài zhì zuì de yì si rú lián zuò dàn zài běn jù lùn zhèng yīn guǒ de yǔ jìng zhōng bù hé zì yì",
                explanationEn: "Incorrect. While 'zuo' can imply legal guilt or implication, it is misplaced in a context framing logical causality."
            },
            {
                text: "介词，朝着、面对着山",
                py: "jiè cí cháo zhe miàn duì zhe shān",
                en: "Preposition, facing or towards a mountain.",
                correct: false,
                explanation: "错误。属于毫无依据的字面盲目猜测。",
                explanationPy: "cuò wù shǔ yú háo wú yī jù de zì miàn máng mù cāi cè",
                explanationEn: "Incorrect. This represents an ungrounded literal guess lacking any historical textual support."
            }
        ]
    },
    {
        id: 3,
        text: "关于北方人吃菱角的荒唐举动，下面哪一项描写最符合文意？",
        py: "guān yú běi fāng rén chī líng jiǎo de huāng táng jǔ dòng xià miàn nǎ yī xiàng miáo xiě zuì fú hé wén yì",
        en: "Which description best matches the text regarding the Northerner's absurd way of eating caltrops?",
        options: [
            {
                text: "把菱角丢进火里烤熟了才吃",
                py: "bǎ líng jiǎo diū jìn huǒ lǐ kǎo shú le cái chī",
                en: "Throwing the caltrops into the fire to roast them before eating.",
                correct: false,
                explanation: "错误。文中完全没有提到烤菱角的场景，大马统考中要注意不要脱离文本瞎选。",
                explanationPy: "cuò wù wén zhāng zhōng wán quán méi yǒu tí dào kǎo líng jiǎo de chǎng jǐng dà mǎ tǒng kǎo zhōng yào zhù yì bú yào tuō lí wén běn xiā xuǎn",
                explanationEn: "Incorrect. There is absolutely no roasting scene in the text. Be careful not to speculate wildly outside the text during exams."
            },
            {
                text: "连同坚硬的外壳一起放进口中吃",
                py: "lián tóng jiān yìng de wài ké yī qǐ fàng jìn kǒu zhōng chī",
                en: "Putting it into his mouth and eating it together with the hard shell.",
                correct: true,
                explanation: "正确！文中明确写道“并壳入口”，意思就是他连同外壳一起塞进嘴里去嚼。",
                explanationPy: "zhèng què wén zhāng zhōng míng quě xiě dào bìng ké rù kǒu yì si jiù shì tā lián tóng wài ké yī qǐ sāi jìn zuǐ lǐ qù jiáo",
                explanationEn: "Correct! The text explicitly states 'bìng ké rù kǒu', which means he stuffed the caltrop into his mouth along with its shell."
            },
            {
                text: "嫌弃菱角太脏而拿到河里洗了很久",
                py: "xián qì líng jiǎo tài zàng ér ná dào hé lǐ xǐ le hěn jiǔ",
                en: "Complaining that the caltrops were too dirty and washing them in the river.",
                correct: false,
                explanation: "错误。文中描写的是他缺少生活常识，而不是讲他注重卫生。",
                explanationPy: "cuò wù wén zhāng zhōng miáo xiě de shì tā quē fá shēng huó cháng shí ér bú shì jiǎng tā zhù zhòng wèi shēng",
                explanationEn: "Incorrect. The story details his lack of common sense regarding foods, not his hygiene habits."
            },
            {
                text: "用刀把菱角切成小块分给所有人吃",
                py: "yòng dāo bǎ líng jiǎo qiē chéng xiǎo kuài fēn gěi suǒ yǒu rén chī",
                en: "Using a knife to cut the caltrops into small pieces to share with everyone.",
                correct: false,
                explanation: "错误。他是自己独自在席上出丑，没有切块分享的叙事。",
                explanationPy: "cuò wù tā shì zì jǐ dú zì zài xí shàng chū chǒu méi yǒu qiē kuài fēn xiǎng de xù shì",
                explanationEn: "Incorrect. He was making a fool of himself at the table alone; there is no narrative about slicing or sharing."
            }
        ]
    },
    {
        id: 4,
        text: "当别人指出应该去壳时，北方人瞎编了什么借口来掩饰无知？",
        py: "dāng bié rén zhǐ chū yīng gāi qù ké shí běi fāng rén xiā biān le shén me jiè kǒu lái yǎn shì wú zhī lái",
        en: "What excuse did the Northerner fabricate to hide his ignorance when advised to shell it?",
        options: [
            {
                text: "说外壳的味道比里面的肉更甜",
                py: "shuō wài ké de wèi dào bǐ lǐ miàn de ròu gèng tián",
                en: "Claiming that the shell tasted sweeter than the meat inside.",
                correct: false,
                explanation: "错误。这个借口过于荒唐，不符合文中的原话逻辑。",
                explanationPy: "cuò wù zhè gè jiè kǒu guò yú huāng táng bù fú hé wén zhāng zhōng de yuán huà luó jí",
                explanationEn: "Incorrect. This excuse is irrelevant and does not match the statement recorded in the text."
            },
            {
                text: "说连壳一起吃是为了清除身体内部的热气（降火）",
                py: "shuō lián ké yī qǐ chī shì wèi le qīng chú shēn tǐ nèi bù de rè qì jiàng huǒ",
                en: "Claiming that eating it with the shell was meant to clear away internal body heat.",
                correct: true,
                explanation: "正确！他狡辩说“并壳者，欲以清热也”，也就是硬说吃壳是为了清热降火（清热）。",
                explanationPy: "zhèng què tā jiǎo biàn shuō bìng ké zhě yù yǐ qīng rè yě yě jiù shì yìng shuō chī ké shì wèi le qīng rè jiàng huǒ qīng rè",
                explanationEn: "Correct! He rationalized his action by saying 'yù yǐ qīng rè yě', weaving a medicinal excuse to save face."
            },
            {
                text: "说北方人的习惯向来都是不剥壳的",
                py: "shuō běi fāng rén de xí guàn xiàng lái dōu shì bù bāo ké de",
                en: "Claiming that it has always been the habit of Northerners not to peel it.",
                correct: false,
                explanation: "错误。如果他说北方人都这样，后面就不会说北方满山都是菱角了，不合前后对话逻辑。",
                explanationPy: "cuò wù rú guǒ tā shuō běi fāng rén dōu zhè yàng hòu miàn jiù bú huì shuō běi fāng mǎn shān dōu shì líng jiǎo le bù hé qián hòu duì huà luó jí",
                explanationEn: "Incorrect. If he claimed it was a general northern habit, his subsequent statement about mountain crops would conflict logically."
            },
            {
                text: "说南方人的剥壳方法完全不正确",
                py: "shuō nán fāng rén de bāo ké fāng fǎ wán quán bú zhèng què",
                en: "Claiming that the Southerners' method of peeling was completely incorrect.",
                correct: false,
                explanation: "错误。他是在进行防御性的自我掩饰（自护其短），而不是主动攻击南方的剥壳技术。",
                explanationPy: "cuò wù tā shì zài jìn xíng fáng yù xìng de zì wǒ yǎn shì zì hù qí duǎn ér bú shì zhǔ dòng gōng jī nán fāng de bāo ké jì shù",
                explanationEn: "Incorrect. He was acting defensively to shelter his pride (zì hù qí duǎn), not launching a critique on southern culinary skills."
            }
        ]
    },
    {
        id: 5,
        text: "根据文章最后一段的论述，北方人最大的错误和逻辑毛病是什么？",
        py: "gēn jù wén zhāng zuì hòu yī duàn de lùn shù běi fāng rén zuì dà de cuò wù hé luó jí máo bìng shì shén me",
        en: "According to the final paragraph, what is the Northerner's biggest mistake and logical flaw?",
        options: [
            {
                text: "在宴会上大声喧哗，十分失礼",
                py: "zài yàn huì shàng dà shēng xuān huá shí fēn shī lǐ",
                en: "Shouting loudly at the banquet, being very rude.",
                correct: false,
                explanation: "错误。文章重点批判的是他的无知与虚伪，而不是他的酒席礼仪问题。",
                explanationPy: "cuò wù wén zhāng zhòng diǎn pī pàn de shì tā de wú zhī yǔ xū wěi ér bú  shì tā de jiǔ xí lǐ yí wèn tí",
                explanationEn: "Incorrect. The essay's focal critique targets his pretentiousness and vanity, not general dining table manners."
            },
            {
                text: "不应该去南方当官，不习惯南方的饮食",
                py: "bù yīng gāi qù nán fāng dāng guān bù xí guàn nán fāng de yǐn shí",
                en: "Should not have gone to the South to be an official, being unaccustomed to southern food.",
                correct: false,
                explanation: "错误。地理迁移和饮食不习惯只是故事背景，并非作者最后痛批的逻辑缺陷。",
                explanationPy: "cuò wù dì lǐ qiān yí hé yǐn shí bù xí guàn zhǐ shì gù shì bèi jǐng bìng fēi zuò zhě zuì hòu tòng pī de luó jí quē xiàn",
                explanationEn: "Incorrect. Regional relocation and culinary adjustments are mere backdrops, not the logical flaw heavily condemned by the author."
            },
            {
                text: "强不知以为知，不懂装懂还硬拗狡辩",
                py: "qiǎng bù zhī yǐ wéi zhī bù dǒng zhuāng dǒng hái yìng ào jiǎo biàn",
                en: "Pretending to know what one doesn't, bluffing and stubbornly arguing.",
                correct: true,
                explanation: "正确！作者直斥他“强不知以为知”，讽刺他为了面子硬把不知道的事情当成知道，结果把水生植物说成了土产。",
                explanationPy: "zhèng què zuò zhě zhí chì tā qiǎng bù zhī yǐ wéi zhī fěng cì tā wèi le miàn zǐ yìng bǎ bù zhī dào de shì qíng dàng zuò zhī dào jié guǒ bǎ shuǐ shēng zhí wù shuō chéng le tǔ chǎn",
                explanationEn: "Correct! The author strictly rebukes him for 'qiǎng bù zhī yǐ wéi zhī', lampooning his desperate attempt to look knowledgeable, which led to declaring aquatic crops as dry mountain products."
            },
            {
                text: "不知道北方其实也生长着大量的菱角",
                py: "bù zhī dào běi fāng qí shí yě shēng zhǎng zhe dà liàng de líng jiǎo",
                en: "Not knowing that the North actually produces a large amount of water caltrops.",
                correct: false,
                explanation: "错误。北方本来就没有这种水生植物，他的逻辑毛病是硬说山上有，而不是不知道北方有。",
                explanationPy: "cuò wù běi fāng běn lái jiù méi yǒu zhè zhǒng shuǐ shēng zhí wù tā de luó jí máo bìng shì yìng shuō shān shàng yǒu ér bú shì bù zhī dào běi fāng yǒu",
                explanationEn: "Incorrect. The cold North naturally lacks these warm aquatic crops. His flaw lay in hallucinating mountain local products, not in forgetting northern data."
            }
        ]
    }
];

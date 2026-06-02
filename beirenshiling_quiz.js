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
                explanationPy: "cuò wù zhè lǐ bú  shì xíng wéi dòng zuò rú guǒ fān yì chéng zuò xià zé zhěng jù huà yǔ fǎ wán quán wú fǎ tōng shùn",
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
    }
];

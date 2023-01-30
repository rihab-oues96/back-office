import im1 from "./assets/images/im1.png";
import im2 from "./assets/images/im2.png";
import im3 from "./assets/images/im3.png";
import im4 from "./assets/images/im4.png";
import im5 from "./assets/images/im5.png";
import im6 from "./assets/images/im6.png";
import im7 from "./assets/images/im7.png";

import lesson1 from "./assets/images/lesson1.png";
import lesson2 from "./assets/images/lesson2.png";
import lesson3 from "./assets/images/lesson3.png";
import lesson4 from "./assets/images/lesson4.png";
import lesson5 from "./assets/images/lesson5.png";
import lesson6 from "./assets/images/lesson6.png";

import ex1 from "./assets/images/ex1.png";
import ex2 from "./assets/images/ex2.png";

import advice from "./assets/icons/advice.png";
import description from "./assets/icons/description.png";
import dialogue from "./assets/icons/dialogue.png";
import image from "./assets/icons/image.png";
import linkCards from "./assets/icons/linkCards.png";
import menu from "./assets/icons/menu.png";
import question from "./assets/icons/question.png";
import range from "./assets/icons/range.png";
import rightWord from "./assets/icons/right-word.png";
import sound from "./assets/icons/sound.png";
import text from "./assets/icons/text.png";
import Type from "./assets/icons/type.png";
import video from "./assets/icons/video.png";

import { v4 as uuidv4 } from "uuid";

export const chapters = [
  {
    id: uuidv4(),
    image: im1,
    title: "London Central",
    description: "تعلم الإنكليزية مع هذه الدراما التلفزيونية المسلية",
  },
  {
    id: uuidv4(),
    image: im2,
    title: "أكملْ دورة اللغة الإنجليزية",
    description: "دروس لمستويات المُبتدئ، والمُتوسط، والمُتقدِّم",
  },
  {
    id: uuidv4(),
    image: im3,
    title: " نطق اللغة الإنكليزيّة ",
    description: " طوّرْ مهاراتك وتحدّثْ بمزيدٍ من الثقة ",
  },
  {
    id: uuidv4(),
    image: im4,
    title: " العالم باللغةِ الإنكليزيّة",
    description:
      "تعلّمْ اللغة الإنكليزيّة بفضلِ فيديوهات من 'The New York Times'",
  },
  {
    id: uuidv4(),
    image: im5,
    title: " أكملْ دورة اللغة الإنجليزية ",
    description: "تعلّم مُفردات وعبارات مُهمّة لأجلِ رحلتك",
  },
  {
    id: uuidv4(),
    image: im6,
    title: "اللغة الإنجليزية لِلأعمال التجاريّة",
    description: " أتقنْ أساسيّات اللُغة الخاصّة بالعمل اللغة الإنجليزية ",
  },
  {
    id: uuidv4(),
    image: im7,
    title: "The Economist ",
    description: " تعلّمْ الإنكليزيّة بفضلِ صحيفة The Economist",
  },
];

export const lessons = [
  {
    image: lesson1,
    title: "الدرس 1 : أساسيات السفر ",
    description: "تعّلم بعض المفردات والعبارات الأساسية",
  },
  {
    image: lesson2,
    title: "الدرس 2: أنا هنا في عطلة",
    description: "إجراء محادثة",
  },
  {
    image: lesson3,
    title: "الدرس 3: التجول",
    description: "تعلم عبارات و مفردات تساعدك على التجوال",
  },
  {
    image: lesson4,
    title: "الدرس 4: كيف ُيمكُنني إلغاء تذكرتي / بطاقتي؟",
    description: "شراء تذكرٍة للنقل",
  },
  {
    image: lesson5,
    title: "الدرس 6: أساسيات السفر",
    description: "تعّلم بعض المفردات والعبارات الأساسية",
  },
  {
    image: lesson6,
    title: "الدرس 7: أساسيات السفر",
    description: "تعّلم بعض المفردات والعبارات الأساسية",
  },
];

export const exercices = [
  {
    image: ex1,
    title: "نصيحة",
    description: "تعّلم بعض المفردات والعبارات الأساسية",
  },
  {
    image: ex2,
    title: "صحيحة أو خاطئة",
    description: "إجراء محادثة",
  },
];

export const questionsItems = [
  {
    name: "exerciceAdvice",
    image: advice,
    title: "النصيحة",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceDescription",
    image: description,
    title: "وصف",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceDialogue",
    image: dialogue,
    title: "حوار",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceImage",
    image: image,
    title: "صورة",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceLinkCards",
    image: linkCards,
    title: "توصيل البطاقات",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceQuestionCheck",
    image: menu,
    title: "التأكيد الصحيح",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceQuestion",
    image: question,
    title: "سؤال",
    description: "ضع حاوية الصورة",
  },
  {
    image: range,
    title: "الترتيب",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceWrongRight",
    image: rightWord,
    title: "الكلمة الصحيح",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceVoice",
    image: sound,
    title: "صوت",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceText",
    image: text,
    title: "نص",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceAddAnswer",
    image: Type,
    title: "املا الفراغ",
    description: "ضع حاوية الصورة",
  },
  {
    name: "exerciceVideo",
    image: video,
    title: "فيديو",
    description: "ضع حاوية الصورة",
  },
];

import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import { Description } from '../utils/DescriptionBuilder';

export const codeBlock = new CodeBlockBuilder('test3.python').addDescription(
   "โค้ดนี้ใช้สำหรับค้นหาตำแหน่งของเนื้อหาที่มี tag <main> และมี attribute id เป็นคำว่า 'ดูเพิ่ม' และตามด้วย tag <span> ที่มีเนื้อหาเป็นคำว่า 'ดูเพิ่ม' โดยใช้ Regular expression ในการค้นหา ซึ่งตัวแปร pattern จะเก็บรูปแบบ pattern นี้ไว้สำหรับใช้ค้นหาในข้อความต่อไป",
);

codeBlock
   .addLine("result = re.sub(' <a href=\".*ตำบล.*/a>', ' ตำบล', '\\n'.join(result))")
   .addDescription(
      new Description()
         .addDetail(
            'The given code line is using the Python re module to create a regular expression pattern using the compile() function. The pattern is specified within the quotes, and it searches for the HTML element <main> with any number of characters (including none) between main and id= followed by the exact string ',
         )
         .addInput(
            "<html>\n<body>\n<main id='main1'>\n<span>Some content</span>\n<span>ดูเพิ่ม</span></main>\n<main id='main2'>\n<span>Some other content</span></main></body></html>",
         )
         .addOutput("<main id='main1'>\n<span>ดูเพิ่ม</span>\n</main>"),
   )

   .addSibbling(codeBlock.addLine("result = re.sub('<li>.*? (ไม่มีหน้า)\">', '<li>', result)"))
   .addSibbling(codeBlock.addLine("result = re.sub(' ตำบล.*', '</li>', result)"))
   .addSibbling(codeBlock.addSpace());

codeBlock
   .addLine("result = re.sub('<li><a href=\"', '<li>', result)")
   .addDescription(
      new Description()
         .addDetail(
            'The given code line is using the Python re module to create a regular expression pattern using the compile() function. The pattern is specified within the quotes, and it searches for the HTML element <main> with any number of characters (including none) between main and id= followed by the exact string ',
         )
         .addInput(
            "<html>\n<body>\n<main id='main1'>\n<span>Some content</span>\n<span>ดูเพิ่ม</span></main>\n<main id='main2'>\n<span>Some other content</span></main></body></html>",
         )
         .addOutput("<main id='main1'>\n<span>ดูเพิ่ม</span>\n</main>"),
   )
   .addSibbling(codeBlock.addLine("result = re.sub('\" c', '<\"c', result)"))
   .addSibbling(codeBlock.addLine("result = re.sub('\"class=\".*\"', '', result)"))
   .addSibbling(codeBlock.addLine("result = re.sub('\"( )?t', ' <\"t', result)"));

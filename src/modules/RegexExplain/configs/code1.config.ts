import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import { Description } from '../utils/DescriptionBuilder';

import { Test, Test2 } from './test';

export const codeBlock = new CodeBlockBuilder('test.python').addDescription(
   "โค้ดนี้ใช้สำหรับค้นหาตำแหน่งของเนื้อหาที่มี tag <main> และมี attribute id เป็นคำว่า 'ดูเพิ่ม' และตามด้วย tag <span> ที่มีเนื้อหาเป็นคำว่า 'ดูเพิ่ม' โดยใช้ Regular expression ในการค้นหา ซึ่งตัวแปร pattern จะเก็บรูปแบบ pattern นี้ไว้สำหรับใช้ค้นหาในข้อความต่อไป",
);
codeBlock
   .addLine('data = await fetch(url)')
   .addDescription(
      new Description()
         .addDetail(Test2())
         .addInput(
            'ไอนาบินหน้ากินหมู, ไอนาบินหน้ากินหมู, ไอนาบินหน้ากินหมู, ไอนาบินหน้ากินหมู, ไอนาบินหน้ากินหมู, ไอนาบินหน้ากินหมู, ',
         )
         .addOutput("<main id='main1' className='bg-red-500'>\n<span>ดูเพิ่ม</span>\n</main>"),
   )
   .addSibbling(codeBlock.addSpace());

/**
 * Add description
 * must add after add line to populate all desctiption to sibling
 */
codeBlock
   .addLine("pattern = re.compile('<main[\u0000-\uFFFF]*id='ดูเพิ่ม'>ดูเพิ่ม</span>')")
   .addDescription(
      new Description()
         .addDetail(Test())
         .addInput(
            "<html>\n<body>\n<main id='main1'>\n<span>Some content</span>\n<span>ดูเพิ่ม</span></main>\n<main id='main2'>\n<span>Some other content</span></main></body></html>",
         )
         .addOutput("<main id='main1'>\n<span>ดูเพิ่ม</span>\n</main>"),
   )
   .addSibbling(codeBlock.addLine('result = re.findall(pattern, data.text)'))
   .addSibbling(codeBlock.addSpace());

codeBlock
   .addLine("pattern = re.compile('<li>.*</li>')")
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
   .addSibbling(codeBlock.addLine("result = re.findall(pattern, '\\n'.join(result))"))
   .addSibbling(codeBlock.addSpace());

import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import { Description } from '../utils/DescriptionBuilder';

import { Test, Test2, Test3, Test4 } from './test';

export const codeBlock = new CodeBlockBuilder('test.python').addDescription(
   'สำหรับ section นี้ จะเป็นการอธิบายถึงเบื้องหลังการ scraping ของวัดในแต่ละจังหวัด ซึ่ง library ที่เป็นตัวเอกในครั้งนี้ ประกอบไปด้วย\nrequests library สำหรับการส่ง request ไปยังจังหวะที่ต้องการ scraping และรอผลลัพธ์กลับมาเป็น html tag และ re library\nสำหรับการสกัดและคัดกรองข้อมูลจาก html tag ที่ได้รับมา ไม่ว่าจะเป็น ชื่อวัด, url ของวัด, ตำบลของวัด และ รายละเอียดของวัด',
);
codeBlock
   .addLine('provinces = {')
   .addDescription(new Description().addDetail(Test2()))
   .addSibling(
      codeBlock.addLine(
         '    "mahasarakam": "https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดมหาสารคาม",',
      ),
   )
   .addSibling(
      codeBlock.addLine(
         '    "mukdaharn": "https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดมุกดาหาร",',
      ),
   )
   .addSibling(
      codeBlock.addLine(
         '    "maehongson": "https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดแม่ฮ่องสอน",',
      ),
   )
   .addSibling(
      codeBlock.addLine(
         '    "yasothon": "https://th.wikipedia.org/wiki/รายชื่อวัดในจังหวัดยโสธร",',
      ),
   )
   .addSibling(codeBlock.addLine('}'))
   .addSibling(codeBlock.addSpace())
   .addSibling(codeBlock.addLine('data = requests.get(provinces["yasothon"])'))
   .addSibling(codeBlock.addSpace());

/**
 * Add description
 * must add after add line to populate all desctiption to sibling
 */
codeBlock
   .addLine("pattern = re.compile('<main[\\u0000-\\uFFFF]*id='ดูเพิ่ม'>ดูเพิ่ม</span>')")
   .addDescription(new Description().addDetail(Test3()))
   .addSibling(codeBlock.addLine('result = re.findall(pattern, data.text)'))
   .addSibling(codeBlock.addSpace());

codeBlock
   .addLine("pattern = re.compile('<li>.*</li>')")
   .addDescription(
      new Description()
         .addDetail(Test4())
         .addInput(
            "<html>\n<body>\n<main id='main1'>\n<span>Some content</span>\n<span>ดูเพิ่ม</span></main>\n<main id='main2'>\n<span>Some other content</span></main></body></html>",
         )
         .addOutput("<main id='main1'>\n<span>ดูเพิ่ม</span>\n</main>"),
   )
   .addSibling(codeBlock.addLine("html_list: List[str] = re.findall(pattern, '\\n'.join(result))"))
   .addSibling(codeBlock.addSpace());

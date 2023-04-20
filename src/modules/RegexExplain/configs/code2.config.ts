import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import { Description } from '../utils/DescriptionBuilder';

import { Test, Test2 } from './test2';

export const codeBlock = new CodeBlockBuilder('temple_link.python', 16).addDescription(
   'section นี้จะอธิบายการทำงานของฟังก์ชั่น temple_link() สำหรับ extract ลิ้งค์ของวัดออกมาจาก html string',
);
codeBlock
   .addLine('def temple_link(html_str: str):')
   .addDescription(
      new Description()
         .addDetail(Test())
         .addInput(
            '<remove><li><a href="</remove>/wiki/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%8E%E0%B8%90%E0%B8%B4%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%99<remove>" title="วัดลัฎฐิกวัน">วัดลัฎฐิกวัน</a> ตำบลชะโนด</li></remove>',
         )
         .addOutput(
            '<remove><li><a href="</remove>/wiki/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A5%E0%B8%B1%E0%B8%8E%E0%B8%90%E0%B8%B4%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%99<remove>" title="วัดลัฎฐิกวัน">วัดลัฎฐิกวัน</a> ตำบลชะโนด</li></remove>',
         ),
   )
   .addSibling(
      codeBlock.addLine('    pattern = re.compile("href="(/wiki/.*?)".*วัด[\\u0E00-\\u0E60]*")'),
   )
   .addSibling(codeBlock.addLine('    link_list: List[str] = re.findall(pattern, html_str)'))
   .addSibling(codeBlock.addSpace());

codeBlock
   .addLine('    if len(link_list) == 0:')
   .addDescription(new Description().addDetail(Test2()))
   .addSibling(codeBlock.addLine("        return 'https://www.google.com'"))
   .addSibling(codeBlock.addLine("    return 'https://th.wikipedia.org'+link_list[0]"))
   .addSibling(codeBlock.addSpace());

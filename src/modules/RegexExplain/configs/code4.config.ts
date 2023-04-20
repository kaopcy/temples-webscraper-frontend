import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import { Description } from '../utils/DescriptionBuilder';

import { Test } from './test4';

export const codeBlock = new CodeBlockBuilder('sub_district_name.python', 28).addDescription(
   'section นี้จะอธิบายการทำงานของฟังก์ชั่น sub_district_name() สำหรับ extract ชื่อตำบลของวัดออกมาจาก html string',
);
codeBlock
   .addLine('def sub_district_name(html_str: str):')
   .addDescription(
      new Description()
         .addDetail(Test())
         .addInput(
            '<remove><li><a href="/w/index.php?title=%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%99%E0%B8%B2&amp;action=edit&amp;redlink=1" class="new" title="วัดหัวนา (ไม่มีหน้านี้)">วัดหัวนา</a> </remove>ตำบลเวียงใต้<remove></li></remove>',
         )
         .addOutput(
            '<remove><li><a href="/w/index.php?title=%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%99%E0%B8%B2&amp;action=edit&amp;redlink=1" class="new" title="วัดหัวนา (ไม่มีหน้านี้)">วัดหัวนา</a> </remove>ตำบลเวียงใต้<remove></li></remove>',
         ),
   )
   .addSibling(codeBlock.addLine("    list_str = re.findall('ตำบล[\u0E00-\u0E60]*', html_str)"))
   .addSibling(codeBlock.addLine('    return list_str[0] if len(list_str) != 0 else ""'))
   .addSibling(codeBlock.addSpace());

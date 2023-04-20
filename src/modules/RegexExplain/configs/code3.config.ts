import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import { Description } from '../utils/DescriptionBuilder';

import { Test } from './test3';

export const codeBlock = new CodeBlockBuilder('temple_name.python', 24).addDescription(
   'section นี้จะอธิบายการทำงานของฟังก์ชั่น temple_name() สำหรับ extract ชื่อของวัดออกมาจาก html string',
);
codeBlock
   .addLine('def temple_name(html_str: str):')
   .addDescription(
      new Description()
         .addDetail(Test())
         .addInput(
            '<remove><li><a href="/w/index.php?title=%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%99%E0%B8%B2&action=edit&redlink=1" title="</remove>วัดหัวนา<remove> (ไม่มีหน้านี้)">วัดหัวนา</a> ตำบลเวียงใต้</li></remove>',
         )
         .addOutput(
            '<remove><li><a href="/w/index.php?title=%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%99%E0%B8%B2&action=edit&redlink=1" title="</remove>วัดหัวนา<remove> (ไม่มีหน้านี้)">วัดหัวนา</a> ตำบลเวียงใต้</li></remove>',
         ),
   )
   .addSibling(codeBlock.addLine("    list_str = re.findall('วัด[\\u0E00-\\u0E60]*', html_str)"))
   .addSibling(codeBlock.addLine('    return list_str[0] if len(list_str) != 0 else ""'))
   .addSibling(codeBlock.addSpace());

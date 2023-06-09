import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import { Description } from '../utils/DescriptionBuilder';

import { Test, Test2, Test3, Test4 } from './test';

export const codeBlock = new CodeBlockBuilder('test.python', 1).addDescription(
   'สำหรับ section นี้ จะเป็นการอธิบายถึงเบื้องหลังการ scraping ของวัดในแต่ละจังหวัด ซึ่ง library ที่เป็นตัวเอกในครั้งนี้ ประกอบไปด้วย \
   requests library สำหรับการส่ง request ไปยังจังหวัดที่ต้องการ scraping แล้วรอผลลัพธ์กลับมาเป็น html tag และ re library \
   สำหรับการสกัดและคัดกรองข้อมูลจาก html tag ที่ได้รับมา ให้อยู่ในรูปแบบที่ต้องการ ซึ่งมีหลากหลายข้อมูลที่สามารถดึงมาใช้งานได้ \n\n\
   \t\t\tโดย code ที่นำเสนอใน section นี้ เพื่อให้สามารถทำความเข้าใจการทำงานของ regular expression ได้ง่ายนั้น จะนำเสนอเป็น code ที่จำลองการทำงาน โดยเน้นไปที่การ scraping 1 ครั้งต่อ 1 link ของจังหวัดนั้น แล้วเก็บข้อมูลปลายทางเป็นรูปแบบ csv เป็นหลักส่วนการทำงานจริงนั้น จะนำ code ดังกล่าว ไปดัดแปลงเป็น code ที่อยู่ใน backend ซึ่งการ scraping 1 ครั้ง จะทำการ for loop ครบทั้ง 4 จังหวัด แล้วนำข้อมูลปลายทางที่เก็บได้ทั้งหมด บันทึกลงใน database แทนในภายหลัง\n\n\
   \t\t\tหลังจากนี้ จะเป็นการอธิบายการทำงาน regular expression เป็นส่วน ๆ เพื่อให้เห็นภาพการทำงานได้ง่าย และแต่ละส่วนการทำงานนั้น จะมีตัวอย่าง input ก่อนคัดกรอง และ output หลังคัดกรอง โดยผ่าน regular expression ซึ่งตัวอย่างทั้ง input และ output ในความเป็นจริงนั้น จะเป็น string ที่มีความยาวมาก จึงต้องทำการตัดและย่อ html code บางส่วนออกไป เพื่อให้เห็นการคัดกรองที่ง่ายมากขึ้น โดยใช้สัญลักษณ์ (...) ในการย่อ html code ให้กระชับขึ้น',
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
            '<remove><main id="content" class="mw-body" role="main">\n<header class="mw-body-header vector-page-titlebar">\n(...)\n<h3><span id=".E0.B8.9E(...).E0.B8.A2"></span><span class="mw-headline" id="พระอารามหลวงมหานิกาย">พระอารามหลวงมหานิกาย</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E0%B8%A3(...)%E0%B8%99&action=edit&section=2" title="แก้ไขส่วน: พระอารามหลวงมหานิกาย">แก้</a><span class="mw-editsection-bracket">]</span></span></h3>\n<ul></remove><li><a href="/wiki/%E0%B8%A7(...)%E0%B8%99" title="วัดจองคำ (จังหวัดแม่ฮ่องสอน)">วัดจองคำ</a> (พระอารามหลวงชั้นตรี ชนิดสามัญ) <a href="/w/index.php?title=%E0%B8%95(...)%E0%B8%B3&action=edit&redlink=1" class="new" title="ตำบลจองคำ (ไม่มีหน้านี้)">ตำบลจองคำ</a> <a href="/wiki/%E0%B8%AD(...)%E0%B8%99" title="อำเภอเมืองแม่ฮ่องสอน">อำเภอเมืองแม่ฮ่องสอน</a></li><remove></ul>\n(...)\n<h2><span id=".E0.B8.A7(...).E0.B8.99"></span><span class="mw-headline" id="วัดราษฏร์ในจังหวัดแม่ฮ่องสอน">วัดราษฏร์ในจังหวัดแม่ฮ่องสอน</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E0%B8%A3(...)%E0%B8%99&action=edit&section=3" title="แก้ไขส่วน: วัดราษฏร์ในจังหวัดแม่ฮ่องสอน">แก้</a><span class="mw-editsection-bracket">]</span></span></h2>\n<h3><span id=".E0.B8.A7(...).E0.B8.A1"></span><span class="mw-headline" id="วัดราษฏร์ในอำเภอขุนยวม">วัดราษฏร์ในอำเภอขุนยวม</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E0%B8%A3(...)%E0%B8%99&action=edit&section=4" title="แก้ไขส่วน: วัดราษฏร์ในอำเภอขุนยวม">แก้</a><span class="mw-editsection-bracket">]</span></span></h3>\n<h4><span id=".E0.B8.A7(...).E0.B8.A2"></span><span class="mw-headline" id="วัดราษฏร์มหานิกาย">วัดราษฏร์มหานิกาย</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E0%B8%A3(...)%E0%B8%99&action=edit&section=5" title="แก้ไขส่วน: วัดราษฏร์มหานิกาย">แก้</a><span class="mw-editsection-bracket">]</span></span></h4>\n<ul></remove><li><a href="/wiki/%E0%B8%A7(...)%E0%B8%A1" title="วัดขุ่ม">วัดขุ่ม</a> <a href="/w/index.php?title=%E0%B8%95(...)%E0%B8%A1&action=edit&redlink=1" class="new" title="ตำบลขุนยวม (ไม่มีหน้านี้)">ตำบลขุนยวม</a></li>\n<li><a href="/w/index.php?title=%E0%B8%A7(...)%E0%B8%99&action=edit&redlink=1" class="new" title="วัดคำใน (ไม่มีหน้านี้)">วัดคำใน</a> ตำบลขุนยวม</li>\n<li><a href="/wiki/%E0%B8%A7(...)%E0%B8%87" title="วัดประตูเมือง">วัดประตูเมือง</a> ตำบลขุนยวม</li>\n(...)\n<li><a href="/wiki/%E0%B8%A7(...)%E0%B8%B2" title="วัดผาผ่า">วัดผาผ่า</a> ตำบลแม่คะตวน</li>\n<li><a href="/w/index.php?title=%E0%B8%A7(...)%E0%B8%B0&action=edit&redlink=1" class="new" title="วัดแม่เกาะ (ไม่มีหน้านี้)">วัดแม่เกาะ</a> ตำบลแม่คะตวน</li>\n<li><a href="/w/index.php?title=%E0%B8%A7(...)%E0%B8%99&action=edit&redlink=1" class="new" title="วัดแม่คะตวน (ไม่มีหน้านี้)">วัดแม่คะตวน</a> <a href="/w/index.php?title=%E0%B8%95(...)%E0%B8%A2&action=edit&redlink=1" class="new" title="ตำบลสบเมย (ไม่มีหน้านี้)">ตำบลสบเมย</a></li><remove></ul>\n<h2><span id=".E0.B8.A7(...).E0.B8.A1"></span><span class="mw-headline" id="ดูเพิ่ม">ดูเพิ่ม</span></remove>',
         )
         .addOutput(
            '<remove><main id="content" class="mw-body" role="main">\n<header class="mw-body-header vector-page-titlebar">\n(...)\n<h3><span id=".E0.B8.9E(...).E0.B8.A2"></span><span class="mw-headline" id="พระอารามหลวงมหานิกาย">พระอารามหลวงมหานิกาย</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E0%B8%A3(...)%E0%B8%99&action=edit&section=2" title="แก้ไขส่วน: พระอารามหลวงมหานิกาย">แก้</a><span class="mw-editsection-bracket">]</span></span></h3>\n<ul></remove><li><a href="/wiki/%E0%B8%A7(...)%E0%B8%99" title="วัดจองคำ (จังหวัดแม่ฮ่องสอน)">วัดจองคำ</a> (พระอารามหลวงชั้นตรี ชนิดสามัญ) <a href="/w/index.php?title=%E0%B8%95(...)%E0%B8%B3&action=edit&redlink=1" class="new" title="ตำบลจองคำ (ไม่มีหน้านี้)">ตำบลจองคำ</a> <a href="/wiki/%E0%B8%AD(...)%E0%B8%99" title="อำเภอเมืองแม่ฮ่องสอน">อำเภอเมืองแม่ฮ่องสอน</a></li><remove></ul>\n(...)\n<h2><span id=".E0.B8.A7(...).E0.B8.99"></span><span class="mw-headline" id="วัดราษฏร์ในจังหวัดแม่ฮ่องสอน">วัดราษฏร์ในจังหวัดแม่ฮ่องสอน</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E0%B8%A3(...)%E0%B8%99&action=edit&section=3" title="แก้ไขส่วน: วัดราษฏร์ในจังหวัดแม่ฮ่องสอน">แก้</a><span class="mw-editsection-bracket">]</span></span></h2>\n<h3><span id=".E0.B8.A7(...).E0.B8.A1"></span><span class="mw-headline" id="วัดราษฏร์ในอำเภอขุนยวม">วัดราษฏร์ในอำเภอขุนยวม</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E0%B8%A3(...)%E0%B8%99&action=edit&section=4" title="แก้ไขส่วน: วัดราษฏร์ในอำเภอขุนยวม">แก้</a><span class="mw-editsection-bracket">]</span></span></h3>\n<h4><span id=".E0.B8.A7(...).E0.B8.A2"></span><span class="mw-headline" id="วัดราษฏร์มหานิกาย">วัดราษฏร์มหานิกาย</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=%E0%B8%A3(...)%E0%B8%99&action=edit&section=5" title="แก้ไขส่วน: วัดราษฏร์มหานิกาย">แก้</a><span class="mw-editsection-bracket">]</span></span></h4>\n<ul></remove><li><a href="/wiki/%E0%B8%A7(...)%E0%B8%A1" title="วัดขุ่ม">วัดขุ่ม</a> <a href="/w/index.php?title=%E0%B8%95(...)%E0%B8%A1&action=edit&redlink=1" class="new" title="ตำบลขุนยวม (ไม่มีหน้านี้)">ตำบลขุนยวม</a></li>\n<li><a href="/w/index.php?title=%E0%B8%A7(...)%E0%B8%99&action=edit&redlink=1" class="new" title="วัดคำใน (ไม่มีหน้านี้)">วัดคำใน</a> ตำบลขุนยวม</li>\n<li><a href="/wiki/%E0%B8%A7(...)%E0%B8%87" title="วัดประตูเมือง">วัดประตูเมือง</a> ตำบลขุนยวม</li>\n(...)\n<li><a href="/wiki/%E0%B8%A7(...)%E0%B8%B2" title="วัดผาผ่า">วัดผาผ่า</a> ตำบลแม่คะตวน</li>\n<li><a href="/w/index.php?title=%E0%B8%A7(...)%E0%B8%B0&action=edit&redlink=1" class="new" title="วัดแม่เกาะ (ไม่มีหน้านี้)">วัดแม่เกาะ</a> ตำบลแม่คะตวน</li>\n<li><a href="/w/index.php?title=%E0%B8%A7(...)%E0%B8%99&action=edit&redlink=1" class="new" title="วัดแม่คะตวน (ไม่มีหน้านี้)">วัดแม่คะตวน</a> <a href="/w/index.php?title=%E0%B8%95(...)%E0%B8%A2&action=edit&redlink=1" class="new" title="ตำบลสบเมย (ไม่มีหน้านี้)">ตำบลสบเมย</a></li><remove></ul>\n<h2><span id=".E0.B8.A7(...).E0.B8.A1"></span><span class="mw-headline" id="ดูเพิ่ม">ดูเพิ่ม</span></remove>',
         ),
   )
   .addSibling(codeBlock.addLine("html_list: List[str] = re.findall(pattern, '\\n'.join(result))"))
   .addSibling(codeBlock.addSpace());

import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import { Description } from '../utils/DescriptionBuilder';

import { Test } from './test6';

export const codeBlock = new CodeBlockBuilder('awdawd.python', 56).addDescription(
   '\t\t\tsection นี้จะอธิบายการทำงานของการ loop ทั้งหมดของ link <li> tag ที่ได้มาจาก การจาก Section แรก และในการ loop แต่ละครั้งจะเรียกใช้ฟังก์ชั่นค้นหาลิ้งค์ของวัด, ชื่อของวัด, ตำบลของวัด, ข้อมูลของวัด และจากนั้นนำข้อมูลที่ได้เก็บใส่ตัวแปร all_temples_list',
);
codeBlock
   .addLine("all_temple_list = [['link','temple_name','sub_district','detail']]")
   .addDescription(new Description().addDetail(Test()))
   .addSibling(codeBlock.addSpace())
   .addSibling(codeBlock.addLine('for html_str in html_list:'))
   .addSibling(codeBlock.addLine('    name = temple_name(html_str)'))
   .addSibling(codeBlock.addLine('    if name == "":'))
   .addSibling(codeBlock.addLine('        continue'))
   .addSibling(codeBlock.addLine('    link = temple_link(html_str)'))
   .addSibling(codeBlock.addLine('    sub_district = sub_district_name(html_str)'))
   .addSibling(codeBlock.addLine('    detail = temple_detail(link)'))
   .addSibling(
      codeBlock.addLine(
         '    all_temple_list.append([link, name, sub_district if sub_district else " ", detail])',
      ),
   )
   .addSibling(codeBlock.addSpace())
   .addSibling(codeBlock.addLine("filename = 'temple_list_ver_10.csv'"))
   .addSibling(codeBlock.addSpace())
   .addSibling(codeBlock.addLine("with open(filename, 'w', newline='') as csvfile:"))
   .addSibling(codeBlock.addLine('    csv_writer = csv.writer(csvfile)'))
   .addSibling(codeBlock.addLine('    csv_writer.writerows(all_temple_list)'))
   .addSibling(codeBlock.addSpace());

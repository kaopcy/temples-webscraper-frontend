export class Description {
   detail: string | JSX.Element = '';
   input: string = '';
   output: string = '';
   constructor() {
      return this;
   }

   addInput(input: string) {
      this.input = input;
      return this;
   }
   addOutput(output: string) {
      this.output = output;
      return this;
   }
   addDetail(detail: string | JSX.Element) {
      this.detail = detail;
      return this;
   }
}

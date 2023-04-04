export class Description {
   detail: string = '';
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
   addDetail(detail: string) {
      this.detail = detail;
      return this;
   }
}

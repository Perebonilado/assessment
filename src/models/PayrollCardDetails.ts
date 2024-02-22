export interface PayrollCardDetails {
  body: string | Date | number;
  subContent?: string;
  isBodyGreyed?: boolean;
  fieldType: "currency" | "plainNumber" | "text" | "date";
}

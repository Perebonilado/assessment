import React, { HTMLAttributes, forwardRef } from "react";
import Card from "./Card";
import PayrollCardHeader from "./PayrollCardHeader";
import PayrollCardContent from "./PayrollCardContent";
import { PayrollCardDetails } from "@/models/PayrollCardDetails";

interface Props extends HTMLAttributes<HTMLDivElement> {
  payrollType: string;
  dueDate: Date;
  paymentFrequency: string;
  data: Record<
    string,
    PayrollCardDetails
  >;
}

const PayrollCard = forwardRef<HTMLDivElement, Props>(
  ({ payrollType, paymentFrequency, dueDate, data, ...props }, ref) => {
    return (
      <Card ref={ref} {...props}>
        <PayrollCardHeader
          paymentFrequency={paymentFrequency}
          payrollType={payrollType}
          dueDate={dueDate}
        />
        <PayrollCardContent data={data} />
      </Card>
    );
  }
);

export default PayrollCard;

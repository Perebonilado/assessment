import React, { HTMLAttributes, forwardRef } from "react";
import Card from "./Card";
import PayrollCardHeader from "./PayrollCardHeader";

interface Props extends HTMLAttributes<HTMLDivElement> {
  payrollType: string;
  dueDate: Date;
  paymentFrequency: string;
}

const PayrollCard = forwardRef<HTMLDivElement, Props>(
  ({ payrollType, paymentFrequency, dueDate, ...props }, ref) => {
    return (
      <Card ref={ref} {...props}>
        <PayrollCardHeader
          paymentFrequency={paymentFrequency}
          payrollType={payrollType}
          dueDate={dueDate}
        />
        <Card variant="solid"></Card>
      </Card>
    );
  }
);

export default PayrollCard;

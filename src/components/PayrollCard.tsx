import React, { HTMLAttributes, forwardRef } from "react";
import Card from "./Card";
import Button from "./Button";
import Chip from "./Chip/Chip";
import moment from "moment";

interface Props extends HTMLAttributes<HTMLDivElement> {
  payrollType: string;
  dueDate: Date;
  paymentFrequency: string;
}

const PayrollCard = forwardRef<HTMLDivElement, Props>(
  ({ payrollType, paymentFrequency, dueDate, ...props }, ref) => {
    const formattedDueDate = `Due ${moment.utc(dueDate).format("DD/MM/YYYY")}`;

    return (
      <Card ref={ref} {...props}>
        <div className="flex items-start">
          <div style={{ flex: 1 }}>
            <div className="flex items-center gap-6">
              <h3 className="text-xl text-[#505050] font-medium">
                {payrollType}
              </h3>
              <Chip header={formattedDueDate} />
            </div>
            <h4 className="text-base text-[#535353] font-medium mt-3">
              {paymentFrequency}
            </h4>
          </div>
          <div
            style={{ flex: 2 }}
            className="flex justify-end items-center gap-6"
          >
            <Button title="Things to do (12)" variant="text" />
            <Button title="Manage payroll" variant="outlined" />
            <Button title="Calculate Payroll" variant="contained" />
          </div>
        </div>
      </Card>
    );
  }
);

export default PayrollCard;

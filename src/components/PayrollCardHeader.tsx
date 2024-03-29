import React, { FC } from "react";
import Chip from "./Chip/Chip";

import Button from "./Button";
import { formatDate } from "@/utils";

interface Props {
  payrollType: string;
  dueDate: Date;
  paymentFrequency: string;
  handleThingsToDo?: () => void;
  handleManagePayRoll?: () => void;
  handleCalculatePayRoll?: () => void;
}

const PayrollCardHeader: FC<Props> = ({
  payrollType,
  paymentFrequency,
  dueDate,
  handleCalculatePayRoll,
  handleManagePayRoll,
  handleThingsToDo,
}) => {
  const formattedDueDate = `Due ${formatDate(dueDate)}`;

  return (
    <div className="flex items-start gap-2 mb-4 max-sm:mb-8 max-md:flex-col max-sm:items-center max-sm:text-center">
      <div style={{ flex: 1 }} className="flex flex-col max-md:gap-2 max-sm:mb-4">
        <div className="flex items-center gap-6 max-sm:flex-col max-sm:gap-2">
          <h3 className="text-xl text-[#505050] font-medium">{payrollType}</h3>
          <Chip header={formattedDueDate} />
        </div>
        <h4 className="text-base text-[#535353] font-medium md:mt-3">
          {paymentFrequency}
        </h4>
      </div>
      <div
        style={{ flex: 2 }}
        className="flex justify-end items-center gap-6 max-sm:flex-col"
      >
        <Button
          title="Things to do (12)"
          variant="text"
          onClick={handleThingsToDo}
        />
        <Button
          title="Manage payroll"
          variant="outlined"
          onClick={handleManagePayRoll}
        />
        <Button
          title="Calculate Payroll"
          variant="contained"
          onClick={handleCalculatePayRoll}
        />
      </div>
    </div>
  );
};

export default PayrollCardHeader;

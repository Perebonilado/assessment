import { PayrollCardDetails } from "@/models/PayrollCardDetails";
import { formatCurrency, formatDate, formatNumber } from "@/utils";
import React, { FC } from "react";

interface Props extends PayrollCardDetails {
  header: string;
}

const PayrollCardContentItem: FC<Props> = ({
  header,
  body,
  subContent,
  isBodyGreyed,
  fieldType,
}) => {
  const formattedBody = {
    currency: formatCurrency(Number(body)),
    plainNumber: formatNumber(body as number, 2),
    text: body as string,
    date: formatDate(body as Date),
  } as const;

  return (
    <div className="flex flex-col gap-3">
      <h4>{header}</h4>
      <p>{formattedBody[fieldType]}</p>
      {subContent && <p>{subContent}</p>}
    </div>
  );
};

export default PayrollCardContentItem;

import { PayrollCardDetails } from "@/models/PayrollCardDetails";
import { formatCurrency, formatDate, formatNumber } from "@/utils";
import React, { FC } from "react";
import cn from 'classnames'

interface Props extends PayrollCardDetails {
  header: string;
}

const PayrollCardContentItem: FC<Props> = ({
  header,
  body,
  subContent,
  isBodyGreyed = false,
  fieldType,
}) => {
  const formattedBody = {
    currency: formatCurrency(Number(body)),
    plainNumber: formatNumber(body as number, 2),
    text: body as string,
    date: formatDate(body as Date),
  } as const;

  const bodyRootClassName = cn('text-base font-semibold', {
    ['text-[#4c4c4c]']: !isBodyGreyed,
    ['text-[#8d8d8d]']: isBodyGreyed
  })

  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-[#8e8e8e] text-base">{header}</h4>
      <p className={bodyRootClassName}>{formattedBody[fieldType]}</p>
      {subContent && <p className="text-[#8e8e8e] text-xs">{subContent}</p>}
    </div>
  );
};

export default PayrollCardContentItem;

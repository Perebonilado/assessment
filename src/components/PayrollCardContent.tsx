import React, { FC } from "react";
import Card from "./Card";
import PayrollCardContentItem from "./PayrollCardContentItem";
import { PayrollCardDetails } from "@/models/PayrollCardDetails";

interface Props {
  data: Record<string, PayrollCardDetails>;
}

const PayrollCardContent: FC<Props> = ({ data }) => {
  return (
    <Card variant="solid">
      <div className="flex gap-8">
        {Object.entries(data).map(
          ([header, { body, subContent, isBodyGreyed, fieldType }], key) => {
            return (
              <PayrollCardContentItem
                body={body}
                subContent={subContent}
                header={header}
                isBodyGreyed={isBodyGreyed}
                fieldType={fieldType}
                key={key}
              />
            );
          }
        )}
      </div>
    </Card>
  );
};

export default PayrollCardContent;

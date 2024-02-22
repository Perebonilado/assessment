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
      <div className="grid grid-cols-4 gap-10 max-md:grid-cols-3 max-sm:grid-cols-1 max-sm:text-center">
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

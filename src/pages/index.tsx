import AppHead from "@/components/AppHead";
import Container from "@/components/Container";
import PayrollCard from "@/components/PayrollCard";
import { PayrollCardDetails } from "@/models/PayrollCardDetails";

export default function Home() {
  return (
    <>
    <AppHead title="Payroll App"/>
    <main className="px-2">
      <Container className="!max-w-5xl mx-auto pt-10 ">
        <PayrollCard
          payrollType="Regular"
          dueDate={new Date()}
          paymentFrequency="Bi-Weekly #5"
          data={payrollCardData}
        />
      </Container>
    </main>
    </>
  );
}

const payrollCardData: Record<string, PayrollCardDetails> = {
  "Payment Date/Period": {
    body: new Date(),
    fieldType: "date",
    subContent: "01/17 - 01/30",
  },
  "Total Additional Earnings": {
    body: 150,
    fieldType: "currency",
  },
  "Total Additional Hours": {
    body: 600,
    fieldType: "plainNumber",
    isBodyGreyed: true,
  },
};

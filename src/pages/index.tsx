import Container from "@/components/Container";
import PayrollCard from "@/components/PayrollCard";

export default function Home() {
  return (
    <Container className="!max-w-4xl mx-auto pt-10">
      <PayrollCard
        payrollType="Regular"
        dueDate={new Date()}
        paymentFrequency="Bi-Weekly #5"
      />
    </Container>
  );
}

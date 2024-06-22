import AccordionDemo from "@/components/accordion";
import GuideLayout from "@/features/contactGuide/guideLayout";
// import { useNavigate } from "react-router-dom";

const ConsultationRequest = () => {
  // const router = useNavigate();
  // const backHandler = () => {
  //   router(-1);
  // };
  return (
    <GuideLayout
    title="درخواست مشاوره رایگان"
    >
      <AccordionDemo />
    </GuideLayout>
  );
};

export default ConsultationRequest;

import ArrowLink from "@/components/arrowLink";
import ContactInfo from "@/components/contactInfo";
const Contact = () => {
  return (
    <div className="text-white py-2 px-20 font-thin">
      <div className="grid grid-cols-2 gap-3">
        <ArrowLink path="consultation-request">درخواست مشاوره رایگان</ArrowLink>
        <ArrowLink path="support">ثبت درخواست پشتیبانی</ArrowLink>
        <ArrowLink path="seminar">مشاهده و دانلود بلیط سمینار</ArrowLink>
        <ArrowLink path="common-questions">پرسش های متداول</ArrowLink>
      </div>
      <div className="grid grid-cols-2 gap-1 px-2 my-8">
        <ContactInfo desc="076-5458456" icon="phone">تلفن پشتیبانی</ContactInfo>
        <ContactInfo desc="کیش,میدان سنایی,ساختمان 20 پلاک 8,واحد105" icon="location">آدرس دفتر پشتیبانی</ContactInfo>
        <ContactInfo desc="Support@Marketcraft.com" icon="email" >ایمیل</ContactInfo>
        
      </div>
    </div>
  );
};

export default Contact;

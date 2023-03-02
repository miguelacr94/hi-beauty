import { useRouter } from "next/router";
import UserData from "../core/components/Profile/UserData";
import UserShippingInfo from "../core/components/Profile/UserShippingInfo";
import Button from "../core/components/shared/Button";
import SaveQuestions from "../core/components/Survey/SaveQuestions";
import SurveyQuestion from "../core/components/Survey/SurveyQuestion";
import useSubscriptions from "../core/hooks/queries/userSubcriptions";
// import useSubscriptionForm from "../core/hooks/useSubscriptionForm";
import MainLayout from "../core/layouts/MainLayout";
import { surveyQuestions } from "../core/utils/data";
import { AppRoutes } from "../core/utils/routes";

const Profile = () => {

  // const {   setStep} = useSubscriptionForm();
 

  const router = useRouter();
  const startQuestion = () => {
    router.replace(AppRoutes.survey);
    // setStep(0);
  }

  return (
    <MainLayout>
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 ">
        <UserData />
        <UserShippingInfo />
      </div>
      <div>
        <>


          <div className="mt-12 pb-24 md:mb-12
            
             w-full flex flex-col justify-center items-center space-y-4">
            <h2 className="text-[20px]">¿Deseas actualizar tu encuesta?</h2>
            <Button
              text={'Comenzar'}
              className=""
              onClick={startQuestion}
              h='h-9 px-8 text-lg'
            />
          </div>



          {/* {step > 0 && step <= 7 &&
            <SurveyQuestion
              key={step - 1} question={surveyQuestions[step - 1]}
            />
          }
          {
            step > 7 &&

            <SaveQuestions
              question={_question}
            />

          } */}
        </>

      </div>
    </MainLayout >
  );
};

export default Profile;

import React from 'react'
import Img from '../core/components/shared/Img';
import Intro from '../core/components/Survey/Intro';
import SaveQuestions from '../core/components/Survey/SaveQuestions';
import SurveyQuestion from '../core/components/Survey/SurveyQuestion';
import useSubscriptionForm from '../core/hooks/useSubscriptionForm';

import MainLayout from '../core/layouts/MainLayout';
import { surveyQuestions } from '../core/utils/data';

const Index = () => {

    const { step, totalSteps, setStep, _question } = useSubscriptionForm();


    return (
        <MainLayout>
            <div>

                <p className='text-muted font-light pb-4'>Pregunta {step} de 8</p>
                {step == 0 &&
                    <div className='w-full bg-white'>
                        <Intro />
                    </div>

                }
                {step > 0 && step <= 7 &&
                    <SurveyQuestion
                        key={step - 1} question={surveyQuestions[step - 1]}
                    />
                }
                {
                    step > 7 &&

                    <SaveQuestions
                        question={_question}
                    />

                }
            </div>
        </MainLayout >
    )
}

export default Index

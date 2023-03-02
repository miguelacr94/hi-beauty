import React from 'react'
import useAuth from '../../hooks/queries/useAuth';
import useSubscriptionForm from '../../hooks/useSubscriptionForm'
import useUser from '../../hooks/useUser';
import Button, { OutlinedButton } from '../shared/Button';

const SaveQuestions = ({ question }) => {

    const { _question, setQuestion, setStep, step } = useSubscriptionForm();
    const { setUser } = useUser();
    const { doQuestion, isLoadingQuestion } = useAuth();

    const payload = {
        questions: question
    }

    const senQuestion = async () => {
        const res = await doQuestion(payload);
        setQuestion(res?.data?.questions);
        setUser(res.data);
        setStep(0);
    }




    return (

        <div className='w-full flex justify-center flex-col items-center'>

            <h1 className='text-2xl md:text-3xl text-gray-800  mt-8 '>Encuesta finalizada</h1>

            <p className='mt-4 text-muted'>Para guardar la encuesta presione click en Actualizar encuesta</p>
            <div className='flex space-x-4 mt-6'>
                {/* <Button
                    onClick={() => setStep(7)}
                    text='Volver'
                /> */}
                <OutlinedButton
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-8 text-lg"
                    text="Anterior"
                />



                <Button
                    onClick={() => senQuestion()}
                    className={'h-14 px-4 text-lg'}
                    type="submit"
                    text='  Actualizar encuesta'
                    h='h-11'
                    isLoading={isLoadingQuestion}
                />


            </div>


        </div>
    )
}

export default SaveQuestions

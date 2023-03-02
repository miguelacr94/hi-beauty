import { useAtom } from "jotai";
import { useAtomDevtools } from "jotai/devtools";
import { subscriptionFormAtom } from "../atoms/forms";
import { activeAtom, questionAtom } from "../atoms/question";
import useUser from "./useUser";


const useSubscriptionForm = () => {
  const [form, setForm] = useAtom(subscriptionFormAtom);
  const [_question, setQuestion] = useAtom(questionAtom);
  const [active, setActive] = useAtom(activeAtom);

  useAtomDevtools(subscriptionFormAtom);

  const { user } = useUser();

  const setStep = (n = 0) => {
    setForm({ ...form, step: n });
  };

  const setData = (d) => {
    setForm({ ...form, data: d });
  };

  const addAnswer = (answer) => {
    const newData = {
      ...form.data,
      questions: { ...form.data?.questions, ...answer },
    };
    setForm({ ...form, data: newData });
  };

  return { ...form, setStep, setData, addAnswer, _question, setQuestion, active, setActive };
};

export default useSubscriptionForm;
